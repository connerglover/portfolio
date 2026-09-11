---
title: '1.1.8 / 1.1.9 Soldering Projects: Jitterbug & Random Number Generator'
courseSlug: de
unit: unit-1
order: 120
status: complete
decks:
  - pdf: '/decks/de/unit-1/120-1-1-8-1-1-9-soldering-projects.pdf'
    title: '1.1.8 / 1.1.9 Soldering Projects'
videos:
  - src: '/videos/school/de/unit-1/120-soldering-projects.mp4'
    poster: '/videos/school/de/unit-1/120-soldering-projects.jpg'
    title: 'Jitterbug and Random Number Generator — powered-on demonstration'
    description: 'The Jitterbug has lit red eyes. A hand presses the Random Number Generator button and blue LEDs light. L6 still shows no output after rework.'
---

Two soldering builds: the Jitterbug vibration-motor bot and the PLTW / VEX Robotics Random Number Generator. The video shows both boards powered on; reflections for each build follow.

### 1.1.8 Jitterbug

**Right:** Soldered the entire board — motor, both LED eyes, battery holder, switch, and legs — in about 30 minutes. Circuit worked the first time the battery was inserted: eyes lit and the motor ran.

**Wrong:** The vibration motor's lead snapped off its solder joint after the first successful test. Installed a replacement motor — one of its leads snapped off the same way before the fix held.

**Learned:** The motor leads are very thin, fragile wire that won't tolerate flexing after they're soldered down. Dressing the lead flat against the board before soldering (instead of leaving slack to flex) is what finally kept the joint from breaking again.

### 1.1.9 Random Number Generator

**Right:** Soldered every joint on the board — ICs, resistors, and the full LED array — in a single ~55-minute class period.

**Wrong:** Every LED on the board was soldered in backwards (anode/cathode reversed), so none lit. Fixing it took two more class periods: one to desolder and pull all the old LEDs, one to reseat new LEDs in the correct orientation.

**Learned:** Desoldering already-placed LEDs stresses the package — the L6 LED didn't survive the rework and still shows no output. Checking each LED's long lead (anode) against the schematic before soldering is far cheaper than a full desolder-and-replace pass afterward.
