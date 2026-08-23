---
title: 'Bluebook Simulator'
summary: "A practice-test app styled after College Board's Bluebook exam software. Someone authors a test as a small JSON file; the app runs it as a timed, sectioned exam with highlights, notes, math input and a calculator, then saves a result file for grading."
date: 2026-08-23
tech: ['JavaScript', 'Vite', 'KaTeX', 'MathLive', 'Cloudflare Pages']
repo: 'https://github.com/connerglover/bluebook'
demo: 'https://bluebook.connerglover.com'
featured: true
draft: false
---

Practising for a digital exam on paper only gets you so far. The questions
transfer; the interface does not. Bluebook has its own rhythm — how you flag a
question, how the section timer behaves, where the calculator lives, what the
review screen shows you before you submit — and none of that is something you
can rehearse from a worksheet.

This is a static site that runs a practice test in that shape. I built it for
one student working through AP Calculus BC, but the runtime has no
subject-specific logic in it at all; the test file supplies everything.

> **Unofficial.** Not affiliated with, endorsed by, or connected to College
> Board in any way.

## How it gets used

1. Someone authors a test as a `.bbtest` file — a few KB of JSON
2. For auto-checked questions, they run it through `/author.html`, which attaches
   a scrambled answer key
3. The student opens the site, enters their name, and picks the file
4. They sit the test
5. The app writes out a `.bbresult.json` file to hand in

Because the key is never stored in plaintext, the test file is safe to send
straight to the student.

## What is in the app

- **Twelve question types** — multiple choice, multi-select, true/false,
  dropdown, matching, fill-in, short answer, essay, a live LaTeX math editor,
  multi-part free response, and one prompt with several labelled answer fields
- **Passages** — a section can bind long source text to a run of questions,
  holding scroll position and highlights as the student moves between them
- **Figures** — inline SVG or base64 images carried inside the test file, with
  author-supplied SVG sanitised before it renders
- **Highlights, notes and a line reader**, the annotation tools the real thing has
- **Continuous save** — answers, highlights, notes and remaining time persist, so
  closing the tab does not lose the attempt
- **Calculators** — TI's TI-84 Plus CE emulator loaded at runtime in an isolated
  frame, with a built-in scientific and graphing calculator as an offline
  fallback, both available only in sections that permit one
- **Section clocks** that can be hidden, and that never hard-stop the student —
  when time runs out the app asks whether they want to keep working

## Auto-scoring, and where it stops

When the test file carries a key, the app checks anything with fixed choices.
The author decides whether the student sees full per-question scores, a total
only, or nothing at all. Free response is never scored automatically — there is
no honest way to do that in the browser, so it doesn't pretend to.

## A note on the answer key

Keys are stored as salted SHA-256 hashes, which is enough that a student poking
at the file in a text editor finds nothing useful.

It is not enough to call secure, and the repository says so. The salt has to
ship with the file for the browser to verify against it, and with five choices
per question anyone willing to write a short loop can recover the whole key by
brute force. It defeats a casual look and nothing more. A key that genuinely
must stay secret cannot live in the browser at all — that needs a server, which
this deliberately does not have.

## Around the code

The runtime is plain ES modules with no framework, built by Vite and served as
static files from Cloudflare Pages. KaTeX renders math and MathLive backs the
equation editor. Fifteen test suites run against jsdom via `test/run.sh`.

Four documents specify the parts that other people have to write against: the
`.bbtest` format and its validation contract, a guide to authoring questions,
the `.bbresult.json` output format, and the deployment setup. There is also a
Claude skill in the repository for generating test files and reading results
back, which is how the AP Calculus BC material in `course/` gets built.
