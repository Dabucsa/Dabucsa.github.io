"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { getPlaceById } from "@/data/places";
import type { ItineraryDay } from "@/data/types";
import { useLanguage, useT, placesEn } from "@/i18n";

interface ItineraryTimelineProps {
  day: ItineraryDay;
  dayIndex: number;
  dayTitle?: string;
  activityNotes?: (string | undefined)[];
}

export default function ItineraryTimeline({
  day,
  dayIndex,
  dayTitle,
  activityNotes,
}: ItineraryTimelineProps) {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: dayIndex * 0.1, duration: 0.5 }}
      className="glass-card overflow-hidden"
    >
      {/* Day header */}
      <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-emerald-500/8 to-transparent">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_theme(colors.emerald.400)]" />
          {t("timeline.day")} {day.day}
        </div>
        <h3 className="text-lg font-extrabold tracking-tight">
          {dayTitle ?? day.title}
        </h3>
      </div>

      {/* Timeline items */}
      <div className="py-2">
        {day.activities.map((activity, i) => {
          const place = getPlaceById(activity.placeId);
          if (!place) return null;
          const en = lang === "en" ? placesEn[place.id] : undefined;
          const noteText = activityNotes?.[i] ?? activity.note ?? (en?.description ?? place.description);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: dayIndex * 0.1 + i * 0.06 }}
              className="flex gap-3 px-5 py-3 border-b border-border last:border-b-0 hover:bg-card-hover transition-colors"
            >
              {/* Time column */}
              <div className="flex flex-col items-center w-11 shrink-0">
                <span className="text-[11px] font-bold text-emerald-400 tabular-nums">
                  {activity.time}
                </span>
                {i < day.activities.length - 1 && (
                  <div className="timeline-connector flex-1 mt-1 min-h-4" />
                )}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-card-hover border border-border flex items-center justify-center text-lg shrink-0">
                {place.emoji}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-foreground leading-tight">
                  {place.name}
                </h4>
                <p className="text-xs text-muted2 mt-1 leading-relaxed">
                  {noteText}
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-0.5">
                    {place.price}{/\d/.test(place.price) && <span className="text-[9px] font-normal text-emerald-400/60 ml-0.5">({t("place.approx")})</span>}
                  </span>
                  <span className="text-[11px] text-muted2 flex items-center gap-1">
                    <Clock size={10} />
                    {place.duration}
                  </span>
                  <a
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-md px-2 py-0.5 hover:bg-sky-500/20 transition-colors flex items-center gap-1"
                  >
                    <MapPin size={10} />
                    {t("timeline.map")}
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
