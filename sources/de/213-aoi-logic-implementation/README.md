# 2.1.3 AOI Logic Implementation — portfolio handoff

Class F — Digital Electronics PLTW DC. Unit 2 — Combinational Logic. Target entry: **2.1.3 AOI Logic Implementation**, F·02·027 (`89227fcfb979`).

## Placement and status

Embed `presentation.pdf` as the main slideshow. Render `write-up.md` directly as native website prose below it, not as a PDF or download-only companion. Include `assets/multisim.gif`, `assets/tinkercad.gif` and `assets/irl.mp4` separately with animation/video playback; the PDF contains stills only. Preserve all qualification text. Do not publish or submit without Conner’s instruction.

Public summary: F1 AOI implementation documented in Multisim, TinkerCAD and a physical protoboard. Eight stable Multisim states match the target. Complete TinkerCAD and physical truth-table comparisons remain unverified.

Project tier: supplied simulation, recordings and physical build photographs require the full project package. Unit portfolio rubric F·02·025 lists 2.1.3 for 5 points. Teacher fall schedule F·00·001 p. 3 specifies **problem 1 only — Multisim, TinkerCAD and breadboard**, under October 6/8 and October 14/15. Scope is F1 only. F2 is excluded, not missing work. This evidence-backed deck does not certify task completion, a grade or submission.

## Files

- `presentation.pdf`: 10 redesigned slides; custom technically correct conceptual F1 cover, coordinated logic-derived backgrounds, large original evidence and Conner-approved closing RWL.
- `presentation.qmd`: native editable reveal.js source. Render with Quarto, then print its `?print-pdf` view using `.school/scripts/print_pdf.cjs deck`. Uses a self-contained snapshot of the shared DE class theme under `assets/theme/`.
- `write-up.md`: supplementary native website prose and motion links. No PDF write-up.
- `README.md`: this handoff.
- `assets/multisim.png`, `assets/tinkercad.png`, `assets/irl.png`, `assets/irl_isometric.png`: all four supplied stills, byte-preserved.
- `assets/multisim.gif`, `assets/tinkercad.gif`, `assets/irl.mp4`: all three supplied recordings, byte-preserved.
- `assets/tinkercad-wiring-crop.png`, `assets/tinkercad-on.png`, `assets/tinkercad-off.png`, `assets/physical-video-7.25s.jpg`: source-derived wiring crop and recording stills used in the PDF.
- `assets/ms-*-switches.png` and `assets/ms-*-probe.png`: eight paired stable-state input/output crops, indexed by ABC.
- `assets/physical-overview-slide.jpg`, `assets/physical-isometric-slide.jpg`: photo display derivatives used in the PDF.
- `assets/expected-and-observed.csv`: independently calculated F1 versus observed Multisim indicator outputs, source frames and playback times.
- `assets/evidence-notes.json`: seven-source SHA-256 provenance, inspection method and evidence limits.
- `assets/f1-cover-network.svg`: AI-authored conceptual SOP network derived from the verified F1 expression; not observed wiring. The source embeds its SVG inline so its labels use the embedded class fonts.
- `assets/multisim-functional-trace.svg`: AI-authored functional redrawing of the verified Multisim trace, not a physical netlist.
- `assets/logic-paper.svg`, `assets/logic-night.svg`, `assets/logic-teal.svg`: authored peripheral gate-outline backgrounds; illustrative, not observations.
- `assets/logic-illustration-provenance.json`: illustration sources, deterministic eight-row equivalence check and RWL provenance.
- `assets/theme/de-deck.scss`, `assets/theme/fonts.css`, `assets/theme/title-slide.html` and three `*-OFL.txt` files: shared DE visual system snapshot, embedded fonts, empty title partial and font licenses.

## Verified findings and reflection provenance

The clearer Multisim recording traces as NOT(AC)(A+C) + AC NOT(B), equivalent to worksheet F1. All eight stable indicator states match independently calculated F1. The static 2.5 V annotation is not treated as a measured output voltage. Brief transition frames are excluded from steady-state results and are not circuit timing data.

The TinkerCAD still is unpowered; its GIF shows supply readouts and bright/dark LED states. Physical photographs show construction; the video shows manual switching. Neither establishes an independently verified eight-state comparison.

Conner supplied Right and Wrong; only incidental grammar, punctuation and gate-name capitalization are corrected in the slides. He explicitly approved Learned: “Different gate arrangements can produce the same output. I can use a different design as long as it matches the truth table.” The takeaway was proposed with AI assistance and approved by Conner. The indexed Student reflection note preserves his supplied Right/Wrong wording and approved Learned.

His alternative TinkerCAD gate count — two ANDs, one OR and one NOT instead of the intended three ANDs/two NOTs — is **student-reported**, not independently traced. Do not silently equate those counts with the separately verified Multisim topology. His alligator-clip reflection is preserved as stated.

## Remaining evidence gaps

1. A labeled A/B/C switch map and eight-state output record for TinkerCAD and the physical build, to establish their complete comparison to Multisim.
2. If the teacher separately requires the notebook drawing as a submission, supply its original. The circuit evidence does not establish that a notebook artifact was submitted.

The RWL is now supplied and approved; it is not missing. No F2 requirement is added. Grade and task-completion status remain unchanged.

## Copyable portfolio-agent handoff

Import this folder into the Digital Electronics portfolio, Unit 2, activity “2.1.3 AOI Logic Implementation.” Embed presentation.pdf as the primary slideshow. Render write-up.md directly as native website text, never as a PDF or download-only write-up. Include all three motion files separately with working playback. Keep the evidence limits, conceptual-illustration labels and Conner-approved RWL. The teacher schedule limits scope to problem 1/F1; do not add F2. Treat the alternative TinkerCAD gate counts as Conner’s report, not a verified Multisim netlist. Do not invent mappings, measurements, passed physical truth tables, troubleshooting or submission status. Leave task completion unchanged and do not publish without Conner’s approval.
