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
    // Surviving Google Slides decks. Decks the school deleted were dropped
    // during the migration, so anything listed here is known to still load.
    decks: z
      .array(z.object({ id: z.string(), title: z.string().optional() }))
      .default([]),
    // Surviving Google Drive attachments (PDFs, docs, archives).
    files: z
      .array(z.object({ id: z.string(), title: z.string() }))
      .default([]),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    status: z.enum(['complete', 'in-progress']).default('complete'),
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
    draft: z.boolean().default(false),
  }),
});

export const collections = { school, projects };
