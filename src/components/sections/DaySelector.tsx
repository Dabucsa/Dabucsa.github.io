"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { Itinerary } from "@/data/types";
import { useLanguage, useT } from "@/i18n";

interface DaySelectorProps {
  itineraries: Itinerary[];
}

export default function DaySelector({ itineraries }: DaySelectorProps) {
  const { lang } = useLanguage();
  const t = useT(lang);

  const dayOptions = [
    { days: 1, label: t("days.1.label"), sub: t("days.1.sub"), emoji: "⚡" },
    { days: 3, label: t("days.3.label"), sub: t("days.3.sub"), emoji: "📅" },
    { days: 5, label: t("days.5.label"), sub: t("days.5.sub"), emoji: "🗺️" },
    { days: 7, label: t("days.7.label"), sub: t("days.7.sub"), emoji: "🏆" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {dayOptions.map((option, i) => {
        const itinerary = itineraries.find((it) => it.days === option.days);
        return (
          <motion.div
            key={option.days}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              href={`/itinerarios?dias=${option.days}`}
              className="glass-card block min-h-32 p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center group hover:-translate-y-1 transition-transform"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {option.emoji}
              </span>
              <span className="text-sm font-bold text-foreground">
                {option.label}
              </span>
              {itinerary && (
                <span className="text-[11px] text-muted2 flex items-center gap-1">
                  <Calendar size={10} />
                  {itinerary.plan.length} {t("days.planned")}
                </span>
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
