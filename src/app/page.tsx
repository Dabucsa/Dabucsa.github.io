"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Sun, Snowflake, Info } from "lucide-react";
import { categories } from "@/data/categories";
import { places } from "@/data/places";
import { itineraries } from "@/data/itineraries";
import CategoryCard from "@/components/ui/CategoryCard";
import DaySelector from "@/components/sections/DaySelector";
import WeatherWidget from "@/components/sections/WeatherWidget";
import { useLanguage, useT } from "@/i18n";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = useT(lang);

  const summerItems = t("home.tips.summer.items").split("|");
  const winterItems = t("home.tips.winter.items").split("|");
  const transportItems = t("home.transport.items").split("|");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* ── HERO ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12 md:py-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6"
        >
          <MapPin size={16} />
          Pucón Andino · Sur de Chile
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          {lang === "es" ? "Descubre" : "Discover"}{" "}
          <span className="gradient-text">Pucón</span>
        </h1>
        <p className="text-lg md:text-xl text-muted2 max-w-2xl mx-auto leading-relaxed">
          {t("home.hero.subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href="/itinerarios"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
          >
            <Calendar size={18} />
            {t("nav.itinerarios")}
          </Link>
          <Link
            href="/info"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-2xl font-bold hover:bg-card-hover hover:-translate-y-0.5 transition-all"
          >
            <Info size={18} />
            {t("nav.info")}
          </Link>
        </div>
      </motion.section>

      {/* ── ¿CUÁNTOS DÍAS TE QUEDAS? ── */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t("days.title")}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <DaySelector itineraries={itineraries} />
      </section>

      {/* ── CLIMA EN PUCÓN ── */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {lang === "es" ? "Clima en tiempo real" : "Live weather"}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <WeatherWidget />
      </section>

      {/* ── CATEGORÍAS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t("home.categories.title")}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.slug}
              category={cat}
              index={i}
              count={
                cat.slug === "info"
                  ? 0
                  : places.filter((p) => p.category === cat.slug).length
              }
            />
          ))}
        </div>
      </section>

      {/* ── TIPS DEL ANFITRIÓN ── */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t("home.tips.title")}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sun size={20} className="text-yellow-400" />
              <h3 className="text-sm font-bold">{t("home.tips.summer.title")}</h3>
            </div>
            <ul className="text-xs text-muted2 space-y-1.5 leading-relaxed">
              {summerItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <Snowflake size={20} className="text-sky-400" />
              <h3 className="text-sm font-bold">{t("home.tips.winter.title")}</h3>
            </div>
            <ul className="text-xs text-muted2 space-y-1.5 leading-relaxed">
              {winterItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={20} className="text-emerald-400" />
              <h3 className="text-sm font-bold">{t("home.transport.title")}</h3>
            </div>
            <ul className="text-xs text-muted2 space-y-1.5 leading-relaxed">
              {transportItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── NÚMEROS RÁPIDOS ── */}
      <section className="mb-8">
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🚨</span>
            <h3 className="text-sm font-bold">{t("home.emergency.title")}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="flex items-center gap-2 text-muted2">
              <span className="font-mono font-bold text-red-400">131</span>
              {t("home.emergency.ambulance")}
            </div>
            <div className="flex items-center gap-2 text-muted2">
              <span className="font-mono font-bold text-orange-400">132</span>
              {t("home.emergency.fire")}
            </div>
            <div className="flex items-center gap-2 text-muted2">
              <span className="font-mono font-bold text-sky-400">133</span>
              {t("home.emergency.police")}
            </div>
            <div className="flex items-center gap-2 text-muted2">
              <span className="font-mono font-bold text-emerald-400">134</span>
              PDI
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
