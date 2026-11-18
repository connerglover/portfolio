---
title: '2.2.4 Design Tool: Logic Converter'
courseSlug: de
unit: unit-2
order: 224
presentationFirst: true
summary: 'Using Multisim''s Logic Converter to obtain and simplify expressions, then comparing recorded AOI and NAND implementations of the Majority Vote function. The three-input example uses don''t-care rows; calculated checks are distinguished from recorded circuit observations.'
decks:
  - pdf: '/decks/de/unit-2/224-2-2-4-logic-converter.pdf'
    title: '2.2.4 Design Tool: Logic Converter'
---

The Logic Converter is a virtual Multisim instrument, not a physical component. It connects a truth-table specification to an expression and a circuit implementation. A conversion result is useful for circuit design, but it does not replace checking the connected circuit. The supplied recording shows both implementations in the same workspace, which allows their output probes to be compared as the inputs change. The PDF preserves selected stills; the original animation below retains the switching sequence. Its playback duration is not an electrical timing measurement. No native Multisim design file was supplied, so editable circuit connectivity cannot be inspected from this package alone.

### Motion evidence

#### Multisim switching recording

![Animated Multisim recording: the three-input example at left, the Majority Vote AOI circuit at upper right and the NAND-only version at lower right, with output probes changing as the inputs switch.](/images/school/de/unit-2/224-demo.gif)

[Open the switching recording](/images/school/de/unit-2/224-demo.gif). Both Majority Vote outputs are LOW at 0000 and HIGH at 1111; those two states are examples, not a complete sixteen-state test.
