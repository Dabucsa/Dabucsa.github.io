"use client";

import { motion } from "framer-motion";
import { Trees, HeartHandshake, TimerReset } from "lucide-react";
import { getPlacesByCategory } from "@/data/places";
import PlaceExplorer from "@/components/sections/PlaceExplorer";
import { useLanguage, useT } from "@/i18n";

export default function TermasPageClient() {
  const places = getPlacesByCategory("termas");
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{t("page.termas.title")}</h1>
        <p className="text-muted2 leading-relaxed">{t("page.termas.desc")}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5 mb-6">
        <h2 className="text-sm font-bold mb-3">{t("page.termas.guide.title")}</h2>
        <div className="grid sm:grid-cols-3 gap-3 text-sm text-muted2">
          <div className="flex items-start gap-2"><span className="text-lg">🌊</span><div><strong className="text-foreground block">{t("page.termas.guide.rustic")}</strong>{t("page.termas.guide.rustic.desc")}</div></div>
          <div className="flex items-start gap-2"><span className="text-lg">⚖️</span><div><strong className="text-foreground block">{t("page.termas.guide.balanced")}</strong>{t("page.termas.guide.balanced.desc")}</div></div>
          <div className="flex items-start gap-2"><span className="text-lg">💎</span><div><strong className="text-foreground block">{t("page.termas.guide.premium")}</strong>{t("page.termas.guide.premium.desc")}</div></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-5 mb-6">
        <h2 className="text-sm font-bold mb-3">{t("page.termas.choose.title")}</h2>
        <div className="grid sm:grid-cols-3 gap-3 text-sm text-muted2">
          {[
            { icon: Trees, color: "text-emerald-400", title: t("page.termas.choose.rustic.title"), desc: t("page.termas.choose.rustic.desc") },
            { icon: HeartHandshake, color: "text-sky-400", title: t("page.termas.choose.comfort.title"), desc: t("page.termas.choose.comfort.desc") },
            { icon: TimerReset, color: "text-orange-400", title: t("page.termas.choose.family.title"), desc: t("page.termas.choose.family.desc") },
          ].map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className="rounded-xl border border-border bg-card-hover p-4"><div className="flex items-center gap-2 mb-2"><Icon size={16} className={item.color} /><strong className="text-foreground text-sm">{item.title}</strong></div><p>{item.desc}</p></div>;
          })}
        </div>
        <p className="text-xs text-muted mt-4">{t("page.termas.note")}</p>
      </motion.div>
      <PlaceExplorer places={places} />
    </div>
  );
}
