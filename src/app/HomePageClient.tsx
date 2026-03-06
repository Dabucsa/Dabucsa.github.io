"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Sun,
  Snowflake,
  Info,
  Leaf,
  Sprout,
  ArrowRight,
  CloudRain,
  Compass,
} from "lucide-react";
import { categories } from "@/data/categories";
import { places } from "@/data/places";
import { itineraries } from "@/data/itineraries";
import CategoryCard from "@/components/ui/CategoryCard";
import DaySelector from "@/components/sections/DaySelector";
import WeatherWidget from "@/components/sections/WeatherWidget";
import { useLanguage, useT } from "@/i18n";

export default function HomePageClient() {
  const { lang } = useLanguage();
  const t = useT(lang);

  const summerItems = t("home.tips.summer.items").split("|");
  const autumnItems = t("home.tips.autumn.items").split("|");
  const springItems = t("home.tips.spring.items").split("|");
  const winterItems = t("home.tips.winter.items").split("|");
  const transportItems = t("home.transport.items").split("|");
  const curatedPlaces = places.length;
  const itineraryCount = itineraries.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-5 py-6 md:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-6 items-start"
      >
        <div>
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6"
          >
            <MapPin size={16} />
            Pucón Andino · Sur de Chile
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-balance">
            {lang === "es" ? "Descubre" : "Discover"}{" "}
            <span className="gradient-text">Pucón</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted2 max-w-2xl leading-relaxed">
            {t("home.hero.subtitle")}
          </p>
          <p className="text-sm md:text-base text-muted mt-4 max-w-2xl leading-relaxed">
            {t("home.hero.note")}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link
              href="/itinerarios"
              className="flex min-h-12 items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
            >
              <Calendar size={18} />
              {t("home.hero.primary")}
            </Link>
            <Link
              href="/info"
              className="flex min-h-12 items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-2xl font-bold hover:bg-card-hover hover:-translate-y-0.5 transition-all"
            >
              <Info size={18} />
              {t("home.hero.secondary")}
            </Link>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5"
        >
          <h2 className="text-sm font-bold mb-4">{t("home.overview.title")}</h2>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="min-w-0 rounded-xl border border-border bg-card-hover p-3">
              <div className="text-xl sm:text-2xl font-extrabold text-foreground">{curatedPlaces}</div>
              <div className="mt-1 text-[10px] leading-snug text-muted2 sm:text-[11px]">
                {t("home.overview.places")}
              </div>
            </div>
            <div className="min-w-0 rounded-xl border border-border bg-card-hover p-3">
              <div className="text-xl sm:text-2xl font-extrabold text-foreground">{itineraryCount}</div>
              <div className="mt-1 text-[10px] leading-snug text-muted2 sm:text-[11px]">
                {t("home.overview.itineraries")}
              </div>
            </div>
            <div className="min-w-0 rounded-xl border border-border bg-card-hover p-3">
              <div className="text-xl sm:text-2xl font-extrabold text-foreground">4</div>
              <div className="mt-1 text-[10px] leading-snug text-muted2 sm:text-[11px]">
                {t("home.overview.seasons")}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card-hover p-4">
            <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
              {t("home.plan.title")}
            </p>
            <div className="space-y-3 text-sm text-muted2">
              <div className="flex items-start gap-2">
                <Compass size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                <span>{t("home.plan.days.desc")}</span>
              </div>
              <div className="flex items-start gap-2">
                <CloudRain size={15} className="text-sky-400 mt-0.5 shrink-0" />
                <span>{t("home.plan.rain.desc")}</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.section>

      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t("home.plan.title")}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Calendar,
              title: t("home.plan.days.title"),
              desc: t("home.plan.days.desc"),
              href: "/itinerarios",
              cta: t("home.plan.cta.itineraries"),
              color: "text-emerald-400",
            },
            {
              icon: CloudRain,
              title: t("home.plan.rain.title"),
              desc: t("home.plan.rain.desc"),
              href: "/termas",
              cta: t("home.plan.cta.termas"),
              color: "text-sky-400",
            },
            {
              icon: Info,
              title: t("home.plan.basics.title"),
              desc: t("home.plan.basics.desc"),
              href: "/info",
              cta: t("home.plan.cta.info"),
              color: "text-violet-400",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="glass-card p-5 flex h-full flex-col gap-4 group hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-card-hover border border-border flex items-center justify-center">
                      <Icon size={18} className={item.color} />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted2 leading-relaxed">{item.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    {item.cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t("days.title")}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <DaySelector itineraries={itineraries} />
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t("home.categories.title")}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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

      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t("home.tips.title")}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            { title: t("home.tips.summer.title"), items: summerItems, icon: Sun, color: "text-yellow-400", delay: 0.1 },
            { title: t("home.tips.autumn.title"), items: autumnItems, icon: Leaf, color: "text-orange-400", delay: 0.15 },
            { title: t("home.tips.spring.title"), items: springItems, icon: Sprout, color: "text-emerald-400", delay: 0.2 },
            { title: t("home.tips.winter.title"), items: winterItems, icon: Snowflake, color: "text-sky-400", delay: 0.25 },
          ].map((season) => {
            const Icon = season.icon;
            return (
              <motion.div
                key={season.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: season.delay }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} className={season.color} />
                  <h3 className="text-sm font-bold">{season.title}</h3>
                </div>
                <ul className="text-sm text-muted2 space-y-1.5 leading-relaxed">
                  {season.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-5 mt-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-emerald-400" />
            <h3 className="text-sm font-bold">{t("home.transport.title")}</h3>
          </div>
          <ul className="text-sm text-muted2 space-y-1.5 leading-relaxed">
            {transportItems.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {lang === "es" ? "Clima en tiempo real" : "Live weather"}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <WeatherWidget />
      </section>

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
