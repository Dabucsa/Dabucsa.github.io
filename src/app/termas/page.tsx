"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";
import { useLanguage, useT } from "@/i18n";

export default function TermasPage() {
  const places = getPlacesByCategory("termas");
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
          {t("page.termas.title")}
        </h1>
        <p className="text-muted2 leading-relaxed">
          {t("page.termas.desc")}
        </p>
      </motion.div>

      {/* Guía rápida */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-5 mb-6"
      >
        <h2 className="text-sm font-bold mb-3">{t("page.termas.guide.title")}</h2>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted2">
          <div className="flex items-start gap-2">
            <span className="text-lg">🌊</span>
            <div>
              <strong className="text-foreground block">{t("page.termas.guide.rustic")}</strong>
              {t("page.termas.guide.rustic.desc")}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">⚖️</span>
            <div>
              <strong className="text-foreground block">{t("page.termas.guide.balanced")}</strong>
              {t("page.termas.guide.balanced.desc")}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">💎</span>
            <div>
              <strong className="text-foreground block">{t("page.termas.guide.premium")}</strong>
              {t("page.termas.guide.premium.desc")}
            </div>
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
