// GENERATED from src/components/StoreBadge.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.


export default function StoreBadge() {
  const show = process.env.NEXT_PUBLIC_STORE_BADGE === 'true';
  const href =
    'https://buy.polar.sh/polar_cl_C7mCmNfCQK9xTynrq5u0t4I4CpMoRc5tN5UCB3mx56l?utm_source=astro-demo&utm_medium=badge&utm_campaign=parley';
  const label = 'All Astro Themes';

  return (
    <>
      {show && (
        <a href={href} className="fbtn fbtn--primary store-badge" target="_blank" rel="noreferrer">
          <span className="fbtn__chip"
            ><span className="fbtn__arrows"
              ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg
              ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg
            ></span
          ></span
          ><span className="fbtn__label"><span>{label}</span><span aria-hidden="true">{label}</span></span>
        </a>
      )}
    </>
  );
}
