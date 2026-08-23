# -*- coding: utf-8 -*-
"""Generate the raster icon fallbacks from public/favicon.svg.

favicon.svg is the source of truth and is what modern browsers load. This
produces the two files that still cannot be an SVG:

  public/favicon.ico          16/32/48, for browsers that ignore SVG favicons
  public/apple-touch-icon.png 180, iOS home screen

Run after editing favicon.svg:  npm run icons

Implementation note: MuPDF renders SVG geometry accurately but ignores gradient
paint servers entirely, fill and stroke alike -- a flat stroke rasterises, the
same stroke with url(#grad) rasterises to nothing. So MuPDF is used only to
turn each shape into a coverage mask, and Pillow paints the gradients through
those masks. Sampling the browser's own canvas render of favicon.svg puts the
result within 8/255 on every channel, which is invisible at icon sizes.
"""
import io
import math
import os

import pymupdf
from PIL import Image, ImageChops

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
R = 1024  # master resolution; every output downsamples from here

BG = (11, 14, 13)        # --bg
BORDER = (35, 43, 40)    # --border
ACCENT = (16, 185, 129)  # --accent
BRIGHT = (52, 211, 153)  # --accent-bright

# The mark: a single arc forming a C. Kept in sync with the path in
# public/favicon.svg by hand -- it is one line.
MARK = "M 68 28.55 A 28 28 0 1 0 68 71.45"
STROKE = 12


def raster(body, px=R):
    """Render an SVG fragment on a 100x100 user-unit canvas to RGBA."""
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" '
           'width="100" height="100">%s</svg>' % body)
    tmp = os.path.join(PUB, "_frag.svg")
    with io.open(tmp, "w", encoding="utf-8") as fh:
        fh.write(svg)
    try:
        page = pymupdf.open(tmp)[0]
        z = px / page.rect.width
        pm = page.get_pixmap(matrix=pymupdf.Matrix(z, z), alpha=True)
        return Image.open(io.BytesIO(pm.tobytes("png"))).convert("RGBA")
    finally:
        os.remove(tmp)


def mask(body, px=R):
    return raster(body, px).getchannel("A")


def solid(rgb, px=R):
    return Image.new("RGBA", (px, px), rgb + (255,))


def linear_gradient(c0, c1, px=R):
    """Corner-to-corner ramp, matching the SVG's x1/y1=0 -> x2/y2=1."""
    g = Image.new("RGBA", (px, px))
    g.putdata([
        tuple(int(round(a + (b - a) * ((x + y) / (2.0 * (px - 1)))))
              for a, b in zip(c0, c1)) + (255,)
        for y in range(px) for x in range(px)
    ])
    return g


def radial_glow(rgb, peak, px=R):
    """Emerald wash fading out to the tile edge -- the site's cursor glow."""
    g = Image.new("RGBA", (px, px))
    c, lim = (px - 1) / 2.0, px / 2.0
    g.putdata([
        rgb + (int(round(255 * peak * max(0.0, 1.0 - math.hypot(x - c, y - c) / lim))),)
        for y in range(px) for x in range(px)
    ])
    return g


def over(base, layer, clip):
    """Alpha-composite `layer` onto `base`, confined to the `clip` mask.

    Image.paste copies the layer's own alpha over the destination, so pasting a
    22%-alpha glow would punch the tile down to 22% opaque instead of tinting
    it. Only fully opaque layers are safe to paste.
    """
    l = layer.copy()
    l.putalpha(ImageChops.multiply(l.getchannel("A"), clip))
    base.alpha_composite(l)


def dot_field():
    """The backdrop's dot grid, echoed behind the mark on the large icon."""
    out = []
    for iy in range(1, 12):
        for ix in range(1, 12):
            x, y = ix * 9.0 + 0.5, iy * 9.0 + 0.5
            d = math.hypot(x - 50, y - 50)
            if d > 52:
                continue
            out.append('<circle cx="%.1f" cy="%.1f" r="1.05" fill="#10b981" '
                       'opacity="%.3f"/>' % (x, y, 0.05 + 0.30 * (1 - d / 52.0)))
    return raster("<g>%s</g>" % "".join(out))


def main():
    m_tile = mask('<rect width="100" height="100" rx="22" fill="#fff"/>')
    m_edge = mask('<rect x="0.75" y="0.75" width="98.5" height="98.5" rx="21.25" '
                  'fill="none" stroke="#fff" stroke-width="1.5"/>')
    m_mark = mask('<path d="%s" fill="none" stroke="#fff" stroke-width="%s" '
                  'stroke-linecap="round" stroke-linejoin="round"/>'
                  % (MARK, STROKE))
    l_dots = dot_field()

    square = Image.new("L", (R, R), 255)

    def compose(full_bleed):
        """full_bleed drops the rounded tile and its border.

        iOS masks the corners of apple-touch-icon.png itself, so drawing our
        own rounded tile inside the square would leave a stray outline inset
        from the real edge once iOS is done with it.
        """
        clip = square if full_bleed else m_tile
        im = Image.new("RGBA", (R, R), (0, 0, 0, 0))
        im.paste(solid(BG), (0, 0), clip)            # opaque, safe to paste
        over(im, radial_glow(ACCENT, 0.22), clip)
        if full_bleed:
            over(im, l_dots, clip)
        else:
            im.paste(solid(BORDER), (0, 0), m_edge)
        im.paste(linear_gradient(BRIGHT, ACCENT), (0, 0), m_mark)
        return im

    compose(False).resize((256, 256), Image.LANCZOS).save(
        os.path.join(PUB, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])

    # iOS wants it opaque and square; it applies its own corner mask.
    apple = compose(True).resize((180, 180), Image.LANCZOS)
    flat = Image.new("RGB", (180, 180), BG)
    flat.paste(apple, (0, 0), apple)
    flat.save(os.path.join(PUB, "apple-touch-icon.png"))

    for name in ("favicon.svg", "favicon.ico", "apple-touch-icon.png"):
        print("%-22s %6d bytes" % (name, os.path.getsize(os.path.join(PUB, name))))
    og_card()



def og_card():
    """public/og.png — the 1200x630 card link previews show.

    The head already declared twitter:card=summary_large_image, which promises
    an image; without one a shared link falls back to a bare row of text. Same
    material as the site: the C mark, the dot field, the emerald glow.

    The two gradients are built small and scaled up. They are smooth by
    definition, so resampling costs nothing visually and avoids running a
    three-million-pixel Python loop twice.
    """
    W, H, S = 1200, 630, 2
    CW, CH = W * S, H * S
    # Centred, and the card carries no text. og:title and og:description
    # already supply the name and tagline as real text in every preview UI, and
    # the site's own faces ship as woff2 only — setting the name in whatever
    # substitute happened to be available would misrepresent the typography.
    cx, cy = W / 2.0, H / 2.0        # the mark's centre, in card units
    R, STROKE = 140, 50

    def rect_svg(body):
        svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" '
               'width="%d" height="%d">%s</svg>' % (W, H, W, H, body))
        tmp = os.path.join(PUB, "_og.svg")
        with io.open(tmp, "w", encoding="utf-8") as fh:
            fh.write(svg)
        try:
            page = pymupdf.open(tmp)[0]
            pm = page.get_pixmap(matrix=pymupdf.Matrix(CW / W, CW / W), alpha=True)
            return Image.open(io.BytesIO(pm.tobytes("png"))).convert("RGBA")
        finally:
            os.remove(tmp)

    im = Image.new("RGBA", (CW, CH), BG + (255,))

    # Emerald wash centred on the mark, fading out across the card.
    gw, gh = 160, 84
    glow = Image.new("RGBA", (gw, gh))
    reach = 620.0
    glow.putdata([
        ACCENT + (int(round(255 * 0.20 * max(0.0, 1.0 - math.hypot(
            (x + 0.5) * W / gw - cx, (y + 0.5) * H / gh - cy) / reach))),)
        for y in range(gh) for x in range(gw)
    ])
    im.alpha_composite(glow.resize((CW, CH), Image.BICUBIC))

    # The backdrop's dot field, densest near the mark.
    dots = []
    for iy in range(int(H / 26) + 2):
        for ix in range(int(W / 26) + 2):
            x, y = ix * 26.0 + 13, iy * 26.0 + 13
            d = math.hypot(x - cx, y - cy)
            dots.append('<circle cx="%.1f" cy="%.1f" r="1.7" fill="#10b981" '
                        'opacity="%.3f"/>' % (x, y, 0.04 + 0.26 * max(0.0, 1 - d / 900.0)))
    im.alpha_composite(rect_svg("<g>%s</g>" % "".join(dots)))

    # The C, same 100-degree aperture as the favicon.
    mark = 'M %.2f %.2f A %d %d 0 1 0 %.2f %.2f' % (
        cx + R * 0.6428, cy - R * 0.766, R, R, cx + R * 0.6428, cy + R * 0.766)
    m = rect_svg('<path d="%s" fill="none" stroke="#fff" stroke-width="%d" '
                 'stroke-linecap="round"/>' % (mark, STROKE)).getchannel("A")

    gw, gh = 64, 34
    ramp = Image.new("RGBA", (gw, gh))
    ramp.putdata([
        tuple(int(round(a + (b - a) * ((x / (gw - 1) + y / (gh - 1)) / 2)))
              for a, b in zip(BRIGHT, ACCENT)) + (255,)
        for y in range(gh) for x in range(gw)
    ])
    im.paste(ramp.resize((CW, CH), Image.BICUBIC), (0, 0), m)

    im.resize((W, H), Image.LANCZOS).convert("RGB").save(
        os.path.join(PUB, "og.png"), optimize=True)
    print("%-22s %6d bytes" % ("og.png", os.path.getsize(os.path.join(PUB, "og.png"))))


if __name__ == "__main__":
    main()
