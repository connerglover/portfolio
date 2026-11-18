---
title: '2.1.6 AOI Logic Design: Majority Vote'
courseSlug: de
unit: unit-2
order: 216
presentationFirst: true
summary: 'A four-member voting circuit uses AOI logic to display pass/fail, with the president breaking a two-vote tie. The presentation develops the truth table, canonical SOP and Boolean reduction, then distinguishes conceptual circuits from supplied Multisim, TinkerCAD and physical-build evidence.'
decks:
  - pdf: '/decks/de/unit-2/216-2-1-6-majority-vote.pdf'
    title: '2.1.6 AOI Logic Design: Majority Vote'
videos:
  - src: '/videos/school/de/unit-2/216-irl.mp4'
    poster: '/videos/school/de/unit-2/216-physical-build.jpg'
    title: 'Physical majority vote switch demonstration'
    description: 'Manual switch operation on the built circuit. No P/V/S/T switch mapping is given, so this recording does not establish a complete sixteen-row truth-table match. Playback time is not measured circuit timing.'
---

The final two-input design needs more than one AND package because a three-input product must be built as two cascaded gates. Unused gates remain available in the second package. Shared input labels in the conceptual diagrams represent common electrical nets, not separate votes. The supplied TinkerCAD circuit uses HC-family devices, so its component evidence should remain distinct from the LS-family parts named in the activity. The recording files are retained separately because a PDF cannot preserve switch operation or LED changes.

### Motion evidence

#### Multisim switch recording

![Animated Multisim recording of two majority vote circuits during switch operation.](/images/school/de/unit-2/216-multisim.gif)

[Open the Multisim recording](/images/school/de/unit-2/216-multisim.gif), or the [original Multisim snapshot](/images/school/de/unit-2/216-multisim.png). Both models implement the simplified function: the top uses three-input AND gates and a four-input OR, the bottom expands it to two-input gates.

#### TinkerCAD switch recording

![Animated TinkerCAD recording of the majority vote circuit with its LED changing during switching.](/images/school/de/unit-2/216-tinkercad.gif)

[Open the TinkerCAD recording](/images/school/de/unit-2/216-tinkercad.gif). LED changes during switching; the P/V/S/T switch mapping is not labeled.

#### Physical switch demonstration
