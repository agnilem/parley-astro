// GENERATED from src/components/LoadMore.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.


interface Props { label?: string; state?: 'default' | 'loading' | 'hidden' }

export default function LoadMore({ label = 'Load More', state = 'default' }: Props) {
  return (
    <>
      <button className={`loadmore is-${state}`} type="button" data-load-more="" aria-busy="false">
        <span className="loadmore__label">{label}</span>
        <span className="loadmore__spinner" aria-hidden="true"><i></i></span>
      </button>
    </>
  );
}
