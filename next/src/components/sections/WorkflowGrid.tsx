// GENERATED from src/components/sections/WorkflowGrid.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { group, type Workflow } from '@/lib/content';

export default async function WorkflowGrid() {
  const workflows = await group<Workflow>('workflows');

  return (
    <>
      <section className="wfgrid">
        <ul className="wfgrid__list" role="list">
          {workflows.map((w) => (
            <li className="wfcard">
              <p className="wfcard__tag">{w.category}</p>
              <div className="wfcard__body">
                <h5 className="wfcard__title">{w.title}</h5>
                <p className="wfcard__desc">{w.card}</p>
                <a className="wfcard__link" href={`/${w.slug}`}>
                  View workflow
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
