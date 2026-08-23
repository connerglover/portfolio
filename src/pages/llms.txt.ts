import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, courses, courseTimeline } from '../data/site';
import { gpa, apExams } from '../data/academics';

/**
 * /llms.txt — the llmstxt.org convention: one markdown file telling a language
 * model what this site is and where the real content lives, so it does not
 * have to infer any of it from rendered HTML.
 *
 * Generated from the same collections the pages render, rather than written by
 * hand, because a hand-written one would be wrong the first time a project is
 * added and nobody would notice. Everything below is derived; nothing is
 * duplicated prose.
 */
export const GET: APIRoute = async ({ site: origin }) => {
  const base = (origin ?? new URL('https://connerglover.com')).origin;
  const url = (p: string) => `${base}${p}`;

  const projects = (await getCollection('projects', (p) => !p.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const school = await getCollection('school');

  const year = (d: Date) => d.getUTCFullYear();

  const lines: string[] = [
    `# ${site.name}`,
    '',
    `> High school engineering portfolio: ${projects.length} personal projects and` +
      ` ${school.length} assignments across ${courses.length} Project Lead The Way engineering` +
      ` courses, with the submitted work attached.`,
    '',
    'Built and maintained by Conner Glover, a student at Carmel Catholic High School.',
    'The site is a static Astro build; every page below is plain HTML with no',
    'client-side rendering, so fetching a URL returns the full content.',
    '',
    '## Projects',
    '',
    'Software built outside of class. Each page is a long-form write-up covering',
    'what the thing does, why it was built, and the engineering decisions behind it.',
    '',
    ...projects.map(
      (p) =>
        `- [${p.data.title}](${url(`/projects/${p.id}/`)}): ${p.data.summary}` +
        ` Built ${year(p.data.date)}${p.data.tech.length ? `. ${p.data.tech.join(', ')}` : ''}.` +
        `${p.data.repo ? ` Source: ${p.data.repo}.` : ''}` +
        `${p.data.demo ? ` Live: ${p.data.demo}.` : ''}`,
    ),
    '',
    '## Coursework',
    '',
    'PLTW engineering courses. Each course page carries every assignment for that',
    'course, with the slide decks, reports and drawings that were submitted.',
    '',
    ...courses.map((c) => {
      const items = school.filter((a) => a.data.courseSlug === c.slug);
      const withWork = items.filter((a) => a.data.decks.length > 0).length;
      return (
        `- [${c.name} (${c.short})](${url(`/school/${c.slug}/`)}): ${c.blurb}` +
        ` ${items.length} assignments, ${withWork} with submitted work attached. ${c.credit}.`
      );
    }),
    '',
    '## Academics',
    '',
    `- [Academic record](${url('/about/')}): Full course list with letter grades by` +
      ` semester, weighted cumulative GPA of ${gpa.cumulative} (${gpa.honors}) as of` +
      ` ${gpa.asOf}, and AP exam scores` +
      ` (${apExams.map((e) => `${e.exam}: ${e.score}`).join(', ')}).`,
    '',
    '## Also taken',
    '',
    ...courseTimeline
      .filter((c) => !('slug' in c))
      .map((c) => `- ${c.name} (${c.credit})`),
    '',
    '## Contact',
    '',
    `- GitHub: ${site.github}`,
    `- LinkedIn: ${site.linkedin}`,
    '',
    '## Notes',
    '',
    '- Transcript percentages, teacher names and address are deliberately not published.',
    '- Slide decks are self-hosted PDFs rendered to images; the original PDF sits',
    '  alongside each deck and is linked from the assignment.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
