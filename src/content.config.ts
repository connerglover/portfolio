import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Two content types, deliberately shaped differently.
 *
 * `school`  – PLTW coursework. Each entry is a single assignment: a short
 *             blurb plus, usually, a Google Slides deck. Rendered inline on
 *             its unit page rather than getting a page of its own.
 *
 * `projects` – personal work. Each entry is long-form and gets its own page.
 */

const school = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/school' }),
  schema: z.object({
    title: z.string(),
    courseSlug: z.string(),
    unit: z.string(),
    // Sorts assignments within a unit. Mirrors the PLTW numbering.
    order: z.number(),
    // Slide decks, self-hosted as PDFs under public/decks/. Exported out of
    // Google Slides during the migration; `id` is the original Slides file id,
    // kept for provenance only (those links are not publicly readable).
    decks: z
      .array(
        z.object({
          pdf: z.string(),
          title: z.string().optional(),
          id: z.string().optional(),
        }),
      )
      .default([]),
    // Surviving Google Drive attachments (PDFs, docs, archives).
    files: z
      .array(z.object({ id: z.string(), title: z.string() }))
      .default([]),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    // `not-started` is for work still ahead on the schedule, so a course
    // page reads as a roadmap rather than only what is finished.
    status: z.enum(['complete', 'in-progress', 'not-started']).default('complete'),
    partners: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tech: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
    featured: z.boolean().default(false),
    /**
     * Holds a project at the top of every list, ahead of newer work.
     *
     * `featured` decides whether a project appears on the home page; this
     * decides the order once it is there. Separate flags because "worth
     * showing" and "the first thing anyone should read" are different
     * questions, and date order answers neither.
     */
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { school, projects };
