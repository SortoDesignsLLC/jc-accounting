import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "../components/site-layout";
import { useLang } from "../lib/lang";
import teamAsset from "../assets/jc-team.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | JC Taxes & Accounting Services" },
      { name: "description", content: "Get in touch with JC Taxes and Accounting Services in English or Spanish. Offices in Hyattsville and Glen Burnie, MD." },
      { property: "og:title", content: "Contact Us | JC Taxes & Accounting Services" },
      { property: "og:description", content: "Get in touch with JC Taxes and Accounting Services in English or Spanish." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();

  return (
    <SiteShell>
      <section className="border-t border-border bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-crimson-soft mb-3">
                {t.contactEyebrow}
              </p>
              <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">
                {t.contactTitle}
              </h1>
              <p className="mt-4 text-ink-soft max-w-md">{t.contactSubtitle}</p>
              <div className="mt-8 space-y-4">
                {t.locations.map((loc) => (
                  <p key={loc.city} className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="grid place-items-center size-8 rounded-md bg-ice text-crimson font-display font-semibold">
                      ✆
                    </span>
                    <span>
                      <span className="font-semibold text-ink">{loc.city}</span>{" "}
                      <a href={`tel:${loc.phone.replace(/-/g, "")}`} className="hover:text-crimson transition-colors">
                        {loc.phone}
                      </a>
                    </span>
                  </p>
                ))}
                <p className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="grid place-items-center size-8 rounded-md bg-ice text-crimson font-display font-semibold">
                    ✉
                  </span>
                  <a href={`mailto:${t.email}`} className="hover:text-crimson transition-colors">
                    {t.email}
                  </a>
                </p>
              </div>
            </div>
            <form className="glass rounded-2xl p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-ink-soft">
                    {t.form.name}
                  </span>
                  <input
                    type="text"
                    placeholder={t.form.namePlaceholder}
                    className="mt-2 w-full rounded-md bg-white/70 px-4 py-3 text-sm text-ink ring-1 ring-border placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-crimson/40 transition"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-ink-soft">
                    {t.form.email}
                  </span>
                  <input
                    type="email"
                    placeholder={t.form.emailPlaceholder}
                    className="mt-2 w-full rounded-md bg-white/70 px-4 py-3 text-sm text-ink ring-1 ring-border placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-crimson/40 transition"
                  />
                </label>
              </div>
              <label className="block mt-5">
                <span className="text-xs font-semibold text-ink-soft">
                  {t.form.help}
                </span>
                <textarea
                  rows={4}
                  placeholder={t.form.helpPlaceholder}
                  className="mt-2 w-full rounded-md bg-white/70 px-4 py-3 text-sm text-ink ring-1 ring-border placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-crimson/40 transition resize-none"
                />
              </label>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-mist">{t.form.reply}</p>
                <button
                  type="button"
                  className="bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-sm px-6 py-3 rounded-md clip-cta"
                >
                  {t.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
