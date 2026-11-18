The supplied evidence follows the same logic function through a gate-level simulation, a TinkerCAD assembly and a physical breadboard. The Multisim design uses an equivalent two-branch form rather than the worksheet’s direct three-term layout. This matters when comparing the drawings: a different gate arrangement is not by itself a logic error. The observed stable indicator states agree with the calculated target.

The component labels also need to stay distinct. The worksheet names 74LS devices, while the TinkerCAD screenshot visibly uses 74HC parts. The physical package markings cannot be read reliably. The portfolio therefore records the visible implementation without claiming a particular physical IC family or a pin-by-pin match. Dense clips and jumpers make a labeled switch map useful for finishing the comparison. A short record of each input combination and its output would establish the missing TinkerCAD and breadboard checks without treating a photograph as a truth table.

## Motion evidence

The original recordings retain changes that the presentation PDF cannot show. Playback times identify frames only; they are not measured circuit timing.

- [Multisim switch recording](assets/multisim.gif): eight stable input/output states; brief transitions excluded from the logical comparison.
- [TinkerCAD switch recording](assets/tinkercad.gif): supply and LED changes during switching; A/B/C mapping remains unverified.
- [Physical switch demonstration](assets/irl.mp4): manual operation of the built circuit; hand occlusion limits input-state reconstruction.
