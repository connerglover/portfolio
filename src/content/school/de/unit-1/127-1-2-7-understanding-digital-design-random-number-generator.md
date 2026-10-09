---
title: '1.2.7 Understanding Digital Design: Random Number Generator'
courseSlug: de
unit: unit-1
order: 127
status: complete
decks:
  - pdf: '/decks/de/unit-1/127-1-2-7-random-number-generator.pdf'
    title: '1.2.7 Understanding Digital Design: Random Number Generator'
  - pdf: '/decks/de/unit-1/127-1-2-7-random-number-generator-answers.pdf'
    title: '1.2.7 Worksheet Answers and Recording Observations'
images:
  - src: '/images/school/de/unit-1/127-multisim-rng-working.gif'
    alt: 'Multisim recording, 14 seconds: the complete random number generator circuit with its 555 clock, flip-flop counter, logic-gate decoder and seven LEDs. Switch S1 closes and opens twice; each time the lit LEDs cycle through die faces and then hold, first on 4 and finally on 2.'
  - src: '/images/school/de/unit-1/127-tinkercad-rng-working.gif'
    alt: 'TinkerCAD recording, 22.8 seconds: the random number generator on breadboards with a 555 clock, counter chips and seven LEDs in a die pattern, powered at 5.00 V. The lit LEDs change between die faces, starting on 2, passing through 5 and ending on 6.'
videos:
  - src: '/videos/school/de/unit-1/120-soldering-projects.mp4'
    poster: '/videos/school/de/unit-1/120-soldering-projects.jpg'
    title: 'Soldered Random Number Generator board from Activity 1.1.9'
    description: 'Supporting evidence for the physical board: the Random Number Generator I soldered in Activity 1.1.9, the same 555, counter and decoder design, shown powered on. A hand presses its button and the blue LEDs light; L6 still shows no output after the 1.1.9 rework. Shared with the 1.1.8 / 1.1.9 entry.'
---

The finished project shows how a simulated circuit and a physical build can represent the same design without providing the same kind of evidence. Multisim makes the wiring easy to trace, while TinkerCAD makes the breadboard connections visible. A photograph documents the assembly, but the recordings add the roll behavior that a still cannot show. The Multisim clip includes two switch-operated rolls and shows that the display can remain on a valid face after the roll control opens. That makes it more useful than a single screenshot for checking the connection between the timer and the counter. It does not establish statistical randomness or equal probabilities for every face; checking that would require many repeated rolls and a record of the results. The separate worksheet file keeps calculated logic tables apart from visible results, because a working finished circuit does not prove that every earlier test was recorded. This distinction makes the project evidence clear without adding another report or repeating the slideshow's equations and reflection.
