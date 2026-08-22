# Conner Glover — Portfolio

Personal portfolio site. Replaces the old Google Sites engineering portfolio,
with room to grow past school work into personal projects and achievements.

Built with [Astro](https://astro.build). Static output, no runtime, no database.

---

## Running it

Requires Node 20+ (currently built against Node 24).

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:4321>. Edits to content and components hot-reload.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Type-check `.astro` files and content frontmatter |
| `npm run decks` | Re-render deck PDFs into slide images (needs Python) |

---

## Adding content

There are two content types, and they're deliberately different shapes.

### Personal projects — `src/content/projects/`

Long-form. Each file becomes its own page at `/projects/<filename>/`.

Copy `src/content/projects/_template.md`, rename it, and set `draft: false`
when you're ready to publish. Files starting with `_` are ignored by the build,
so the template never ships.

Images go in `public/images/projects/<slug>/` and are referenced from the site
root: `![alt](/images/projects/<slug>/shot.png)`.

### School engineering — `src/content/school/<course>/<unit>/`

Short. One file per assignment — usually a paragraph and a slide deck. These do
*not* get their own pages; they render stacked on their unit page at
`/school/<course>/<unit>/`.

```yaml
---
title: '1.4 Product Improvement'
courseSlug: ied          # ied | poe | cea
unit: unit-1
order: 140               # sorts within the unit; mirrors PLTW numbering
decks:                   # optional, repeatable
  - pdf: '/decks/ied/unit-1/140-1-4-product-improvement.pdf'
    title: 'Product Improvement - Coffee cup'
    id: 110TTO-lxx8...   # original Slides id, provenance only
files:                   # optional — Google Drive attachments
  - id: 1_PFGPlEQvse1tr8Sd_fe-z6exlm39tCudKqEVkSst-I
    title: 'Machine Control Deliverables'
images:                  # optional
  - src: '/images/school/ied-unit-1/1-3-concept-sketching.jpg'
    alt: 'Describe it for screen readers'
status: in-progress      # optional; omit when complete
partners:                # optional
  - 'Ryan Frels'
---

The write-up goes here, in Markdown.
```

Adding a whole new course, or a new unit to an existing one, means editing
`courses` in `src/data/site.ts` — that array drives the routes, the nav counts,
and the unit ordering.

`decks:` holds any PDF you want shown inline, not just slide decks — reports,
worksheets and quizzes all render through the same viewer. `images:` renders as
a single full-width photo, or as a thumbnail grid once there is more than one.

**After adding or replacing a PDF, run `npm run decks`.** See below.

---

## Before the first deploy

Three things in `src/data/site.ts` are intentionally left blank, marked with a
`TODO(conner)` comment:

- `email` — the old site used `cglover.2028@carmelhs.org`, which stops working
  at graduation. Pick an address you'll keep.
- `github` — your profile URL.
- `linkedin` — optional; delete the field if you don't want it.

Also set `site` in `astro.config.mjs` to your real domain. It's currently a
placeholder, and it's what canonical URLs and `sitemap.xml` are generated from.

---

## Deploying

Recommended: **Cloudflare Pages**. Unmetered bandwidth on the free tier, free
SSL on a custom domain, and a global CDN — a good fit for a static site you
want to keep online indefinitely and for free.

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Custom domain: Pages project → Custom domains → add yours, then follow the
   DNS instructions. If the domain is already on Cloudflare it's one click.

Every push to `main` redeploys; pull requests get preview URLs.

Netlify and Vercel work identically with the same build command and output
directory, so switching later costs nothing. GitHub Pages also works but needs
an Actions workflow and a `base` path unless you're on a custom domain.

---

## Structure

```
src/
  content/
    school/<course>/<unit>/*.md   coursework, one file per assignment
    projects/*.md                 personal projects, one file per project
  content.config.ts               frontmatter schemas for both collections
  data/site.ts                    name, contact, course list and ordering
  layouts/BaseLayout.astro        <head>, nav, footer, skip link
  components/                     Nav, Footer, Deck, DriveFile, Gallery
  data/decks.json                 generated deck manifest — do not hand-edit
  pages/                          routes (file-based)
  styles/global.css               design tokens + base styles
public/images/                    self-hosted images
public/decks/                     PDF attachments — decks, reports, worksheets
public/deck-pages/                generated slide images, one folder per PDF
scripts/render_decks.py           generates the two lines above
```

Styling is deliberately plain for now — everything is driven by CSS custom
properties in `:root` at the top of `global.css`, so a real theme can mostly be
a token swap plus per-component polish.

---

## How decks are displayed

Decks render as a slideshow — one slide in view, arrows, a counter, fullscreen,
keyboard and swipe — rather than in a browser PDF frame. A PDF in an `<iframe>`
comes wrapped in the browser's own toolbar, sidebar and print controls, which
reads as a document viewer rather than an embedded deck, and most mobile
browsers refuse to render one inline at all.

To make that work, `scripts/render_decks.py` rasterises every page of every PDF
in `public/decks/` to a WebP image in `public/deck-pages/`, and writes
`src/data/decks.json` so the component knows the page count and aspect ratio.
All 46 decks come to 275 pages and about 18 MB.

```bash
npm run decks
```

It only re-renders PDFs whose contents changed, so it is quick to re-run. Add
`--force` to redo everything.

**The rendered pages are committed on purpose.** Production builds only run
`npm run build`, with no Python available, so this cannot run at deploy time.
If you add a PDF and forget to run it, that one deck quietly falls back to the
old browser PDF frame — it will still work, it just won't match the others.

The PDFs stay where they are and are still linked from each viewer, so the
original file is always one click away.

---

## Migration notes

### Google Sites

The original site content came from the old Google Sites portfolio. Two things
worth knowing:

**Deleted attachments were dropped.** The site had 44 Google Drive attachments;
24 of them had already been deleted and returned HTTP 410/404. Those embeds are
gone from the content rather than left as broken frames. The 20 that still
resolve are preserved. Assignments whose only content was a deleted deck are
kept, with a note that no write-up was recorded.

**The surviving decks are self-hosted now.** The Google Slides originals are
locked to the school account — they return 401 to anyone not signed into it,
and they vanish when the account does. All 19 were exported to PDF and live in
`public/decks/`, so nothing on this site depends on Google any more. The
original Slides file id is kept in each entry's frontmatter as `id:`, for
provenance only; nothing links to it.

The one exception is a single surviving Google Drive attachment on PoE 3.1.1,
which is still linked out rather than mirrored.

Assignment write-ups are reproduced as written, typos included. The "About me"
text is from freshman year and is out of date.

The exported filenames credited several collaborators the old site never
listed — those were folded into `partners:`. A few decks name others on their
title slide (4.1.1 credits Claire Susanto, for example) that aren't captured
in frontmatter yet.

### CEA course archive

The Civil Engineering and Architecture entries were later rebuilt from the
files Conner submitted over the year, cross-referenced against the Fall and
Spring assignment schedules. That covers all four units:

- 30 PDFs — reports, presentations, worksheets and quizzes — in `public/decks/cea/`
- 22 photos, converted from HEIC/JPEG and resized to 1600px (70 MB → 6 MB)
- Three PDFs were re-exports of decks already imported from Google Sites and
  were skipped rather than duplicated
- Two video clips (a beam test and a paper tower) were left out

The write-ups on those entries were drafted from the submitted documents —
mostly from Conner's own Right / Wrong / Learned reflections — rather than
copied from an existing portfolio page, since the Google Site was never updated
past Unit 2. They're worth a read-through.
