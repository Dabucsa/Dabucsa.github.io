"use client";

import { useState } from "react";
import Link from "next/link";
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
  const { lang, toggleLang } = useLanguage();
  const t = useT(lang);
  const navLinks = useNavLinks();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(8,11,18,0.75)] border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
            🌋
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-foreground">
              {t("header.title")}
            </h1>
            <span className="text-[11px] text-muted2 block">
              {t("header.subtitle")} · Pucón Andino
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-muted2 hover:text-foreground bg-card hover:bg-card-hover border border-border rounded-lg transition-all"
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe size={14} />
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted2 hover:text-foreground hover:bg-card-hover rounded-lg transition-all"
              >
                <span className="mr-1">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted2 hover:text-foreground transition-colors"
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
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-muted2 hover:text-foreground hover:bg-card-hover rounded-xl transition-all"
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
