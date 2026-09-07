import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/jc-accounting-logo.png";
import { useLang } from "../lib/lang";

const NAV_PATHS = ["/", "/services", "/about", "/locations", "/contact"] as const;

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="JC Accounting and Tax Services — Home"
    >
      <img
        className="brand-logo"
        src={logo}
        alt="JC Accounting and Tax Services"
        width={2152}
        height={731}
      />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const shell = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = shell.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (
      !nodes ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    nodes.forEach((node) => {
      node.classList.add("will-reveal");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = () => {
    dialog.current?.close();
    setMenuOpen(false);
  };
  const languageSwitch = (
    <div className="language-switch" aria-label={lang === "en" ? "Language" : "Idioma"}>
      <button
        type="button"
        lang="en"
        aria-label="English"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        lang="es"
        aria-label="Español"
        aria-pressed={lang === "es"}
        onClick={() => setLang("es")}
      >
        ES
      </button>
    </div>
  );

  return (
    <div className="site-shell" ref={shell}>
      <a className="skip-link" href="#main-content">
        {lang === "en" ? "Skip to content" : "Ir al contenido"}
      </a>
      <div className="business-topbar">
        <div className="page-width">
          <span>
            {lang === "en"
              ? "Serving Maryland, D.C. & Virginia"
              : "Atendiendo Maryland, D.C. y Virginia"}
          </span>
          <a href="tel:3017321690">
            {lang === "en" ? "Call our team: " : "Llámenos: "}301-732-1690
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav
            className="desktop-nav"
            aria-label={lang === "en" ? "Main navigation" : "Navegación principal"}
          >
            {t.nav.slice(0, 4).map((label, i) => (
              <Link
                key={NAV_PATHS[i]}
                to={NAV_PATHS[i]!}
                activeOptions={i === 0 ? { exact: true } : undefined}
                activeProps={{ className: "is-active", "aria-current": "page" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            {languageSwitch}
            <Link to="/contact" className="button button-small header-cta">
              {lang === "en" ? "Free Consultation" : "Consulta gratuita"}
              <ArrowUpRight size={16} />
            </Link>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={lang === "en" ? "Open menu" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={23} />
            </button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <dialog
          ref={dialog}
          id="mobile-navigation"
          className="mobile-menu"
          onCancel={closeMenu}
          onClose={() => setMenuOpen(false)}
          aria-label={lang === "en" ? "Navigation menu" : "Menú de navegación"}
        >
          <div className="mobile-menu-top">
            <Brand />
            <button
              type="button"
              className="menu-toggle"
              onClick={closeMenu}
              aria-label={lang === "en" ? "Close menu" : "Cerrar menú"}
            >
              <X />
            </button>
          </div>
          <nav aria-label={lang === "en" ? "Mobile navigation" : "Navegación móvil"}>
            {t.nav.map((label, i) => (
              <Link key={NAV_PATHS[i]} to={NAV_PATHS[i]!} onClick={closeMenu}>
                <span>0{i + 1}</span>
                {label}
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </nav>
          <p>{t.footerTag}</p>
          {languageSwitch}
        </dialog>
      )}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="page-width footer-top">
          <div>
            <Brand footer />
            <p>{t.footerTag}</p>
          </div>
          <div className="footer-links">
            {t.nav.slice(1).map((label, i) => (
              <Link key={NAV_PATHS[i + 1]} to={NAV_PATHS[i + 1]!}>
                {label}
              </Link>
            ))}
          </div>
          <a className="footer-phone" href="tel:3017321690">
            301-732-1690
            <ArrowUpRight size={18} />
            <span>
              {lang === "en"
                ? "A conversation is a good place to start."
                : "Todo comienza con una conversación."}
            </span>
          </a>
        </div>
        <div className="page-width footer-bottom">
          <span>{t.footer}</span>
          <span>
            {lang === "en"
              ? "Good with numbers. Better with people."
              : "Expertos en números. Cercanos a usted."}
          </span>
        </div>
      </footer>
    </div>
  );
}
