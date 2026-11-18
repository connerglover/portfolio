# 2.2.4 Design Tool — Logic Converter

**Conner Glover · F — Digital Electronics PLTW DC · Unit 2: Combinational Logic**

Target portfolio item: **2.2.4 Design Tool: Logic Converter**, under Unit 2 / Simplification and Universal Gates. School entry: **F·02·015**, id `f32edcb97232`, folder `F - Digital Electronics PLTW DC/02 - Combinational Logic/02.11 - 2.2.4 Design Tool - Logic Converter`.

## Public summary

Use Multisim's Logic Converter to obtain and simplify expressions, then compare recorded AOI and NAND implementations of the Majority Vote function. The three-input example uses don't-care rows; calculated checks are distinguished from recorded circuit observations.

## Placement and status

This is the **project tier**: the worksheet requires circuit generation and simulation (steps 6–7 and 10–11), and the supplied GIF contains actual circuit evidence. The Unit 2 portfolio rubric lists 2.2.4 as a 10-point item, without a more specific media note. The teacher's fall schedule, week thirteen (November 2, 4 and 5), assigns steps 1–11 and a Majority Vote demonstration quiz. No extra TinkerCAD or physical-build requirement was inferred for this activity.

**Activity-only override, November 10, 2026:** Conner explicitly confirmed that no RWL is needed for **2.2.4**. The waived reflection slide is omitted; do not add a placeholder or request a reflection for this activity. This does not change any other activity's RWL requirements.

Put the PDF slideshow prominently on the activity page. **Render `write-up.md` directly as native website text**, not as an embedded PDF or download-only companion. Offer the original GIF separately because the PDF has only stills. Retain every calculated-versus-observed evidence qualification. Do not add a redundant public-summary section if it repeats the write-up.

School indexing is handled by the existing worker queue; no duplicate jobs were added for this revision. This package has not been published or submitted. No due date, task completion, grade or quiz result was changed. The native HTML is the editable presentation source; the Marp file is a simplified companion, not the PDF's layout source.

## Files

- [presentation.pdf](presentation.pdf) — primary seven-slide 16:9 presentation; the original first seven slides are unchanged.
- [presentation.html](presentation.html) — self-contained editable source; fonts and slide images embedded; no external resource dependencies.
- [presentation.marp.md](presentation.marp.md) — simplified seven-slide Markdown version with relative evidence links.
- [write-up.md](write-up.md) — supplementary website prose and the animation link. **No PDF write-up exists or should be made.**
- `README.md` — placement, provenance and missing-evidence handoff.
- `assets/` — supplied media, authentic frame/crop derivatives and a calculated check, as listed below.

### Asset roles and provenance

All source media were supplied in `00 - Intake`; source originals are preserved unchanged. Converter images show the instrument interface, not the full circuits. The GIF shows those circuits.

- [cir1.png](assets/cir1.png) — supplied original, three-input unsimplified converter expression.
- [cir1simp.png](assets/cir1simp.png) — supplied original, three-input simplified expression; slide 2.
- [cir2.png](assets/cir2.png) — supplied original, Majority Vote unsimplified expression with HIGH minterms 7, 9, 10, 11, 12, 13, 14 and 15.
- [cir2simp.png](assets/cir2simp.png) — supplied original, Majority Vote simplified expression; slide 4.
- [demo.gif](assets/demo.gif) — supplied original switching recording, 86 frames, 2399 × 1017. All frames were reviewed through probe contact sheets; selected stable examples were inspected in full. GIF playback is not an electrical timing measurement.
- [demo-frame-0007.png](assets/demo-frame-0007.png) — authentic full GIF frame 7, zero-based index; inputs ABCD LOW, both Majority Vote outputs LOW.
- [demo-frame-0085.png](assets/demo-frame-0085.png) — authentic full GIF frame 85; inputs ABCD HIGH, both Majority Vote outputs HIGH; slide 6.
- [cir1-expression-detail.png](assets/cir1-expression-detail.png) — tight source crop, no content alteration; slide 2.
- [cir2-expression-detail.png](assets/cir2-expression-detail.png) — source-expression crop for close inspection of the unsimplified Majority Vote terms.
- [majority-aoi-detail.png](assets/majority-aoi-detail.png) — frame 85 upper-right circuit crop; slide 5.
- [state-0007-details.png](assets/state-0007-details.png) and [state-0085-details.png](assets/state-0085-details.png) — labeled montages of genuine input/AOI-output/NAND-output crops from one frame each; slide 7. No simulated values were synthesized.
- [calculated-truth-check.json](assets/calculated-truth-check.json) — independent deterministic comparison of both expressions for the three-input and Majority Vote tables, with recorded-example notes. **Calculated results are not simulation observations.**

## Verified results

- The three-input simplified expression `A'B + BC'` matches all **6 specified rows**. At don't-care row `010`, the original expression gives 0 and the simplified expression gives 1; this is permitted. At don't-care `101`, both give 0.
- `BCD + AB + AC + AD` matches the Majority Vote table on **16 of 16 calculated rows**. Variable mapping: A, B, C, D represent P, V, S, T.
- The GIF contains the three-input example at left, Majority Vote AOI at upper right, and Majority Vote NAND-only at lower right. The visible circuits retain A–D labels.
- Stable frame 7 shows `0000`, with AOI X1 and NAND X2 LOW. Stable frame 85 shows `1111`, with X1 and X2 HIGH. These are verified examples, not certification of all sixteen simulated states or of transient behavior.
- Revised PDF: **7 pages**, with no reflection slide. All seven retained pages are raster- and text-identical to pages 1–7 of the preserved eight-page PDF.
- A fresh PDF printed from the delivered HTML matches the delivered PDF on all seven pages. Embedded Archivo and IBM Plex Sans/Mono faces are retained.

## Missing or unverified evidence — do not invent

1. **Complete verified circuit testing record.** Two representative stable states are explicitly documented; a complete per-state simulation log for both implementations was not supplied or established. Algebraic equivalence is not a replacement for this evidence.
2. **Input renaming and notebook attachments.** The worksheet asks for P/V/S/T input labels and printed circuit attachments. The GIF still shows A/B/C/D. Renaming and physical notebook attachment are not established.
3. **Native Multisim design file** was not supplied. Gate topology is visible, but editable circuit connectivity cannot be checked from an imported file.
4. **Teacher demonstration quiz outcome** was not supplied. Do not claim it was passed, submitted or observed.

Actual AOI and NAND screenshots are **not missing**: they are authentic GIF stills. No troubleshooting history or personal observations beyond what the recording supports were invented.

## Reprint and preservation

From `/home/conner/School`:

```sh
node .school/scripts/print_pdf.cjs deck "Project Deliverables/F - Digital Electronics PLTW DC/2.2.4 Design Tool - Logic Converter/presentation.html" "Project Deliverables/F - Digital Electronics PLTW DC/2.2.4 Design Tool - Logic Converter/presentation.pdf"
```

The VPS normal printer encounters Chrome's “No usable sandbox” error. The retained scratch-only trusted-local printer with explicit workspace root and `--no-sandbox` produced the PDF. Shared printing defaults and portal code were not changed. The original production records are in `.school/working-archive/2026-11-10_f-2.2.4-logic-converter.zip`. The complete prior eight-slide package, import ZIP and reproducibility sources were preserved before this revision in `.school/working-archive/2026-11-10_f-2.2.4-before-no-rwl.zip`; revision verification is in `.school/working-archive/2026-11-10_f-2.2.4-no-rwl-verification.zip`.

## Copyable portfolio handoff

```text
Prepare, but do not publish or submit, the Unit 2 portfolio item “2.2.4 Design Tool: Logic Converter” from this package. Feature the seven-slide presentation.pdf, keep presentation.html and presentation.marp.md editable, render write-up.md directly as website prose, and preserve assets/demo.gif as a playable animation. Do not create a PDF write-up. Conner confirmed no RWL is required for this activity only; omit it without a placeholder or reflection request. Preserve all calculated-versus-observed qualifications and other verified evidence gaps; invent nothing. Do not change due dates, task completion or grades, or imply the teacher quiz was passed. School indexing is handled by the existing worker queue.
```


## Source indexing update — cir1simp.png

Portal job caa2d4da files the supplied three-input simplified-expression screenshot into school entry F·02·015, with a full visual transcript and Unknown contributor labels because no author is visible. The package already includes this screenshot as assets/cir1simp.png and slide-2 evidence; no presentation regeneration or additional package copy is needed. The unsimplified and simplified screenshots are distinct conversion-stage evidence, not redundant versions of a worksheet. This update concerns this source only; it does not certify indexing of the remaining package, activity completion, or full simulation testing. Conner's activity-only no-RWL override remains in effect.


## Source indexing update — cir2.png

Portal job 39c61c05 files the supplied Majority Vote unsimplified-expression screenshot into F·02·015 with a full verified visual transcript. Its SHA-256 matches the package's existing assets/cir2.png exactly (22ee2005b22355308284e6fad0323439080a92a0004aef0c676e2633b030f01d), so no additional asset or regenerated presentation is needed. The screenshot shows rows 003–015 and the eight-term unsimplified expression; rows 000–002 are offscreen. Unknown contributor labels preserve the absence of visible authorship. It complements the three-input examples rather than superseding them. This source-only update does not certify activity completion, circuit verification, or indexing of other package files; the existing no-RWL override and evidence qualifications remain unchanged.
