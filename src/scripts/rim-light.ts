/**
 * Feeds the pointer's position to whichever glass pane it is over, so the
 * pane's rim can light up where the cursor is. The ring itself is CSS — the
 * `.glass-row::after` block in global.css. This only supplies coordinates.
 *
 * Two custom properties per pane:
 *
 *   --mx / --my   the pointer, in the pane's own coordinates
 *   --tx / --ty   the pointer from the pane's centre, -1 to 1
 *   --rim-lit     0 or 1, which the ring uses as its opacity so it fades
 *
 * --tx/--ty are plain numbers, not angles: a list that wants to tilt multiplies
 * them by an angle of its own choosing, and a list that does not simply never
 * reads them. Nothing here knows which is which.
 *
 * Only the pane under the cursor is written to, so the cost stays flat however
 * long the list is. Anything inside it marked `.rim-follow` — the arrow and
 * the tags on a project row — gets its own local coordinates too, since each
 * needs the light placed against its own box rather than the row's. That is
 * what makes a row of tags light by proximity: a tag away from the cursor is
 * handed a gradient centred outside itself, and stays dark.
 *
 * --rim-lit is set on the pane and inherits, so descendants share its fade
 * without being written to individually.
 */

/**
 * What counts as a pane. `.glass-row` and `.glass-pane` are the two painted
 * materials; `.rim-host` is painted by nothing and exists only to give a group
 * of `.rim-follow` children something to be lit from — the tag row in a
 * project's header, which sits in prose rather than inside a row.
 *
 * Order does not matter: closest() returns the nearest ancestor matching any
 * of them, so a tag inside a glass row still resolves to the row.
 */
const TRACKED = '.glass-row, .glass-pane, .glass-edge, .rim-host';

/** Surfaces lit whether or not the pointer is on them. */
const HELD = '.glass-pane, .glass-edge';

const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Module scope: this outlives client-side navigation, the elements do not.
let pane: HTMLElement | null = null;
// Collected when the pane changes, not per frame: a row carries an arrow and
// half a dozen tags, and re-running the query every frame to find the same
// elements would be the most expensive thing here by a distance.
let followers: HTMLElement[] = [];
// Panes that are glass whether or not the pointer is on them. They are fed
// coordinates on every move, so their rim catches the light from across the
// page instead of switching on at the boundary.
let held: HTMLElement[] = [];
let px = 0;
let py = 0;
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

  if (pane) {
    const r = place(pane);

    // Where the pointer sits in the pane, -1 to 1 from its centre. Written as
    // plain numbers rather than angles so the size of the tilt stays in CSS,
    // where it can differ per list — the project rows use it, the home rows
    // simply never read it.
    pane.style.setProperty('--tx', clamp((px - (r.left + r.width / 2)) / (r.width / 2)).toFixed(3));
    pane.style.setProperty('--ty', clamp((py - (r.top + r.height / 2)) / (r.height / 2)).toFixed(3));

    for (const child of followers) place(child);
  }

  for (const el of held) if (el !== pane) place(el);
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

const onMove = (e: PointerEvent) => {
  px = e.clientX;
  py = e.clientY;

  const target = e.target as Element | null;
  const found = target?.closest?.(TRACKED) as HTMLElement | null;
  if (found !== pane) {
    release();
    pane = found;
    if (pane) {
      followers = Array.from(pane.querySelectorAll<HTMLElement>('.rim-follow'));
      pane.style.setProperty('--rim-lit', '1');
    }
  }

  if (!queued && (pane || held.length)) queued = requestAnimationFrame(paint);
};

const collect = () => {
  held = Array.from(document.querySelectorAll<HTMLElement>(HELD));
};

if (fine && !still) {
  window.addEventListener('pointermove', onMove, { passive: true });
  // A pane can leave under a still cursor — a scroll, or the pointer leaving
  // the window entirely — and would otherwise stay lit with stale coordinates.
  // Held panes are the opposite case: they do not leave, but they move under a
  // cursor that has not, so their coordinates need recomputing even though no
  // pointer event fired.
  window.addEventListener(
    'scroll',
    () => {
      release();
      if (!queued && held.length) queued = requestAnimationFrame(paint);
    },
    { passive: true },
  );
  document.addEventListener('pointerleave', release);

  // Astro swaps the DOM on navigation, so the held pane is a detached node by
  // the time the next page renders. Drop it, and any frame queued against it.
  document.addEventListener('astro:before-swap', () => {
    if (queued) cancelAnimationFrame(queued);
    queued = 0;
    pane = null;
    followers = [];
    held = [];
  });
  document.addEventListener('astro:page-load', collect);
  collect();
}
