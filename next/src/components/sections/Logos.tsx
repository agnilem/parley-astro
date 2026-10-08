// GENERATED from src/components/sections/Logos.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { sx } from '@/lib/sx';
import { group, type Logo } from '@/lib/content';

export default async function Logos({ hideLabel = false }) {
  const logos = await group<Logo>('logos');

  return (
    <>
      <section className="logos">
        {!hideLabel && <p className="logos__label">Trusted by 200+ businesses</p>}
        <ul className="logos__list" role="list">
          {logos.map((logo) => (
            <li className={`logo logo--${logo.slug}`}>
              {logo.parts.map((p) => (
                <span className={`logo__part logo__part--${p.kind}`} style={sx(`--w:${p.w}px;--h:${p.h}px`)}>
                  <img className="logo__d" src={p.d} alt="" />
                  <img className="logo__h" src={p.h2} alt="" />
                </span>
              ))}
            </li>
          ))}
        </ul>

        <div className="logos__ticker" aria-hidden="true">
          <div className="logos__track">
            {[0, 1, 2].map(() => logos.map((logo) => (
              <div className={`logo logos__cell logo--${logo.slug}`}>
                {logo.parts.map((p) => (
                  <span className={`logo__part logo__part--${p.kind}`} style={sx(`--w:${p.w}px;--h:${p.h}px`)}>
                    <img className="logo__d" src={p.d} alt="" loading="lazy" />
                    <img className="logo__h" src={p.h2} alt="" loading="lazy" />
                  </span>
                ))}
              </div>
            )))}
          </div>
        </div>
      </section>
    </>
  );
}
