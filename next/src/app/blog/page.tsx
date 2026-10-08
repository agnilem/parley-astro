// GENERATED from src/pages/blog/index.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import BlogIndex from '@/components/sections/BlogIndex';

export default function HomePage() {
  return (
    <>
      <Base
        title="AI Agent Blog Template | Parley Astro Template"
        description="Explore the CMS-powered blog included with the Parley AI agent Astro template, built for product updates, use cases, engineering posts, and agent design articles."
        path="/blog"
      >
        <header className="blog__header">
          <p className="badge">Blog</p>
          <h1 className="phero__title">The Parley Blog</h1>
        </header>
        <BlogIndex />
      </Base>
    </>
  );
}
