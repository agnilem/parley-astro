// GENERATED from src/pages/pricing.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import Pricing from '@/components/sections/Pricing';
import ComparisonTable from '@/components/sections/ComparisonTable';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';

export default function PricingPage() {
  return (
    <>
      <Base
        title="Pricing Page Template for AI Agents | Parley"
        description="A conversion-ready pricing page for AI agent startups, included in the Parley Astro template with plan cards, FAQ content, and clear calls to action."
        path="/pricing"
      >
        <Pricing headingLevel={1} display />
        <ComparisonTable />
        <Testimonials />
        <Faq />
      </Base>
    </>
  );
}
