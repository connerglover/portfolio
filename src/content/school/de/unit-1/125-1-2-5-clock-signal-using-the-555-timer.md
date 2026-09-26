---
title: '1.2.5 Clock Signals Using the 555 Timer'
courseSlug: de
unit: unit-1
order: 125
decks:
  - pdf: '/decks/de/unit-1/125-1-2-5-555-timer.pdf'
    title: '1.2.5 Clock Signals Using the 555 Timer'
images:
  - src: '/images/school/de/unit-1/125-multisim-555-counter.gif'
    alt: 'Multisim recording: an LM555CN oscillator clocks four 74LS74N D flip-flops wired as a ripple counter, and four probes light in changing binary combinations.'
  - src: '/images/school/de/unit-1/125-tinkercad-555-counter.gif'
    alt: 'TinkerCAD recording: a breadboard with a 555 timer, two 74HC74 chips and four red LEDs on a 5.00 V bench supply, the LEDs counting as the supply current readout changes.'
partners:
  - 'Bruce Allkanjari'
---

1.2.4 ran its counter off an ideal clock source. 1.2.5 replaces that with a real one: a 555 timer wired as an astable oscillator, whose speed and shape are set by two resistors and a capacitor. The activity has three parts — calculate the clock and check it in simulation, repeat that across nine component sets to find what each part does, then use a 555 to drive the four-bit counter.

The capacitor C2 charges through R_A and R_B in series, and the output is HIGH while it does. When it reaches two thirds of the supply the discharge pin drains it through R_B alone and the output drops LOW. The charging path always has more resistance than the discharging path, so the HIGH time is always the longer one and the duty cycle can never fall to 50%. With R_A = R_B = 330 Ω and C2 = 22 µF, T = 0.693(R_A + 2R_B)C2 gives 15.09 ms, 66.25 Hz and a 66.7% duty cycle. Bruce Allkanjari and I worked the calculated values for all nine rows in a shared spreadsheet. On the Multisim scope the baseline measured 15.15 ms, 66.0 Hz and 66.5% — within 0.4% — and the capacitor trace turned around at 1.67 V and 3.33 V, a third and two thirds of 5 V, which is exactly where the 555's comparators switch.

The nine-row sweep shows what each part does. All three slow the clock as they increase, but only the resistors move the duty cycle. Raising R_A from 100 Ω to 560 Ω took the frequency from 86.3 Hz to 53.8 Hz and pushed the duty cycle up from 56.6% to 73.0%, because R_A sits only in the charging path and only lengthens the HIGH time. Raising R_B over the same range took the frequency from 123.8 Hz to 45.2 Hz and pulled the duty cycle down from 81.1% to 61.4%: R_B is in both paths, and the LOW time grows faster in proportion. C2 is the clean speed control — going from 10 µF to 47 µF, 4.7 times as much, cut the frequency from 145.8 Hz to 31.0 Hz, 4.7 times less, and the duty cycle never left 66.7%, because C2 multiplies the HIGH and LOW times by the same factor. Every simulated period ran 0.4–0.6% longer than calculated, a small, steady offset from the 555 model's switching delays.

The last part put a 555 in front of the counter twice. In Multisim, an LM555CN with two 1 kΩ resistors and 1 µF clocks four 74LS74N flip-flops at a calculated 481 Hz. On TinkerCAD, the teacher started the breadboard and the job was wiring two 74HC74s into a working counter with four LEDs. That clock uses two 330 Ω resistors and 0.01 µF, which calculates to 145.8 kHz — far too fast to see on real LEDs, so the visible counting in the recording means TinkerCAD was simulating well below real time. The bench supply held 5.00 V throughout while its current readout changed 37 times, between 18.8 mA and 70.7 mA, tracking how many LEDs were lit at each count.

**Right:** Finished the Multisim circuit very fast and condensed its footprint to save trouble later on.

**Wrong:** Struggled with TinkerCAD because the breadboard layout confused me, and had to redo it multiple times.

**Learned:** How a 555 clock and a flip-flop work together, and a somewhat better — though not much — understanding of breadboards.
