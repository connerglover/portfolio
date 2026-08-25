/**
 * Feeds the pointer's position to the glass panes on the page, so a pane's rim
 * can light up where the cursor is. The ring itself is CSS — the
 * `.glass-row::after` block in global.css. This only supplies coordinates.
 *
 * Three custom properties per pane:
 *
 *   --mx / --my   the pointer, in the pane's own coordinates
 *   --tx / --ty   the pointer from the pane's centre, -1 to 1
 *   --rim-lit     0 or 1, which the ring uses as its opacity so it fades
 *
 * --tx/--ty are plain numbers, not angles: a list that wants to tilt multiplies
 * them by an angle of its own choosing, and a list that does not simply never
 * reads them. Nothing here knows which is which.
 *
 * Anything inside a pane marked `.rim-follow` — the arrow and the tags on a
 * project row — gets its own local coordinates too, since each needs the light
 * placed against its own box rather than the pane's. That is what makes a row
 * of tags light by proximity: a tag away from the cursor is handed a gradient
 * centred outside itself, and stays dark.
 *
 * --rim-lit is set on the pane and inherits, so descendants share its fade
 * without being written to individually.
 *
 * ---------------------------------------------------------------------------
 *
 * There are two kinds of pane here, and what separates them is when the glass
 * is there at all.
 *
 * A `.glass-row` is bare until the cursor reaches it. Its rim is fed only
 * while the cursor is inside it, so only one row is written to however long
 * the list is, and the cost stays flat.
 *
 * A `.glass-pane` or a `.rim-host` is frosted the whole time — a project's
 * contents list, the tag row in its header. These are fed the whole time too,
 * cursor inside them or not, because a pane that is visibly glass but only
 * answers the cursor once it is on top of it reads as broken: the material is
 * there, and then the light in it is not. Nothing special happens at the
 * boundary to arrange this. The ring is a gradient centred on the cursor, so a
 * held pane the cursor is nowhere near is handed a centre outside itself and
 * goes dark on its own, then brightens along whichever edge the cursor
 * approaches. They are counted once per page rather than once per frame, and a
 * page carries a handful.
 */

/** Bare until reached: lit only while the cursor is inside. */
const ROWS = '.glass-row';

/**
 * Glass at all times, so lit at all times. `.glass-pane` is painted material;
 * `.rim-host` is painted by nothing and exists only to give a group of
 * `.rim-follow` children something to be lit from — the tag row in a project's
 * header, which sits in prose rather than inside a row.
 */
const HELD = '.glass-pane, .rim-host';

const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Module scope: this outlives client-side navigation, the elements do not.
let pane: HTMLElement | null = null;
// Collected when the pane changes, not per frame: a row carries an arrow and
// half a dozen tags, and re-running the query every frame to find the same
// elements would be the most expensive thing here by a distance.
let followers: HTMLElement[] = [];
// The held panes, with their followers alongside, collected once per page for
// the same reason.
let held: { el: HTMLElement; followers: HTMLElement[] }[] = [];
let heldLit = false;
// Off the page until the pointer is heard from, so a held pane placed before
// the first move is placed somewhere its ring cannot show. Without this the
// gradient would fall back to the CSS default of 50% 50% and light every held
// rim from its own centre on arrival.
let px = -99999;
let py = -99999;
let queued = 0;

const place = (el: HTMLElement) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${(px - r.left).toFixed(1)}px`);
  el.style.setProperty('--my', `${(py - r.top).toFixed(1)}px`);
  return r;
};

const clamp = (n: number) => (n < -1 ? -1 : n > 1 ? 1 : n);

const paint = () => {
  queued = 0;

  for (const h of held) {
    place(h.el);
    for (const child of h.followers) place(child);
  }
  // Lit from inside the frame that places them, never before it: the two
  // writes land in the same render, so the ring never appears at coordinates
  // it has since moved on from.
  if (!heldLit && held.length) {
    heldLit = true;
    for (const h of held) h.el.style.setProperty('--rim-lit', '1');
  }

  if (!pane) return;

  const r = place(pane);

  // Where the pointer sits in the pane, -1 to 1 from its centre. Written as
  // plain numbers rather than angles so the size of the tilt stays in CSS,
  // where it can differ per list — the project rows use it, the home rows
  // simply never read it.
  pane.style.setProperty('--tx', clamp((px - (r.left + r.width / 2)) / (r.width / 2)).toFixed(3));
  pane.style.setProperty('--ty', clamp((py - (r.top + r.height / 2)) / (r.height / 2)).toFixed(3));

  for (const child of followers) place(child);
};

const queue = () => {
  if (!queued && (pane || held.length)) queued = requestAnimationFrame(paint);
};

const collect = () => {
  held = Array.from(document.querySelectorAll<HTMLElement>(HELD)).map((el) => ({
    el,
    followers: Array.from(el.querySelectorAll<HTMLElement>('.rim-follow')),
  }));
  // These are fresh elements carrying no inline properties, whatever the last
  // page left behind.
  heldLit = false;
  queue();
};

const release = () => {
  if (!pane) return;
  followers = [];
  pane.style.removeProperty('--rim-lit');
  // Back to flat. --mx/--my are left where they were so the rim fades out from
  // where it was lit rather than jumping to the centre on its way down.
  pane.style.setProperty('--tx', '0');
  pane.style.setProperty('--ty', '0');
  pane = null;
};

/**
 * The pointer has left the window. The held panes keep their glass — that was
 * never conditional — but the ring comes down rather than sitting frozen at
 * the last place the cursor was. Through --rim-lit, so it fades: parking the
 * coordinates off-screen instead would cut it off mid-brightness, since a
 * gradient's centre is not something that can be transitioned.
 */
const dim = () => {
  if (!heldLit) return;
  heldLit = false;
  // Nothing left to place, and a frame queued from the last move would only
  // light them straight back up.
  if (queued) cancelAnimationFrame(queued);
  queued = 0;
  for (const h of held) h.el.style.setProperty('--rim-lit', '0');
};

const onMove = (e: PointerEvent) => {
  px = e.clientX;
  py = e.clientY;

  const target = e.target as Element | null;
  const found = target?.closest?.(ROWS) as HTMLElement | null;
  if (found !== pane) {
    release();
    pane = found;
    if (pane) {
      followers = Array.from(pane.querySelectorAll<HTMLElement>('.rim-follow'));
      pane.style.setProperty('--rim-lit', '1');
    }
  }

  queue();
};

/**
 * A pane can move under a still cursor. The row the cursor was over may not be
 * under it any more, so that one is dropped; the held panes have not gone
 * anywhere and are simply re-placed, or their light would ride along with the
 * page instead of staying with the cursor.
 */
const resync = () => {
  release();
  queue();
};

if (fine && !still) {
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('scroll', resync, { passive: true });
  window.addEventListener('resize', resync, { passive: true });
  document.addEventListener('pointerleave', () => {
    release();
    dim();
  });

  collect();
  // Astro swaps the DOM on navigation, so everything held is a detached node
  // by the time the next page renders. Drop it, and any frame queued against
  // it, then take the new page's panes.
  document.addEventListener('astro:before-swap', () => {
    if (queued) cancelAnimationFrame(queued);
    queued = 0;
    pane = null;
    followers = [];
    held = [];
    heldLit = false;
  });
  document.addEventListener('astro:page-load', collect);
}
