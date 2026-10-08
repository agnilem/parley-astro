'use client';

import { useEffect } from 'react';

/**
 * Mounts the site's behaviour: the same vanilla modules the Astro build runs
 * (src/scripts), loaded after hydration. They read the DOM React rendered and
 * enhance it, so every page is complete before any of this runs.
 *
 * "base" runs src/scripts/entry.js, after the Lottie player that Base renders
 * (the how-it-works animations need it), as Base.astro does. "bare" runs only
 * the form behaviour, as Bare.astro does.
 */
export default function Scripts({ layout }: { layout: 'base' | 'bare' }) {
  useEffect(() => {
    if (layout === 'bare') {
      import('@/scripts/forms.js').then(({ init }) => init());
      return;
    }
    const start = () => import('@/scripts/entry.js');
    const lottie = document.querySelector<HTMLScriptElement>('script[src="/assets/lottie.min.js"]');
    if (!lottie || (window as unknown as { lottie?: unknown }).lottie) start();
    else {
      lottie.addEventListener('load', start, { once: true });
      lottie.addEventListener('error', start, { once: true });
    }
  }, [layout]);
  return null;
}
