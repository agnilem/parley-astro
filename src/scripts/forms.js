/**
 * Drives the Form button's state variants (Default -> Loading -> Success or
 * Error).
 *
 * Where submissions go: a form carrying data-endpoint posts its fields there
 * as JSON. The default endpoint is the template's demo relay, which does not
 * forward anything to a person; it answers the sender once to say the form is
 * still pointing at the demo and how to connect their own. A buyer sets
 * PUBLIC_FORM_ENDPOINT to their own handler, or to an empty string to keep
 * submissions entirely local.
 *
 * The relay lives on another origin and sends no CORS headers, so the post
 * goes out as a CORS-safelisted text/plain body in no-cors mode: the request
 * is delivered, the response is opaque. Nothing here depends on reading it,
 * and the Framer original reports success optimistically too.
 */
export function init() {
  for (const form of document.querySelectorAll('form[data-demo-form]')) {
    const btn = form.querySelector('[data-form-button]') ?? form.querySelector('[type="submit"]');
    if (!btn) continue;

    // Screen readers hear what the button's visual states show.
    const live = document.createElement('p');
    live.className = 'visually-hidden';
    live.setAttribute('aria-live', 'polite');
    form.append(live);
    const messages = {
      loading: 'Sending…',
      success: 'Sent. Thanks, we’ll be in touch.',
      error: 'Something’s missing. Check the highlighted field and try again.',
    };

    const set = (state) => {
      btn.classList.remove('is-default', 'is-loading', 'is-success', 'is-error', 'is-disabled');
      btn.classList.add('is-' + state);
      btn.setAttribute('aria-busy', String(state === 'loading'));
      live.textContent = messages[state] ?? '';
    };

    const deliver = (endpoint) => {
      const data = Object.fromEntries(new FormData(form).entries());
      // Lets the relay tell a code-build submission apart from a Framer one.
      data._source = 'parley-astro';
      return fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(data),
        keepalive: true,
      });
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (btn.classList.contains('is-loading')) return;

      if (!form.checkValidity()) { set('error'); form.reportValidity(); return; }

      set('loading');
      const endpoint = form.getAttribute('data-endpoint');
      const sent = endpoint ? deliver(endpoint).catch(() => {}) : Promise.resolve();
      // Hold the loading state for at least a beat so it reads as a round trip.
      Promise.all([sent, new Promise((r) => window.setTimeout(r, 900))]).then(() => {
        set('success');
        const done = form.getAttribute('data-success-url');
        if (done) window.location.assign(done);
      });
    });

    form.addEventListener('input', () => {
      if (btn.classList.contains('is-error')) set('default');
    });
  }
}
