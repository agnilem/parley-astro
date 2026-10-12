// GENERATED from src/pages/terms-conditions.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import { group, type TermsSection, type Block } from '@/lib/content';

export default async function TermsConditionsPage() {
  const intro = (await group<{ text: string }>('termsIntro'))[0];
  const sections = await group<TermsSection>('termsSections');
  function chunk(blocks: Block[]) {
    const out: { type: string; items: Block[] }[] = [];
    for (const b of blocks) {
      const kind = b.type === 'li' ? 'list' : 'block';
      const last = out[out.length - 1];
      if (last && last.type === kind && kind === 'list') last.items.push(b);
      else out.push({ type: kind, items: [b] });
    }
    return out;
  }

  return (
    <>
      <Base
        title="Terms and Conditions | Parley Next.js Template"
        description="Terms and conditions page included with the Parley AI agent Next.js template."
        path="/terms-conditions"
        cta={false}
      >
        <article className="legal">
          <p className="badge legal__updated">Last updated &#183; 27 May 2026</p>
          <h1 className="legal__title">Terms &amp; Conditions</h1>
          <p className="legal__intro">{intro.text}</p>

          {sections.map((s) => (
            <section className="legal__section">
              <p className="legal__num" aria-hidden="true">{s.num}</p>
              <div className="legal__body">
                <h4 className="legal__h">{s.title}</h4>
                {chunk(s.blocks).map((c) =>
                  c.type === 'list' ? (
                    <ul className="legal__list">{c.items.map((i) => <li>{i.text}</li>)}</ul>
                  ) : (
                    <p>{c.items[0].text}</p>
                  )
                )}
              </div>
            </section>
          ))}
        </article>
      </Base>
    </>
  );
}
