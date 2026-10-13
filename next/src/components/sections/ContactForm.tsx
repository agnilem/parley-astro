// GENERATED from src/components/sections/ContactForm.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import FormButton from '@/components/FormButton';

export default function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';
  const fields = [
    { id: 'first-name', label: 'First name', type: 'text', placeholder: 'Sarah', autocomplete: 'given-name' },
    { id: 'work-email', label: 'Work email', type: 'email', placeholder: 'sarah@example.com', autocomplete: 'email' },
    { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Inc.', autocomplete: 'organization' },
  ];

  return (
    <>
      <div className="cform">
        <img className="cform__bg" src="/assets/contact-clouds.webp" alt="" loading="lazy" />
        <form
          className="cform__panel"
          method="post"
          action="#"
          data-demo-form=""
          data-endpoint={endpoint || undefined}
          data-success-url="/thank-you"
        >
          {fields.map((f) => (
            <div className="cform__field">
              <label className="cform__label" htmlFor={f.id}>{f.label}</label>
              <input className="cform__input" id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} autoComplete={f.autocomplete} />
            </div>
          ))}
          <div className="cform__field">
            <label className="cform__label" htmlFor="message">Your message</label>
            <textarea className="cform__input cform__input--area" id="message" name="message" rows={4} placeholder="Drop your message…"></textarea>
          </div>
          <FormButton label="Send your message" className="cform__submit" />
        </form>
      </div>
    </>
  );
}
