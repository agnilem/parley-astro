// Fonts ship with the site (no request to Google): DM Sans with its optical-size axis, upright and italic, and Geist.
import '@fontsource-variable/dm-sans/opsz.css';
import '@fontsource-variable/dm-sans/opsz-italic.css';
import '@fontsource-variable/geist';
import '@/styles/site.css';

/**
 * Document shell only. Head tags and page chrome come from src/layouts/Base.tsx
 * (or Bare.tsx), which every page renders, the way every Astro page renders
 * Base.astro. The fonts are the same on every page, so they are imported here.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
