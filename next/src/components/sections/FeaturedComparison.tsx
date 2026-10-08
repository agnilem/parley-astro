// GENERATED from src/components/sections/FeaturedComparison.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Button from '@/components/Button';

export default function FeaturedComparison() {
  const rows = [
    { label: 'Time per Lead', parley: '~40 sec', manual: '~18 min' },
    { label: 'Tools touched', parley: '1 trigger', manual: '14' },
    { label: 'Audit trail', parley: 'Full', manual: 'None' },
    { label: 'Scales to nights & weekends', parley: 'Yes', manual: 'No' },
  ];

  return (
    <>
      <section className="fcomp">
        <header className="fcomp__header">
          <div className="fcomp__heading">
            <p className="badge">Featured Workflow</p>
            <h2 className="h2">Lead enrichment,<br /><em>before and after.</em></h2>
          </div>
          <div className="fcomp__side">
            <p className="fcomp__lede">
              The same job, run by a human or run by Parley. Same output, very
              different math
            </p>
            <Button href="/workflow-1" label="Open this workflow" variant="primary" />
          </div>
        </header>

        <div className="fcomp__cols">
          <div className="fcol fcol--parley">
            <h5 className="fcol__title">With Parley</h5>
            <p className="fcol__sub">One workflow, one trigger</p>
            <dl className="fcol__rows">
              {rows.map((r) => (
                <div className="fcol__row"><dt>{r.label}</dt><dd><h5>{r.parley}</h5></dd></div>
              ))}
            </dl>
          </div>
          <div className="fcol fcol--manual">
            <h5 className="fcol__title">Manual</h5>
            <p className="fcol__sub">One specialist + 14 browser tabs</p>
            <dl className="fcol__rows">
              {rows.map((r) => (
                <div className="fcol__row"><dt>{r.label}</dt><dd><h5>{r.manual}</h5></dd></div>
              ))}
            </dl>
          </div>
        </div>

        <img className="fcomp__mosaic" src="/assets/wf-mosaic.png" alt="" loading="lazy" />
      </section>
    </>
  );
}
