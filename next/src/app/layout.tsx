import '@/styles/site.css';

/**
 * Document shell only. Head tags and page chrome come from src/layouts/Base.tsx
 * (or Bare.tsx), which every page renders, the way every Astro page renders
 * Base.astro. The font links are the same on every page, so they live here.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400;1,9..40,500;1,9..40,600&family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
