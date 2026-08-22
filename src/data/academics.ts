/**
 * Academic record, transcribed from Carmel Catholic report cards.
 *
 * Letter grades only, on the school's scale — A 100-90, B 89-80, C 79-70,
 * D 69-60, F 59-0. The underlying percentages are deliberately not kept here:
 * this repo is public, letters are what a portfolio needs, and the numbers add
 * nothing but exposure.
 *
 * A `null` semester means the course only ran for the other half of the year.
 *
 * GPA is weighted on the school's scale, where a course's level sets its
 * ceiling: AP and dual-credit 5.00, Honors 4.50, Upper College Prep and
 * College Prep 4.00.
 */

export type Grade = 'A' | 'B' | 'C' | 'D' | 'F' | null;

export interface Course {
  name: string;
  /** AP, DC, AP/DC, H, UCP or CP, as printed on the report card. */
  level: string;
  s1: Grade;
  s2: Grade;
  /** Set when this course has a section on the site. */
  href?: string;
  /** Taken in the summer term that the report card counts toward this year. */
  summer?: boolean;
}

export interface Term {
  label: string;
  /** Shown under the heading — year standing, honors roll, semester GPAs. */
  note?: string;
  courses: Course[];
}

export const gpa = {
  /** From the most recent report card, 2025-26, dated 22 August 2026. */
  cumulative: '4.16',
  honors: 'High Honors',
  asOf: 'end of sophomore year, 2025-26',
};

export const courseLevelKey = [
  ['AP', 'Advanced Placement'],
  ['DC', 'Dual Credit'],
  ['H', 'Honors'],
  ['UCP', 'Upper College Prep'],
  ['CP', 'College Prep'],
] as const;

export const terms: Term[] = [
  {
    label: 'Summer 2023',
    note: 'Taken at Carmel before starting high school',
    courses: [
      { name: 'Robotics 1', level: 'H', s1: 'A', s2: null, summer: true },
    ],
  },
  {
    label: 'Freshman year — 2024-25',
    note: 'Superior Honors · semester GPAs 4.07 and 4.36',
    courses: [
      { name: 'Principles of Engineering PLTW', level: 'DC', s1: 'A', s2: 'A', href: '/school/poe/', summer: true },
      { name: 'English 9', level: 'UCP', s1: 'A', s2: 'A' },
      { name: 'Algebra 2', level: 'H', s1: 'A', s2: 'A' },
      { name: 'Physics', level: 'H', s1: 'B', s2: 'A' },
      { name: 'Spanish 2', level: 'H', s1: 'A', s2: 'A' },
      { name: 'Computer Science Principles PLTW', level: 'AP/DC', s1: 'A', s2: 'A' },
      { name: 'Introduction to Business', level: 'UCP', s1: 'B', s2: null },
      { name: 'Foundations of Catholicism', level: 'UCP', s1: 'A', s2: null },
      { name: 'Old Testament', level: 'UCP', s1: null, s2: 'A' },
      { name: 'Health', level: 'UCP', s1: null, s2: 'A' },
    ],
  },
  {
    label: 'Sophomore year — 2025-26',
    note: 'High Honors · semester GPAs 3.86 and 4.00',
    courses: [
      { name: 'Civil Engineering and Architecture PLTW', level: 'DC', s1: 'B', s2: 'A', href: '/school/cea/' },
      { name: 'PreCalculus', level: 'AP', s1: 'A', s2: 'A' },
      { name: 'Geometry / Trigonometry', level: 'H', s1: 'A', s2: 'A', summer: true },
      { name: 'Chemistry', level: 'H', s1: 'B', s2: 'B' },
      { name: 'English 10', level: 'H', s1: 'B', s2: 'B' },
      { name: 'World History', level: 'H', s1: 'B', s2: 'B' },
      { name: 'Spanish 3', level: 'H', s1: 'A', s2: 'A' },
      { name: 'New Testament', level: 'UCP', s1: 'B', s2: null },
      { name: 'Church History', level: 'UCP', s1: null, s2: 'B' },
    ],
  },
];

/**
 * Taken — the site has a whole section of the coursework — but the report card
 * for it was not among the records transcribed above, so no grade is claimed.
 */
export const ungraded: Course[] = [
  { name: 'Introduction to Engineering Design PLTW', level: 'DC', s1: null, s2: null, href: '/school/ied/' },
];
