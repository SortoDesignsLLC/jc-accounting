import { socialMeta } from "../lib/social-meta";
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import team from "../assets/jc-team.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      ...socialMeta("/contact"),
      { title: "Contact Us | JC Taxes & Accounting Services" },
      {
        name: "description",
        content:
          "Get in touch with JC Taxes and Accounting Services in English or Spanish. Offices in Hyattsville and Glen Burnie, MD.",
      },
      { property: "og:title", content: "Contact Us | JC Taxes & Accounting Services" },
      {
        property: "og:description",
        content: "Get in touch with JC Taxes and Accounting Services in English or Spanish.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useLang();
  const [draftOpened, setDraftOpened] = useState(false);
  const en = lang === "en";
  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${en ? "Consultation inquiry" : "Consulta"} — ${String(data.get("name"))}`;
    const body = `${String(data.get("message"))}\n\n${String(data.get("name"))}\n${String(data.get("email"))}`;
    window.location.href = `mailto:${t.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }
  return (
    <SiteShell>
      <section className="page-intro page-width">
        <p className="eyebrow">{t.contactEyebrow}</p>
        <h1 className="page-title">
          {en ? (
            <>
              How can we
              <br />
              <em>help you today?</em>
            </>
          ) : (
            <>
              ¿Cómo podemos
              <br />
              <em>ayudarle hoy?</em>
            </>
          )}
        </h1>
        <p className="page-lead">{t.contactSubtitle}</p>
      </section>
      <section className="contact-layout page-width">
        <div className="contact-details" data-reveal>
          <img
            src={team}
            alt={en ? "Your JC accounting team" : "Su equipo de contabilidad JC"}
            width={1320}
            height={882}
          />
          <div className="contact-lines">
            {t.locations.map((office) => (
              <a key={office.city} href={`tel:${office.phone.replace(/-/g, "")}`}>
                <Phone size={17} />
                <span>
                  <strong>{office.city}</strong>
                  <span>{office.phone}</span>
                </span>
              </a>
            ))}
            <a href={`mailto:${t.email}`}>
              <Mail size={17} />
              <span>{t.email}</span>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={openEmail} data-reveal>
          <h2>{en ? "Tell us what's on your mind." : "Cuéntenos cómo podemos ayudarle."}</h2>
          <div className="form-row">
            <label>
              {t.form.name}
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder={t.form.namePlaceholder}
                required
              />
            </label>
            <label>
              {t.form.email}
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t.form.emailPlaceholder}
                required
              />
            </label>
          </div>
          <label>
            {t.form.help}
            <textarea name="message" rows={5} placeholder={t.form.helpPlaceholder} required />
          </label>
          <button type="submit" className="button">
            {en ? "Open email draft" : "Preparar correo"}
            <ArrowUpRight size={18} />
          </button>
          <p className="form-note" role="status">
            {draftOpened
              ? en
                ? "Send the draft in your email app to complete your inquiry. If it didn't open, use the email address or phone numbers here."
                : "Envíe el borrador en su aplicación de correo para completar la consulta. Si no se abrió, use el correo o los teléfonos que aparecen aquí."
              : en
                ? "Opens your email app with your message ready to send. Prefer a conversation? Give either office a call."
                : "Abre su aplicación de correo con el mensaje listo para enviar. ¿Prefiere conversar? Llame a cualquiera de nuestras oficinas."}
          </p>
        </form>
      </section>
    </SiteShell>
  );
}
