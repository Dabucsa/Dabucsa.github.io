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
} from "lucide-react";
import { useLanguage, useT } from "@/i18n";

export default function InfoPage() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          {t("page.info.title")}
        </h1>
        <p className="text-muted2 leading-relaxed">
          {t("page.info.desc")}
        </p>
      </motion.div>

      <div className="space-y-5">
        {/* Emergencias */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Phone size={18} className="text-red-400" />
            </div>
            <h2 className="text-base font-bold">{t("page.info.emergency.title")}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "131", label: t("page.info.emergency.samu"), color: "text-red-400" },
              { num: "132", label: t("page.info.emergency.fire"), color: "text-orange-400" },
              { num: "133", label: t("page.info.emergency.police"), color: "text-sky-400" },
              { num: "134", label: t("page.info.emergency.pdi"), color: "text-violet-400" },
              { num: "137", label: t("page.info.emergency.conaf"), color: "text-emerald-400" },
              { num: "130", label: t("page.info.emergency.maritime"), color: "text-blue-400" },
            ].map((e) => (
              <div key={e.num} className="flex items-center gap-3 text-sm">
                <span className={`font-mono font-bold text-lg ${e.color}`}>
                  {e.num}
                </span>
                <span className="text-muted2 text-xs">{e.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 bg-red-500/5 border border-red-500/15 rounded-xl text-xs text-muted2">
            <strong className="text-red-400">{t("page.info.hospital")}</strong> Colo Colo
            635 · Tel: (045) 244-3500
          </div>
        </motion.div>

        {/* Cómo llegar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Plane size={18} className="text-sky-400" />
            </div>
            <h2 className="text-base font-bold">{t("page.info.howToGet.title")}</h2>
          </div>
          <div className="space-y-3 text-xs text-muted2">
            <div className="flex items-start gap-2">
              <Plane size={14} className="text-sky-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-foreground">{t("page.info.howToGet.plane")}</strong>{" "}
                {t("page.info.howToGet.planeDesc")}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Car size={14} className="text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-foreground">{t("page.info.howToGet.car")}</strong>{" "}
                {t("page.info.howToGet.carDesc")}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Bus size={14} className="text-orange-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-foreground">{t("page.info.howToGet.bus")}</strong>{" "}
                {t("page.info.howToGet.busDesc")}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transporte local */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Car size={18} className="text-emerald-400" />
            </div>
            <h2 className="text-base font-bold">{t("page.info.transport.title")}</h2>
          </div>
          <ul className="space-y-2 text-xs text-muted2">
            <li className="flex items-start gap-2">
              🚗 <span><strong className="text-foreground">{t("page.info.transport.car")}</strong> — {t("page.info.transport.carDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              🚐 <span><strong className="text-foreground">{t("page.info.transport.transfer")}</strong> — {t("page.info.transport.transferDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              🚶 <span><strong className="text-foreground">{t("page.info.transport.walk")}</strong> — {t("page.info.transport.walkDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              🚌 <span><strong className="text-foreground">{t("page.info.transport.bus")}</strong> — {t("page.info.transport.busDesc")}</span>
            </li>
            <li className="flex items-start gap-2">
              📱 <span><strong className="text-foreground">{t("page.info.transport.taxi")}</strong> — {t("page.info.transport.taxiDesc")}</span>
            </li>
          </ul>
        </motion.div>

        {/* Clima */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <Thermometer size={18} className="text-yellow-400" />
            </div>
            <h2 className="text-base font-bold">{t("page.info.climate.title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted2">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">{t("page.info.climate.summer.title")}</h3>
              <ul className="space-y-1">
                {t("page.info.climate.summer.items").split("|").map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">{t("page.info.climate.winter.title")}</h3>
              <ul className="space-y-1">
                {t("page.info.climate.winter.items").split("|").map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Volcán */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Mountain size={18} className="text-orange-400" />
            </div>
            <h2 className="text-base font-bold">{t("page.info.volcano.title")}</h2>
          </div>
          <div className="text-xs text-muted2 space-y-2">
            <p>
              {t("page.info.volcano.desc")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-emerald-500/5 border border-emerald-500/15 rounded-lg">
                <strong className="text-emerald-400">🟢 Verde</strong> — {t("page.info.volcano.green")}
              </div>
              <div className="p-2 bg-yellow-500/5 border border-yellow-500/15 rounded-lg">
                <strong className="text-yellow-400">🟡 Amarillo</strong> — {t("page.info.volcano.yellow")}
              </div>
              <div className="p-2 bg-orange-500/5 border border-orange-500/15 rounded-lg">
                <strong className="text-orange-400">🟠 Naranja</strong> — {t("page.info.volcano.orange")}
              </div>
              <div className="p-2 bg-red-500/5 border border-red-500/15 rounded-lg">
                <strong className="text-red-400">🔴 Rojo</strong> — {t("page.info.volcano.red")}
              </div>
            </div>
            <a
              href="https://www.sernageomin.cl/volcanes/volcan-villarrica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-400 hover:underline font-semibold mt-1"
            >
              <Shield size={12} />
              {t("page.info.volcano.link")}
            </a>
          </div>
        </motion.div>

        {/* Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <ShoppingCart size={18} className="text-violet-400" />
            </div>
            <h2 className="text-base font-bold">{t("page.info.services.title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-muted2">
            <div>
              <h3 className="font-bold text-foreground mb-1.5">🛒 {t("page.info.services.supermarkets")}</h3>
              <ul className="space-y-1">
                <li>• <strong>Unimarc</strong> — Centro de Pucón</li>
                <li>• <strong>Santa Isabel</strong> — Av. O&apos;Higgins</li>
                <li>• <strong>Minimarkets</strong> — Varios en el centro</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1.5">💊 {t("page.info.services.pharmacies")}</h3>
              <ul className="space-y-1">
                <li>• <strong>Cruz Verde</strong> — Centro</li>
                <li>• <strong>Salcobrand</strong> — Av. O&apos;Higgins</li>
                <li>• <strong>Farmacia del pueblo</strong> — Centro</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* WiFi y conectividad */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Wifi size={18} className="text-sky-400" />
            </div>
            <h2 className="text-base font-bold">{t("page.info.wifi.title")}</h2>
          </div>
          <ul className="space-y-2 text-xs text-muted2">
            {t("page.info.wifi.items").split("|").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
