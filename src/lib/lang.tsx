import { createContext, useContext, useState, type ReactNode } from "react";
import { copy, type Lang, type SiteCopy } from "./content";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): { lang: Lang; setLang: (l: Lang) => void; t: SiteCopy } {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang, t: copy[lang] };
}
