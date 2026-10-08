// GENERATED from src/components/sections/BuildYourOwn.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Button from '@/components/Button';

export default function BuildYourOwn() {
  return (
    <>
      <section className="byo">
        <div className="byo__text">
          <p className="badge">Build your own</p>
          <h2 className="h2">Don't see what you need? Describe it. <em>Parley drafts it.</em></h2>
          <p className="byo__lede">
            Tell Parley what you do today — out loud, in plain words. It will draft a
            workflow with steps, triggers, and integrations for you to review before
            anything runs.
          </p>
          <Button href="/contact" label="Start from scratch" variant="primary" />
        </div>
        <div className="byo__media">
          <img src="/assets/wf-describe.png" alt="Support chat interface with user and agent conversation" loading="lazy" />
        </div>
      </section>
    </>
  );
}
