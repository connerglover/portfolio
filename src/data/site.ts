export const site = {
  name: 'Conner Glover',
  tagline: 'Engineering portfolio',
  // TODO(conner): set these three before deploying. Left blank on purpose —
  // the old site used cglover.2028@carmelhs.org, which dies at graduation,
  // and I didn't want to publish a personal address without you choosing it.
  email: '',
  github: '',
  linkedin: '',
  description:
    'Engineering coursework, personal projects, and achievements — Conner Glover.',
};

/**
 * Course metadata. `slug` drives the /school/<slug>/<unit>/ URLs, and `units`
 * fixes the display order (PLTW unit numbering is not alphabetical).
 */
export const courses = [
  {
    slug: 'ied',
    name: 'Introduction to Engineering Design',
    short: 'IED',
    credit: 'Dual credit',
    blurb:
      'Design process, sketching, and parametric CAD in OnShape — from cable cars to dimensioned technical drawings.',
    units: ['unit-1', 'unit-2'],
  },
  {
    slug: 'poe',
    name: 'Principles of Engineering',
    short: 'PoE',
    credit: 'Dual credit',
    blurb:
      'Mechanisms, energy, statics, materials testing, machine control, and statistics — the broadest of the three courses.',
    units: ['unit-1', 'unit-2', 'unit-3', 'unit-4'],
  },
  {
    slug: 'cea',
    name: 'Civil Engineering and Architecture',
    short: 'CEA',
    credit: 'Dual credit',
    blurb:
      'Architectural history, design principles, and residential structural systems.',
    units: ['unit-1', 'unit-2'],
  },
] as const;

export type CourseSlug = (typeof courses)[number]['slug'];

export const courseBySlug = (slug: string) =>
  courses.find((c) => c.slug === slug);

export const unitLabel = (unit: string) =>
  unit.replace(/^unit-/, 'Unit ');

/**
 * Every engineering course taken, in the chronological order the old site
 * listed them. `slug` is set only for the three that have portfolio pages.
 */
export const courseTimeline = [
  { name: 'Robotics 1', credit: 'Honors' },
  { name: 'Introduction to Engineering Design', credit: 'Dual credit', slug: 'ied' },
  { name: 'Principles of Engineering', credit: 'Dual credit', slug: 'poe' },
  { name: 'Computer Science Principles', credit: 'AP / Dual credit' },
  { name: 'Civil Engineering and Architecture', credit: 'Dual credit', slug: 'cea' },
] as const;
