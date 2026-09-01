# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary, today: teachers grading PLTW coursework.** A Carmel Catholic
teacher receives a link (currently the course page, `/school/<course>/`, or
the home page), scans for the assignment number, expands the row, and reviews
the submitted deck, report, worksheet, or photos. They have a specific
assignment in mind and want to reach its work in a few seconds. Digital
Electronics is the course being graded this way now; earlier courses are
finished.

**Future: college admissions readers.** Someone evaluating an application with
minutes to spend, who wants proof of sustained engineering work and will check
the academic record. Not the audience being designed for yet, but the site
must grow toward it without a rebuild.

Recruiters, peers, and the speedrun community reach individual project pages
via links from GitHub READMEs and speedrun.com, but are not a confirmed design
audience.

## Product Purpose

Conner Glover's engineering portfolio at connerglover.com. It replaced the old
Google Sites portfolio and collects the whole engineering track in one place:
every assignment across the Project Lead The Way (PLTW) sequence with the
submitted work attached, long-form write-ups of personal software projects,
and the academic record (letter grades by semester, weighted GPA, AP scores).

Success today: a teacher finds the assignment they are grading and opens its
work without hunting. Success later: an admissions reader leaves believing the
work is real, sustained, and documented, and can verify it.

## Positioning

**Undecided.** The user deliberately left open which story leads: the complete
and verifiable coursework record, the shipped software with real users, both
equally, or breadth across disciplines. Do not commit a surface to one of
these without confirming. Facts that any of them can truthfully draw on:

- Every surviving assignment has its actual submitted file attached and
  self-hosted (51 PDFs rendered to slide images), not a link to a school
  account.
- Four of the five projects are in production for real users: a medical
  practice's label tool, a speedrun retiming app used by moderators, a Chrome
  Web Store extension, and an exam-practice runtime.
- The record is a full track, not highlights: four PLTW courses, two more
  engineering courses listed, and the transcript with a course-level key.

## Operating Context

- **Content ships as Markdown** in two collections with different shapes:
  `src/content/projects/*.md` (long-form, own page each) and
  `src/content/school/<course>/<unit>/*.md` (one file per assignment, rendered
  as a collapsible row on the course page; no route of its own).
- **Course pages are the grading surface.** A course runs to roughly thirty
  assignments, each a `<details>` row that expands in place to show the
  write-up and an inline deck viewer. Rows default closed and open
  independently.
- **Assignments carry status** (`complete`, `in-progress`, `not-started`) so
  a course in progress reads as a roadmap with a done count, mirroring the
  PLTW schedule.
- **Decks are pre-rendered.** `npm run decks` (Python) rasterises every PDF in
  `public/decks/` to WebP pages and writes `src/data/decks.json`; the rendered
  pages are committed because the deploy build has no Python. Landscape PDFs
  present as slideshows, portrait ones as scrolling documents. A PDF without
  rendered pages falls back to a browser PDF frame.
- **Academic record** lives in `src/data/academics.ts` and is updated each
  semester from the report card. Course list and ordering live in
  `src/data/site.ts`.
- **Deployment:** static Astro build on Cloudflare (Workers static assets,
  `wrangler.toml`), every push to `main` redeploys. `public/_redirects` keeps
  renamed project URLs alive. `/llms.txt`, `/robots.txt`, and a sitemap are
  generated from the same collections.
- **Runs locally** with `npm run dev` on port 4321 (Node 20+).

## Capabilities and Constraints

Binding (confirmed by the user):

- **Privacy limits.** Transcript percentages, teacher names, and the home
  address are never published. Letter grades, weighted GPA, honors standing,
  and AP scores are fine. The repo is public, so this applies to source and
  data files too.
- **Existing URLs keep working.** Project slugs under `/projects/`, course
  pages under `/school/<course>/`, `/about/`, and every rule in
  `public/_redirects`. Renaming a project means adding a redirect, not
  breaking the old link.

Current state, not confirmed as binding (the user did not mark these):

- Static build with no runtime, database, or Google dependency; fonts and decks
  self-hosted. Reasonable to preserve, but a future change is the user's call.
- Dark-only near-black and emerald theme, documented in the README and
  `src/styles/global.css` as a deliberate choice. Treat as the incumbent
  visual system for refinement, not as a product commitment.

Other facts:

- Assignment rows must work without JavaScript (`<details>` today).
- Course pages can load many deck images; the current design opens nothing by
  default to keep the page light. Any change to that default is a
  performance decision, not just a visual one.
- **Wanted, not built:** a link that lands on a specific assignment already
  expanded, so a submission can point straight at its work rather than at the
  course page. The user said this "seems like it would be good."
- Six assignments have no write-up on record and say so; do not invent one.
- Collaborators named on deck title slides are only partly captured in
  `partners:` frontmatter.

## Brand Commitments

- Name: **Conner Glover**. Tagline in site data: "Engineering portfolio".
  Identity line on the home page: "Engineering student", Carmel Catholic High
  School, PLTW sequence.
- Mark: the "C" in `public/favicon.svg`, source of truth for `favicon.ico`,
  `apple-touch-icon.png`, and `og.png` (regenerated by `npm run icons`).
- Voice, as established across the rewritten write-ups: first person, plain,
  specific, and honest about what went wrong. Project pages open with the
  short version of what the thing is and who it is for.
- Links out: GitHub (connerglover), LinkedIn, email.

## Evidence on Hand

- 5 published project write-ups in `src/content/projects/`: Bluebook
  Simulator, CRT, Greenway Label Printer, VMF Downloader, PyTime. All five have
  public repos; three have live demos; one is on the Chrome Web Store. Cover
  image only for CRT (`public/images/projects/crt/screenshot.png`).
- 121 assignment entries across IED, PoE, CEA, and DE, with 51 PDFs in
  `public/decks/` (decks, reports, worksheets, quizzes), rendered pages in
  `public/deck-pages/`, and 29 photos in `public/images/school/`.
- Full transcript with letter grades, semester GPAs, cumulative weighted GPA
  4.16 (High Honors, as of end of sophomore year 2025-26), and two AP scores,
  in `src/data/academics.ts`.
- One surviving Google Drive attachment (PoE 3.1.1) linked out, not mirrored.
- **Absent, do not fabricate:** testimonials, teacher or employer quotes, user
  counts or download numbers for the projects, awards beyond honors standing,
  and an up-to-date "About me" (the current one is from freshman year and is
  flagged as stale in `src/pages/about.astro`).

## Product Principles

1. **The work is the proof.** Every claim on the site points at an attached
   file, a repo, or a live tool. Prefer showing the artifact to describing it.
2. **Findable in seconds.** A grader with an assignment number in mind should
   reach its work without reading anything else. Structure follows PLTW
   numbering, not editorial grouping.
3. **Complete, including the misses.** The record keeps assignments with no
   write-up, in-progress work, and reflections on what went wrong. Honesty is
   part of the credibility.
4. **Grows without a rebuild.** New courses, units, projects, and semesters
   are content and data changes. The site must carry the admissions audience
   later without changing its bones.
5. **Nothing leaks.** Public repo, public site: privacy limits apply to source,
   data, and pages alike.

## Accessibility & Inclusion

No product-specific standard was set. The incumbent implementation already
commits to: keyboard-operable navigation and deck viewers, no-JavaScript
fallback for assignment rows, reduced-motion handling for the backdrop and
transitions, alt text required by the content schema for every image, and
tables that scroll inside their own box on narrow screens. Preserve these.
