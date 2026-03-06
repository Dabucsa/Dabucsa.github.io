"use client";
import { motion } from "framer-motion";
import { TimerReset, Trees, CloudSunRain } from "lucide-react";
import { getPlacesByCategory } from "@/data/places";
import PlaceExplorer from "@/components/sections/PlaceExplorer";
import { useLanguage, useT } from "@/i18n";
export default function NaturalezaPageClient() {
  const places = getPlacesByCategory("naturaleza");
  const { lang } = useLanguage();
  const t = useT(lang);
  return <div className="max-w-5xl mx-auto px-4 py-8"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8"><h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{t("page.naturaleza.title")}</h1><p className="text-muted2 leading-relaxed">{t("page.naturaleza.desc")}</p></motion.div><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5 mb-6 border-emerald-500/20"><div className="flex items-start gap-3"><span className="text-2xl">🌲</span><div><h2 className="text-sm font-bold mb-1">{t("page.naturaleza.highlight.title")}</h2><p className="text-sm text-muted2 leading-relaxed">{t("page.naturaleza.highlight.desc")}</p></div></div></motion.div><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-5 mb-6"><h2 className="text-sm font-bold mb-3">{t("page.naturaleza.choose.title")}</h2><div className="grid sm:grid-cols-3 gap-3 text-sm text-muted2">{[{ icon: TimerReset, color: "text-sky-400", title: t("page.naturaleza.choose.short.title"), desc: t("page.naturaleza.choose.short.desc") }, { icon: Trees, color: "text-emerald-400", title: t("page.naturaleza.choose.full.title"), desc: t("page.naturaleza.choose.full.desc") }, { icon: CloudSunRain, color: "text-orange-400", title: t("page.naturaleza.choose.weather.title"), desc: t("page.naturaleza.choose.weather.desc") }].map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-xl border border-border bg-card-hover p-4"><div className="flex items-center gap-2 mb-2"><Icon size={16} className={item.color} /><strong className="text-foreground text-sm">{item.title}</strong></div><p>{item.desc}</p></div>; })}</div></motion.div><PlaceExplorer places={places} /></div>;
}
