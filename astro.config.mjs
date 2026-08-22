// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is what sitemap.xml and canonical URLs are built from.
export default defineConfig({
  site: 'https://connerglover.com',
  integrations: [sitemap()],
  // The school index is gone — courses hang off the nav dropdown now.
  // Anything still pointing at /school/ lands on the first course.
  redirects: { '/school': '/school/ied/' },
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
