// GENERATED from src/pages/workflows.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import PageHero from '@/components/PageHero';
import WorkflowGrid from '@/components/sections/WorkflowGrid';
import BuildYourOwn from '@/components/sections/BuildYourOwn';
import FeaturedComparison from '@/components/sections/FeaturedComparison';
import { group, type Stat } from '@/lib/content';

export default async function WorkflowsPage() {
  const stats = await group<Stat>('workflowStats');

  return (
    <>
      <Base
        title="AI Agent Workflow Template Pages | Parley"
        description="Showcase prebuilt AI agent workflows with Parley, a Next.js template for automation products, SaaS startups, and agent-led service pages."
        path="/workflows"
      >
        <PageHero
          badge="Workflows"
          lede="Parley comes with proven workflows for sales, support, operations, and research — fully customizable without code."
          stats={stats}
        >Prebuilt agent<br />workflows</PageHero>

        <div className="wfhero">
          <img src="/assets/wf-hero.png" alt="User interface for creating a task" />
        </div>

        <WorkflowGrid />
        <BuildYourOwn />
        <FeaturedComparison />
      </Base>
    </>
  );
}
