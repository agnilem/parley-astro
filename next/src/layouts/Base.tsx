import GoogleAnalytics from '@/components/GoogleAnalytics';
import StoreBadge from '@/components/StoreBadge';
import Head from './Head';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import Cta from '@/components/sections/Cta';
import Scripts from '@/app/Scripts';

/**
 * Hand-written counterpart of src/layouts/Base.astro: same props, same markup.
 * The <html>, <head> and <body> shell is app/layout.tsx.
 */
export interface Props {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  schema?: boolean;
  /** Closing CTA panel. Framer shows it on every route except /404 and the
   *  blog articles, which end on their own related-posts strip. */
  cta?: boolean;
  children?: React.ReactNode;
}

export default function Base({ title, description, path, cta = true, ogImage, schema, children }: Props) {
  const analytics = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS;
  return (
    <>
      <Head title={title} description={description} path={path} ogImage={ogImage} schema={schema} />
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main" className="page" data-page={path}>
        <div className="container">
          {children}
          {cta && <Cta />}
        </div>
        <Footer />
      </main>
      <Scripts layout="base" />
      {analytics && <Analytics />}
      {analytics && <SpeedInsights />}
      <StoreBadge />
      <GoogleAnalytics />
    </>
  );
}
