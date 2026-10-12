import GoogleAnalytics from '@/components/GoogleAnalytics';
import StoreBadge from '@/components/StoreBadge';
import Head from './Head';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Scripts from '@/app/Scripts';

/** Hand-written counterpart of src/layouts/Bare.astro. Chromeless layout: no
 *  nav, no footer, no closing CTA. Used by /waitlist and /thank-you. */
export interface Props { title: string; description: string; path: string; ogImage?: string; schema?: boolean; children?: React.ReactNode }

export default function Bare({ title, description, path, ogImage, schema, children }: Props) {
  const analytics = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS;
  return (
    <>
      <Head title={title} description={description} path={path} ogImage={ogImage} schema={schema} />
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
        {children}
      </main>
      {/* Only the form behaviour: this layout has no nav, hero or marquees. */}
      <Scripts layout="bare" />
      {analytics && <Analytics />}
      {analytics && <SpeedInsights />}
      <StoreBadge />
      <GoogleAnalytics />
    </>
  );
}
