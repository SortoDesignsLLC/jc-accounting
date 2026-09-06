import { createFileRoute } from "@tanstack/react-router";
import yessicaAsset from "../assets/yessica-martinez.jpg.asset.json";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | JC Taxes & Accounting Services" },
      { name: "description", content: "Meet Yessica Martinez — accountant and tax preparer with 15+ years serving Hyattsville and Glen Burnie, MD. 10,000+ returns prepared." },
      { property: "og:title", content: "About Us | JC Taxes & Accounting Services" },
      { property: "og:description", content: "Meet Yessica Martinez — accountant and tax preparer with 15+ years serving Maryland, D.C. and Virginia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  return (
    <SiteShell>
      <section className="border-t border-border bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="relative rounded-2xl glass p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-crimson/10 blur-3xl" />
            <div className="relative z-10 order-2 md:order-1">
              <span className="text-xs font-semibold text-crimson-soft tracking-[0.14em] uppercase">
                {t.aboutLabel}
              </span>
              <h1 className="mt-4 font-display font-bold text-3xl md:text-4xl text-ink">
                {t.aboutName}
              </h1>
              <p className="text-sm text-mist mt-1">{t.aboutRole}</p>
              <p className="mt-4 font-body text-ink-soft leading-relaxed">
                {t.aboutBio}
              </p>
              <h2 className="mt-8 font-display font-bold text-xl text-ink">
                {t.aboutTitle}
              </h2>
              <p className="mt-3 font-body text-[15px] text-ink-soft leading-relaxed">
                {t.aboutBody}
              </p>
            </div>
            <div className="relative z-10 order-1 md:order-2">
              <div className="rounded-xl overflow-hidden glass p-3">
                <img
                  src={yessicaAsset.url}
                  alt="Yessica Martinez, accountant and tax preparer at JC Taxes and Accounting Services"
                  className="w-full aspect-[3/4] object-cover rounded-lg bg-ice"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="rounded-2xl bg-ink text-white p-8 md:p-12">
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
        </div>
      </section>
    </SiteShell>
  );
}
