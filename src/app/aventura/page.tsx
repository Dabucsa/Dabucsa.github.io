"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";
import { useLanguage, useT } from "@/i18n";

export default function AventuraPage() {
  const places = getPlacesByCategory("aventura");
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          {t("page.aventura.title")}
        </h1>
        <p className="text-muted2 leading-relaxed">
          {t("page.aventura.desc")}
        </p>
      </motion.div>

      {/* Nivel de dificultad */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-5 mb-6"
      >
        <h2 className="text-sm font-bold mb-3">{t("page.aventura.intensity")}</h2>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted2">
          <div className="flex items-start gap-2">
            <span className="badge badge-green">{t("page.aventura.mild")}</span>
            <span>{t("page.aventura.mild.desc")}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="badge badge-orange">{t("page.aventura.medium")}</span>
            <span>{t("page.aventura.medium.desc")}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="badge" style={{ background: "rgba(248,113,113,0.15)", color: "#fca5a5", border: "1px solid rgba(248,113,113,0.25)" }}>{t("page.aventura.extreme")}</span>
            <span>{t("page.aventura.extreme.desc")}</span>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {places.map((place, i) => (
          <PlaceCard key={place.id} place={place} index={i} />
        ))}
      </div>
    </div>
  );
}
