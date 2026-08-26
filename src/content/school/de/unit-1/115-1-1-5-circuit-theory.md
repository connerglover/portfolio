---
title: '1.1.5 Circuit Theory: Calculations, Simulation and TinkerCAD'
courseSlug: de
unit: unit-1
order: 115
decks:
  - pdf: '/decks/de/unit-1/115-1-1-5-circuit-theory.pdf'
    title: '1.1.5a/b/c Circuit Theory'
partners:
  - 'Bruce Allkanjari'
  - 'Thomas Sweeney'
---

PLTW splits 1.1.5 into three passes over the same problem set — solve it on paper, simulate it, then build it — so Bruce Allkanjari, Thomas Sweeney and I ran all three and checked the answers against each other. Thomas worked the problems by hand, I rebuilt every circuit in NI MultiSim, and Bruce built them in TinkerCAD, which Mr. T had us use in place of a physical breadboard.

The set starts with Ohm's law rearrangements — 3.5 V across 470 Ω gives 7.44 mA, 3.5 V at 15.5 µA needs 226 kΩ — then equivalent resistance for series and parallel banks, then full analyses. A 9 V series string of 470 Ω, 1.2 kΩ and 270 Ω comes to 1940 Ω and 4.64 mA, dropping 2.18 V, 5.57 V and 1.25 V. A 6 V string of 2.7 kΩ, 10 kΩ, 3.3 kΩ and 8.2 kΩ totals 24.2 kΩ and 248 µA, and its four drops — 669 mV, 2.48 V, 818 mV and 2.03 V — sum back to the 6 V supply. In parallel, 8.2 kΩ, 6.8 kΩ and 4.7 kΩ across 12 V come to 2075 Ω and 5.78 mA, splitting into 1.46 mA, 1.76 mA and 2.55 mA. The last one is a combination circuit: 200 Ω and 470 Ω in series make 670 Ω, that in parallel with 1.8 kΩ gives 488.26 Ω, and adding the 150 Ω and 270 Ω in series brings the total to 908.26 Ω and 13.21 mA at 12 V.

Nothing disagreed. MultiSim's virtual ammeters and voltmeters returned the hand values on every circuit, and TinkerCAD's meters matched to the precision they display — 248 µA and the same four drops on the series string, 5.78 mA splitting the same three ways on the parallel one, and 13.2 mA on the combination circuit, where putting an ohmmeter straight across the network read 908 Ω against the 908.26 Ω we calculated. Working one problem three ways is slower than working it once, but it is the only version where being right is something you can check rather than assume.
