// GENERATED from src/components/sections/Why.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { group, type Benefit } from '@/lib/content';

export default async function Why() {
  const benefits = await group<Benefit>('benefits');

  return (
    <>
      <section className="why" id="why">
        <header className="why__header">
          <div className="why__heading">
            <p className="badge">Why Parley</p>
            <h2 className="h2">A real partner,<br />not a chatbot in disguise</h2>
          </div>
          <p className="why__lede">
            Most AI tools answer questions. Parley takes initiative —
            anticipating needs, executing tasks, and growing smarter with every
            interaction.
          </p>
        </header>

        <div className="why-cards" id="why-cards" role="list">
          {benefits.map((b) => (
            <article className={`wcard${b.active ? ' is-active' : ''}`} data-index={b.num} tabIndex={0} role="listitem">
              <div className="wcard__closed" aria-hidden="true">
                <p className="wcard__number">{b.num}.</p>
                <div className="wcard__mosaic"><img src={b.mosaic} alt="" loading="lazy" /></div>
                <p className="wcard__title-closed">{b.title}</p>
              </div>
              <div className="wcard__open">
                <div className="wcard__img"><img src={b.image} alt="" loading="lazy" /></div>
                <div className="wcard__content">
                  <h3 className="wcard__title">{b.title}</h3>
                  <p className="wcard__desc">{b.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
