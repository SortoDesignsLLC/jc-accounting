import { createFileRoute, Link } from "@tanstack/react-router";
import yessicaAsset from "../assets/yessica-martinez.jpg.asset.json";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";
import { serviceImages } from "../lib/service-images";

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
  const { t } = useLang();

  return (
    <SiteShell>
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
            <Link
              to="/contact"
              className="bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-md clip-cta"
            >
              {t.ctaPrimary}
            </Link>
            <Link
              to="/services"
              className="glass hover:bg-white/90 transition-colors font-sans font-semibold text-sm px-7 py-3.5 rounded-md text-ink"
            >
              {t.ctaSecondary}
            </Link>
          </div>
          <div className="mt-12 glass rounded-2xl px-6 py-5 grid grid-cols-3 gap-x-5 gap-y-4 divide-x divide-border">
            {t.stats.map(([value, label], i) => (
              <div key={label} className={i > 0 ? "pl-5" : undefined}>
                <p className="font-display font-bold text-[clamp(1.35rem,2.4vw,1.9rem)] leading-none tabular-nums whitespace-nowrap text-ink">
                  {value}
                </p>
                <p className="text-[10.5px] uppercase tracking-[0.12em] text-mist mt-2 leading-snug">
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
                src={yessicaAsset.url}
                alt="Yessica Martinez, accountant and tax preparer at JC Taxes and Accounting Services"
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
                  15+ {t.yearsSuffix}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block glass rounded-xl px-5 py-4 max-w-[230px]">
              <div className="flex items-center gap-1 text-crimson-soft">★★★★★</div>
              <p className="mt-2 text-[12px] leading-snug text-ink/90 font-body">
                {t.aboutBio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-crimson-soft mb-3">
                {t.servicesEyebrow}
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">
                {t.servicesTitle}
              </h2>
            </div>
            <Link
              to="/services"
              className="text-[13px] font-sans font-semibold text-ink-soft hover:text-ink transition-colors"
            >
              {t.askAboutService}
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.slice(0, 4).map((service, idx) => (
              <div
                key={service.title}
                className="glass rounded-2xl overflow-hidden hover:bg-white/90 transition-colors flex flex-col"
              >
                <div className="relative">
                  <img
                    src={serviceImages[idx]}
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
                <div className="p-6 flex-1">
                  <h3 className="font-display font-bold text-lg text-ink leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] text-ink-soft leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-8 py-3.5 rounded-md clip-cta"
            >
              {t.allServices}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="rounded-2xl bg-ink/95 text-white p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-center ring-1 ring-white/10">
            <div>
              <p className="text-[12px] font-sans font-semibold text-white tracking-[0.18em] uppercase mb-7">
                {t.trustTitle}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-8">
                {t.trustStats.map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-none font-bold tabular-nums whitespace-nowrap text-white">
                      {value}
                    </p>
                    <p className="text-[12px] text-white/85 mt-2 leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="self-start md:self-center bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-md clip-cta whitespace-nowrap"
            >
              {t.ctaPrimary}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
