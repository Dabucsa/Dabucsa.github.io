"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { Itinerary } from "@/data/types";

interface DaySelectorProps {
  itineraries: Itinerary[];
}

const dayOptions = [
  { days: 1, label: "1 día", emoji: "⚡" },
  { days: 3, label: "2-3 días", emoji: "📅" },
  { days: 5, label: "4-5 días", emoji: "🗺️" },
  { days: 7, label: "6-7 días", emoji: "🏆" },
];

export default function DaySelector({ itineraries }: DaySelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
              className="glass-card p-5 flex flex-col items-center gap-2 text-center group hover:-translate-y-1 transition-transform block"
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
                  {itinerary.plan.length} {itinerary.plan.length === 1 ? "día" : "días"} planificados
                </span>
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
