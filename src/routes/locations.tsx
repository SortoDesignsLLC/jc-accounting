import { socialMeta } from "../lib/social-meta";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactInvitation } from "../components/site-sections";
import { OFFICES, OfficeMap } from "../components/office-map";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      ...socialMeta("/locations"),
      { title: "Locations | JC Taxes & Accounting Services" },
      {
        name: "description",
        content:
          "Visit JC Taxes in Hyattsville, MD (301-732-1690) or Glen Burnie, MD (240-877-8622). Serving Maryland, D.C. and Virginia.",
      },
      { property: "og:title", content: "Locations | JC Taxes & Accounting Services" },
      {
        property: "og:description",
        content:
          "Visit JC Taxes in Hyattsville, MD or Glen Burnie, MD. Serving Maryland, D.C. and Virginia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const { t, lang } = useLang();
  const en = lang === "en";
  return (
    <SiteShell>
      <section className="page-intro page-width">
        <p className="eyebrow">{t.locationsSubtitle}</p>
        <h1 className="page-title">
          {en ? (
            <>
              Two offices.
              <br />
              <em>Always in your corner.</em>
            </>
          ) : (
            <>
              Dos oficinas.
              <br />
              <em>Siempre a su lado.</em>
            </>
          )}
        </h1>
        <p className="page-lead">
          {en
            ? "Local expertise, a familiar welcome, and time for your questions. Find the office that works for you."
            : "Experiencia local, una cálida bienvenida y tiempo para sus preguntas. Encuentre la oficina más conveniente."}
        </p>
      </section>
      <section className="office-grid page-width">
        {t.locations.map((office, i) => (
          <article className="office-entry" key={office.city} data-reveal>
            <p className="eyebrow">
              {en ? "YOUR LOCAL JC" : "SU OFICINA JC"} / 0{i + 1}
            </p>
            <h2>{office.city}</h2>
            <p>{office.description}</p>
            <address className="office-address">{office.address}</address>
            <a href={`tel:${office.phone.replace(/-/g, "")}`} className="text-link">
              {office.phone}
              <ArrowUpRight size={16} />
            </a>
            <OfficeMap
              office={OFFICES[i]!}
              directionsLabel={en ? "Get directions" : "Cómo llegar"}
            />
          </article>
        ))}
      </section>
      <ContactInvitation />
    </SiteShell>
  );
}
