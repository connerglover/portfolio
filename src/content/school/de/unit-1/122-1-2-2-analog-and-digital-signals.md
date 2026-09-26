---
title: '1.2.2 Analog and Digital Signals'
courseSlug: de
unit: unit-1
order: 122
decks:
  - pdf: '/decks/de/unit-1/122-1-2-2-analog-and-digital-signals.pdf'
    title: '1.2.2 Analog and Digital Signals'
---

1.2.2 is about reading an oscilloscope, and every reading on one comes down to the same move: count divisions, multiply by the scale for that axis. The screen is ten divisions wide, so the period is divisions per cycle times the seconds per division, frequency is its reciprocal, and for a digital signal the duty cycle is the HIGH time as a share of the period.

The worksheet gives four screens to read. Signal 1 at 5 V/Div and 200 ns/Div peaks 1.6 divisions above center and fits four cycles across the screen: 8.0 V peak, 16 V peak-to-peak, a 500 ns period and 2.0 MHz. Signal 2 at 1 V/Div and 500 µs/Div swings ±2 divisions with five cycles on screen: 2.0 V peak, 4.0 V peak-to-peak, 1.0 ms and 1.0 kHz. The two digital signals are both 5 V pulses and near mirror images of each other. The first, at 200 µs/Div, is high for 1.5 of every 2 divisions — 300 µs high, 100 µs low, a 400 µs period, 2.5 kHz and a 75% duty cycle. The second, at 500 µs/Div, repeats every 3.33 divisions with a pulse about a third of a division wide — 167 µs high, 1.50 ms low, 1.67 ms, 600 Hz and 10%.

The Multisim half is a test circuit: a CLOCK_VOLTAGE source at 20 Hz, 10% duty and 5 V, with one lamp from the clock to ground and a second from the clock to a 5 V battery. The lamps take turns. The first has voltage across it only while the clock is HIGH, so it flashes for 5 ms out of every 50; the second sees 5 V across it only while the clock is LOW and stays lit for the other 45 ms. Putting the scope's T1 marker on one rising edge, the next rising edge crossed 2.5 V at 50.000 ms and the falling edge landed between 4.844 and 5.017 ms, one marker step apart. That gives a 50.0 ms period, 5.0 ms high, 45.0 ms low, 20.0 Hz and 10% — exactly what the source was set to.

**Right:** Read the scales carefully to turn divisions into real values, and wrote every answer in engineering notation.

**Wrong:** Struggled to line the markers up on the oscilloscope, and turned it in late.

**Learned:** How to read an oscilloscope, the difference between analog and digital signals, and what duty cycle actually measures.
