// GENERATED from src/components/sections/Delegation.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { sx } from '@/lib/sx';
import { group, type Feature } from '@/lib/content';

export default async function Delegation() {
  const features = await group<Feature>('features');

  return (
    <>
      <section className="delegation" id="delegation">
        <header className="delegation__header">
          <div className="delegation__heading">
            <p className="badge">Intelligent Delegation</p>
            <h2 className="h2">Tell Parley once.<br /><em>It handles the rest.</em></h2>
          </div>
          <p className="delegation__lede">
            Describe a goal in plain language and Parley breaks it into steps,
            selects the right tools, and executes &#8212; keeping you updated
            along the way.
          </p>
        </header>

        <div className="delegation__inner">
          <ol className="features" role="tablist" aria-label="Delegation features">
            {features.map((f) => (
              <li className="feature" style={sx(`--i:${f.step}`)}>
                <button
                  className="feature__btn"
                  type="button"
                  role="tab"
                  id={`feature-${f.step}`}
                  data-step={f.step}
                  aria-selected={f.step === 0 ? 'true' : 'false'}
                  aria-controls={`mock-${f.step}`}
                  tabIndex={f.step === 0 ? 0 : -1}
                >
                  <img className="feature__chevron" src="/assets/arrows.svg" alt="" aria-hidden="true" />
                  <span className="feature__head">
                    <h4 className="feature__label">{f.label}</h4>
                    <span className="feature__desc">{f.desc}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="stage">
            {features.map((f) => (
              <div
                className={`mock${f.step === 0 ? ' is-active' : ''}`}
                id={`mock-${f.step}`}
                role="tabpanel"
                aria-labelledby={`feature-${f.step}`}
                data-step={f.step}
                hidden={f.step !== 0}
              >
                <img className="mock__img" src={f.mock} srcSet={f.srcset} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
