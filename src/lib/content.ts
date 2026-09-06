export type Lang = "en" | "es";

const en = {
  nav: ["Home", "Services", "About", "Locations", "Contact"],
  bookCta: "Book a Consult",
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
  servicesEyebrow: "What we handle",
  servicesTitle: "Our Services",
  servicesSubtitle: "Everything individuals and small businesses need, in one office.",
  askAboutService: "Ask about a service →",
  allServices: "All Services",
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
  contactEyebrow: "Get in touch",
  contactTitle: "Let's Chat!",
  contactSubtitle: "Reach out in English or Spanish and we'll get right back to you.",
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
  email: "Yessicamartinez893@gmail.com",
  yearsSuffix: "yrs",
  footer: "© 2026 JC Taxes and Accounting Services",
  footerTag: "Serving Maryland, D.C. and Virginia · EN / ES",
};

const es: typeof en = {
  nav: ["Inicio", "Servicios", "Nosotros", "Ubicaciones", "Contacto"],
  bookCta: "Agendar consulta",
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
  servicesEyebrow: "Lo que manejamos",
  servicesTitle: "Nuestros Servicios",
  servicesSubtitle: "Todo lo que personas y pequeñas empresas necesitan, en una sola oficina.",
  askAboutService: "Pregunte por un servicio →",
  allServices: "Todos los servicios",
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
  contactEyebrow: "Contacto",
  contactTitle: "¡Hablemos!",
  contactSubtitle: "Escríbanos en inglés o español y le responderemos pronto.",
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
  email: "Yessicamartinez893@gmail.com",
  yearsSuffix: "años",
  footer: "© 2026 JC Taxes and Accounting Services",
  footerTag: "Atendiendo Maryland, D.C. y Virginia · EN / ES",
};

export const copy = { en, es };
export type SiteCopy = typeof en;
