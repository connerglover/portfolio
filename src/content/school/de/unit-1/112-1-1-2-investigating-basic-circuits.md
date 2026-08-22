---
title: '1.1.2 Investigating Basic Circuits'
courseSlug: de
unit: unit-1
order: 112
decks:
  - pdf: '/decks/de/unit-1/112-1-1-2-investigating-basic-circuits.pdf'
    title: '1.1.2 Investigating Basic Circuits'
---

The first hands-on lab: a 5 V source, a resistor and an LED wired in series, built both on real hardware and in TinkerCAD. Reversing the LED showed its diode behaviour — current only flows one way. Most of the work was learning to drive a digital multimeter properly: the first reading came in at 4.8 V DC, and narrowing the range refined it to 4.76 V, while picking a range that was too small just returned "+OVER". Probing across a plain wire read 0.00 V, confirming the wire drops effectively nothing. Splitting the measurement showed 2.92 V across the resistor and 1.85 V across the LED, summing back to the 4.76 V supply — Kirchhoff's voltage law falling out of real measurements. Finally, applying Ohm's law to the 330 Ω resistor and its 2.92 V drop gave a circuit current of 8.85 mA.
