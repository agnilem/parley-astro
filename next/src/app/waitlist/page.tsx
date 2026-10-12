// GENERATED from src/pages/waitlist.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Bare from '@/layouts/Bare';

export default function WaitlistPage() {
  const avatars = [
    '/assets/waitlist-avatar-1.png',
    '/assets/waitlist-avatar-2.png',
    '/assets/waitlist-avatar-3.png',
  ];
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';

  return (
    <>
      <Bare
        title="AI Startup Waitlist Page Template | Parley"
        description="A focused waitlist page for AI agents, SaaS launches, and automation products, included with the Parley Next.js template."
        path="/waitlist"
        schema={false}
      >
        <div className="wl">
          <div className="wl__left">
            <a className="wl__brand" href="/" aria-label="Parley">
              <img src="/assets/parley-logo.png" alt="Parley" width="78" height="26" />
            </a>

            <div className="wl__main">
              <p className="wl__launch">Launches: Oct 25, 2026</p>
              <h1 className="wl__title">Get early access</h1>
              <p className="wl__lede">Secure your spot and experience the next generation before launch.</p>

              <form
                className="wl__form"
                method="post"
                action="#"
                data-demo-form=""
                data-endpoint={endpoint || undefined}
                data-success-url="/thank-you"
              >
                <label className="visually-hidden" htmlFor="wl-email">Email address</label>
                <input className="wl__input" id="wl-email" name="email" type="email" placeholder="name@example.com" autoComplete="email" required />
                <button className="wl__submit" type="submit">Join waitlist</button>
              </form>

              <div className="wl__social">
                <div className="wl__avatars" aria-hidden="true">
                  {avatars.map((src) => <img src={src} alt="" width="36" height="36" />)}
                </div>
                <p className="wl__count">Join 3000+ others</p>
              </div>
            </div>

            <footer className="wl__footer">
              <p>© 2026 Parley. For AI agent template</p>
              <p><a href="/terms-conditions">Terms&amp;Conditions</a></p>
            </footer>
          </div>

          <div className="wl__right">
            <img src="/assets/waitlist-app.png" alt="Parley AI agent Next.js template interface preview" />
          </div>
        </div>
      </Bare>
    </>
  );
}
