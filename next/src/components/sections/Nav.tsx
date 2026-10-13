// GENERATED from src/components/sections/Nav.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Button from '@/components/Button';
import { group, type Link } from '@/lib/content';

export default async function Nav() {
  const links = await group<Link>('navLinks');

  return (
    <>
      <header className="nav-bar" data-nav="">
        <nav className="nav" aria-label="Main">
          <a href="/" className="nav__brand" aria-label="Parley">
            <img src="/assets/parley-logo.webp" alt="Parley" width="78" height="26" />
          </a>

          <button className="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Open menu" data-nav-toggle="">
            <span className="nav__burger" aria-hidden="true"><i></i><i></i></span>
          </button>

          <div className="nav__right" id="nav-menu" data-nav-menu="">
            <ul className="nav__links">
              {links.map((l, i) => (
                <>
                  {i > 0 && <li aria-hidden="true" className="nav__sep"></li>}
                  <li className={l.dropdown ? 'nav__item nav__item--has-menu' : 'nav__item'}>
                    <a href={l.href} aria-haspopup={l.dropdown ? 'true' : undefined}>{l.label}</a>
                    {l.dropdown && (
                      <div className="nav__drop" role="group" aria-label={`${l.label} links`}>
                        {l.dropdown.map((s) => (
                          <a className="nav__dropitem" href={s.href}>
                            <span className="nav__dropdot" aria-hidden="true"></span>{s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                </>
              ))}
            </ul>
            <Button href="/pricing" label="Hire Parley" variant="primary" className="nav__cta" />
          </div>
        </nav>
      </header>
    </>
  );
}
