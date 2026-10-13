// GENERATED from src/components/sections/Cta.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Button from '@/components/Button';

export default function Cta() {
  return (
    <>
      <section className="cta" id="cta">
        <div className="cta__panel">
          <img className="cta__bg" src="/assets/cta-sunset.webp" alt="" loading="lazy" />
          <div className="cta__overlay"></div>
          <div className="cta__content">
            <h2 className="cta__title">Meet your AI partner.<br /><em>Built for real work</em></h2>
            <p className="cta__lede">
              Join 12,000+ professionals who use Parley as their daily partner.
              Set up in minutes. Cancel anytime. Your first 100 tasks are on us.
            </p>
            <Button href="/pricing" label="Get started free" variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
