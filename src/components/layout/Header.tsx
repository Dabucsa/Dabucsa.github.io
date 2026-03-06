"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { categories } from "@/data/categories";
import { useLanguage, useT } from "@/i18n";

function useNavLinks() {
  const { lang } = useLanguage();
  const t = useT(lang);
  return [
    { href: "/", label: t("nav.inicio"), emoji: "🏠" },
    { href: "/itinerarios", label: t("nav.itinerarios"), emoji: "📅" },
    ...categories
      .filter((c) => c.slug !== "info")
      .map((c) => ({
        href: `/${c.slug}`,
        label: t(`nav.${c.slug}`),
        emoji: c.emoji,
      })),
    { href: "/info", label: t("nav.info"), emoji: "📋" },
  ];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const t = useT(lang);
  const navLinks = useNavLinks();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(8,11,18,0.75)] border-b border-border">
      <div className="mx-auto flex max-w-[92rem] items-center gap-3 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
            🌋
          </div>
          <div className="hidden min-w-0 sm:block">
            <h1 className="whitespace-nowrap text-sm sm:text-base font-bold tracking-tight text-foreground">
              {t("header.title")}
            </h1>
            <span className="hidden whitespace-nowrap 2xl:block text-[11px] text-muted2">
              {t("header.subtitle")} · Pucón Andino
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="no-scrollbar hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto px-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`shrink-0 whitespace-nowrap px-3 py-2 text-sm rounded-lg transition-all ${
                pathname === link.href
                  ? "text-foreground bg-card-hover border border-border"
                  : "text-muted2 hover:text-foreground hover:bg-card-hover border border-transparent"
              }`}
            >
              <span className="mr-1">{link.emoji}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex min-h-10 items-center gap-1.5 px-3 py-2 text-xs font-semibold text-muted2 hover:text-foreground bg-card hover:bg-card-hover border border-border rounded-xl transition-all"
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe size={14} />
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted2 hover:text-foreground hover:bg-card-hover transition-colors"
            aria-label="Menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-[rgba(8,11,18,0.95)] backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    pathname === link.href
                      ? "text-foreground bg-card-hover border border-border"
                      : "text-muted2 hover:text-foreground hover:bg-card-hover border border-transparent"
                  }`}
                >
                  <span className="text-lg">{link.emoji}</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
