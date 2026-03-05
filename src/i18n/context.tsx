"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("pucontour-lang") as Lang | null;
    if (stored === "en") setLang("en");
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("pucontour-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
