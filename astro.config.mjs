import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://parley-astro.vercel.app',
  devToolbar: { enabled: false },
});
