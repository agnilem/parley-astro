// GENERATED from src/components/sections/Integrations.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { group, type IntegrationRow } from '@/lib/content';

export default async function Integrations() {
  const rows = await group<IntegrationRow>('integrationRows');

  return (
    <>
      <section className="integrations" id="integrations">
        <header className="integrations__header">
          <p className="badge">Integrations</p>
          <h2 className="h2 h2--center">
            Connect your workflow. <em>Parley meets you there.</em>
          </h2>
          <p className="integrations__lede">
            Slack, Linear, Notion, GitHub and 60+ more. Parley triggers actions,
            fetches context, and keeps things in sync — right where your team
            already works.
          </p>
        </header>

        <div className="int-marquee">
          {rows.map((row) => (
            <div className="int-marquee__row" data-dir={row.dir}>
              {/* Second set is the seamless-loop duplicate — decorative, so its
                  tiles carry empty alt text. */}
              {[false, true].map((dup) => (
                <div className="int-marquee__set" aria-hidden={dup ? 'true' : undefined}>
                  {row.tiles.map((t) => (
                    <span className="int-tile"><img src={t.src} alt={dup ? '' : t.alt} /></span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
