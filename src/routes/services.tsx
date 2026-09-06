import { socialMeta } from "../lib/social-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";
import { ArrowUpRight } from "lucide-react";
import { ContactInvitation, ServiceExplorer } from "../components/site-sections";
import dotMc from "../assets/usdot-mc-truck.png";
import startup from "../assets/yessica-martinez.jpg";

const uniqueImages = [dotMc, startup];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      ...socialMeta("/services"),
      { title: "Services | JC Taxes & Accounting Services" },
      {
        name: "description",
        content:
          "Tax preparation, bookkeeping, payroll, IRS audit resolution, notary, DOT & MC compliance and more in Hyattsville and Glen Burnie, MD.",
      },
      { property: "og:title", content: "Services | JC Taxes & Accounting Services" },
      {
        property: "og:description",
        content:
          "Tax preparation, bookkeeping, payroll, IRS audit resolution, notary, DOT & MC compliance and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, lang } = useLang();
  const en = lang === "en";
  return (
    <SiteShell>
      <section className="page-intro page-width">
        <p className="eyebrow">
          {en ? "OUR EXPERTISE. YOUR PEACE OF MIND." : "NUESTRA EXPERIENCIA. SU TRANQUILIDAD."}
        </p>
        <h1 className="page-title">
          {en ? (
            <>
              Expert support.
              <br />
              <em>Every step of the way.</em>
            </>
          ) : (
            <>
              Apoyo profesional.
              <br />
              <em>En cada paso.</em>
            </>
          )}
        </h1>
        <p className="page-lead">{t.servicesSubtitle}</p>
      </section>
      <section className="inner-services page-width">
        <ServiceExplorer full />
      </section>
      <section className="specialties">
        <div className="page-width" data-reveal>
          <p className="eyebrow">
            {en ? "A LITTLE MORE SPECIALIZED" : "UN APOYO MÁS ESPECIALIZADO"}
          </p>
          <h2>
            {en ? (
              <>
                Specialized solutions.
                <br />
                <em>For your business.</em>
              </>
            ) : (
              <>
                Soluciones especializadas.
                <br />
                <em>Para su negocio.</em>
              </>
            )}
          </h2>
          <div className="specialty-grid">
            {t.unique.map((item, i) => (
              <article className="specialty" key={item.title}>
                <img
                  src={uniqueImages[i]}
                  alt={item.title}
                  loading="lazy"
                  className={i === 1 ? "specialty-portrait" : undefined}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="/contact" className="text-link">
                  {item.cta}
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactInvitation />
    </SiteShell>
  );
}
