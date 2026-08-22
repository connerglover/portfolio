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

Adding a whole new course means adding an entry to `courses` in
`src/data/site.ts` — that array drives the routes, the nav counts, and the
unit ordering.

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
  components/                     Nav, Footer, Deck, DriveFile
  pages/                          routes (file-based)
  styles/global.css               design tokens + base styles
public/images/                    self-hosted images
public/decks/                     slide decks exported to PDF (~40 MB)
```

Styling is deliberately plain for now — everything is driven by CSS custom
properties in `:root` at the top of `global.css`, so a real theme can mostly be
a token swap plus per-component polish.

---

## Migration notes

Content came from the old Google Sites portfolio. Two things worth knowing:

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
