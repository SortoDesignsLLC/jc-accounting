import { socialMeta } from "../lib/social-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Phone,
  CheckCircle2,
  MessagesSquare,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import yessica from "../assets/yessica-martinez.jpg";
import team from "../assets/jc-team.jpg";
import { SiteShell } from "../components/site-layout";
import { ContactInvitation } from "../components/site-sections";
import { useLang } from "../lib/lang";
import { serviceImages } from "../lib/service-images";

const processIcons = [MessagesSquare, ClipboardList, TrendingUp];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...socialMeta("/"),
      { title: "JC Taxes & Accounting | Tax Preparation & Business Accounting in Maryland" },
      {
        name: "description",
        content:
          "Tax preparation, bookkeeping, payroll and business guidance in Hyattsville and Glen Burnie, Maryland. Bilingual service. Schedule your free consultation with JC.",
      },
      {
        property: "og:title",
        content: "JC Taxes & Accounting | Personal Service. Professional Expertise.",
      },
      {
        property: "og:description",
        content:
          "Experienced tax and accounting support for individuals and small businesses in Maryland, D.C. and Virginia.",
      },
    ],
  }),
  component: Index,
});
function Index() {
  const { t, lang } = useLang();
  const en = lang === "en";
  return (
    <SiteShell>
      <section className="business-hero">
        <div className="page-width business-hero-inner">
          <div className="business-hero-copy hero-enter">
            <p className="eyebrow">JC TAXES & ACCOUNTING SERVICES</p>
            <h1>
              {en ? (
                <>
                  Expert tax help.
                  <br />
                  Accounting you
                  <br />
                  <span>can count on.</span>
                </>
              ) : (
                <>
                  Sus impuestos.
                  <br />
                  Su contabilidad.
                  <br />
                  <span>En buenas manos.</span>
                </>
              )}
            </h1>
            <p className="business-hero-description">
              {en
                ? "Personalized tax preparation, bookkeeping, and business guidance from a team that puts you first. Serving individuals and businesses across Maryland, D.C., and Virginia."
                : "Impuestos, contabilidad y asesoría empresarial con un equipo que le da prioridad. Atendemos a personas y negocios en Maryland, D.C. y Virginia."}
            </p>
            <div className="business-hero-actions">
              <Link to="/contact" className="button">
                {en ? "Schedule a Free Consultation" : "Agendar consulta gratuita"}
                <ArrowUpRight size={18} />
              </Link>
              <a href="tel:3017321690" className="button button-outline">
                <Phone size={16} />
                301-732-1690
              </a>
            </div>
            <div className="hero-assurances">
              <span>
                <CheckCircle2 size={15} />
                {en ? "15+ years of experience" : "Más de 15 años de experiencia"}
              </span>
              <span>
                <CheckCircle2 size={15} />
                {en ? "English & Spanish" : "Inglés y español"}
              </span>
            </div>
          </div>
          <figure className="business-portrait hero-enter">
            <img
              src={yessica}
              alt="Yessica Martinez, accountant and tax preparer at JC Taxes and Accounting"
              width={1320}
              height={1862}
              fetchPriority="high"
            />
            <figcaption>
              <div>
                <strong>Yessica Martinez</strong>
                <span>{t.aboutRole}</span>
              </div>
              <Link
                to="/about"
                aria-label={en ? "Meet Yessica and the team" : "Conozca a Yessica y al equipo"}
              >
                <ArrowUpRight size={24} />
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>
      <section
        className="business-trust"
        aria-label={en ? "Our experience" : "Nuestra experiencia"}
      >
        <div className="page-width trust-strip">
          <div className="trust-introduction">
            <strong>{en ? "Experience that matters." : "Experiencia que importa."}</strong>
            <span>
              {en
                ? "Personal service. Proven dedication."
                : "Atención personal. Dedicación constante."}
            </span>
          </div>
          {t.stats.map(([value, label]) => (
            <div className="trust-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="business-services page-width" data-reveal>
        <div className="business-section-heading">
          <div>
            <p className="eyebrow">{en ? "OUR SERVICES" : "NUESTROS SERVICIOS"}</p>
            <h2>
              {en ? "The right support for your finances." : "El apoyo que sus finanzas necesitan."}
            </h2>
            <p>
              {en
                ? "From your annual tax return to the everyday needs of your business, we make the details easier to manage."
                : "Desde su declaración anual hasta las necesidades diarias de su negocio, le ayudamos a manejar cada detalle."}
            </p>
          </div>
          <Link className="text-link" to="/services">
            {en ? "Explore all services" : "Ver todos los servicios"}
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="business-service-grid">
          {t.services.slice(0, 4).map((service, i) => {
            return (
              <article className="business-service business-service-with-photo" key={service.title}>
                <img
                  className="business-service-photo"
                  src={serviceImages[i]}
                  alt=""
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                />
                <div className="business-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/contact" className="service-contact">
                    {en ? "Get started" : "Comenzar"}
                    <ArrowUpRight size={17} />
                    <span className="sr-only"> — {service.title}</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="business-why">
        <div className="page-width business-why-inner" data-reveal>
          <div className="business-team-photo">
            <img
              src={team}
              alt={
                en
                  ? "The JC Taxes and Accounting team in their Maryland office"
                  : "El equipo de JC en su oficina de Maryland"
              }
              loading="lazy"
              width={1320}
              height={882}
            />
            <div>
              <strong>
                {en ? "Real people. Personal attention." : "Personas reales. Atención personal."}
              </strong>
              <span>
                {en
                  ? "Your local accounting team in Maryland."
                  : "Su equipo contable local en Maryland."}
              </span>
            </div>
          </div>
          <div className="business-why-copy">
            <p className="eyebrow">{en ? "WHY CHOOSE JC?" : "¿POR QUÉ ELEGIR JC?"}</p>
            <h2>
              {en
                ? "Professional expertise. A personal commitment."
                : "Experiencia profesional. Compromiso personal."}
            </h2>
            <p>
              {en
                ? "Your finances deserve more than a once-a-year conversation. Led by Yessica Martinez, we take the time to understand your needs and explain your options clearly."
                : "Sus finanzas merecen más que una conversación al año. Con Yessica Martinez al frente, escuchamos sus necesidades y explicamos sus opciones con claridad."}
            </p>
            <div className="business-benefits">
              {(en
                ? [
                    [
                      "Guidance you can understand",
                      "Clear answers and practical advice, without the accounting jargon.",
                    ],
                    [
                      "Service in your language",
                      "Work with our team in English or Spanish, whichever you prefer.",
                    ],
                    [
                      "Support throughout the year",
                      "Tax preparation, bookkeeping, payroll, and planning under one roof.",
                    ],
                  ]
                : [
                    [
                      "Orientación que puede entender",
                      "Respuestas claras y consejos prácticos, sin tecnicismos.",
                    ],
                    ["Atención en su idioma", "Trabaje con nuestro equipo en inglés o español."],
                    [
                      "Apoyo durante todo el año",
                      "Impuestos, contabilidad, nómina y planeación en un solo lugar.",
                    ],
                  ]
              ).map(([title, description]) => (
                <div key={title}>
                  <CheckCircle2 size={21} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="text-link">
              {en ? "Meet our team" : "Conozca a nuestro equipo"}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="business-process page-width" data-reveal>
        <div className="business-section-heading">
          <div>
            <p className="eyebrow">{en ? "GETTING STARTED IS SIMPLE" : "COMENZAR ES SENCILLO"}</p>
            <h2>{en ? "A clear path forward." : "Un camino claro para avanzar."}</h2>
          </div>
          <Link to="/contact" className="button">
            {t.ctaPrimary}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="process-grid">
          {(en
            ? [
                [
                  "Let's talk",
                  "Tell us about your needs and ask your questions in a free consultation.",
                ],
                [
                  "Make a plan",
                  "We'll help identify the services and documents needed for your situation.",
                ],
                [
                  "Move forward",
                  "Work directly with our team on your taxes, books, or business goals.",
                ],
              ]
            : [
                [
                  "Hablemos",
                  "Cuéntenos qué necesita y haga sus preguntas en una consulta gratuita.",
                ],
                [
                  "Hagamos un plan",
                  "Le orientamos sobre los servicios y documentos para su situación.",
                ],
                [
                  "Avancemos",
                  "Trabaje con nuestro equipo en sus impuestos, libros o metas empresariales.",
                ],
              ]
          ).map(([title, description], i) => {
            const Icon = processIcons[i]!;
            return (
              <div key={title}>
                <div className="process-step-heading">
                  <span className="process-icon" aria-hidden="true">
                    <Icon size={27} strokeWidth={1.7} />
                  </span>
                  <span className="process-number">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="business-locations">
        <div className="page-width">
          <div className="business-section-heading">
            <div>
              <p className="eyebrow">{en ? "VISIT OUR OFFICES" : "VISITE NUESTRAS OFICINAS"}</p>
              <h2>
                {en
                  ? "Local service. Two convenient locations."
                  : "Atención local. Dos oficinas a su alcance."}
              </h2>
            </div>
          </div>
          <div className="business-office-grid">
            {t.locations.map((office) => (
              <article key={office.city}>
                <h3>{office.city}</h3>
                <p>{office.address}</p>
                <div>
                  <a href={`tel:${office.phone.replace(/-/g, "")}`}>
                    <Phone size={16} />
                    {office.phone}
                  </a>
                  <Link to="/locations">
                    {en ? "Office details" : "Ver oficina"}
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactInvitation />
    </SiteShell>
  );
}
