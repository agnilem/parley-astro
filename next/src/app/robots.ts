import type { MetadataRoute } from 'next';
import { SITE } from '@/layouts/Head';

export const dynamic = 'force-static';

/** Hand-written counterpart of the Astro build's public/robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: '/admin/' }, sitemap: `${SITE.replace(/\/$/, '')}/sitemap.xml` };
}
