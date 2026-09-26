---
title: '1.2.3 Binary Number System'
courseSlug: de
unit: unit-1
order: 123
decks:
  - pdf: '/decks/de/unit-1/123-1-2-3-binary-number-system.pdf'
    title: '1.2.3 Binary Number System — answers'
---

A problem set rather than a build: eight decimal numbers to convert to binary, eight binary numbers to convert back, and a table of 0 through 7 in three bits. The whole thing runs on bit weighting — each position is worth twice the one to its right, and a 1 in that position adds its weight to the total.

Going from decimal to binary is repeated subtraction of the largest power of two that fits. 58 takes a 32, leaves 26, takes a 16, leaves 10, takes an 8 and a 2, so 111010. 297 is 256 + 32 + 8 + 1, which puts ones in positions 8, 5, 3 and 0 of 100101001. The other direction is just adding the weights of the ones: 111101010 is 256 + 128 + 64 + 32 + 8 + 2 = 490. My handwritten conversions got all eight of the first set right. The second set is where my handwriting worked against me — my 4s and 9s look alike, so 289 and 490 are only readable because the arithmetic says which digit they have to be, and 111001 came out as something that reads as 47 or 97 when it is 57. The answer sheet attached here is the checked version, with the bit weights written out beside every line so each one can be verified by adding.

The three-bit table is 000 through 111, and it answers the question the worksheet ends on: why computers count in base 2 when people count in base 10. A digital circuit's transistors are either on or off, so every signal has two states, and base 2 has exactly two digits. Telling two voltage levels apart is easy and survives noise; telling ten apart would be much harder to build and much easier to misread. The counters in 1.2.4 are that idea in hardware — four flip-flops, each holding one bit, reading out 0 to 15.
