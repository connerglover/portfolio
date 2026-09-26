---
title: '1.2.1 Introduction to Combinational Logic Design: Seat Belt Circuit'
courseSlug: de
unit: unit-1
order: 121
decks:
  - pdf: '/decks/de/unit-1/121-1-2-1-seat-belt-circuit.pdf'
    title: '1.2.1 Seat Belt Circuit'
---

The first design problem in the course, and the whole specification is one sentence: the buzzer is on whenever the door is open, or when the key is in the ignition and the seat belt is not buckled. The job is to turn that sentence into gates, build it in Multisim, and prove it against every input combination.

Each sensor is a switch that reads 1 when it is active — belt buckled, key in, door open — and the buzzer is 1 when it sounds. In those terms the sentence becomes Buzzer = (NOT Seat Belt)·Key + Door. The OR sits at the top level of the sentence and the AND inside it, and the one awkward word is "not buckled": the sensor reports a buckled belt, but the warning cares about an unbuckled one, so the belt signal goes through an inverter before anything else sees it. That makes it three gates. The inverted belt and the key feed an AND, the AND output and the door feed an OR, and the OR drives a 2.5 V probe standing in for the buzzer.

With three inputs there are eight combinations, so I filled in the expected output from the sentence first and then stepped the Multisim switches through all eight and read the probe. Five rows buzz — the four with the door open, plus key in with the belt off — and the actual column matched the expected one in every row. The reason it works is that each gate does exactly one word of the sentence: NOT for "not buckled", AND for "and", OR for "or". The circuit is the logic statement drawn as hardware, which is why nothing needed debugging.

**Right:** Built the circuit quickly and kept the wiring neat, so it was easy to tell which switch was which.

**Wrong:** Used Multisim's generic NOT, AND2 and OR2 gates instead of the 74LS04, 74LS08 and 74LS32 chips in the worksheet figure — same logic, but not the parts the activity drew. Didn't put probes on the inputs, and turned it in late.

**Learned:** How to use a truth table to check that a circuit actually does what it is supposed to, rather than trusting that it looks right.
