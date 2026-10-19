# 2.1.3 AOI Logic Implementation — portfolio handoff

Class: F — Digital Electronics PLTW DC. Unit 2 — Combinational Logic. Target: 2.1.3 AOI Logic Implementation. Indexed entry: F·02·027 (`89227fcfb979`; former id `2b59e70a8450`).

## Scope and status

Project tier: actual Multisim/TinkerCAD/physical build evidence is supplied. Unit portfolio rubric F·02·025 lists 2.1.3 for 5 points. Teacher fall schedule F·00·001 p.3 says **problem 1 only — Multisim, TinkerCAD and breadboard**, under both October 6/8 and October 14/15. This package therefore covers F1, not the later F2/POS portion. F2 is not missing work for this scoped package. No additional student-reported override was found. The PDF is an evidence-backed portfolio draft, not a claim that the assignment is fully complete, graded or submitted.

## Placement and public summary

Place on the Unit 2 portfolio page under the exact activity title. Public summary: F1 AOI implementation documented in Multisim, TinkerCAD and a physical protoboard; all eight stable Multisim indicator states match the target, while complete hardware comparison remains open.

Embed `presentation.pdf` as the main slideshow. Render `write-up.md` as native website prose beneath it, not as a PDF, not as a download-only companion, and not as a redundant second public summary. Put all three original motion files in a clearly labeled motion-evidence area; GIFs should remain animated and the MP4 needs playback controls. PDF slides contain stills only. Preserve qualification text and the RWL placeholder. Do not invent measurements, first-person reflection, a troubleshooting history, a passed physical truth table or any submission status. Do not publish or submit without Conner's instruction.

## Files

- `presentation.pdf`: 10-slide primary deck; plain white cover, explicit evidence limits, last-slide RWL placeholder.
- `presentation.qmd`: native editable reveal.js source; uses an unchanged snapshot of the shared class theme under `assets/theme/` so the import is self-contained.
- `write-up.md`: supplementary native website prose plus motion links. No PDF write-up exists.
- `README.md`: this handoff.
- `assets/multisim.png`, `assets/tinkercad.png`, `assets/irl.png`, `assets/irl_isometric.png`: all four supplied stills, byte-preserved.
- `assets/multisim.gif`, `assets/tinkercad.gif`, `assets/irl.mp4`: all three supplied recordings, byte-preserved; essential separate motion evidence.
- `assets/breadboard-cover.jpg`, `assets/tinkercad-wiring-crop.png`, `assets/tinkercad-on.png`, `assets/tinkercad-off.png`, `assets/physical-video-7.25s.jpg`: labeled photo crops or source-recording stills used by the PDF.
- `assets/ms-*-switches.png` and `assets/ms-*-probe.png`: eight paired input/output crops for the stable-state slide, indexed by ABC.
- `assets/expected-and-observed.csv`: calculated F1 and separate observed Multisim indicators with source frames and playback times. No measured voltages implied.
- `assets/evidence-notes.json`: source SHA-256 provenance, scope, clip inspection method and limits.
- `assets/physical-overview-slide.jpg`, `assets/physical-isometric-slide.jpg`: reduced-resolution JPEG display derivatives of the unchanged physical-photo originals.
- `assets/theme/de-deck.scss`, `assets/theme/fonts.css` and three `*-OFL.txt` files: unchanged shared DE theme, embedded class fonts and their license texts.

## Verified findings

The clearer Multisim recording traces as NOT(AC)(A+C) + AC NOT(B), equivalent to the worksheet F1. Its stable indicator outputs match all eight calculated rows. The 2.5 V probe annotation remains visible regardless of indicator state; it is not a measured output table. Brief intermediate frames are not used as steady-state failures or timing data. TinkerCAD's supplied still is unpowered; its GIF shows a 5.00 V supply and bright/dark LED states. The physical photos show construction and the video shows manual switch operation, not an independently verified eight-row match.

## Still needed from Conner

1. His own Right / Wrong / Learned reflection for the blank final slide.
2. A labeled A/B/C switch map and eight-state output record for TinkerCAD and the physical build, to establish their complete comparison to Multisim.
3. If the teacher separately requires the notebook drawing as a submission, supply its original; the current schematic/recording establishes the circuit logic, not a photographed notebook page. Do not mark a separate notebook artifact complete from this package alone.

No F2 requirement is added. No grade or task-completion status is changed.

## Copyable portfolio-agent handoff

Import this folder into the Digital Electronics portfolio, Unit 2, activity “2.1.3 AOI Logic Implementation.” Use presentation.pdf as the primary embedded slideshow. Render write-up.md directly as native website text, never as a PDF or a download-only write-up. Include multisim.gif, tinkercad.gif and irl.mp4 separately with working animation/video playback. Keep the limitations and blank RWL visible. All seven supplied media originals are preserved in assets; use the two physical photos as construction evidence, not proof of a passing truth table. The teacher schedule limits scope to problem 1/F1, so do not add F2. Do not invent input mappings, measured voltages, physical verification, troubleshooting, or student reflection. Leave submission/completion unchanged; do not publish without Conner's approval.
