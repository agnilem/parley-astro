import schema from '@/content/schema.json';

/**
 * Hand-written counterpart of src/layouts/Head.astro: same props, same tags.
 * React hoists <title>, <meta> and <link> into <head>; Next adds the charset
 * and viewport meta itself, and the fonts are imported in app/layout.tsx.
 * The JSON-LD payload points at this deployment, as Astro's points at its own.
 */
export const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://parley-next.startfrom.co';

export interface Props {
  title: string;
  description: string;
  path: string;
  /** Blog posts override the shared card with their own cover. */
  ogImage?: string;
  /** The waitlist and thank-you pages carry no structured data in Framer. */
  schema?: boolean;
}

export default function Head({ title, description, path, ogImage, schema: withSchema = true }: Props) {
  const canonical = new URL(path, SITE).href;
  const card = new URL(ogImage ?? '/assets/og-image.jpg', SITE).href;
  const jsonLd = JSON.stringify(schema).replaceAll('https://parley.startfrom.co', SITE.replace(/\/$/, ''));
  return (
    <>
      <meta name="theme-color" content="#f7f7f4" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Parley" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={card} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={card} />

      <link rel="icon" href="/assets/favicon.png" />
      <link rel="apple-touch-icon" href="/assets/favicon.png" />

      {withSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />}
    </>
  );
}
