"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, CloudRainWind, Compass, Timer } from "lucide-react";
import type { Place } from "@/data/types";
import { useLanguage, useT, placesEn } from "@/i18n";
import { getPlaceEditorial } from "@/content/place-editorial";

interface PlaceCardProps {
  place: Place;
  index?: number;
}

export default function PlaceCard({ place, index = 0 }: PlaceCardProps) {
  const { lang } = useLanguage();
  const t = useT(lang);
  const en = lang === "en" ? placesEn[place.id] : undefined;
  const name = en?.name ?? place.name;
  const description = en?.description ?? place.description;
  const longDescription = en?.longDescription ?? place.longDescription;
  const tip = en?.tip ?? place.tip;
  const editorial = getPlaceEditorial(place.id, lang);
  const mapActionLabel = place.mapConfidence === "verified"
    ? t("place.openMap")
    : t("place.searchMap");

  const profileLabels: Record<string, { label: string; color: string }> = {
    familia: { label: t("place.family"), color: "badge-green" },
    aventura: { label: t("place.adventure"), color: "badge-orange" },
    pareja: { label: t("place.couple"), color: "badge-violet" },
  };

  const budgetLabel =
    place.price === "$" ? t("place.budget")
      : place.price === "$$" ? t("place.midrange")
      : t("place.premium");

  const weatherLabel =
    place.weather === "indoor" ? t("place.rainFriendly")
      : place.weather === "both" ? t("place.weatherFlexible")
      : t("place.weatherDependent");

  const durationLabel = (() => {
    const duration = place.duration.toLowerCase();
    if (duration.includes("30 min") || duration.includes("45 min") || duration === "1 hr") {
      return t("place.shortStop");
    }
    if (duration.includes("1-2 hrs") || duration.includes("1.5 hrs") || duration.includes("2 hrs")) {
      return t("place.relaxedPlan");
    }
    if (duration.includes("3 hrs") || duration.includes("4 hrs")) {
      return t("place.halfDay");
    }
    return t("place.longPlan");
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-card p-5 flex flex-col gap-4 group cursor-default"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-card-hover border border-border flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
            {place.emoji}
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground leading-tight">
              {name}
            </h3>
            <p className="text-sm text-muted2 mt-0.5">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-2 text-[11px]">
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/8 px-3 py-2">
          <div className="flex items-center gap-1.5 text-emerald-300 font-semibold mb-1">
            <DollarSign size={12} />
            {budgetLabel}
          </div>
          <div className="text-muted2">{place.price}</div>
        </div>
        <div className="rounded-lg border border-sky-500/20 bg-sky-500/8 px-3 py-2">
          <div className="flex items-center gap-1.5 text-sky-300 font-semibold mb-1">
            <CloudRainWind size={12} />
            {weatherLabel}
          </div>
          <div className="text-muted2">{t("place.goodToKnow")}</div>
        </div>
        <div className="rounded-lg border border-violet-500/20 bg-violet-500/8 px-3 py-2">
          <div className="flex items-center gap-1.5 text-violet-300 font-semibold mb-1">
            <Timer size={12} />
            {durationLabel}
          </div>
          <div className="text-muted2">{place.duration}</div>
        </div>
      </div>

      {longDescription && (
        <div className="rounded-xl border border-border bg-card-hover p-4">
          <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
            {t("place.quickTake")}
          </p>
          <p className="text-sm text-muted2 leading-relaxed">
            {longDescription}
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="flex items-center gap-1 text-muted2 bg-card-hover rounded-md px-2 py-1 border border-border">
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
          {mapActionLabel}
        </a>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
          {t("place.bestForTitle")}
        </p>
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
      </div>

      {(editorial.bestMoment || editorial.logistics || editorial.caution || editorial.reservation) && (
        <div className="rounded-xl border border-border bg-card-hover p-4">
          <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-3">
            {t("place.goodToKnow")}
          </p>
          <div className="space-y-2 text-sm text-muted2">
            {editorial.bestMoment && (
              <p>
                <span className="font-semibold text-foreground">{t("place.bestMoment")}:</span>{" "}
                {editorial.bestMoment}
              </p>
            )}
            {editorial.logistics && (
              <p>
                <span className="font-semibold text-foreground">{t("place.logistics")}:</span>{" "}
                {editorial.logistics}
              </p>
            )}
            {editorial.reservation && (
              <p>
                <span className="font-semibold text-foreground">{t("place.reservation")}:</span>{" "}
                {editorial.reservation}
              </p>
            )}
            {editorial.caution && (
              <p>
                <span className="font-semibold text-foreground">{t("place.caution")}:</span>{" "}
                {editorial.caution}
              </p>
            )}
          </div>
        </div>
      )}

      {tip && (
        <div className="mt-1 p-3 bg-emerald-500/5 border border-emerald-500/15 rounded-xl">
          <div className="flex items-start gap-2">
            <Compass size={14} className="text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-sm text-muted2 leading-relaxed">
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
