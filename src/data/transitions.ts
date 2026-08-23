import type { TransitionDirectionalAnimations } from 'astro';

/**
 * The page transition.
 *
 * Only `<main>` moves. The nav, the footer and the dot field are left alone —
 * the backdrop is `transition:persist`ed so its canvas node survives the swap
 * and the flow field carries on mid-drift instead of restarting, and the root
 * animation is turned off in global.css so nothing else drifts with it. The
 * effect is that the page is a sheet moving through a space that stays put,
 * rather than the whole window cross-fading.
 *
 * It is directional. Going forward the content rises from below; going back it
 * drops in from above and the outgoing page sinks. Reusing one animation for
 * both makes "back" feel like just another forward step, which is the thing
 * that makes a lot of view-transition sites feel unmoored.
 *
 * Out is quicker than in on purpose: the outgoing page only has to get out of
 * the way, while the incoming one is what the eye actually follows.
 */
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const step = (name: string, duration: string) => ({
  name,
  duration,
  easing: EASE,
  fillMode: 'both' as const,
});

export const pageLift: TransitionDirectionalAnimations = {
  forwards: {
    old: step('page-lift-out', '200ms'),
    new: step('page-rise-in', '400ms'),
  },
  backwards: {
    old: step('page-sink-out', '200ms'),
    new: step('page-drop-in', '400ms'),
  },
};
