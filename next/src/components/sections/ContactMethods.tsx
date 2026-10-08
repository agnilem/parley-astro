// GENERATED from src/components/sections/ContactMethods.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { group, type ContactMethod } from '@/lib/content';

export default async function ContactMethods() {
  const methods = await group<ContactMethod>('contactMethods');
  const icons: Record<string, string> = {
    mail: '<rect x="2.5" y="4.5" width="15" height="11" rx="2"/><path d="m3 6 7 5 7-5"/>',
    press: '<path d="M10 3v14M3 10h14M5.2 5.2l9.6 9.6M14.8 5.2l-9.6 9.6"/>',
    pin: '<path d="M10 17s5.5-4.6 5.5-8.5a5.5 5.5 0 1 0-11 0C4.5 12.4 10 17 10 17Z"/><circle cx="10" cy="8.5" r="2"/>',
  };

  return (
    <>
      <ul className="cmethods" role="list">
        {methods.map((m) => (
          <li className="cmethod">
            <span className="cmethod__icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: icons[m.icon] }} />
            </span>
            <h5 className="cmethod__title">{m.title}</h5>
            <p className="cmethod__desc">{m.desc}</p>
            {m.value && (
              m.value.includes('@')
                ? <a className="cmethod__value" href={`mailto:${m.value}`}>{m.value}</a>
                : <p className="cmethod__value">{m.value}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
