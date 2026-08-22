// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your custom domain before the first production deploy —
// it's what sitemap.xml and canonical URLs are built from.
export default defineConfig({
  site: 'https://connerglover.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
