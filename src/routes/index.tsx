import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "../assets/hero-tax-preparer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JC Taxes & Accounting Services | Hyattsville & Glen Burnie, MD" },
      { name: "description", content: "Top-rated tax preparation, bookkeeping, payroll and IRS audit representation in Hyattsville and Glen Burnie, MD. 15+ years serving MD, DC and Virginia." },
      { property: "og:title", content: "JC Taxes & Accounting Services | Hyattsville & Glen Burnie, MD" },
      { property: "og:description", content: "Top-rated tax preparation, bookkeeping, payroll and IRS audit representation in Hyattsville and Glen Burnie, MD. 15+ years of experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const t = {
    en: {
      nav: ["Home", "Services", "About", "Locations", "Contact"],
      badge: "IRS Registered Tax Preparers · Bilingual EN / ES",
      headline: "Top-rated tax and accounting services in Hyattsville & Glen Burnie.",
      subheadline:
        "JC Taxes and Accounting Services is a professional firm serving individuals and businesses across Maryland, D.C. and Virginia — with personalized solutions built around your specific needs.",
      ctaPrimary: "Free Consultation",
      ctaSecondary: "Our services",
      stats: [
        ["15+", "Years of experience"],
        ["10,000+", "Tax returns prepared"],
        ["1,000+", "Businesses served"],
      ],
      servicesTitle: "Our Services",
      servicesSubtitle: "Everything individuals and small businesses need, in one office.",
      services: [
        { title: "Tax Preparation and Filing", description: "Individual and business returns prepared accurately and filed on time." },
        { title: "Bookkeeping & Payroll", description: "Clean monthly books and payroll handled so your records stay audit-ready." },
        { title: "Small Business Consultation", description: "Practical guidance on structure, taxes and growth for local business owners." },
        { title: "Tax Audits Resolution", description: "IRS audit representation and resolution, handled on your behalf." },
        { title: "Public Notary", description: "Notary services available at both our Maryland offices." },
        { title: "Birth Certificate Translation", description: "Certified translation of birth certificates and personal documents." },
        { title: "Financial Consulting & Tax Planning", description: "Year-round planning so tax season never catches you off guard." },
        { title: "And more!", description: "Retirement planning, personal and business tax services, and more — just ask." },
      ],
      uniqueTitle: "Unique Services",
      unique: [
        {
          title: "US DOT & MC Number Compliance",
          description:
            "Running a transportation company? We assist in obtaining and maintaining US DOT and MC numbers, ensuring full compliance with federal regulations.",
          cta: "Contact Us",
        },
        {
          title: "Start-up Business Consulting",
          description:
            "Are you a small business owner looking to save on taxes? Our strategic tax planning has helped many small businesses save substantial amounts, fostering their growth and success.",
          cta: "Free Consultation",
        },
      ],
      aboutLabel: "Meet the Team",
      aboutName: "Yessica Martinez",
      aboutRole: "Accountant | Tax Preparer",
      aboutBio:
        "With 15+ years of experience, provides top-rated tax preparation and accounting services in Hyattsville, MD and Glen Burnie, MD.",
      aboutTitle: "Our Commitment to Excellence",
      aboutBody:
        "We take pride in offering reliable tax preparation services and small business accounting solutions in Hyattsville and Glen Burnie. Our expertise in certified tax accounting ensures that our clients receive the best possible service, whether they're looking for affordable tax preparation or expert tax advice.",
      trustTitle: "Why Choose JC Taxes?",
      trustStats: [
        ["1,000+", "Businesses Served"],
        ["10,000+", "Tax Returns Prepared"],
        ["15+", "Years of Experience"],
        ["100%", "Client Satisfaction"],
      ],
      locationsTitle: "Our Locations",
      locationsSubtitle: "Serving Maryland, D.C. and Virginia",
      locations: [
        {
          city: "Hyattsville, MD",
          address: "3501 Hamilton St Suite 201C, Hyattsville, MD 20782",
          phone: "301-732-1690",
          description:
            "Top-rated tax preparation and accounting services. Specializing in business tax preparation and IRS audit representation, we provide reliable, affordable tax solutions for individuals and businesses.",
        },
        {
          city: "Glen Burnie, MD",
          address: "7310 Richie Hwy 200/GB10, Glen Burnie, MD 21061",
          phone: "240-877-8622",
          description:
            "Individual tax services, business tax preparation and IRS audit representation, plus personalized financial planning, bookkeeping and payroll services for the surrounding areas.",
        },
      ],
      contactTitle: "Let's Chat!",
      contactSubtitle: "Reach out in English or Spanish and we'll get right back to you.",
      emailLabel: "Email",
      form: {
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        help: "How can we help?",
        helpPlaceholder: "I need help with this year's filing…",
        submit: "Send message",
        reply: "We reply within one business day.",
      },
      footer: "© 2026 JC Taxes and Accounting Services",
      footerTag: "Serving Maryland, D.C. and Virginia · EN / ES",
    },
    es: {
      nav: ["Inicio", "Servicios", "Nosotros", "Ubicaciones", "Contacto"],
      badge: "Preparadores registrados ante el IRS · Bilingüe EN / ES",
      headline: "Servicios de impuestos y contabilidad en Hyattsville y Glen Burnie.",
      subheadline:
        "JC Taxes and Accounting Services es una firma profesional que atiende a personas y empresas en Maryland, D.C. y Virginia, con soluciones personalizadas según sus necesidades.",
      ctaPrimary: "Consulta gratuita",
      ctaSecondary: "Nuestros servicios",
      stats: [
        ["15+", "Años de experiencia"],
        ["10,000+", "Declaraciones preparadas"],
        ["1,000+", "Negocios atendidos"],
      ],
      servicesTitle: "Nuestros Servicios",
      servicesSubtitle: "Todo lo que personas y pequeñas empresas necesitan, en una sola oficina.",
      services: [
        { title: "Preparación y presentación de impuestos", description: "Declaraciones personales y de negocios preparadas con precisión y presentadas a tiempo." },
        { title: "Contabilidad y nómina", description: "Libros mensuales ordenados y nómina puntual para mantener sus registros al día." },
        { title: "Consultoría para pequeñas empresas", description: "Orientación práctica sobre estructura, impuestos y crecimiento del negocio." },
        { title: "Resolución de auditorías", description: "Representación ante el IRS y resolución de auditorías en su nombre." },
        { title: "Notaría pública", description: "Servicios de notaría disponibles en nuestras dos oficinas de Maryland." },
        { title: "Traducción de actas de nacimiento", description: "Traducción certificada de actas de nacimiento y documentos personales." },
        { title: "Consultoría financiera y planeación fiscal", description: "Planeación durante todo el año para que la temporada fiscal nunca lo sorprenda." },
        { title: "¡Y más!", description: "Planeación de retiro, servicios fiscales personales y de negocio, y más — solo pregunte." },
      ],
      uniqueTitle: "Servicios Únicos",
      unique: [
        {
          title: "Cumplimiento de US DOT y número MC",
          description:
            "¿Tiene una compañía de transporte? Le ayudamos a obtener y mantener los números US DOT y MC, asegurando el cumplimiento total de las regulaciones federales.",
          cta: "Contáctenos",
        },
        {
          title: "Consultoría para nuevos negocios",
          description:
            "¿Es dueño de un pequeño negocio y busca ahorrar en impuestos? Nuestra planeación fiscal estratégica ha ayudado a muchas pequeñas empresas a ahorrar cantidades importantes, impulsando su crecimiento y éxito.",
          cta: "Consulta gratuita",
        },
      ],
      aboutLabel: "Conozca al equipo",
      aboutName: "Yessica Martinez",
      aboutRole: "Contadora | Preparadora de impuestos",
      aboutBio:
        "Con más de 15 años de experiencia, ofrece servicios de preparación de impuestos y contabilidad de primer nivel en Hyattsville, MD y Glen Burnie, MD.",
      aboutTitle: "Nuestro compromiso con la excelencia",
      aboutBody:
        "Nos enorgullece ofrecer servicios confiables de preparación de impuestos y soluciones contables para pequeñas empresas en Hyattsville y Glen Burnie. Nuestra experiencia asegura que cada cliente reciba el mejor servicio posible.",
      trustTitle: "¿Por qué elegir JC Taxes?",
      trustStats: [
        ["1,000+", "Negocios atendidos"],
        ["10,000+", "Declaraciones preparadas"],
        ["15+", "Años de experiencia"],
        ["100%", "Satisfacción del cliente"],
      ],
      locationsTitle: "Nuestras Ubicaciones",
      locationsSubtitle: "Atendiendo Maryland, D.C. y Virginia",
      locations: [
        {
          city: "Hyattsville, MD",
          address: "3501 Hamilton St Suite 201C, Hyattsville, MD 20782",
          phone: "301-732-1690",
          description:
            "Servicios de impuestos y contabilidad de primer nivel. Especialistas en impuestos de negocios y representación ante auditorías del IRS, con soluciones confiables y accesibles.",
        },
        {
          city: "Glen Burnie, MD",
          address: "7310 Richie Hwy 200/GB10, Glen Burnie, MD 21061",
          phone: "240-877-8622",
          description:
            "Impuestos personales y de negocio, representación ante auditorías del IRS, además de planeación financiera, contabilidad y nómina para el área circundante.",
        },
      ],
      contactTitle: "¡Hablemos!",
      contactSubtitle: "Escríbanos en inglés o español y le responderemos pronto.",
      emailLabel: "Correo",
      form: {
        name: "Nombre completo",
        namePlaceholder: "Su nombre",
        email: "Correo electrónico",
        emailPlaceholder: "usted@correo.com",
        help: "¿Cómo podemos ayudarle?",
        helpPlaceholder: "Necesito ayuda con la declaración de este año…",
        submit: "Enviar mensaje",
        reply: "Respondemos en un día hábil.",
      },
      footer: "© 2026 JC Taxes and Accounting Services",
      footerTag: "Atendiendo Maryland, D.C. y Virginia · EN / ES",
    },
  }[lang];


  return (
    <div className="min-h-screen bg-background text-ink font-body antialiased overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-cool/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-crimson/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-ice/80 blur-3xl" />
      </div>

      <header id="top" className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-11 grid place-items-center bg-crimson text-white font-display font-bold text-lg tracking-tight clip-logo">
              JC
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-ink text-[15px] tracking-tight">
                JC Taxes and Accounting
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-mist">
                Services
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-9 text-[13px] font-sans font-semibold text-ink-soft">
            {t.nav.map((item, i) => (
              <a
                key={item}
                href={["#top", "#services", "#about", "#locations", "#contact"][i]}
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
                      {t.aboutName}
                    </p>
                    <p className="text-[12px] text-mist">{t.aboutRole}</p>
                  </div>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-crimson-soft">
                    15+ {lang === "en" ? "yrs" : "años"}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block glass rounded-xl px-5 py-4 max-w-[230px]">
                <div className="flex items-center gap-1 text-crimson-soft">
                  ★★★★★
                </div>
                <p className="mt-2 text-[12px] leading-snug text-ink/90 font-body">
                  {t.aboutBio}
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
                {lang === "en" ? "Ask about a service →" : "Pregunte por un servicio →"}
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.services.map((service, idx) => (
                <div
                  key={service.title}
                  className="glass rounded-2xl p-6 hover:bg-white/90 transition-colors"
                >
                  <div className="size-11 grid place-items-center rounded-lg bg-crimson/10 text-crimson-soft font-display font-bold clip-logo">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg text-ink leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] text-ink-soft leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink mb-10">
              {t.uniqueTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.unique.map((item) => (
                <div key={item.title} className="glass rounded-2xl p-8 flex flex-col">
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-ink-soft leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 self-start bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-6 py-3 rounded-md clip-cta"
                  >
                    {item.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border bg-white/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="relative rounded-2xl glass p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-crimson/10 blur-3xl" />
              <div className="relative z-10">
                <span className="text-xs font-semibold text-crimson-soft tracking-[0.14em] uppercase">
                  {t.aboutLabel}
                </span>
                <h3 className="mt-4 font-display font-bold text-3xl text-ink">
                  {t.aboutName}
                </h3>
                <p className="text-sm text-mist mt-1">{t.aboutRole}</p>
                <p className="mt-4 font-body text-ink-soft leading-relaxed">
                  {t.aboutBio}
                </p>
                <h4 className="mt-8 font-display font-bold text-xl text-ink">
                  {t.aboutTitle}
                </h4>
                <p className="mt-3 font-body text-[15px] text-ink-soft leading-relaxed">
                  {t.aboutBody}
                </p>
              </div>
              <div className="relative z-10 rounded-xl bg-ink text-white p-6">
                <p className="text-xs text-white/60 tracking-[0.14em] uppercase">
                  {t.trustTitle}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-y-6 gap-x-4">
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

        <section id="locations" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-crimson-soft mb-3">
              {t.locationsSubtitle}
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink mb-10">
              {t.locationsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.locations.map((loc) => (
                <div key={loc.city} className="glass rounded-2xl p-8">
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {loc.city}
                  </h3>
                  <p className="mt-4 font-body text-ink-soft leading-relaxed">
                    {loc.description}
                  </p>
                  <p className="mt-6 text-sm text-ink font-sans font-semibold">
                    {loc.address}
                  </p>
                  <a
                    href={`tel:${loc.phone.replace(/-/g, "")}`}
                    className="mt-2 inline-block text-sm font-sans font-semibold text-crimson hover:text-crimson-soft transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
              ))}
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
                  {t.locations.map((loc) => (
                    <p key={loc.city} className="flex items-center gap-3 text-sm text-ink-soft">
                      <span className="grid place-items-center size-8 rounded-md bg-ice text-crimson font-display font-semibold">
                        ✆
                      </span>
                      <span>
                        <span className="font-semibold text-ink">{loc.city}</span>{" "}
                        <a href={`tel:${loc.phone.replace(/-/g, "")}`} className="hover:text-crimson transition-colors">
                          {loc.phone}
                        </a>
                      </span>
                    </p>
                  ))}
                  <p className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="grid place-items-center size-8 rounded-md bg-ice text-crimson font-display font-semibold">
                      ✉
                    </span>
                    <a href="mailto:Yessicamartinez893@gmail.com" className="hover:text-crimson transition-colors">
                      Yessicamartinez893@gmail.com
                    </a>
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
                JC Taxes and Accounting Services
              </p>
              <p className="text-[11px] text-mist">{t.footerTag}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-[12px] font-sans font-semibold text-ink-soft">
            {t.nav.map((item, i) => (
              <a
                key={item}
                href={["#top", "#services", "#about", "#locations", "#contact"][i]}
                className="hover:text-ink transition-colors"
              >
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
