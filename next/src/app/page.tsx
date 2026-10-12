// GENERATED from src/pages/index.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import Hero from '@/components/sections/Hero';
import Logos from '@/components/sections/Logos';
import Why from '@/components/sections/Why';
import Delegation from '@/components/sections/Delegation';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import HowItWorks from '@/components/sections/HowItWorks';
import Faq from '@/components/sections/Faq';
import Integrations from '@/components/sections/Integrations';

export default function HomePage() {
  return (
    <>
      <Base
        title="Parley - AI Agent Next.js Template for SaaS Startups"
        description="Launch an AI agent or automation startup site with Parley, a polished Next.js template with product sections, workflows, pricing, blog pages, and conversion-ready layouts."
        path="/"
      >
        <Hero />
        <Logos />
        <Why />
        <Delegation />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <Faq />
        <Integrations />
      </Base>
    </>
  );
}
