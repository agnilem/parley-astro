// GENERATED from src/pages/404.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <>
      <Base
        title="Page Not Found | Parley"
        description="The requested page could not be found on the Parley AI agent Next.js template site."
        path="/404"
        cta={false}
      >
        <section className="nf">
          <img className="nf__mosaic" src="/assets/404-mosaic.webp" alt="" loading="lazy" />
          <p className="nf__code" aria-hidden="true">404</p>
          <h1 className="nf__title">Oops! The page you’re looking for can’t be found.</h1>
          <Button href="/" label="Go to Home page" variant="primary" />
        </section>
      </Base>
    </>
  );
}
