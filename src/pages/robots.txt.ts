import type { APIRoute } from 'astro';

/**
 * An endpoint rather than a file in public/, so the sitemap URL is built from
 * the configured `site` and cannot quietly disagree with it.
 */
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://connerglover.com')).origin;
  return new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${base}/sitemap-index.xml`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
