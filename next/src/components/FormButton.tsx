// GENERATED from src/components/FormButton.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.


interface Props {
  label: string;
  state?: 'default' | 'loading' | 'disabled' | 'success' | 'error';
  type?: 'submit' | 'button';
  className?: string;
}

export default function FormButton({ label, state = 'default', type = 'submit', className: extra = '' }: Props) {
  return (
    <>
      <button
        className={`fbtn fbtn--primary formbtn is-${state} ${extra}`.trim()}
        type={type}
        data-form-button=""
        disabled={state === 'disabled'}
        aria-busy={state === 'loading' ? 'true' : undefined}
      >
        <span className="fbtn__chip">
          <span className="fbtn__arrows"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg
          ></span>
          <span className="formbtn__check" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="m6 12.5 4 4 8-9" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="formbtn__spinner" aria-hidden="true"><i></i></span>
        </span>
        <span className="fbtn__label"><span>{label}</span><span aria-hidden="true">{label}</span></span>
      </button>
    </>
  );
}
