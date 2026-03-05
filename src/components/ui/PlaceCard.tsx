"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Lightbulb } from "lucide-react";
import type { Place } from "@/data/types";
import { useLanguage, useT, placesEn } from "@/i18n";

interface PlaceCardProps {
  place: Place;
  index?: number;
}

export default function PlaceCard({ place, index = 0 }: PlaceCardProps) {
  const { lang } = useLanguage();
  const t = useT(lang);
  const en = lang === "en" ? placesEn[place.id] : undefined;
  const description = en?.description ?? place.description;
  const longDescription = en?.longDescription ?? place.longDescription;
  const tip = en?.tip ?? place.tip;

  const profileLabels: Record<string, { label: string; color: string }> = {
    familia: { label: t("place.family"), color: "badge-green" },
    aventura: { label: t("place.adventure"), color: "badge-orange" },
    pareja: { label: t("place.couple"), color: "badge-violet" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-card p-5 flex flex-col gap-3 group cursor-default"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-card-hover border border-border flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
            {place.emoji}
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground leading-tight">
              {place.name}
            </h3>
            <p className="text-xs text-muted2 mt-0.5">{description}</p>
          </div>
        </div>
      </div>

      {/* Long description */}
      {longDescription && (
        <p className="text-sm text-muted2 leading-relaxed">
          {longDescription}
        </p>
      )}

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-1 font-semibold">
          <DollarSign size={12} />
          {place.price}{/\d/.test(place.price) && <span className="text-[10px] font-normal text-emerald-400/60 ml-0.5">({t("place.approx")})</span>}
        </span>
        <span className="flex items-center gap-1 text-muted2 bg-card-hover rounded-md px-2 py-1">
          <Clock size={12} />
          {place.duration}
        </span>
        <a
          href={place.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-md px-2 py-1 font-semibold hover:bg-sky-500/20 transition-colors"
        >
          <MapPin size={12} />
          {t("place.seeMap")}
        </a>
      </div>

      {/* Profile badges */}
      <div className="flex flex-wrap gap-1.5">
        {place.bestFor.map((p) => (
          <span key={p} className={`badge ${profileLabels[p].color}`}>
            {profileLabels[p].label}
          </span>
        ))}
        {place.weather === "indoor" && (
          <span className="badge badge-blue">🏠 {t("place.indoor")}</span>
        )}
      </div>

      {/* Tip del anfitrión */}
      {tip && (
        <div className="mt-1 p-3 bg-emerald-500/5 border border-emerald-500/15 rounded-xl">
          <div className="flex items-start gap-2">
            <Lightbulb size={14} className="text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-xs text-muted2 leading-relaxed">
              <span className="font-semibold text-emerald-400">
                {t("place.hostTip")}:{" "}
              </span>
              {tip}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
