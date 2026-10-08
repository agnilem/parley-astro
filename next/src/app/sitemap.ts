import type { MetadataRoute } from 'next';
import { getCollection } from '@/lib/collections';
import { SITE } from '@/layouts/Head';

export const dynamic = 'force-static';

/** Hand-written counterpart of src/pages/sitemap.xml.ts: the same routes. */
const STATIC = [
  '/', '/workflows', '/workflow-1', '/workflow-2', '/workflow-3',
  '/pricing', '/contact', '/blog', '/terms-conditions', '/waitlist',
  '/thank-you',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getCollection('blog');
  return [...STATIC, ...posts.map((p) => `/blog/${p.id}`)].map((p) => ({ url: new URL(p, SITE).href }));
}
