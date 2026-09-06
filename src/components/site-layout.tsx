import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useLang } from "../lib/lang";

const NAV_PATHS = ["/", "/services", "/about", "/locations", "/contact"] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useLang();

  return (
    <div className="min-h-screen bg-background text-ink font-body antialiased overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-cool/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-crimson/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-ice/80 blur-3xl" />
      </div>

      <header id="top" className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-11 grid place-items-center bg-crimson text-white font-display font-bold text-lg tracking-tight clip-logo">
              JC
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-ink text-[15px] tracking-tight">
                JC Taxes and Accounting
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-mist">
                Services
              </p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-9 text-[13px] font-sans font-semibold text-ink-soft">
            {t.nav.map((item, i) => (
              <Link
                key={item}
                to={NAV_PATHS[i]}
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: NAV_PATHS[i] === "/" }}
                className="hover:text-ink transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center rounded-full border border-border text-[11px] font-sans font-semibold px-1 py-1 bg-white/60">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en" ? "bg-ink text-white" : "text-mist hover:text-ink"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "es" ? "bg-ink text-white" : "text-mist hover:text-ink"
                }`}
              >
                ES
              </button>
            </div>
            <Link
              to="/contact"
              className="bg-crimson hover:bg-crimson-soft transition-colors text-white font-sans font-semibold text-[13px] px-5 py-2.5 rounded-md clip-cta"
            >
              {t.bookCta}
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-9 grid place-items-center bg-crimson text-white font-display font-bold text-sm clip-logo">
              JC
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-sm text-ink">
                JC Taxes and Accounting Services
              </p>
              <p className="text-[11px] text-mist">{t.footerTag}</p>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-8 text-[12px] font-sans font-semibold text-ink-soft">
            {t.nav.map((item, i) => (
              <Link
                key={item}
                to={NAV_PATHS[i]}
                className="hover:text-ink transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-[11px] text-mist">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
