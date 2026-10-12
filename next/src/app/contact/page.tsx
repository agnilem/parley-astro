// GENERATED from src/pages/contact.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import PageHero from '@/components/PageHero';
import ContactMethods from '@/components/sections/ContactMethods';
import ContactForm from '@/components/sections/ContactForm';
import Faq from '@/components/sections/Faq';

export default function ContactPage() {
  return (
    <>
      <Base
        title="Contact Page Template for AI Startups | Parley"
        description="A polished contact page layout for AI agent startups and SaaS products, included with the Parley Next.js template."
        path="/contact"
      >
        <PageHero afterTitle={<p className="ts-display phero__title2">about the work<br />nobody wants to do</p>}
          badge="Contact us"
          center
          display
          lede="Book a demo, ask a question, or send a hard problem. A human responds — most under four hours, never longer than one business day."
        >
          <span className="ts-display--soft">Let’s talk —</span>

        </PageHero>

        <section className="contact">
          <ContactMethods />
          <ContactForm />
        </section>

        <Faq />
      </Base>
    </>
  );
}
