# 2.1.6 AOI Logic Design: Majority Vote

Class: F — Digital Electronics PLTW DC. Unit: 02 — Combinational Logic (portfolio Unit 2.1 / Boolean Logic and AOI). Target entry: `71f92cc5fe49`, accession `F·02·009`. Designer: Conner Glover. Prepared 2026-10-27.

## Status and placement

Project tier: the activity requires AOI design, simulation and a physical build; its rubric requires unsimplified/simplified circuit videos, TinkerCAD, breadboard photo/video and RWL. The unit rubric lists this activity; the schedule supplies no scoped override. Supplied images and recordings also require project tier. This package is a partial evidence-backed deliverable, not a claim that the assignment is completed, submitted or independently mastered. Do not publish or submit without Conner’s direction.

Place under the existing 2.1.6 Majority Vote portfolio activity. Use `presentation.pdf` as the primary slideshow. Render `write-up.md` directly as native page prose; do not create, embed or offer a write-up PDF. Show separate motion players/downloads for GIFs and movie. Do not duplicate a separate public-summary section if the write-up is present. Retain explicit missing-evidence notices.

## Public summary

A four-member voting circuit uses AOI logic to display pass/fail, with the president breaking a two-vote tie. The presentation develops the truth table, canonical SOP and Boolean reduction, then distinguishes conceptual circuits from supplied Multisim, TinkerCAD and physical-build evidence.

## Included files and roles

- `presentation.pdf`: 16-slide presentation; final RWL uses Conner’s directly supplied words.
- `presentation.qmd`: native editable Quarto reveal.js source, not Marp.
- `deck.css`: package-specific slide layout, coordinated with shared DE theme.
- `title-slide.html`: empty supported partial preventing a duplicate metadata cover.
- `write-up.md`: short supplementary website prose and motion links, never a PDF.
- `assets/multisim.png`, `multisim.gif`, `tinkercad.png`, `tinkercad.gif`, `irl.MOV`: all five supplied originals, unchanged bytes. GIFs/movie are linked motion evidence; stills are used/linked in the deck and prose. The original movie contains device/location metadata; review privacy before public release.
- `assets/multisim-top.png`, `multisim-bottom.png`, `multisim-on.png`, `multisim-off.png`: cropped GIF frame derivatives.
- `assets/tinkercad-on.png`, `tinkercad-off.png`, `tinkercad-states.png`: stable GIF frame derivatives.
- `assets/physical-build.jpg`: still extracted from the physical movie; not an independent photo.
- `assets/cover-logic.svg`, `canonical.svg`, `simplified.svg`: authored conceptual diagrams, not simulator captures.
- `README.md`: this handoff.

## Missing evidence / limits

Conner’s Right / Wrong / Learned reflection was supplied directly and is included without expansion. His statement about completing the work does not establish specific unrecorded tests.

1. Student canonical unsimplified Multisim circuit and working-model recording. Both models in the supplied Multisim recording implement the simplified four-term function; the top uses AND3/OR4 and the bottom expands it to two-input gates. The authored canonical schematic is explicitly conceptual and cannot replace required simulation evidence.
2. Complete labeled input/output test record for both simulation and physical build if claiming all 16 rows agree. The clips show operation, but no readable P/V/S/T mapping is given for TinkerCAD/physical switches. No full measured truth table is asserted.
3. Confirmation of required LS-family hardware where applicable. TinkerCAD clearly shows HC devices, not LS. Physical IC markings are obscured by jumper wiring.

The supplied physical movie is represented by a still and separate original video. No separate physical photograph was supplied; the still provides a picture of the actual build. No personal troubleshooting, measured delays or pass counts have been invented.

## Theory and validation

Calculated passing minterms (P,V,S,T order): 7,9,10,11,12,13,14,15. D = PV + PS + PT + VST. An exhaustive program checks all 16 rows against the voting rule and both SOP forms. This is mathematical verification, not an observation log. Canonical conceptual circuit: 24 two-input AND, 7 two-input OR, 4 shared inverters. Simplified circuit: 5 two-input AND and 3 two-input OR (two 74LS08 packages, one 74LS32; no inverter needed).

## Editing / rebuilding

The editable source uses `../_theme/de-deck.scss` and `../_theme/fonts.css` from the shared class theme. The import ZIP includes that theme at its matching sibling path. From the school root, `quarto render "Project Deliverables/F - Digital Electronics PLTW DC/2.1.6 AOI Logic Design Majority Vote/presentation.qmd"`, then print the resulting HTML with `.school/scripts/print_pdf.cjs deck`. This is not a Marp deck. Source provenance uses the activity, design brief, activity rubric and unit portfolio rubric in the indexed class entry. The slide evidence and directly supplied RWL are Conner’s; the derivation, diagrams and presentation assembly are AI-generated. Completion label: Not Completed.

## Final QA

The deck has 16 pages. Every page was inspected twice; a final schematic-routing correction was separately re-inspected. An independent print of the indexed native source matches all 16 package pages pixel-for-pixel. All fonts are embedded. All five original media files match their indexed student originals by SHA-256. `validation.json` records these checks. Indexing job `h-20261027-224741` finished with no gaps for this entry; Digital Electronics verification passed. The full workspace check still reports unrelated existing issues in other classes. Task `d-5fc813462f` remains open, due 2026-10-30.
