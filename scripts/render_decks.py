#!/usr/bin/env python3
"""
Rasterise every PDF in public/decks/ into per-page WebP images.

The site shows decks in a slide viewer built from these images rather than in
a browser PDF frame, so the deck reads like an embedded slideshow instead of a
document with a toolbar bolted to it. The PDFs stay put and are still linked
for download.

The rendered pages and the manifest are COMMITTED to the repo on purpose: the
production build only runs `npm run build`, with no Python available, so
nothing here can run at deploy time.

Usage:
    pip install pymupdf pillow
    python scripts/render_decks.py          # only re-renders changed PDFs
    python scripts/render_decks.py --force  # re-renders everything
"""
from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import sys
from pathlib import Path

try:
    import pymupdf
except ImportError:  # pragma: no cover
    sys.exit("pymupdf is required:  pip install pymupdf pillow")

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT / "public" / "decks"
PAGE_DIR = ROOT / "public" / "deck-pages"
MANIFEST = ROOT / "src" / "data" / "decks.json"

TARGET_WIDTH = 1600   # px on the long edge of a landscape slide
QUALITY = 80


def digest(path: Path) -> str:
    return hashlib.md5(path.read_bytes()).hexdigest()


def render(pdf: Path, out_dir: Path) -> tuple[int, int, int]:
    """Render every page of `pdf` into out_dir as p01.webp, p02.webp, ..."""
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)

    doc = pymupdf.open(pdf)
    first_w = first_h = 0
    try:
        for i, page in enumerate(doc, start=1):
            zoom = TARGET_WIDTH / page.rect.width
            pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
            im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
            im.save(out_dir / f"p{i:02d}.webp", "WEBP", quality=QUALITY, method=5)
            if i == 1:
                first_w, first_h = im.size
        return doc.page_count, first_w, first_h
    finally:
        doc.close()


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true",
                    help="re-render even when the PDF has not changed")
    args = ap.parse_args()

    previous: dict = {}
    if MANIFEST.exists():
        previous = json.loads(MANIFEST.read_text(encoding="utf-8"))

    manifest: dict = {}
    rendered = skipped = 0
    total_pages = 0

    for pdf in sorted(PDF_DIR.rglob("*.pdf")):
        rel = pdf.relative_to(ROOT / "public").as_posix()      # decks/cea/...
        url = "/" + rel
        slug = rel[len("decks/"):-len(".pdf")]                 # cea/unit-3/311-...
        out_dir = PAGE_DIR / slug
        sha = digest(pdf)

        prior = previous.get(url)
        if (not args.force and prior and prior.get("hash") == sha
                and out_dir.is_dir()
                and len(list(out_dir.glob("*.webp"))) == prior.get("pages")):
            manifest[url] = prior
            skipped += 1
            total_pages += prior["pages"]
            continue

        pages, w, h = render(pdf, out_dir)
        manifest[url] = {
            "hash": sha,
            "pages": pages,
            "dir": f"/deck-pages/{slug}",
            "width": w,
            "height": h,
        }
        rendered += 1
        total_pages += pages
        print(f"  rendered {pages:3d}p  {slug}")

    # Drop page folders whose PDF no longer exists.
    live = {m["dir"].lstrip("/") for m in manifest.values()}
    if PAGE_DIR.exists():
        for d in sorted(PAGE_DIR.rglob("*")):
            if not d.is_dir() or any(c.is_dir() for c in d.iterdir()):
                continue
            if d.relative_to(ROOT / "public").as_posix() not in live:
                shutil.rmtree(d)
                print(f"  removed stale {d.relative_to(PAGE_DIR)}")

    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n",
                        encoding="utf-8")

    size = sum(f.stat().st_size for f in PAGE_DIR.rglob("*.webp"))
    print(f"\n{len(manifest)} decks, {total_pages} pages "
          f"({rendered} rendered, {skipped} unchanged), {size / 1048576:.1f} MB")


if __name__ == "__main__":
    main()
