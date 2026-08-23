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
*not* get their own pages: a whole course lives on one page at
`/school/<course>/`, with its units as sections and every assignment as a
collapsible row. The `unit` frontmatter field still groups them, it just no
longer creates a route.

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
status: in-progress      # complete (default) | in-progress | not-started
partners:                # optional
  - 'Ryan Frels'
---

The write-up goes here, in Markdown.
```

Adding a whole new course, or a new unit to an existing one, means editing
`courses` in `src/data/site.ts` — that array drives the routes, the nav counts,
and the unit ordering.

`status: not-started` is for work still ahead on the course schedule. Those
entries render compact and muted with a chip, so a course in progress reads as
a roadmap and the unit shows "3 of 16 done" rather than only listing what is
finished. Digital Electronics is set up that way from its Fall schedule.

`decks:` holds any PDF you want shown inline, not just slide decks — reports,
worksheets and quizzes all render through the same viewer. `images:` renders as
a single full-width photo, or as a thumbnail grid once there is more than one.

**After adding or replacing a PDF, run `npm run decks`.** See below.

---

## Updating the academic record

`src/data/academics.ts` holds the transcript that the About page renders.
Letter grades only, on the school scale (A 100-90, B 89-80, C 79-70) — the
underlying percentages are deliberately not stored, since this repo is public
and the numbers add exposure without adding anything a portfolio needs.

Each new semester, add the courses to the current year's `terms` entry and
update `gpa.cumulative`, `gpa.honors` and `gpa.asOf` from the latest report
card. A `null` semester renders as an em dash, for courses that only ran half
the year.

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
  data/academics.ts               transcript — courses, letter grades, GPA
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

## The theme

Near-black and emerald, dark only. Committing to one palette means it can be
tuned properly rather than compromised to keep a second one working — every
colour, spacing and motion value is a custom property at the top of
`src/styles/global.css`.

Type is Space Grotesk for headings, Inter for body, and JetBrains Mono for data
— grades, course numbers, dates, counts. All three are self-hosted through
Fontsource, so the site does not depend on a font CDN.

Three deliberate moments, on an otherwise quiet base:

- **Cursor glow** (`CursorGlow.astro`) — a soft emerald light tracks the pointer
  on the home page. Off for coarse pointers and under reduced-motion.
- **Spotlight list** (`SpotlightList.astro`) — hovering one row dims its
  siblings. Pure CSS, using `:has()` on the list; on touch every row stays at
  full strength.
- **View transitions** — pages cross-fade rather than hard-cutting, via Astro's
  `<ClientRouter />`.

The home page is the only one using the split layout — a pinned identity column
on the left, content scrolling on the right. Pass `layout="split"` to
`BaseLayout` for it. Every other page carries too much of its own structure to
give up a third of the width, so they use the standard top nav.

Course pages collapse each assignment into a row that expands in place, built on
`<details>` so it works with no JavaScript. They default to closed — a course
runs to thirty-odd assignments and each can carry a PDF viewer, so opening them
all by default buries the list and loads a lot of images nobody asked for. Rows
open independently rather than as an exclusive accordion.

`/projects/` and `/school/` are both index pages built on `FeatureList.astro`:
large rows where hovering one enlarges it and dims the rest. The growth is real
layout — padding and font-size — rather than a transform, because a scaled row
rasterises at its old size and the text goes soft while it animates. Dimming the
siblings uses `:has()` on the list, so it costs no JavaScript and every row
stays at full strength where there is no hover. Those two pages use
`.wrap.wide`, so the rows have somewhere to grow into.

Both also hang off dropdowns in the nav — Projects lists the projects, School
lists the courses. They open on hover and on keyboard focus using
`:focus-within`, so there is no JavaScript and nothing to re-initialise after a
view transition. Below 52rem the menus are dropped and the index pages carry the
navigation instead.

The backdrop (`Backdrop.astro`) is a drifting dot field on a 2D canvas, with a
green trail that lights the dots it passes over. The dots are a simplex noise
flow field — each has a home position on an 18px grid and is pushed off it by an
angle and distance both read from 3D noise with time as the third dimension, so
neighbouring dots move together and the field drifts like a current. The wash
behind the pointer is CSS at a radius matched to the lit dots, so the two read
as one light rather than two effects at different sizes.

The field math costs about 1 ms per frame at 1080p and 1.5 ms at 1440p, well
inside the 16.7 ms budget. All of its state lives at module scope and the
elements are re-resolved on `astro:page-load`, because Astro replaces them on
every client-side navigation — binding once leaves the effect dead as soon as
you navigate away and back.

One trap worth knowing about, since it has now caused three bugs: Astro scopes
component styles by appending a data attribute to every selector, which raises
the specificity of descendant selectors like `nav ul` above a bare class like
`.menu`. Where a class needs to beat one, qualify it (`nav ul.menu`).

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
All 49 attachments come to 287 pages and about 19 MB.

The aspect ratio also picks the presentation, with no configuration needed:

- **Landscape** pages are slide decks. One slide at a time, arrows, click to
  advance, keyboard and swipe.
- **Portrait** pages are documents — reports, worksheets, scanned notes. They
  read as documents: sheets of paper stacked in a scrolling frame, with the page
  counter following the scroll.

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

The IED, PoE and early CEA write-ups were originally reproduced from the Google
Site verbatim, typos and all. They have since been rewritten: every fact is
preserved, including the ones where something went wrong, but the prose is no
longer the first draft a freshman typed into a text box. Three titles were
tidied at the same time — `2.1.7 Truss MD Solids Stuff` became
`2.1.7 Truss Analysis in MDSolids`, and CEA's `1.1.2 Part 1` / `Part 2` became
`Building Analysis` and `Garden Walk`. Six assignments never had a write-up on
the old site and still say so.

IED was renumbered to X.X.X to match the other courses. The old site wrote its
assignments as `1.4`, `2.3`, `3.7`, with the unit living in the page heading
rather than in the number. The full numbers were recoverable from the deck and
file titles captured during the migration — `IED 1.1.4 - Coffee Cup Product
Improvement`, `IED 1.2.3 - Multiview Drawings`, `1.3.7 Paper Bridge` — all of
which confirm the same rule: prefix with the unit.

Two PoE assignments that were still marked in progress have been dropped. Both
were empty placeholders, and the course finished two years ago.

The "About me" text is from freshman year and is out of date.

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
