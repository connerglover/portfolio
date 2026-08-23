---
title: 'GreenwayXLS2Label'
summary: 'A browser tool that turns a Greenway EMR daily summary export into a print-ready sheet of patient labels — replacing an afternoon of hand-transcribing names, MRNs and dates of birth, without any patient data leaving the machine.'
date: 2025-07-29
updated: 2026-08-23
tech: ['React', 'Vite', 'Tailwind CSS', 'SheetJS', 'jsPDF']
repo: 'https://github.com/connerglover/greenway-label-automator'
demo: 'https://greenwaylabelgenerator.netlify.app'
featured: true
draft: false
---

A medical practice printing labels for lab and radiology orders has to get three
things onto every label: the patient's name, their medical record number, and
their date of birth. The source data already exists — Greenway EMR exports a
daily summary report — but the labels were being typed out by hand, one at a
time, per patient, per order.

That is slow, and worse, it is exactly the kind of task where a mistyped digit
in an MRN attaches a specimen to the wrong chart.

This takes the spreadsheet and gives back a PDF.

## The flow

1. Export the daily summary report out of Greenway as `.xls` or `.xlsx`
2. Drop it on the upload card
3. Review the parsed patient list, removing anyone who does not need labels —
   individually or several at once
4. Adjust the label settings if the defaults do not match your stock, with a
   live preview
5. Generate the PDF and print

## Parsing a report that was never meant to be parsed

The export is a human-readable report, not a data file, so most of the work is
deciding which rows are actually patients. A row qualifies when column B holds a
comma and a bracketed ID — `Doe, Jane [123456]` — from which the name is the
text before the bracket and the MRN is the digits inside it. Date of birth comes
from column D, converted out of Excel's serial date format. Headers, spacers and
totals are skipped silently, and the scheduling placeholder row is excluded by
name.

Rows that cannot be parsed are logged and skipped rather than aborting the run,
so one malformed line never costs you the whole report. If nothing parses at
all, the app says so instead of handing back an empty PDF — failing loudly beats
handing someone a blank page they might not check.

## Patient data never leaves the browser

This is the part that mattered most to get right. There is no backend. The
spreadsheet is read with `FileReader`, parsed in memory, and rendered to PDF
with jsPDF, all client-side — no upload, no transmission, no storage. Closing
the tab discards everything.

The generated PDF still contains PHI, so the file and the printed labels need
the same handling as anything else in the practice. But nothing about using the
tool puts patient data anywhere it was not already.

## Getting the labels to actually print right

Label stock is unforgiving. The text renders rotated 90° so it reads correctly
on portrait-fed rolls, and the geometry defaults to 1.125" × 3.5" to match
standard patient-ID labels. Copies per patient, dimensions, font and output
filename are all adjustable at runtime, because "print at 100% scale and hope"
is not a workflow.

Built with React 19, Vite, Tailwind and shadcn/ui, with SheetJS reading the
spreadsheet and jsPDF writing the output. The build is fully static, so it can
be served from any host — or opened straight off an internal file share.
