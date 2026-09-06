import { socialMeta } from "../lib/social-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactInvitation } from "../components/site-sections";
import yessica from "../assets/yessica-martinez.jpg";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      ...socialMeta("/about"),
      { title: "About Us | JC Taxes & Accounting Services" },
      {
        name: "description",
        content:
          "Meet Yessica Martinez — accountant and tax preparer with 15+ years serving Hyattsville and Glen Burnie, MD. 10,000+ returns prepared.",
      },
      { property: "og:title", content: "About Us | JC Taxes & Accounting Services" },
      {
        property: "og:description",
        content:
          "Meet Yessica Martinez — accountant and tax preparer with 15+ years serving Maryland, D.C. and Virginia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, lang } = useLang();
  const en = lang === "en";
  return (
    <SiteShell>
      <section className="about-profile page-width">
        <div className="hero-enter">
          <p className="eyebrow">
            {en
              ? "A FAMILIAR FACE. A TRUSTED PARTNER."
              : "UN ROSTRO FAMILIAR. ALGUIEN EN QUIEN CONFIAR."}
          </p>
          <h1>
            Yessica
            <br />
            <em>Martinez.</em>
          </h1>
          <p className="profile-role">{t.aboutRole}</p>
          <p>
            {en
              ? "Behind every return is a person. Behind every business is a dream. That's what makes this work personal."
              : "Detrás de cada declaración hay una persona. Detrás de cada negocio hay un sueño. Por eso nuestro trabajo es personal."}
          </p>
          <h2>{en ? "Your goals become our goals." : "Sus metas son nuestras metas."}</h2>
          <p>{t.aboutBio}</p>
          <p>
            {en
              ? "Our team helps individuals and small businesses make sense of their finances, with clear answers, careful work, and a genuine connection to the community we serve."
              : "Ayudamos a personas y pequeñas empresas a entender sus finanzas con respuestas claras, trabajo cuidadoso y una conexión cercana con nuestra comunidad."}
          </p>
          <Link to="/contact" className="text-link">
            {en ? "Let's get acquainted" : "Conozcámonos"}
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <img src={yessica} alt={t.aboutName} width={1320} height={1862} className="hero-enter" />
      </section>
      <section className="about-values page-width" data-reveal>
        <div>
          <p className="eyebrow">{en ? "BUILT ON EXPERIENCE" : "RESPALDADOS POR LA EXPERIENCIA"}</p>
          <h2>
            {en ? (
              <>
                Experience that
                <br />
                <em>makes a difference.</em>
              </>
            ) : (
              <>
                Experiencia que
                <br />
                <em>marca la diferencia.</em>
              </>
            )}
          </h2>
        </div>
        <div className="experience-facts">
          {t.stats.map(([value, label]) => (
            <div key={label}>
              <span className="fact-value">{value}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <ContactInvitation />
    </SiteShell>
  );
}
