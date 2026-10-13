// GENERATED from src/components/sections/Hero.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Button from '@/components/Button';

export default function Hero() {
  const heroSet = '/assets/hero-800.webp 800w, /assets/hero-1100.webp 1100w, /assets/hero-1600.webp 1600w, /assets/hero.webp 2326w';

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero__panel" id="hero-media">
          <img className="hero__img" src="/assets/hero.webp" srcSet={heroSet} sizes="(max-width: 1200px) 148vw, 123vw" alt="" width="2326" height="1200" fetchPriority="high" />
          <div className="hero__overlay"></div>
          <div className="hero__content">
            <h1 className="hero__headline">
              The AI agent that works <em>with you</em>,&nbsp;not just for you
            </h1>
            <p className="hero__lede">
              Parley thinks, plans, and acts alongside you &#8212; handling emails,
              scheduling, research, and complex workflows so you can focus on
              the work only you can do.
            </p>
            <Button href="#pricing" label="Get started free" variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
