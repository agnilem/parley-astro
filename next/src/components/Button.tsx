// GENERATED from src/components/Button.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.


interface Props {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  full?: boolean;
  className?: string;
}

export default function Button({ href, label, variant = 'primary', full = false, className: extra = '' }: Props) {
  const cls = ['fbtn', `fbtn--${variant}`, full && 'fbtn--full', extra].filter(Boolean).join(' ');

  return (
    <>
      <a href={href} className={cls}>
        <span className="fbtn__chip"
          ><span className="fbtn__arrows"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg
          ></span
        ></span
        ><span className="fbtn__label"><span>{label}</span><span aria-hidden="true">{label}</span></span>
      </a>
    </>
  );
}
