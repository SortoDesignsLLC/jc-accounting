import { createFileRoute, Link } from "@tanstack/react-router";
import yessicaAsset from "../assets/yessica-martinez.jpg.asset.json";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";

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
          <div className="rounded-2xl bg-ink text-white p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-xs text-white/60 tracking-[0.14em] uppercase mb-6">
                {t.trustTitle}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8">
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
