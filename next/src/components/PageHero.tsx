// GENERATED from src/components/PageHero.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import type { Stat } from '@/lib/content';

interface Props {
  badge: string;
  lede?: string;
  stats?: Stat[];
  center?: boolean;
  className?: string;
  /** Renders the headline at Heading-1 size with Heading-2 weight, which is
   *  how the pricing and contact pages set theirs. */
  display?: boolean;
}

export default function PageHero({ badge, lede, stats, center = false, display = false, className: extra = '' , children , afterTitle }: Props & { children?: React.ReactNode; afterTitle?: React.ReactNode }) {
  return (
    <>
      <header className={`phero${center ? ' phero--center' : ''} ${extra}`.trim()}>
        <div className="phero__main">
          <p className="badge">{badge}</p>
          <h1 className={display ? 'phero__title ts-display' : 'phero__title'}>{children}</h1>
          {afterTitle}
        </div>
        {(lede || stats) && (
          <div className="phero__side">
            {lede && <p className="phero__lede">{lede}</p>}
            {stats && (
              <ul className="phero__stats" role="list">
                {stats.map((s) => (
                  <li className="phero__stat"><strong>{s.value}</strong><span>{s.label}</span></li>
                ))}
              </ul>
            )}
          </div>
        )}
      </header>
    </>
  );
}
