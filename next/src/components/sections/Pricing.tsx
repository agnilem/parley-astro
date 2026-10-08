// GENERATED from src/components/sections/Pricing.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Button from '@/components/Button';
import { group, type Plan } from '@/lib/content';

export default async function Pricing({ headingLevel = 2, display = false }) {
  const plans = await group<Plan>('plans');
  const Heading = headingLevel === 1 ? 'h1' : 'h2';

  return (
    <>
      <section className="pricing" id="pricing">
        <header className="pricing__header">
          <div className="pricing__heading">
            <p className="badge">Pricing</p>
            <Heading className={display ? 'ts-display' : 'h2'}>
              Simple, transparent pricing. <em>No surprises.</em>
            </Heading>
          </div>
          <div className="pricing__side">
            <p className="pricing__lede">
              Start free, scale as you grow. Every plan includes core features —
              upgrade when you need more power or seats.
            </p>
          </div>
        </header>

        <div className="pricing__billing">
          <div className="toggle" role="tablist" aria-label="Billing period">
            <button className="toggle__btn is-active" type="button" role="tab" aria-selected="true">Monthly</button>
            <button className="toggle__btn" type="button" role="tab" aria-selected="false">
              Annual <span className="toggle__off">-15%</span>
            </button>
          </div>
        </div>

        <div className="plans" id="plans">
          {plans.map((plan) => (
            <article className={`plan${plan.featured ? ' is-featured' : ''}`} data-index={plan.index}>
              <h4 className="plan__name">{plan.name}</h4>
              <div className="plan__pricing">
                <h3 className="plan__price">
                  <span className="plan__currency">{plan.currency}</span><span className="plan__amount">{plan.amount}</span>
                </h3>
                <p className="plan__period">{plan.period}</p>
              </div>
              <p className="plan__desc">{plan.desc}</p>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li className={f.off ? 'is-off' : undefined}><span className="plan-features__dot"></span>{f.text}</li>
                ))}
              </ul>
              <Button href={plan.cta.href} label={plan.cta.label} variant={plan.cta.variant} full />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
