"use client";
import { motion } from "framer-motion";
import { BookOpen, Utensils, MoonStar } from "lucide-react";
import { getPlacesByCategory } from "@/data/places";
import PlaceExplorer from "@/components/sections/PlaceExplorer";
import { useLanguage, useT } from "@/i18n";
export default function CulturaPageClient() {
  const places = getPlacesByCategory("cultura");
  const { lang } = useLanguage();
  const t = useT(lang);
  return <div className="max-w-5xl mx-auto px-4 py-8"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8"><h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{t("page.cultura.title")}</h1><p className="text-muted2 leading-relaxed">{t("page.cultura.desc")}</p></motion.div><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5 mb-6 border-violet-500/20"><div className="flex items-start gap-3"><span className="text-2xl">🙏</span><div><h2 className="text-sm font-bold mb-1">{t("page.cultura.note.title")}</h2><p className="text-sm text-muted2 leading-relaxed">{t("page.cultura.note.desc")}</p></div></div></motion.div><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-5 mb-6"><h2 className="text-sm font-bold mb-3">{t("page.cultura.choose.title")}</h2><div className="grid sm:grid-cols-3 gap-3 text-sm text-muted2">{[{ icon: BookOpen, color: "text-violet-400", title: t("page.cultura.choose.learn.title"), desc: t("page.cultura.choose.learn.desc") }, { icon: Utensils, color: "text-orange-400", title: t("page.cultura.choose.food.title"), desc: t("page.cultura.choose.food.desc") }, { icon: MoonStar, color: "text-sky-400", title: t("page.cultura.choose.night.title"), desc: t("page.cultura.choose.night.desc") }].map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-xl border border-border bg-card-hover p-4"><div className="flex items-center gap-2 mb-2"><Icon size={16} className={item.color} /><strong className="text-foreground text-sm">{item.title}</strong></div><p>{item.desc}</p></div>; })}</div></motion.div><PlaceExplorer places={places} /></div>;
}
