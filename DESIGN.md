---
name: Conner Glover Portfolio
description: A dark workshop bench where the cursor is the lamp, and the work is what it lights.
colors:
  signal-emerald: "#10b981"
  signal-emerald-bright: "#34d399"
  signal-emerald-dim: "#0d8f65"
  signal-emerald-wash: "rgb(16 185 129 / 0.12)"
  signal-emerald-contrast: "#04140e"
  amber-in-flight: "#d9a441"
  night-moss: "#0b0e0d"
  night-moss-subtle: "#121614"
  night-moss-raised: "#171d1a"
  hairline: "#232b28"
  hairline-strong: "#33403b"
  chalk: "#e6ece9"
  chalk-muted: "#8b9a94"
  chalk-faint: "#7a8a83"
  glass-tint: "rgb(214 255 240 / 0.018)"
  glass-tint-lit: "rgb(214 255 240 / 0.065)"
  glass-rim: "rgb(214 255 240 / 0.09)"
typography:
  display:
    fontFamily: "Space Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  display-sm:
    fontFamily: "Space Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.4rem + 2vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-xl:
    fontFamily: "Space Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-lg:
    fontFamily: "Space Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Space Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  secondary:
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "JetBrains Mono Variable, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.05em"
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.1em"
  chip:
    fontFamily: "JetBrains Mono Variable, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.66rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  sheet: "2px"
  code: "4px"
  sm: "6px"
  pane: "10px"
  pill: "999px"
spacing:
  base: "1rem"
  gutter: "1.5rem"
  row-gap: "0.5rem"
  row: "1.15rem 1.25rem"
  row-large: "1.6rem 1.75rem"
  page-top: "3rem"
  page-bottom: "5rem"
  section: "4.5rem"
components:
  link:
    textColor: "{colors.signal-emerald}"
  link-hover:
    textColor: "{colors.signal-emerald-bright}"
  glass-row:
    backgroundColor: "{colors.glass-tint}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pane}"
    padding: "{spacing.row}"
  glass-row-hover:
    backgroundColor: "{colors.glass-tint-lit}"
    textColor: "{colors.signal-emerald-bright}"
    rounded: "{rounded.pane}"
    padding: "{spacing.row}"
  feature-row:
    backgroundColor: "{colors.glass-tint}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pane}"
    padding: "{spacing.row-large}"
  feature-row-hover:
    backgroundColor: "{colors.glass-tint-lit}"
    textColor: "{colors.signal-emerald-bright}"
    rounded: "{rounded.pane}"
    padding: "2.4rem 1.75rem"
  glass-pane:
    backgroundColor: "{colors.glass-tint-lit}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pane}"
    padding: "1rem 1.2rem"
  tag:
    backgroundColor: "{colors.glass-tint-lit}"
    textColor: "{colors.chalk-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.12rem 0.6rem"
  chip-status:
    textColor: "{colors.chalk-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.5rem"
  chip-status-in-progress:
    textColor: "{colors.amber-in-flight}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.5rem"
  pill-link:
    textColor: "{colors.chalk-muted}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.75rem"
  pill-link-hover:
    textColor: "{colors.signal-emerald-bright}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.75rem"
  nav-link:
    textColor: "{colors.chalk-faint}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.signal-emerald-bright}"
    typography: "{typography.label}"
  eyebrow:
    textColor: "{colors.chalk-faint}"
    typography: "{typography.label}"
  assignment-row:
    textColor: "{colors.chalk}"
    padding: "0.95rem 0.5rem"
  assignment-row-hover:
    backgroundColor: "{colors.night-moss-subtle}"
    textColor: "{colors.chalk}"
    padding: "0.95rem 0.5rem"
  assignment-row-open:
    textColor: "{colors.signal-emerald-bright}"
    padding: "0.95rem 0.5rem"
  icon-button:
    textColor: "{colors.chalk-muted}"
    rounded: "{rounded.code}"
    size: "2rem"
  icon-button-hover:
    backgroundColor: "{colors.night-moss-subtle}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.code}"
    size: "2rem"
  deck-viewer:
    backgroundColor: "{colors.night-moss-subtle}"
    rounded: "{rounded.pane}"
  code-inline:
    backgroundColor: "{colors.night-moss-raised}"
    textColor: "{colors.signal-emerald-bright}"
    rounded: "{rounded.code}"
    padding: "0.1em 0.38em"
  code-block:
    backgroundColor: "{colors.night-moss-subtle}"
    rounded: "{rounded.pane}"
    padding: "1rem 1.15rem"
  table-scroll:
    backgroundColor: "{colors.night-moss-subtle}"
    rounded: "{rounded.pane}"
  skip-link:
    backgroundColor: "{colors.night-moss-raised}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.9rem"
---

# Design System: Conner Glover Portfolio

## Overview

**Creative North Star: "The Lamp on the Bench"**

The site is a dark workshop bench, and the cursor is the only lamp. At rest
the page is near-black with a faint drifting dot field and plain text on it:
no boxes, no cards, no chrome. Glass panes exist, but they are bare until light
reaches them, and when it does, the light catches their edge before their face.
A row you hover frosts over, its rim brightens nearest the pointer, it tilts a
few degrees toward you and comes forward while its siblings recede. The
material is a response, not a decoration. The lamp is emerald, and emerald
appears only where the light lands: the lit rim, the active nav item, the open
assignment's title, the one number on the page that matters.

Everything else is a readout. Metadata is set in mono with tracked uppercase
labels and tabular figures, so course numbers, dates, grades and counts read as
instrument markings rather than prose. Headings are a squared grotesk, tight
and unfussy. Body is a neutral sans at a generous measure. Density is
editorial: one column, long measure, wide gaps between sections, and lists
that stay quiet until touched. The work itself, decks and photos and reports,
gets the full width and a plain frame, because it is the reason the page
exists.

Confirmed rejections: neon or cyberpunk glow, browser-chrome embeds, and a
light theme.

**Key Characteristics:**
- Near-black ground with a hint of green, dark only, no light variant
- Emerald used as a light source, never as a fill or a costume
- Glass that is bare at rest and frosts, lights, tilts and lifts on hover
- Three typefaces with strict jobs: grotesk for headings, sans for body, mono for data
- Group-level hover: the hovered row comes forward, the rest recede to 50%
- Motion is short, eased and interruptible, and every effect degrades to nothing under reduced motion or coarse pointers

## Colors

A single emerald signal over a near-black ground tinted toward green, with
chalk-white text stepped through three strengths.

### Primary
- **Signal Emerald** (`signal-emerald`): the lamp. Default link colour, the
  underline that slides in under a nav item, the section number in a heading,
  the filled marker of an open assignment, the focus ring. It is the colour of
  something being pointed at.
- **Signal Emerald Bright** (`signal-emerald-bright`): the colour light takes
  when it lands. Hover state of every link and title, the active nav item, the
  open assignment title, the big GPA figure, the AP score, inline code, and the
  lit dots in the backdrop trail. The brightest point of the cursor rim.
- **Signal Emerald Dim** (`signal-emerald-dim`): the blockquote's left rule.
  Emerald at rest in the shade; nothing else uses it.
- **Signal Emerald Wash** (`signal-emerald-wash`): a 12% wash, defined for
  large soft areas. The backdrop's pointer wash uses a 7% version of the same
  hue.
- **Signal Emerald Contrast** (`signal-emerald-contrast`): the text colour for
  anything set on a solid emerald fill. Defined, currently unused; no solid
  emerald fills exist on the site.

### Secondary
- **Amber In Flight** (`amber-in-flight`): the only other hue. It marks
  `In progress` on an assignment chip and nothing else. Amber reads as "in
  flight", so upcoming and unfinished work stays visually quiet instead of
  alarming.

### Neutral
- **Night Moss** (`night-moss`): the ground. Not pure black; a hint of
  blue-green keeps it from reading as a hole and gives the film grain
  something to sit on. Also the `theme-color`, the deck control bar, and the
  table header.
- **Night Moss Subtle** (`night-moss-subtle`): one step up. Code blocks, the
  deck viewer frame, the table box, Drive-file links, and the hover fill of an
  assignment summary row.
- **Night Moss Raised** (`night-moss-raised`): two steps up. Inline code, the
  skip link, table row hover, and the hovered state of the legacy `.card`.
- **Hairline** (`hairline`): every structural 1px rule. Assignment row
  dividers, section-head underlines, table cell borders, image frames, the
  footer's top rule.
- **Hairline Strong** (`hairline-strong`): the unfilled assignment marker's
  ring and a hovered `.card` border.
- **Chalk** (`chalk`): primary text, headings, row titles.
- **Chalk Muted** (`chalk-muted`): summaries, blurbs, tags, captions, the
  deck bar's controls.
- **Chalk Faint** (`chalk-faint`): labels, eyebrows, nav links at rest, meta
  lines, stats, list markers. The quietest text that is still meant to be read,
  set to clear 4.5:1 on the ground, both raised steps and a lit glass pane.

### Glass
- **Glass Tint** (`glass-tint`): the resting fill of an index row. A light
  film at 1.8% alpha over the ground, barely enough to tell a pane from the
  page. Opted into per list; the home rows carry none.
- **Glass Tint Lit** (`glass-tint-lit`): the fill of a lit pane, a tag, a menu
  item hover. At 6.5% it composites over the ground to within a channel of
  Night Moss Raised, reached by catching light rather than painting a lighter
  box.
- **Glass Rim** (`glass-rim`): the flat 1px rim of a lit pane, a tag, the
  header's bottom edge, and the arrow on a feature row. Composites to within a
  channel of Hairline.

### Named Rules
**The Light Source Rule.** Emerald is what the lamp does to a surface, never
what a surface is made of. It appears on text, rules, rings, markers and dots.
There are no solid emerald fills, buttons or backgrounds anywhere on the site.

**The One Lamp Rule.** Bright emerald marks at most one thing per region: the
active nav item, the open row's title, the hovered row's heading, the one
figure that matters. If two things in the same region are bright emerald, one
of them is wrong.

**The Green Film Rule.** Glass is a tinted light film, not a dark one. A white
film reads grey against a green-tinted ground, so the film is `214 255 240`
and its alphas are set so the lit pane lands on Night Moss Raised and its rim
on Hairline.

## Typography

**Display Font:** Space Grotesk Variable (with system-ui, sans-serif)
**Body Font:** Inter Variable (with system-ui, -apple-system, Segoe UI, sans-serif)
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace, Menlo, Consolas, monospace)

All three are self-hosted through Fontsource. `font-synthesis-weight` is off
and text is antialiased.

**Character:** Technical without costume. A squared grotesk for headings that
is tight and slightly negative-tracked, a neutral sans for reading at a long
measure, and a mono reserved for anything that is a number, a code, or a label.
The mono carries most of the site's personality: tracked uppercase eyebrows,
section numbers, course codes and tabular grades make the page read as an
instrument rather than a brochure.

### Hierarchy

Every size on the site is one of thirteen role tokens in `global.css`
(`--fs-*`); components pick a role, never a number.

- **Display** (600, `clamp(2rem, 1.3rem + 2.6vw, 3rem)`, 1.15, -0.02em):
  page `h1`.
- **Display-sm** (600, `clamp(2.1rem, 1.4rem + 2vw, 2.9rem)`, -0.035em): the
  name on the home page and the GPA figure.
- **Headline** (600, `clamp(1.4rem, 1.2rem + 0.8vw, 1.75rem)`, 1.15,
  -0.02em): `h2`, unit headings, About sections. Unit headings carry a mono
  count at the far right on the same baseline.
- **Title-xl** (600, 1.75rem): a feature-row title while hovered.
- **Title-lg** (600, 1.4rem): feature-row titles at rest, the AP score.
- **Title** (600, 1.2rem): `h3`, feature-row titles on narrow screens.
- **Lede** (600 for headings, 400 for copy, 1.08rem): spotlight row titles,
  ledes, the role line on the home page, term headings on About. Assignment
  titles are body size at 500 weight.
- **Body** (400, 1rem, 1.65): Inter. Prose measure is 68ch.
- **Secondary** (400, 0.94rem): summaries, blurbs, table body, quiet links,
  in Chalk Muted.
- **Caption** (400, 0.86rem): figure captions, dropdown labels, notes under a
  figure or table.
- **Small** (500, 0.78rem, 0.05–0.16em): mono. Section heads, the number
  rail, footer, deck counters, the 404 code.
- **Label** (500, 0.72rem, 0.06–0.12em, uppercase where it is a heading):
  mono. Eyebrows, nav links, row meta, tags, stats, bylines, unit-jump pills,
  table levels.
- **Chip** (500, 0.66rem, 0.08–0.12em, uppercase): mono. Status chips, table
  headers, dropdown hints, the "summer term" tag.

### Named Rules
**The Mono Means Data Rule.** Anything that is a number, a code, a date or a
label is set in JetBrains Mono. Anything that is a sentence is set in Inter.
Anything that names a thing is set in Space Grotesk. There are no exceptions
and no fourth face.

**The Tracked Caps Rule.** Uppercase only ever appears in mono at 0.63–0.78rem
with 0.08–0.16em tracking. Never uppercase the grotesk or the sans.

**The Balanced Heading Rule.** Headings use `text-wrap: balance` and negative
tracking; they never wrap into a widow.

## Layout

One column, editorial density, generous vertical rhythm. The page wrapper is
`72rem` wide with `1.5rem` side gutters; index pages that lead with
hover-to-grow rows use the `82rem` wide wrapper so the rows have somewhere to
grow into. Prose is capped at a `68ch` measure. Main content sits between
`3rem` above and `5rem` below; home-page sections are `4.5rem` apart.

The home page is the only split layout: below `62rem` it stacks, above it a
`minmax(0, 21rem)` identity column pins to the viewport (sticky, full height,
`6rem` top padding) beside a `minmax(0, 1fr)` content column, with a `4rem`
gap and `6rem` of vertical padding. The aside's section links track scroll
position and double as a progress indicator. Every other page uses the sticky
top bar, because their own structure (unit lists, tables, viewers) cannot
give up a third of the width.

Lists are vertical stacks with a `0.5–0.6rem` gap so rows read as separate
panes rather than one long panel. Home rows bleed `1.25rem` into the gutter
with negative margins so their text stays on the column's edge while the lit
pane extends past it. Feature rows are a three-part flex: a `2.25rem` number
rail, the text, and a `2.1rem` circular arrow.

Breakpoints, all `max-width` unless noted: `62rem` (min: home splits),
`52rem` (nav dropdowns drop; the flat link row appears), `40rem` (feature rows
lose the number rail and arrow and tighten padding), `34rem` (assignment chips
hide; the assignment body loses its indent). Tables scroll inside their own
bordered box rather than pushing the page wide.

Photo galleries are `auto-fill, minmax(13rem, 1fr)` at `0.75rem` gap with 4:3
cropped thumbnails; a single photo renders full width. The generic `.grid` is
`auto-fill, minmax(17rem, 1fr)` at `1rem` gap.

## Elevation & Depth

Surfaces are flat at rest and lift on interaction. At rest a row is text on the
ground with, at most, a 1.8% film; nothing casts a shadow and nothing wears a
visible border. On hover or focus the pane frosts (`12px` backdrop blur, 6.5%
film), its 1px rim appears, a soft shadow appears beneath it, and it turns
toward the cursor in perspective (`1200px`, up to 4–4.5° on X and 1.5–2.5° on
Y, with a `3px` nudge on the home rows) while the rest of the list drops to
50% opacity. Feature rows also grow: padding goes from `1.6rem` to `2.4rem`
vertical and the title from 1.4rem to 1.75rem, as real layout rather than a
transform so the text never rasterises soft.

Depth beyond that comes from three things. The cursor rim: a 1px ring of
emerald, brightest nearest the pointer, over a `300px` reach on a pane,
`200px` on a menu, `70px` on an arrow, `52px` on a tag. The tonal ground: three
steps of Night Moss for surfaces that are always present (code, viewers,
tables). And the backdrop: a fixed, drifting dot field with an eased emerald
trail behind the pointer, plus 2% film grain, so the ground has texture for
the glass to sit on.

Furniture that is always glass, like a project page's contents box, the sticky
header and the dropdown menus, holds the lit state permanently and still
catches the rim light from wherever the pointer is. The header and menus add a
70–74% Night Moss layer under the film because the page scrolls beneath them.

### Shadow Vocabulary
- **Glass shadow** (`box-shadow: 0 4px 30px rgb(0 0 0 / 0.35)`): under a lit
  pane. Higher alpha than usual because a black shadow on a near-black page has
  almost nothing to darken; it picks up only against the dot field.
- **Menu shadow** (`box-shadow: 0 12px 32px rgb(0 0 0 / 0.45)`): under an open
  dropdown, heavier because the menu is genuinely off the page rather than set
  into it.
- **Sheet shadow** (`box-shadow: 0 1px 4px rgb(0 0 0 / 0.28)`): under each
  white page of a document-style deck, so the sheets read as paper on a
  darker ground.

### Named Rules
**The Lift On Touch Rule.** No surface is lifted at rest. Frost, rim, shadow,
tilt and growth arrive together on hover or focus and leave together on exit.
A pane that is always lifted is furniture, and it is the exception, not the
pattern.

**The Edge Before Face Rule.** A pane is separated from the page by its lit
edge, not by its fill. If a surface needs a solid box to be legible, it is not
glass and should use a Night Moss step instead.

**The Nothing Moves Without A Pointer Rule.** Tilt, rim light, the backdrop
trail and the sibling dim all require a fine pointer with hover. On touch every
row stays at full strength, and under reduced motion the rim ring, the wash
and the flow field are removed outright rather than slowed.

## Shapes

Softly rounded panes on a hard grid. Every pane, viewer, code block, image and
table box uses a `10px` radius; menu items and the skip link use `6px`; inline
code and the deck bar's icon buttons use `4px`; a rendered document page uses
`2px` so it reads as a sheet. Tags, status chips and unit-jump links are full
pills (`999px`). The feature row's arrow and the assignment marker are circles.

Borders are 1px hairlines, and most of them are transparent at rest so nothing
shifts by a pixel when a pane lights. The cursor rim is drawn as a
`-1px`-inset ring with a radius grown by 1px to match the border box, masked
to a 1px stroke. Rules are horizontal hairlines: under section heads, between
assignment rows, above the footer, under the unit-jump nav. The section head
and the home aside use short horizontal rules as pointers, and the aside's
rule stretches from `1.75rem` to `3.5rem` on the active section.

Icons are stroked SVG paths at 2–2.5px with round caps and joins, sized 0.85rem
(nav caret), 1rem (row arrow), or 1.05rem (deck controls). There are no filled
icons and no icon font.

## Components

Tactile and confident: a surface does nothing until you reach it, then it
does several things at once, in `220ms` on `cubic-bezier(0.22, 1, 0.36, 1)`.
The only exception is the tilt, which tracks the pointer at `130ms ease-out` so
the pane does not lag the cursor.

### Links
- **Default:** Signal Emerald text, no underline, a transparent 1px bottom
  border reserved so nothing shifts.
- **Hover:** Signal Emerald Bright, bottom border becomes `currentColor`.
  Links inside prose carry a 35% emerald bottom border at rest.
- **Focus:** 2px Signal Emerald outline, `3px` offset, `2px` radius. Global.
- **Quiet links** (nav, aside, footer, table): inherit a neutral colour, no
  border, and go to Signal Emerald Bright or Chalk on hover.

### Buttons
There are no buttons on the site apart from the deck viewer's controls, and
no form inputs at all. If one is ever needed it should follow the deck bar's
icon buttons and the Light Source Rule: no solid emerald fill.
- **Icon button:** `2rem` square, `4px` radius, no border, transparent,
  Chalk Muted stroke icon. Hover: Night Moss Subtle fill, Chalk icon.
  Disabled: 35% opacity. The `PDF` text link in the same bar behaves
  identically at 0.78rem with `0.25rem 0.5rem` padding.

### Tags
- **Style:** mono 0.72rem, Chalk Muted, Glass Tint Lit fill, 1px Glass Rim,
  full pill, `0.12rem 0.6rem` padding. Glass like the pane it sits on, so it
  reads as a chip resting on the panel rather than a hole punched through it.
- **State:** carries `rim-follow`, so its own rim lights as the cursor passes
  within `52px`. A row of tags lights one at a time by proximity. Tags in a
  project header sit in a `rim-host` so they catch light without a pane.

### Status Chips
- **Style:** mono 0.63rem uppercase, 0.08em, 1px Hairline border, pill,
  `0.1rem 0.5rem` padding, Chalk Muted.
- **In progress:** Amber In Flight text and a 40% amber border.
- **Not started:** default chip. Not-started rows also render compact and
  muted so a course in progress reads as a roadmap.

### Glass Rows (Spotlight and Feature lists)
The signature component. Both lists share one `.glass-row` material so the
home page and the index pages agree on what a row is.
- **Rest:** transparent 1px border, `10px` radius, `0px` blur (so it has a
  value to animate from), Glass Tint fill on index rows and none on home rows.
- **Hover / focus:** Glass Tint Lit fill, Glass Rim border, glass shadow,
  `12px` blur, cursor rim at `--rim-lit: 1`, title to Signal Emerald Bright,
  siblings to 50% opacity via `:has()` on the list. Spotlight rows nudge `3px`
  right and tilt 4.5° / 2.5°; feature rows tilt 4° / 1.5°, grow their padding
  to `2.4rem` vertical and their title to 1.75rem, turn the number rail
  emerald and slide the arrow `4px` right.
- **Anatomy:** title + right-aligned mono meta, summary in Chalk Muted, tag
  row. Feature rows add a `01`-style mono index and a circular stroked arrow
  wearing the same rim.

### Glass Pane (held)
The lit row state without a pointer, for furniture: a project's "On this
page" box. Same fill, rim, blur and shadow, permanently, with the cursor ring
fed from wherever the pointer is. `1rem 1.2rem` padding, capped at the prose
measure.

### Assignment Rows
- **Structure:** native `<details>` in a hairline-divided list; no JavaScript
  required. Rows open independently, never as an exclusive accordion.
- **Summary:** `0.95rem 0.5rem` padding, a 7px ring marker, grotesk title at
  1rem/500, and a right-aligned cluster of status chip and a mono file
  summary (`2 files · 3 photos`). Hover fills with Night Moss Subtle and fills
  the marker emerald. Open: marker filled emerald, title Signal Emerald Bright.
- **Body:** indented `1.9rem`, fades in over `240ms` from 4px above. Carries
  an optional mono byline (`With …`), the prose, a gallery, decks and Drive
  links.

### Navigation
- **Top bar:** sticky, glass with a 70% Night Moss layer under the film and a
  `12px` blur painted on a `::before` layer so the dropdowns can blur the page
  themselves. Its only lit edge is the bottom hairline, which tracks the
  cursor. Brand in grotesk 600 at 1.02rem; links in mono 0.75rem uppercase
  Chalk Faint with a 1px emerald underline that slides in from the left on
  hover and stays on the current page, whose text goes Signal Emerald Bright.
- **Dropdowns:** open on hover and `:focus-within`, right-anchored,
  `0.35rem` padding, glass with a 74% ground layer, menu shadow, 4px rise-in.
  Items are `hint` (mono 0.68rem, Signal Emerald, `2.6rem` column) plus label
  in sans 0.86rem, `6px` radius, Glass Tint Lit hover. Dropped below `52rem`
  in favour of a flat link row.
- **Home aside:** name, role in grotesk, a 26ch blurb, then section links
  with a stretching rule (`1.75rem` to `3.5rem`, emerald when active),
  page links in sans 0.9rem, and social links in mono 0.75rem.
- **Unit jump:** pill links in mono 0.74rem with a Hairline border and a
  faint count; hover turns border and text emerald.
- **Footer:** hairline top rule, mono 0.75rem Chalk Faint, `2rem` padding.

### Deck Viewer
A PDF rendered from pre-rasterised pages, never a browser PDF frame.
- **Frame:** Night Moss Subtle, 1px Hairline, `10px` radius, clipped.
  Landscape decks show one slide at a time (aspect from the PDF, capped at
  `min(78vh, 900px)`) with click, arrows, keyboard and swipe. Portrait
  documents stack white sheets (`2px` radius, sheet shadow, max `46rem`) in a
  scrolling frame on a slightly darker ground, with the counter following the
  scroll.
- **Bar:** Night Moss, hairline top, icon buttons, tabular counter in Chalk
  Muted, full-screen button, and a `PDF` link to the original.
- **Fullscreen:** the same tokens as the page; the viewer sheds its frame and
  the stage takes the height.
- **No script:** pages stack down the page on white; controls hide.
- **Caption:** 0.85rem Chalk Muted below the frame.

### Tables
Wrapped in a scrolling Night Moss Subtle box with a hairline border and `10px`
radius. Headers in mono 0.66rem uppercase Chalk Faint on Night Moss; row
headers at 450 weight; grade cells `4.5rem` wide, centred, mono 600 tabular.
Rows hover to Night Moss Raised.

### Code and Prose Furniture
Inline code: mono at 0.88em, Night Moss Raised, hairline, `4px`, Signal
Emerald Bright. Blocks: Night Moss Subtle, hairline, `10px`, `1rem 1.15rem`,
Shiki `github-dark`, wrapped. Blockquotes: 2px Signal Emerald Dim left rule,
Chalk Muted. Images in prose and galleries: hairline border, `10px` radius;
gallery thumbnails turn their border emerald on hover. Drive-file links: a
Night Moss Subtle bar with a hairline that goes emerald on hover.

### Backdrop
A fixed 2D canvas of 1.6px dots on an 18px grid, each pushed off its home by a
3D simplex noise flow field (feature size 200px, up to 5px drift) so the field
drifts like a current. Grey dots at up to 14% of the glass film tint; dots
within 200px of the eased pointer position paint Signal Emerald Bright at up
to 95%, with a matching 7% emerald CSS wash behind. Colours are read from the
theme tokens when the canvas binds. Runs while the pointer moves and for eight
seconds after, then rests until the next move; fine pointers only, and one
static frame under reduced motion. A 2% fixed film grain sits over it.

### Page Transitions
Astro view transitions: the old page fades out in `90ms`, the new one fades in
over `180ms` from 6px below. Everything that tracks the pointer re-binds on
`astro:page-load`.

## Do's and Don'ts

### Do:
- **Do** keep every surface bare at rest and let frost, rim, shadow, tilt and
  growth arrive together on hover or focus (The Lift On Touch Rule).
- **Do** use emerald only as light: text, rules, rings, markers, dots. Bright
  emerald marks one thing per region (The One Lamp Rule).
- **Do** set every number, code, date and label in JetBrains Mono, tracked
  uppercase for labels and tabular figures for data (The Mono Means Data
  Rule).
- **Do** share `.glass-row`, `.glass-pane`, `.glass-edge`, `.rim-follow` and
  `.tilt` from `global.css` rather than reimplementing the material; two
  lookalike copies have drifted apart before.
- **Do** qualify a class that must beat a scoped element selector (`nav
  ul.menu`), because Astro's scoping attribute lifts `nav ul` above `.menu`.
- **Do** set `--glass-rest`, `--nudge`, `--tilt-x` and `--tilt-y` as
  variables rather than declaring `background` or `transform` on a pane;
  a second declaration replaces the shared one and silently kills the effect.
- **Do** keep hover-only effects behind `(hover: hover)` and `(pointer: fine)`,
  and remove rim, wash and field outright under `prefers-reduced-motion`.
- **Do** grow a row with padding and font-size, not `scale()`, so text never
  rasterises soft mid-animation.
- **Do** render attachments as pre-rasterised pages inside the site's own
  frame and keep the original PDF one click away.
- **Do** re-resolve DOM references on `astro:page-load`; view transitions
  replace every element on navigation.

### Don't:
- **Don't** add a light theme, a theme toggle, or any colour that must work
  on white. The site is dark only.
- **Don't** use neon glow, gradient text, scanlines, or emerald as a solid
  fill, button, or background.
- **Don't** embed a PDF, Google Slides or Drive preview in a browser frame
  with its own toolbar; nothing should look bolted on.
- **Don't** give a row a visible border, card fill, or shadow at rest, and
  don't use a dark film for glass; it reads as a darker box, not a pane.
- **Don't** put `backdrop-filter` on the sticky header itself; it becomes a
  backdrop root and the dropdowns can no longer blur the page.
- **Don't** open assignment rows by default or make them an exclusive
  accordion; a course can carry thirty decks and closing what a reader did not
  ask to close is worse than a long page.
- **Don't** uppercase Space Grotesk or Inter, or introduce a fourth typeface.
- **Don't** publish transcript percentages, teacher names, or an address in any
  surface; the visual system has no place for that data.
