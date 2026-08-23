---
title: 'PatientLabelPrinter'
summary: 'A browser tool that turns a Greenway EMR daily summary export into a print-ready PDF of patient ID labels — replacing an afternoon of hand-transcribing names, record numbers and dates of birth, without any patient data leaving the machine.'
date: 2025-07-29
updated: 2026-08-23
tech: ['React', 'Vite', 'Tailwind CSS', 'SheetJS', 'jsPDF', 'Cloudflare Workers']
repo: 'https://github.com/connerglover/patient-label-printer'
demo: 'https://labels.connerglover.com'
featured: true
draft: false
---

A medical practice printing labels for lab and radiology orders has to get three
things onto every label: the patient's name, their medical record number, and
their date of birth. The source data already exists — Greenway EMR exports a
daily summary report — but the labels were being typed out by hand, one at a
time, per patient, per order.

That is slow, and worse, it is exactly the kind of task where a mistyped digit
in a record number attaches a specimen to the wrong chart.

This takes the spreadsheet and gives back a PDF.

## The flow

1. Export the daily summary report out of Greenway as `.xls` or `.xlsx`
2. Drop it on the upload card, or pick it with a file browser
3. Review the parsed patient list, removing duplicates and anyone who does not
   need labels — individually or several at once
4. Choose the label stock, or set custom dimensions, with a live preview
5. Generate the PDF and print

## Label stock

Presets cover the stock a practice actually keeps around — the 1.125″ × 3.5″
patient ID roll, Avery 5160 and 5163 sheets, DYMO 30252, and wristband inserts —
and anything else can be entered by hand.

Orientation is handled per stock rather than globally. Text rotates 90° for
portrait-fed rolls so it reads correctly coming off the printer, and stays
horizontal on landscape sheets. Long names shrink to fit rather than running
past the edge of the label.

## Parsing a report that was never meant to be parsed

The export is a human-readable report, not a data file, so most of the work is
deciding which rows are actually patients. The parser reads the first worksheet
and takes a row seriously when column B holds a comma and a bracketed ID —
`Doe, Jane [123456]` — from which the name is the text before the bracket and
the record number is the digits inside it. Date of birth comes from column D.
Headers, spacers and totals never match, so they fall away on their own, and the
recurring scheduling placeholder row is excluded by name.

Two things there are worth more than they look:

**Dates.** A date cell with no date format applied arrives as a bare Excel
serial — `29000` rather than `05/14/1979`. Printing that on a specimen label is
not an option, so any integer in the plausible serial range is converted back to
a real date. Nobody writes a date of birth as a bare five-digit number, which is
what keeps the conversion from firing on something it shouldn't.

**Failure.** Rows that cannot be parsed are logged and skipped rather than
aborting the run, so one malformed line never costs you the whole report. But if
*nothing* parses, the app says so and names the exact layout it expected instead
of handing back an empty PDF — failing loudly beats handing someone a blank page
they might not check.

The flip side is worth stating plainly: this reads the Greenway daily summary
report and nothing else. Exports from another EMR, or a different Greenway
report, will not parse, and the error says as much.

## Patient data never leaves the browser

This is the part that mattered most to get right. There is no backend. The
spreadsheet is read with `FileReader`, parsed in memory, and rendered to PDF
with jsPDF, all client-side — no upload, no transmission, no storage. Closing
the tab discards everything. The deployed site ships a Content-Security-Policy
that blocks outbound connections outright, so the guarantee does not rest on my
word for it.

The generated PDF still contains PHI, so the file and the printed labels need
the same handling as anything else in the practice. But nothing about using the
tool puts patient data anywhere it was not already.

## Settings

Labels per patient (1–20), label dimensions, font, margin, line height and
output filename are all adjustable at runtime, because "print at 100% scale and
hope" is not a workflow.

Built with React 19, Vite 7, Tailwind CSS 4 and Radix primitives, with SheetJS
reading the spreadsheet and jsPDF writing the output. The build is fully static
and deploys to Cloudflare Workers Static Assets at
[labels.connerglover.com](https://labels.connerglover.com) — or it can be served
from any host, including an internal file share.
