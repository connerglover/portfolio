---
title: '2.1.3 AOI Logic Implementation'
courseSlug: de
unit: unit-2
order: 213
status: in-progress
presentationFirst: true
summary: 'F1 AOI implementation documented in Multisim, TinkerCAD and a physical protoboard. All eight stable Multisim indicator states match the target; complete TinkerCAD and physical truth-table comparisons remain unverified.'
decks:
  - pdf: '/decks/de/unit-2/213-2-1-3-aoi-logic-implementation.pdf'
    title: '2.1.3 AOI Logic Implementation'
videos:
  - src: '/videos/school/de/unit-2/213-irl.mp4'
    poster: '/videos/school/de/unit-2/213-physical-video-7.25s.jpg'
    title: 'Physical AOI switch demonstration'
    description: 'Manual switch operation on the built circuit. Hand occlusion limits input-state reconstruction; this recording does not establish a complete eight-row truth-table match. Playback time is not measured circuit timing.'
---

The supplied evidence follows the same logic function through a gate-level simulation, a TinkerCAD assembly and a physical breadboard. The Multisim design uses an equivalent two-branch form rather than the worksheet’s direct three-term layout. This matters when comparing the drawings: a different gate arrangement is not by itself a logic error. The observed stable indicator states agree with the calculated target.

The component labels also need to stay distinct. The worksheet names 74LS devices, while the TinkerCAD screenshot visibly uses 74HC parts. The physical package markings cannot be read reliably. The portfolio therefore records the visible implementation without claiming a particular physical IC family or a pin-by-pin match. Dense clips and jumpers make a labeled switch map useful for finishing the comparison. A short record of each input combination and its output would establish the missing TinkerCAD and breadboard checks without treating a photograph as a truth table.

### Motion evidence

The original recordings retain changes that the presentation PDF cannot show. Playback times identify frames only; they are not measured circuit timing.

#### Multisim switch recording

![Animated Multisim recording of the AOI circuit during switch operation.](/images/school/de/unit-2/213-multisim.gif)

[Open the Multisim recording](/images/school/de/unit-2/213-multisim.gif). Eight stable input/output states; brief transitions excluded from the logical comparison. The fixed 2.5 V probe annotation is not a measured output table.

#### TinkerCAD switch recording

![Animated TinkerCAD recording of supply and LED changes during switching.](/images/school/de/unit-2/213-tinkercad.gif)

[Open the TinkerCAD recording](/images/school/de/unit-2/213-tinkercad.gif). Supply and LED changes during switching; A/B/C mapping remains unverified.

#### Physical switch demonstration
