// GENERATED from src/components/sections/Testimonials.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { group, type Testimonial } from '@/lib/content';

export default async function Testimonials() {
  const testimonials = await group<Testimonial>('testimonials');

  return (
    <>
      <section className="testimonials bleed" id="testimonials">
        <header className="testimonials__header">
          <p className="badge">What people say</p>
          <h2 className="h2">Teams that work<br />with Parley, not around it</h2>
          <p className="testimonials__lede">
            From solo founders to enterprise teams — here's what our users have to
            say after making Parley their daily partner.
          </p>
        </header>

        <div className="marquee">
          <ul className="marquee__track" id="track" role="list">
            {testimonials.map((t) => (
              <li className="tcard">
                <p className="tcard__quote">{t.quote}</p>
                <figure className="tcard__author">
                  <img className="tcard__avatar" src={t.avatar} srcSet={t.srcset || undefined} alt="" />
                  <figcaption>
                    <h5 className="tcard__name">{t.name}</h5>
                    <span className="tcard__role">{t.role}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
