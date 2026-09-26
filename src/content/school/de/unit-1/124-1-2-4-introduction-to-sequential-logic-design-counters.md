---
title: '1.2.4 Introduction to Sequential Logic Design: Counters'
courseSlug: de
unit: unit-1
order: 124
status: in-progress
decks:
  - pdf: '/decks/de/unit-1/124-1-2-4-counters.pdf'
    title: '1.2.4 Counters'
---

1.1.6 showed that a 74LS74 D flip-flop with D fed back from its own ~Q toggles on every rising clock edge. 1.2.4 chains four of them, each stage's ~Q clocking the next, and the result counts in binary from 0 to 15.

Before the clock gets involved there are the two asynchronous inputs. Preset and Clear are active LOW, and while either is held LOW the clock has no effect at all: Preset forces Q to 1, Clear forces it to 0, and only with both at 5 V does the flip-flop toggle. In a counter those are how you start from a known state instead of whatever the chips powered up in.

In Multisim, with a clock driving the first stage A, reading A and B one cycle at a time gives 00, 10, 01, 11, then 00 again every four cycles. A changes on every cycle and B changes each time A falls back from 1 to 0, so taking B as the 2s bit and A as the 1s bit, the pair counts 0, 1, 2, 3 and wraps. Swapping in a 60 Hz, 50% clock and putting a four-channel scope on Clock, A and B made the pattern measurable: the markers put the clock at 16.7 ms and 60 Hz, A at 33.3 ms and 30 Hz, and B at 66.7 ms and 15 Hz. Each stage toggles once per cycle of its input, so it needs two input cycles to complete one of its own — double the period, half the frequency, every stage. Carried out to four stages on a 1 kHz clock, that is f/2ⁿ: 500 Hz, 250 Hz, 125 Hz and 62.5 Hz, with D, the last stage, running at a sixteenth of the clock.

At 1 kHz the probes change too fast to follow, so the last step was finding a clock slow enough to watch. 2 Hz worked best — half a second per count, slow enough to read each number and fast enough to see the whole cycle in eight seconds — and the four probes stepped through every value from 0000 to 1111 before wrapping to 0000.

**Right:** Wired each ~Q back to its own D so every flip-flop toggled, and set up the four-channel scope to show the clock, A and B together.

**Wrong:** Turned it in late, and the protoboard version is still unbuilt.

**Learned:** How to count in binary, and how D flip-flops chain together into a counter.

_Still to do: steps 6–10, the same 4-bit counter built from 74LS74 chips on the protoboard and clocked from the myDAQ's DigOut, with teacher sign-off._
