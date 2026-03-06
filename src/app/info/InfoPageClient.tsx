"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Car,
  Thermometer,
  Wifi,
  ShoppingCart,
  Mountain,
  Plane,
  Bus,
  Shield,
  MapPin,
  ExternalLink,
  Leaf,
  Sprout,
  Snowflake,
  Sun,
} from "lucide-react";
import { useLanguage, useT } from "@/i18n";
import { getLocalizedText, practicalInfoContent } from "@/content/practical-info";

export default function InfoPageClient() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const emergencyNumbers = practicalInfoContent.emergencyNumbers;
  const hospital = practicalInfoContent.hospital;
  const nearbyServices = practicalInfoContent.nearbyServices;
  const howToGet = practicalInfoContent.howToGet;
  const localTransport = practicalInfoContent.localTransport;
  const climateSections = [
    { title: t("page.info.climate.summer.title"), items: t("page.info.climate.summer.items").split("|"), icon: Sun, color: "text-yellow-400" },
    { title: t("page.info.climate.autumn.title"), items: t("page.info.climate.autumn.items").split("|"), icon: Leaf, color: "text-orange-400" },
    { title: t("page.info.climate.spring.title"), items: t("page.info.climate.spring.items").split("|"), icon: Sprout, color: "text-emerald-400" },
    { title: t("page.info.climate.winter.title"), items: t("page.info.climate.winter.items").split("|"), icon: Snowflake, color: "text-sky-400" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{t("page.info.title")}</h1>
        <p className="text-muted2 leading-relaxed">{t("page.info.desc")}</p>
        <p className="text-sm text-muted mt-3">{t("page.info.dataNote")}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.02 }} className="glass-card p-5 mb-5">
        <h2 className="text-sm font-bold mb-3">{t("page.info.checklist.title")}</h2>
        <ul className="space-y-2 text-sm text-muted2">
          {t("page.info.checklist.items").split("|").map((item, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>{item}</span></li>
          ))}
        </ul>
      </motion.div>

      <div className="space-y-5">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center"><Phone size={18} className="text-red-400" /></div><h2 className="text-base font-bold">{t("page.info.emergency.title")}</h2></div>
          <div className="grid sm:grid-cols-2 gap-3">{emergencyNumbers.map((e) => <a key={e.num} href={`tel:${e.num}`} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card-hover px-3 py-3 transition-colors hover:border-border-hover"><div className="flex items-center gap-3 text-sm"><span className={`font-mono font-bold text-lg ${e.color}`}>{e.num}</span><span className="text-sm text-muted2">{getLocalizedText(e.label, lang)}</span></div><span className="text-[11px] font-semibold text-emerald-400">{t("page.info.emergency.callNow")}</span></a>)}</div>
          <div className="mt-3 rounded-xl border border-red-500/15 bg-red-500/5 p-4 text-sm text-muted2"><p><strong className="text-red-400">{t("page.info.hospital")}</strong> {getLocalizedText(hospital.address, lang)} · Tel: {hospital.phoneLabel}</p><div className="mt-3 flex flex-wrap gap-2"><a href={hospital.phoneHref} className="inline-flex items-center gap-1 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300 transition-colors hover:bg-red-500/15"><Phone size={12} />{t("page.info.emergency.callHospital")}</a><a href={hospital.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-sky-500/20 bg-sky-500/10 px-3 py-2 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-500/15"><MapPin size={12} />{t("page.info.emergency.openMap")}</a></div></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center"><Plane size={18} className="text-sky-400" /></div><h2 className="text-base font-bold">{t("page.info.howToGet.title")}</h2></div>
          <div className="space-y-3 text-sm text-muted2">{[Plane, Car, Bus].map((Icon, index) => { const item = howToGet[index]; const iconColor = ["text-sky-400","text-emerald-400","text-orange-400"][index]; return <div key={item.label.es} className="flex items-start gap-2"><Icon size={14} className={`${iconColor} mt-0.5 shrink-0`} /><div><strong className="text-foreground">{getLocalizedText(item.label, lang)}</strong> {getLocalizedText(item.detail, lang)}</div></div>; })}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"><Car size={18} className="text-emerald-400" /></div><h2 className="text-base font-bold">{t("page.info.transport.title")}</h2></div>
          <ul className="space-y-2 text-sm text-muted2">{["🚗","🚐","🚶","🚌","📱"].map((emoji, index) => { const item = localTransport[index]; return <li key={item.label.es} className="flex items-start gap-2">{emoji} <span><strong className="text-foreground">{getLocalizedText(item.label, lang)}</strong> — {getLocalizedText(item.detail, lang)}</span></li>; })}</ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center"><Thermometer size={18} className="text-yellow-400" /></div><h2 className="text-base font-bold">{t("page.info.climate.title")}</h2></div>
          <p className="text-sm text-muted2 mb-4">{t("page.info.climate.note")}</p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted2">{climateSections.map((section) => { const Icon = section.icon; return <div key={section.title} className="rounded-xl border border-border bg-card-hover p-4"><div className="flex items-center gap-2 mb-2"><Icon size={16} className={section.color} /><h3 className="text-sm font-bold text-foreground">{section.title}</h3></div><ul className="space-y-1">{section.items.map((item, i) => <li key={i}>• {item}</li>)}</ul></div>; })}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center"><Mountain size={18} className="text-orange-400" /></div><h2 className="text-base font-bold">{t("page.info.volcano.title")}</h2></div>
          <div className="text-sm text-muted2 space-y-3"><p>{t("page.info.volcano.desc")}</p><div className="grid grid-cols-2 gap-2 text-xs sm:text-sm"><div className="p-2 bg-emerald-500/5 border border-emerald-500/15 rounded-lg"><strong className="text-emerald-400">🟢 Verde</strong> — {t("page.info.volcano.green")}</div><div className="p-2 bg-yellow-500/5 border border-yellow-500/15 rounded-lg"><strong className="text-yellow-400">🟡 Amarillo</strong> — {t("page.info.volcano.yellow")}</div><div className="p-2 bg-orange-500/5 border border-orange-500/15 rounded-lg"><strong className="text-orange-400">🟠 Naranja</strong> — {t("page.info.volcano.orange")}</div><div className="p-2 bg-red-500/5 border border-red-500/15 rounded-lg"><strong className="text-red-400">🔴 Rojo</strong> — {t("page.info.volcano.red")}</div></div><a href="https://www.sernageomin.cl/volcanes/volcan-villarrica/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky-400 hover:underline font-semibold mt-1"><Shield size={12} />{t("page.info.volcano.link")}</a></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center"><ShoppingCart size={18} className="text-violet-400" /></div><h2 className="text-base font-bold">{t("page.info.services.title")}</h2></div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted2"><div><h3 className="font-bold text-foreground mb-1.5">🛒 {t("page.info.services.supermarkets")}</h3><ul className="space-y-1">{nearbyServices.supermarkets.map((service) => <li key={service.name}><a href={service.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground"><strong>{service.name}</strong> — {getLocalizedText(service.detail, lang)}<ExternalLink size={12} className="text-sky-400" /></a></li>)}</ul></div><div><h3 className="font-bold text-foreground mb-1.5">💊 {t("page.info.services.pharmacies")}</h3><ul className="space-y-1">{nearbyServices.pharmacies.map((service) => <li key={service.name}><a href={service.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground"><strong>{service.name}</strong> — {getLocalizedText(service.detail, lang)}<ExternalLink size={12} className="text-sky-400" /></a></li>)}</ul></div></div>
          <p className="mt-3 text-xs text-muted">{t("page.info.services.reference")}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center"><Wifi size={18} className="text-sky-400" /></div><h2 className="text-base font-bold">{t("page.info.wifi.title")}</h2></div>
          <ul className="space-y-2 text-sm text-muted2">{t("page.info.wifi.items").split("|").map((item, i) => <li key={i}>{item}</li>)}</ul>
        </motion.div>
      </div>
    </div>
  );
}
