"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { itineraries } from "@/data/itineraries";
import ItineraryTimeline from "@/components/ui/ItineraryTimeline";
import { useLanguage, useT, itinerariesEn } from "@/i18n";

function ItinerariosContent() {
  const searchParams = useSearchParams();
  const diasParam = searchParams.get("dias");
  const selectedDays = diasParam ? parseInt(diasParam) : null;
  const { lang } = useLanguage();
  const t = useT(lang);

  const dayOptions = [
    { days: 1, label: t("page.itinerarios.1day"), emoji: "⚡" },
    { days: 3, label: t("page.itinerarios.23days"), emoji: "📅" },
    { days: 5, label: t("page.itinerarios.45days"), emoji: "🗺️" },
    { days: 7, label: t("page.itinerarios.67days"), emoji: "🏆" },
  ];

  const selectedItinerary = selectedDays
    ? itineraries.find((it) => it.days === selectedDays)
    : null;

  const enOverride = selectedItinerary && lang === "en"
    ? itinerariesEn[selectedItinerary.id]
    : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{t("page.itinerarios.title")}</h1>
        <p className="text-muted2 leading-relaxed">{t("page.itinerarios.desc")}</p>
      </motion.div>
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-card border border-border rounded-2xl backdrop-blur-lg">
        {dayOptions.map((option) => (
          <Link key={option.days} href={`/itinerarios?dias=${option.days}`} className={`flex-1 min-w-[80px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${selectedDays === option.days ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" : "text-muted2 hover:text-foreground hover:bg-card-hover"}`}>
            <span>{option.emoji}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </Link>
        ))}
      </div>
      {!selectedItinerary && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-8 text-center">
          <span className="text-5xl mb-4 block">🗓️</span>
          <h2 className="text-xl font-bold mb-2">{t("page.itinerarios.howMany")}</h2>
          <p className="text-sm text-muted2">{t("page.itinerarios.selectAbove")}</p>
        </motion.div>
      )}
      {selectedItinerary && (
        <div className="space-y-6">
          <motion.div key={selectedItinerary.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedItinerary.emoji}</span>
              <div>
                <h2 className="text-lg font-extrabold">{enOverride?.label ?? selectedItinerary.label}</h2>
                <p className="text-sm text-muted2">{enOverride?.description ?? selectedItinerary.description}</p>
              </div>
            </div>
          </motion.div>
          {selectedItinerary.plan.map((day, i) => (
            <ItineraryTimeline key={day.day} day={day} dayIndex={i} dayTitle={enOverride?.plan[i]?.title} activityNotes={enOverride?.plan[i]?.notes} />
          ))}
          <div className="glass-card p-4 text-center">
            <p className="text-xs text-muted2">{t("page.itinerarios.note")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ItinerariosPageClient() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center text-muted2">Loading...</div>}>
      <ItinerariosContent />
    </Suspense>
  );
}
