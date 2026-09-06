import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";
import { serviceImages } from "../lib/service-images";
import dotMcAsset from "../assets/usdot-mc-truck.png.asset.json";
import startupAsset from "../assets/yessica-startup.jpg.asset.json";

const uniqueImages = [dotMcAsset.url, startupAsset.url];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | JC Taxes & Accounting Services" },
      { name: "description", content: "Tax preparation, bookkeeping, payroll, IRS audit resolution, notary, DOT & MC compliance and more in Hyattsville and Glen Burnie, MD." },
      { property: "og:title", content: "Services | JC Taxes & Accounting Services" },
      { property: "og:description", content: "Tax preparation, bookkeeping, payroll, IRS audit resolution, notary, DOT & MC compliance and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();

  return (
    <SiteShell>
      <section className="border-t border-border bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-crimson-soft mb-3">
                {t.servicesEyebrow}
              </p>
              <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">
                {t.servicesTitle}
              </h1>
              <p className="mt-2 text-sm text-mist">{t.servicesSubtitle}</p>
            </div>
            <Link
              to="/contact"
              className="text-[13px] font-sans font-semibold text-ink-soft hover:text-ink transition-colors"
            >
              {t.askAboutService}
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, idx) => (
              <div
                key={service.title}
                className="glass rounded-2xl overflow-hidden hover:bg-white/90 transition-colors flex flex-col"
              >
                <div className="relative">
                  <img
                    src={serviceImages[idx % serviceImages.length]}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover bg-ice"
                  />
                  <div className="absolute top-3 left-3 size-9 grid place-items-center rounded-md bg-white/85 backdrop-blur-sm text-crimson-soft font-display font-bold text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-lg text-ink leading-snug">
                    {service.title}
                  </h2>
                  <p className="mt-3 font-body text-[14px] text-ink-soft leading-relaxed">
                    {service.description}
                  </p>
                </div>
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
            {t.unique.map((item, idx) => (
              <div key={item.title} className="glass rounded-2xl overflow-hidden flex flex-col">
                <div className="relative">
                  <img
                    src={uniqueImages[idx]}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover bg-ice"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-ink-soft leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 self-start bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-6 py-3 rounded-md clip-cta"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
