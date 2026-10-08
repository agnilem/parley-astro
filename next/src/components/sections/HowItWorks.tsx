// GENERATED from src/components/sections/HowItWorks.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { group, type HiwTab } from '@/lib/content';

export default async function HowItWorks() {
  const tabs = await group<HiwTab>('hiwTabs');

  return (
    <>
      <section className="hiw" id="how-it-works">
        <header className="hiw__header">
          <p className="badge">How it works</p>
          <h2 className="h2 h2--center">
            From ask to done.&nbsp;<em>Without the back-and-forth.</em>
          </h2>
        </header>

        <div className="hiw__panel" id="hiw-panel">
          <div className="hiw__pills" role="list">
            {tabs.map((t) => (
              <button className={`hiw__pill${t.step === 0 ? ' is-active' : ''}`} data-step={t.step} type="button" aria-pressed={t.step === 0 ? 'true' : 'false'}>{t.label}</button>
            ))}
          </div>

          <div className="hiw__stage">
            {tabs.map((t) => (
              <div className={`hiw__lottie${t.step === 0 ? ' is-active' : ''}`} data-step={t.step} hidden={t.step !== 0}></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
