import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "../assets/hero-tax-preparer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JC Accounting & Tax Services LLC" },
      { name: "description", content: "Tax preparation, bookkeeping, payroll, and small business advisory in English and Spanish." },
      { property: "og:title", content: "JC Accounting & Tax Services LLC" },
      { property: "og:description", content: "Tax preparation, bookkeeping, payroll, and small business advisory in English and Spanish." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const t = {
    en: {
      nav: ["Home", "Services", "About", "Locations", "Contact"],
      badge: "Est. 2011 · Bilingual · EN / ES",
      headline: "Clarity in every number, confidence in every filing.",
      subheadline:
        "A trusted accounting and tax practice for small businesses and individuals. We turn complex filings, payroll, and books into decisions you can actually make.",
      ctaPrimary: "Start your tax season",
      ctaSecondary: "Explore services",
      stats: [
        ["14 yrs", "In practice"],
        ["2,300+", "Returns filed"],
        ["98%", "On-time delivery"],
      ],
      servicesTitle: "Services built for the way you run your money.",
      servicesSubtitle: "Three services, one standard of care.",
      services: [
        {
          title: "Tax Preparation & Filing",
          description:
            "Individual 1040s, 1120s & 1065s reviewed line-by-line. We find every deduction you've been leaving on the table.",
          price: "From $250 · Individual",
        },
        {
          title: "Bookkeeping & Payroll",
          description:
            "Clean monthly books, reconciled accounts, and payroll that runs on schedule — so your numbers are always auditable.",
          price: "From $390/mo · Business",
        },
        {
          title: "Small Business Advisory",
          description:
            "Entity structuring, cash-flow planning, and quarterly check-ins that keep your growing business ahead of the season.",
          price: "Custom · Retainer",
        },
      ],
      trustTitle: "Trusted by local owners, year after year.",
      trustQuote:
        "They made my S-corp books painless for the first time. I actually understand where the money goes.",
      trustAuthor: "R. Delgado, Owner",
      trustStats: [
        ["312", "active clients"],
        ["2", "neighborhood offices"],
        ["EN / ES", "fully bilingual staff"],
        ["$4.8M", "credits secured"],
      ],
      contactTitle: "Start the conversation",
      contactSubtitle: "Reach out in English or Spanish. We reply within one business day.",
      form: {
        name: "Full name",
        namePlaceholder: "Jane Miller",
        email: "Email",
        emailPlaceholder: "jane@company.com",
        help: "How can we help?",
        helpPlaceholder: "I need help with this year's filing and quarterly estimates…",
        submit: "Send message",
        reply: "We reply within one business day.",
      },
      footer: "© 2024 JC Accounting & Tax Services LLC",
    },
    es: {
      nav: ["Inicio", "Servicios", "Nosotros", "Ubicaciones", "Contacto"],
      badge: "Desde 2011 · Bilingüe · EN / ES",
      headline: "Claridad en cada cifra, confianza en cada declaración.",
      subheadline:
        "Una firma de contabilidad y tributos de confianza para pequeñas empresas y personas. Convertimos declaraciones complejas, nóminas y libros en decisiones claras.",
      ctaPrimary: "Inicie su temporada fiscal",
      ctaSecondary: "Explore servicios",
      stats: [
        ["14 años", "De trayectoria"],
        ["2,300+", "Declaraciones presentadas"],
        ["98%", "Entregas a tiempo"],
      ],
      servicesTitle: "Servicios diseñados para cómo maneja su dinero.",
      servicesSubtitle: "Tres servicios, un solo estándar de cuidado.",
      services: [
        {
          title: "Preparación y presentación de impuestos",
          description:
            "Formularios 1040, 1120 y 1065 revisados línea por línea. Encontramos cada deducción que ha dejado pasar.",
          price: "Desde $250 · Individual",
        },
        {
          title: "Contabilidad y nómina",
          description:
            "Libros limpios cada mes, cuentas conciliadas y nómina puntual — para que sus números siempre estén auditables.",
          price: "Desde $390/mes · Empresa",
        },
        {
          title: "Asesoría para pequeñas empresas",
          description:
            "Estructura de entidad, planeación de flujo de caja y revisiones trimestrales que mantienen su negocio adelante.",
          price: "Personalizado · Retainer",
        },
      ],
      trustTitle: "Confiado por dueños locales, año tras año.",
      trustQuote:
        "Por primera vez mis libros de S-corp fueron sencillos. Finalmente entiendo a dónde va el dinero.",
      trustAuthor: "R. Delgado, Dueño",
      trustStats: [
        ["312", "clientes activos"],
        ["2", "oficinas locales"],
        ["EN / ES", "personal bilingüe"],
        ["$4.8M", "créditos asegurados"],
      ],
      contactTitle: "Inicie la conversación",
      contactSubtitle: "Escríbanos en inglés o español. Respondemos en un día hábil.",
      form: {
        name: "Nombre completo",
        namePlaceholder: "Jane Miller",
        email: "Correo electrónico",
        emailPlaceholder: "jane@company.com",
        help: "¿Cómo podemos ayudarle?",
        helpPlaceholder: "Necesito ayuda con la declaración de este año y estimados trimestrales…",
        submit: "Enviar mensaje",
        reply: "Respondemos en un día hábil.",
      },
      footer: "© 2024 JC Accounting & Tax Services LLC",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-background text-ink font-body antialiased overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-cool/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-crimson/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-ice/80 blur-3xl" />
      </div>

      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-11 grid place-items-center bg-crimson text-white font-display font-bold text-lg tracking-tight clip-logo">
              JC
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-ink text-[15px] tracking-tight">
                JC Accounting & Tax
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-mist">
                Services LLC
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-9 text-[13px] font-sans font-semibold text-ink-soft">
            {t.nav.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-ink transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center rounded-full border border-border text-[11px] font-sans font-semibold px-1 py-1 bg-white/60">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en"
                    ? "bg-ink text-white"
                    : "text-mist hover:text-ink"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "es"
                    ? "bg-ink text-white"
                    : "text-mist hover:text-ink"
                }`}
              >
                ES
              </button>
            </div>
            <a
              href="#contact"
              className="bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-[13px] px-5 py-2.5 rounded-md clip-cta"
            >
              {lang === "en" ? "Book a Consult" : "Agendar consulta"}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-7 glass rounded-full px-4 py-2">
              <span className="size-1.5 rounded-full bg-crimson-soft" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-ink-soft">
                {t.badge}
              </span>
            </div>
            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-[clamp(2.6rem,6vw,4.2rem)] text-ink">
              {t.headline}
            </h1>
            <p className="mt-6 font-body text-ink-soft text-lg max-w-xl leading-relaxed">
              {t.subheadline}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-md clip-cta"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#services"
                className="glass hover:bg-white/90 transition-colors font-sans font-semibold text-sm px-7 py-3.5 rounded-md text-ink"
              >
                {t.ctaSecondary}
              </a>
            </div>
            <div className="mt-12 glass rounded-2xl px-6 py-5 grid grid-cols-3 gap-4">
              {t.stats.map(([value, label]) => (
                <div key={label}>
                  <p className="font-display font-bold text-2xl md:text-3xl text-ink">
                    {value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-mist mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cool/20 via-transparent to-crimson/20 blur-2xl" />
              <div className="relative rounded-2xl glass p-3">
                <img
                  src={heroImg}
                  alt="Professional tax preparer reviewing financial documents"
                  className="w-full aspect-[4/5] object-cover rounded-lg bg-ice"
                />
                <div className="mt-3 flex items-center justify-between px-1 pb-1">
                  <div>
                    <p className="font-sans font-semibold text-sm text-ink">
                      {lang === "en" ? "Next available consult" : "Próxima consulta disponible"}
                    </p>
                    <p className="text-[12px] text-mist">
                      {lang === "en" ? "Mon, May 12 · 10:30 AM" : "Lun, 12 may · 10:30 a. m."}
                    </p>
                  </div>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-crimson-soft">
                    {lang === "en" ? "Slots open" : "Cupos abiertos"}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block glass rounded-xl px-5 py-4 max-w-[220px]">
                <div className="flex items-center gap-1 text-crimson-soft">
                  ★★★★★
                </div>
                <p className="mt-2 text-[12px] leading-snug text-ink/90 font-body">
                  {t.trustQuote}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-mist">
                  — {t.trustAuthor}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border bg-white/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-crimson-soft mb-3">
                  {lang === "en" ? "What we handle" : "Lo que manejamos"}
                </p>
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">
                  {t.servicesTitle}
                </h2>
                <p className="mt-2 text-sm text-mist">{t.servicesSubtitle}</p>
              </div>
              <a
                href="#contact"
                className="text-[13px] font-sans font-semibold text-ink-soft hover:text-ink transition-colors"
              >
                {lang === "en" ? "All services →" : "Todos los servicios →"}
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.services.map((service, idx) => (
                <div
                  key={service.title}
                  className={`glass rounded-2xl p-7 hover:bg-white/90 transition-colors ${
                    idx === 1 ? "md:translate-y-6" : ""
                  }`}
                >
                  <div className="size-12 grid place-items-center rounded-lg bg-crimson/10 text-crimson-soft font-display font-bold text-lg clip-logo">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] text-ink-soft leading-relaxed">
                    {service.description}
                  </p>
                  <p className="mt-5 text-[12px] font-sans font-semibold text-crimson-soft">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="relative rounded-2xl glass p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-crimson/10 blur-3xl" />
              <div className="relative z-10">
                <span className="text-xs font-semibold text-crimson-soft tracking-[0.14em] uppercase">
                  {lang === "en" ? "Trusted locally" : "Confianza local"}
                </span>
                <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-pretty text-ink">
                  “{t.trustQuote}”
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="size-11 rounded-full bg-ice flex items-center justify-center font-display font-bold text-ink-soft">
                    RD
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">R. Delgado</p>
                    <p className="text-xs text-mist">{t.trustAuthor}</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 rounded-xl bg-ink text-white p-6">
                <p className="text-xs text-white/60 tracking-[0.14em] uppercase">
                  {lang === "en" ? "By the numbers" : "En cifras"}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-y-5 gap-x-4">
                  {t.trustStats.map(([value, label]) => (
                    <div key={label}>
                      <p className="font-display text-2xl md:text-3xl font-bold">
                        {value}
                      </p>
                      <p className="text-xs text-white/60 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-white/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-crimson-soft mb-3">
                  {lang === "en" ? "Get in touch" : "Contacto"}
                </p>
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">
                  {t.contactTitle}
                </h2>
                <p className="mt-4 text-ink-soft max-w-md">{t.contactSubtitle}</p>
                <div className="mt-8 space-y-4">
                  <p className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="grid place-items-center size-8 rounded-md bg-ice text-crimson font-display font-semibold">
                      ✆
                    </span>
                    (555) 014-2280
                  </p>
                  <p className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="grid place-items-center size-8 rounded-md bg-ice text-crimson font-display font-semibold">
                      ✉
                    </span>
                    hello@jcaccountingtax.com
                  </p>
                  <p className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="grid place-items-center size-8 rounded-md bg-ice text-crimson font-display font-semibold">
                      ◷
                    </span>
                    {lang === "en" ? "Mon–Fri, 8:30a–5:00p" : "Lun–Vie, 8:30–17:00"}
                  </p>
                </div>
              </div>
              <form className="glass rounded-2xl p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold text-ink-soft">
                      {t.form.name}
                    </span>
                    <input
                      type="text"
                      placeholder={t.form.namePlaceholder}
                      className="mt-2 w-full rounded-md bg-white/70 px-4 py-3 text-sm text-ink ring-1 ring-border placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-crimson/40 transition"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-ink-soft">
                      {t.form.email}
                    </span>
                    <input
                      type="email"
                      placeholder={t.form.emailPlaceholder}
                      className="mt-2 w-full rounded-md bg-white/70 px-4 py-3 text-sm text-ink ring-1 ring-border placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-crimson/40 transition"
                    />
                  </label>
                </div>
                <label className="block mt-5">
                  <span className="text-xs font-semibold text-ink-soft">
                    {t.form.help}
                  </span>
                  <textarea
                    rows={4}
                    placeholder={t.form.helpPlaceholder}
                    className="mt-2 w-full rounded-md bg-white/70 px-4 py-3 text-sm text-ink ring-1 ring-border placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-crimson/40 transition resize-none"
                  />
                </label>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-mist">{t.form.reply}</p>
                  <button
                    type="button"
                    className="bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-6 py-3 rounded-md clip-cta"
                  >
                    {t.form.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-9 grid place-items-center bg-crimson text-white font-display font-bold text-sm clip-logo">
              JC
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-sm text-ink">
                JC Accounting & Tax Services LLC
              </p>
              <p className="text-[11px] text-mist">
                {lang === "en"
                  ? "Serving small businesses & individuals · EN / ES"
                  : "Atendiendo pequeñas empresas y personas · EN / ES"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-[12px] font-sans font-semibold text-ink-soft">
            {t.nav.map((item) => (
              <a key={item} href="#" className="hover:text-ink transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="text-[11px] text-mist">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
