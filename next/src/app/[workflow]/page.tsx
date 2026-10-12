// GENERATED from src/pages/[workflow].astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { sx } from '@/lib/sx';
import Base from '@/layouts/Base';
import Button from '@/components/Button';
import Logos from '@/components/sections/Logos';
import { group, type Workflow, type Logo } from '@/lib/content';

type Props = { w: Workflow };

async function getStaticPaths() {
  const { group } = await import('@/lib/content');
  const workflows = await group<Workflow>('workflows');
  return workflows.map((w) => ({ params: { workflow: w.slug }, props: { w } }));
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getStaticPaths()).map((p) => p.params);
}


export default async function WorkflowPage({ params }: { params: Promise<{ workflow: string }> }) {
  const { workflow: requested } = await params;
  const { w } = ((await getStaticPaths()).find((p) => p.params.workflow === requested)!.props) as Props;
  const meta: Record<string, { title: string; desc: string }> = {
    'workflow-1': {
      title: 'Workflow Detail Page Template | Parley',
      desc: 'A detailed workflow page for presenting AI agent use cases and automation flows in the Parley Next.js template.',
    },
    'workflow-2': {
      title: 'AI Workflow Use Case Template | Parley',
      desc: 'A workflow detail page template for AI agent use cases, automation stories, and SaaS product pages.',
    },
    'workflow-3': {
      title: 'Automation Workflow Page Template | Parley',
      desc: 'A polished workflow page for AI automation products and agentic SaaS templates built with Next.js.',
    },
  };
  const m = meta[w.slug];
  const logos = await group<Logo>('logos');
  const brandLogo = logos.find((l) => l.slug === w.brand.toLowerCase());

  return (
    <>
      <Base title={m.title} description={m.desc} path={`/${w.slug}`}>
        <header className="wdhero">
          <p className="badge">{w.category}</p>
          <h1 className="wdhero__title">{w.title}</h1>
          <p className="wdhero__lede">{w.lede}</p>
          <div className="wdhero__actions">
            <Button href="/contact" label="Try this workflow" variant="primary" />
            <p className="wdhero__by">
              Created by
              <span className="wdhero__chip">
                <img src="/assets/parley-logo.png" alt="" width="52" height="17" />
              </span>
              Parley Team
            </p>
          </div>
        </header>

        <div className="wdshot"><img src={w.hero} alt={w.heroAlt} /></div>

        <section className="wdprod">
          <header className="wdprod__header">
            <div className="wdprod__heading">
              <p className="badge">The product</p>
              <h2 className="h2">{w.sectionTitle}<br /><em>{w.sectionTitleEm}</em></h2>
            </div>
            <p className="wdprod__lede">{w.sectionLede}</p>
          </header>

          <div className="wdwide">
            <div className="wdwide__text">
              <span className="wdwide__dots" aria-hidden="true"><i></i></span>
              <h5 className="wdwide__title">{w.wide.title}</h5>
              <p className="wdwide__desc">{w.wide.desc}</p>
            </div>
            <div className="wdwide__media"><img src={w.wide.image} alt={w.wide.alt} loading="lazy" /></div>
          </div>

          <ul className="wdfeat" role="list">
            {w.features.map((f) => (
              <li className="wdfeat__item">
                <span className="wdwide__dots" aria-hidden="true">
                  {Array.from({ length: f.dots }, () => <i></i>)}
                </span>
                <h5 className="wdfeat__title">{f.title}</h5>
                <p className="wdfeat__desc">{f.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="wdproof">
          <p className="badge badge--center">In Production</p>
          <h2 className="h2 h2--center">{w.proofTitle}</h2>

          <figure className="wdquote">
            <div className="wdquote__card">
            <div className="wdquote__main">
              <span className="wdquote__brand">
                {brandLogo
                  ? brandLogo.parts.map((p) => (
                      <img className="wdquote__brandpart" src={p.d} alt={w.brand} style={sx(`--w:${p.w}px;--h:${p.h}px`)} />
                    ))
                  : w.brand}
              </span>
              <blockquote className="wdquote__text">{w.quote}</blockquote>
              <figcaption className="wdquote__author">
                <img src={w.avatar} alt="" width="36" height="36" />
                <span>
                  <h5 className="wdquote__name">{w.name}</h5>
                  <span className="wdquote__role">{w.role}</span>
                </span>
              </figcaption>
            </div>
            <div className="wdquote__stat">
              <h3 className="wdquote__value">{w.stat}</h3>
              <p className="wdquote__label">{w.statLabel}</p>
            </div>
            </div>
          </figure>
        </section>

        <div className="wdlogos"><Logos hideLabel /></div>
      </Base>
    </>
  );
}
