/**
 * Feeds the pointer's position to whichever glass pane it is over, so the
 * pane's rim can light up where the cursor is. The ring itself is CSS — the
 * `.glass-row::after` block in global.css. This only supplies coordinates.
 *
 * Two custom properties per pane:
 *
 *   --mx / --my   the pointer, in the pane's own coordinates
 *   --rim-lit     0 or 1, which the ring uses as its opacity so it fades
 *
 * Only the pane under the cursor is written to, so the cost is one rect and
 * two property writes per frame regardless of how long the list is. Anything
 * inside the pane marked `.rim-follow` — the arrow on a project row — gets its
 * own local coordinates too, since it needs the light placed against its own
 * box rather than the row's.
 *
 * --rim-lit is set on the pane and inherits, so descendants share its fade
 * without being written to individually.
 */

const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Module scope: this outlives client-side navigation, the elements do not.
let pane: HTMLElement | null = null;
let px = 0;
let py = 0;
let queued = 0;

const place = (el: HTMLElement) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${(px - r.left).toFixed(1)}px`);
  el.style.setProperty('--my', `${(py - r.top).toFixed(1)}px`);
};

const paint = () => {
  queued = 0;
  if (!pane) return;
  place(pane);
  for (const child of pane.querySelectorAll<HTMLElement>('.rim-follow')) place(child);
};

const release = () => {
  if (!pane) return;
  pane.style.removeProperty('--rim-lit');
  pane = null;
};

const onMove = (e: PointerEvent) => {
  px = e.clientX;
  py = e.clientY;

  const target = e.target as Element | null;
  const found = target?.closest?.('.glass-row, .glass-pane') as HTMLElement | null;
  if (found !== pane) {
    release();
    pane = found;
    if (pane) pane.style.setProperty('--rim-lit', '1');
  }

  if (pane && !queued) queued = requestAnimationFrame(paint);
};

if (fine && !still) {
  window.addEventListener('pointermove', onMove, { passive: true });
  // A pane can leave under a still cursor — a scroll, or the pointer leaving
  // the window entirely — and would otherwise stay lit with stale coordinates.
  window.addEventListener('scroll', release, { passive: true });
  document.addEventListener('pointerleave', release);

  // Astro swaps the DOM on navigation, so the held pane is a detached node by
  // the time the next page renders. Drop it, and any frame queued against it.
  document.addEventListener('astro:before-swap', () => {
    if (queued) cancelAnimationFrame(queued);
    queued = 0;
    pane = null;
  });
}
