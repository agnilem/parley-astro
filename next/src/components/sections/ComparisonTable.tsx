// GENERATED from src/components/sections/ComparisonTable.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { group, type ComparisonGroup, type ComparisonPlan } from '@/lib/content';

export default async function ComparisonTable() {
  const groups = await group<ComparisonGroup>('comparisonGroups');
  const plans = await group<ComparisonPlan>('comparisonPlans');

  return (
    <>
      <section className="ctable" data-plan="0" data-ctable="">
        <header className="ctable__header">
          <div className="ctable__heading">
            <p className="badge">Comparison table</p>
            <h2 className="h2">It's all in the details</h2>
          </div>
          <p className="ctable__lede">
            Every plan starts with the full Parley experience. The difference is in
            how much you can push it.
          </p>
        </header>


        <div className="ctable__switch">
          <button className="ctable__pick" type="button" aria-expanded="false" aria-haspopup="true" data-ctable-pick="">
            <span data-ctable-current="">{plans[0].name}</span>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 6.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="ctable__menu" data-ctable-menu="">
            {plans.map((p, i) => (
              <button className={`ctable__option${i === 0 ? ' is-active' : ''}`} type="button" data-ctable-option={i}>{p.name}</button>
            ))}
          </div>
        </div>

        <div className="ctable__scroll">
          <table className="ctable__table">
            <thead>
              <tr>
                <th scope="col"><span className="visually-hidden">Feature</span></th>
                {plans.map((p) => (
                  <th scope="col">
                    <h4 className="ctable__plan">{p.name}</h4>
                    <span className="ctable__blurb">{p.blurb}</span>
                  </th>
                ))}
              </tr>
            </thead>
            {groups.map((g) => (
              <tbody>
                <tr className="ctable__grouprow">
                  <th scope="colgroup" colSpan={plans.length + 1}><h5 className="ctable__group">{g.title}</h5></th>
                </tr>
                {g.rows.map((row) => (
                  <tr>
                    <th scope="row">{row.label}</th>
                    {row.values.map((v) => (
                      <td>
                        {typeof v === 'string' ? (
                          <span className="ctable__pill">{v}</span>
                        ) : v ? (
                          <span className="ctable__mark ctable__mark--yes" role="img" aria-label="Included">
                            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="currentColor"/><path d="m4.8 8.2 2.1 2.1 4.3-4.4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        ) : (
                          <span className="ctable__mark ctable__mark--no" role="img" aria-label="Not included">
                            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="currentColor"/><path d="m5.6 5.6 4.8 4.8M10.4 5.6l-4.8 4.8" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </>
  );
}
