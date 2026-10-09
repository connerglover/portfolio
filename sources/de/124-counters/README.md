# 1.2.4 Introduction to Sequential Logic Design: Counters — complete-status update

Target: update the existing 1.2.4 portfolio entry in Unit 1.2 Logic Design Fundamentals. Do not create a duplicate entry. Workspace entry: 62e5a85090f5, F·01·017.

## Status

Complete for the class's simulation-only requirements. Conner requested this complete-status update on 2026-10-08. The school task already records completion; this package is a portfolio update, not a new submission or grade change.

Conner confirmed on 2026-10-06 that the physical protoboard/myDAQ build in generic worksheet steps 6–10 is not required for this class. Required scope: Multisim work and answers to steps 1–5. Remove obsolete physical-build pending notices from the existing portfolio entry.

## Public summary

Built a four-bit ripple counter in Multisim using D flip-flops. The simulated oscilloscope showed each stage dividing the preceding frequency by two: Clock-In at 60 Hz, A at 30 Hz and B at 15 Hz. At a 2 Hz clock, the probes counted from 0 to 15 in binary. Includes worksheet answers and Conner's RWL.

## Import files

presentation.pdf: revised eight-slide presentation, ending with the existing student RWL. The file-location slide has been removed. This replaces the older nine-slide version.

write-up.pdf: current companion answering steps 1–5, with circuit evidence, simulated measurements and labeled calculations. Retain the current simulation-only scope.

update.json: human/agent-readable update manifest requesting status complete, replacement of the two portfolio PDFs and removal of the obsolete physical-build gap. It is not a claim that an external portfolio import has already run.

presentation.qmd and write-up.qmd: editable Quarto sources. The update ZIP includes the shared _theme/ as a sibling folder so their styles and fonts resolve.

assets/counter-circuit.png: Multisim circuit screenshot. assets/scope-60hz.png: scope screenshot. assets/count-0-15.png: captured binary probe sequence. All are also embedded in the PDFs.

README.md: this handoff.

## Evidence and provenance

The Multisim work was prepared and tested with Claude assistance on 2026-09-25, using the counter section of Conner's 1.2.5 circuit and a CLOCK_VOLTAGE source. Step 1 is answered from the 74LS74 function table; its separate switch circuit was not built. Step 2 uses the first two outputs of the simulated four-bit counter. Step 3 uses simulated scope measurements; step 4 is calculated; step 5 uses a 2 Hz clock and captured probe states. Preserve those distinctions. Conner's existing RWL came from his selected reflection points and is unchanged by this update.

The historical source mentions 1.2.4.ms14 on Conner's PC. That native circuit file is not included in this update ZIP; use the supplied Multisim evidence already embedded in the PDFs. Do not invent or recreate an unavailable native file, and do not turn its absence into a new physical-build requirement.

## Handoff prompt

Update my existing Digital Electronics portfolio entry “1.2.4 Introduction to Sequential Logic Design: Counters” in Unit 1.2. Mark it Complete for the class's simulation-only requirements. Replace the old presentation with the attached eight-slide presentation.pdf and use write-up.pdf as the current detailed companion. Keep the public summary and Multisim evidence from this package. Remove any “physical build pending,” protoboard or myDAQ completion gap: my teacher does not require worksheet steps 6–10 for this class. Preserve my existing RWL and keep simulated measurements separate from calculated results. Do not add a “where everything is,” file-location or rubric-mapping slide. Do not duplicate the entry, change a grade, claim a new school submission, or modify unrelated portfolio entries. Read update.json for the explicit update scope.
