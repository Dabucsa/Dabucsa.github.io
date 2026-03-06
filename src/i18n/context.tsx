"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from "react";
import type { Lang } from "./translations";
import { LANG_COOKIE_KEY, LANG_STORAGE_KEY, isLang } from "./config";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
});

const LANG_EVENT = "pucontour-lang-change";

function readClientLang(): Lang {
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
  if (isLang(stored)) {
    return stored;
  }

  return window.navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === LANG_STORAGE_KEY) {
      callback();
    }
  };

  const onLangChange = () => {
    callback();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(LANG_EVENT, onLangChange);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(LANG_EVENT, onLangChange);
  };
}

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const lang = useSyncExternalStore<Lang>(
    subscribe,
    readClientLang,
    () => initialLang
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    const next = lang === "es" ? "en" : "es";
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    document.cookie = `${LANG_COOKIE_KEY}=${next}; path=/; max-age=31536000; samesite=lax`;
    window.dispatchEvent(new Event(LANG_EVENT));
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
