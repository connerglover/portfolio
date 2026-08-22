---
title: 'This Site'
summary: 'The site you are reading. A static Astro build that replaced a Google Sites portfolio I was going to lose access to at graduation, with every attachment pulled off Google and self-hosted.'
date: 2026-08-22
tech: ['Astro', 'TypeScript', 'Python']
repo: 'https://github.com/connerglover/portfolio'
demo: 'https://connerglover.com'
featured: false
draft: false
---

My engineering portfolio lived on Google Sites, on a school account. That meant
three problems: it was ugly, adding anything to it was tedious, and all of it —
the pages, the slide decks, the photos — disappears when I graduate and the
account goes away.

So I rebuilt it as a static site I own.

## What it had to solve

**Nothing could depend on Google.** The old site embedded slide decks from Drive
and hotlinked images from `googleusercontent`. Every one of those would break the
day the account closed. They are all exported and committed to the repository now.

**A lot of it was already gone.** Of the 44 Drive attachments on the old site, 24
had already been deleted and returned 404 or 410. Those got dropped rather than
left as broken embeds.

**The surviving decks were not public.** They returned 401 to anyone not signed
into the school domain, so visitors would have hit a permission error even before
graduation. Every deck was exported to PDF and is served from this domain.

## How it is built

Two content collections, shaped differently because the content is:

- **School coursework** — one file per assignment, short, rendered stacked on its
  unit page
- **Projects** — long-form, one page each, like this one

Course pages, unit pages and the routes between them are generated from a single
array of course metadata, so adding a course is a data change rather than a
page-building exercise.

## Displaying the decks

Browsers cannot render a PDF without wrapping it in their own toolbar, sidebar and
print controls, which reads as a document viewer rather than an embedded deck —
and most mobile browsers refuse to render one inline at all.

So a Python script rasterises every page of every PDF to WebP ahead of time, and a
small custom element flips through the images with arrows, a slide counter,
fullscreen, keyboard and swipe. Landscape decks present as a slideshow; portrait
documents present as scrollable pages. The PDF is still linked for anyone who
wants the file.

The rendered pages are committed deliberately — the production build only runs
`npm run build`, with no Python available, so nothing can be generated at deploy
time.

## Where it runs

Static output on Cloudflare Pages, on a custom domain, with no runtime and no
database.
