import { createFileRoute } from "@tanstack/react-router";
import { OfficeMaps } from "../components/office-map";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | JC Taxes & Accounting Services" },
      { name: "description", content: "Visit JC Taxes in Hyattsville, MD (301-732-1690) or Glen Burnie, MD (240-877-8622). Serving Maryland, D.C. and Virginia." },
      { property: "og:title", content: "Locations | JC Taxes & Accounting Services" },
      { property: "og:description", content: "Visit JC Taxes in Hyattsville, MD or Glen Burnie, MD. Serving Maryland, D.C. and Virginia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const { t } = useLang();

  return (
    <SiteShell>
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-crimson-soft mb-3">
            {t.locationsSubtitle}
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink mb-10">
            {t.locationsTitle}
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {t.locations.map((loc, i) => (
              <div key={loc.city} className="glass rounded-2xl p-8 flex flex-col">
                <h2 className="font-display font-bold text-2xl text-ink">
                  {loc.city}
                </h2>
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
                <div className="mt-6">
                  <OfficeMap office={OFFICES[i]!} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
