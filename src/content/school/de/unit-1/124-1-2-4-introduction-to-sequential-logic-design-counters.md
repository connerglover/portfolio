---
title: '1.2.4 Introduction to Sequential Logic Design: Counters'
courseSlug: de
unit: unit-1
order: 124
status: complete
decks:
  - pdf: '/decks/de/unit-1/124-1-2-4-counters.pdf'
    title: '1.2.4 Counters'
---

1.1.6 showed that a 74LS74 D flip-flop with D fed back from its own ~Q toggles on every rising clock edge. 1.2.4 chains four of them, each stage's ~Q clocking the next, and the result counts in binary from 0 to 15.

Before the clock gets involved there are the two asynchronous inputs. Preset and Clear are active LOW, and while either is held LOW the clock has no effect at all: Preset forces Q to 1, Clear forces it to 0, and only with both at 5 V does the flip-flop toggle. In a counter those are how you start from a known state instead of whatever the chips powered up in. These answers come from the 74LS74 function table; the single-flip-flop switch circuit was not built separately.

The Multisim circuit reuses the flip-flop counter from my 1.2.5 file, with the 555 swapped for a CLOCK_VOLTAGE source and Preset and Clear tied to 5 V. With that clock driving the first stage A, reading A and B one cycle at a time gives 00, 10, 01, 11, then 00 again every four cycles. A changes on every cycle and B changes each time A falls back from 1 to 0, so taking B as the 2s bit and A as the 1s bit, the pair counts 0, 1, 2, 3 and wraps. Swapping in a 60 Hz, 50% clock and putting a four-channel scope on Clock, A and B made the pattern measurable: in the simulation, the markers put the clock at 16.7 ms and 60 Hz, A at 33.3 ms and 30 Hz, and B at 66.7 ms and 15 Hz. Those are periods between rising edges, and at 20 ms/Div one marker step is 0.35 ms: with the first marker on a clock edge at 0 s, the next clock edge fell between 16.609 and 16.955 ms and A's between 33.218 and 33.564 ms. I ran the scope at 5 V/Div instead of the worksheet's 10 V/Div, with the three traces offset by two divisions each, so they were easier to tell apart. Each stage toggles once per cycle of its input, so it needs two input cycles to complete one of its own — double the period, half the frequency, every stage. Carried out to four stages on a 1 kHz clock, the calculated values from f/2ⁿ are 500 Hz, 250 Hz, 125 Hz and 62.5 Hz, with D, the last stage, running at a sixteenth of the clock.

At 1 kHz the probes change too fast to follow, so the last step was finding a clock slow enough to watch. 2 Hz worked best — half a second per count, slow enough to read each number and fast enough to see the whole cycle in eight seconds — and the four probes stepped through every value from 0000 to 1111 before wrapping to 0000.

**Right:** Wired each ~Q back to its own D so every flip-flop toggled, and set up the four-channel scope to show the clock, A and B together.

**Wrong:** Turned it in late.

**Learned:** How to count in binary, and how D flip-flops chain together into a counter.
