import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLang } from "../lib/lang";
import { serviceImages } from "../lib/service-images";

export function ContactInvitation() {
  const { lang, t } = useLang();
  return (
    <section className="contact-invitation" data-reveal>
      <div className="page-width invitation-inner">
        <span className="eyebrow">
          {lang === "en" ? "LET’S TALK ABOUT YOUR GOALS" : "HABLEMOS DE SUS METAS"}
        </span>
        <h2>
          {lang === "en" ? (
            <>
              Ready to get started?
              <br />
              <em>Let’s talk.</em>
            </>
          ) : (
            <>
              ¿Listo para comenzar?
              <br />
              <em>Hablemos.</em>
            </>
          )}
        </h2>
        <p>
          {lang === "en"
            ? "Schedule your free consultation. Our team is ready to help with your taxes, accounting, and business goals."
            : "Agende su consulta gratuita. Le ayudamos con sus impuestos, contabilidad y metas empresariales."}
        </p>
        <Link to="/contact" className="button button-light">
          {t.ctaPrimary}
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </section>
  );
}

export function ServiceExplorer({ full = false }: { full?: boolean }) {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const Heading = full ? "h2" : "h3";
  const services = full ? t.services : t.services.slice(0, 4);
  return (
    <div className="service-explorer" data-reveal>
      <div className="service-list">
        {services.map((service, i) => (
          <div className={`service-row ${active === i ? "is-selected" : ""}`} key={service.title}>
            <Heading>
              <button
                type="button"
                aria-expanded={active === i}
                aria-controls={`service-detail-${i}`}
                id={`service-button-${i}`}
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
                <span>{service.title}</span>
                {active === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </Heading>
            <div
              className="service-detail"
              id={`service-detail-${i}`}
              role="region"
              aria-labelledby={`service-button-${i}`}
              hidden={active !== i}
            >
              <p>{service.description}</p>
              <Link to="/contact" className="text-link">
                {lang === "en" ? "Let's talk about it" : "Hablemos de esto"}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        ))}
        {!full && (
          <Link to="/services" className="text-link all-services">
            {t.allServices}
            <ArrowUpRight size={17} />
          </Link>
        )}
      </div>
      <div className="service-visual">
        <div className="service-photo-stack">
          {services.map((service, i) => (
            <img
              key={i}
              src={serviceImages[i]}
              alt={service.title}
              loading="lazy"
              className={Math.max(active, 0) === i ? "is-selected" : ""}
              aria-hidden={Math.max(active, 0) !== i}
            />
          ))}
        </div>
        <p className="photo-caption">
          <span>
            {lang === "en"
              ? "THE DETAILS MATTER. SO DO YOU."
              : "LOS DETALLES IMPORTAN. USTED TAMBIÉN."}
          </span>
          <span>JC / 0{Math.max(active, 0) + 1}</span>
        </p>
      </div>
    </div>
  );
}
