import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { copy, type Lang, type SiteCopy } from "./content";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, updateLang] = useState<Lang>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("jc-language");
      if (saved === "en" || saved === "es") updateLang(saved);
    } catch {
      /* Storage may be unavailable. */
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  function setLang(value: Lang) {
    updateLang(value);
    try {
      localStorage.setItem("jc-language", value);
    } catch {
      /* Language switching still works without storage. */
    }
  }
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang(): { lang: Lang; setLang: (l: Lang) => void; t: SiteCopy } {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang, t: copy[lang] };
}
