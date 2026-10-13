'use client';

import { useEffect } from 'react';

/**
 * Mounts the site's behaviour: the same vanilla modules the Astro build runs
 * (src/scripts), loaded after hydration. They read the DOM React rendered and
 * enhance it, so every page is complete before any of this runs.
 *
 * "base" runs src/scripts/entry.js, as Base.astro does (the how-it-works
 * module fetches the Lottie player itself, when its panel nears the viewport).
 * "bare" runs only the form behaviour, as Bare.astro does.
 */
export default function Scripts({ layout }: { layout: 'base' | 'bare' }) {
  useEffect(() => {
    if (layout === 'bare') {
      import('@/scripts/forms.js').then(({ init }) => init());
      return;
    }
    import('@/scripts/entry.js');
  }, [layout]);
  return null;
}
