"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { itineraries } from "@/data/itineraries";
import ItineraryTimeline from "@/components/ui/ItineraryTimeline";

const dayOptions = [
  { days: 1, label: "1 día", emoji: "⚡" },
  { days: 3, label: "2-3 días", emoji: "📅" },
  { days: 5, label: "4-5 días", emoji: "🗺️" },
  { days: 7, label: "6-7 días", emoji: "🏆" },
];

function ItinerariosContent() {
  const searchParams = useSearchParams();
  const diasParam = searchParams.get("dias");
  const selectedDays = diasParam ? parseInt(diasParam) : null;

  const selectedItinerary = selectedDays
    ? itineraries.find((it) => it.days === selectedDays)
    : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          📅 Itinerarios
        </h1>
        <p className="text-muted2 leading-relaxed">
          Planes sugeridos por tu anfitrión según cuántos días te quedes.
          Adaptables al clima y tus intereses.
        </p>
      </motion.div>

      {/* Day selector tabs */}
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-card border border-border rounded-2xl backdrop-blur-lg">
        {dayOptions.map((option) => (
          <Link
            key={option.days}
            href={`/itinerarios?dias=${option.days}`}
            className={`flex-1 min-w-[80px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              selectedDays === option.days
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                : "text-muted2 hover:text-foreground hover:bg-card-hover"
            }`}
          >
            <span>{option.emoji}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </Link>
        ))}
      </div>

      {/* No selection */}
      {!selectedItinerary && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card p-8 text-center"
        >
          <span className="text-5xl mb-4 block">🗓️</span>
          <h2 className="text-xl font-bold mb-2">
            ¿Cuántos días te quedas?
          </h2>
          <p className="text-sm text-muted2">
            Selecciona arriba para ver un itinerario sugerido día a día
          </p>
        </motion.div>
      )}

      {/* Itinerary content */}
      {selectedItinerary && (
        <div className="space-y-6">
          {/* Itinerary header */}
          <motion.div
            key={selectedItinerary.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedItinerary.emoji}</span>
              <div>
                <h2 className="text-lg font-extrabold">
                  {selectedItinerary.label}
                </h2>
                <p className="text-sm text-muted2">
                  {selectedItinerary.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Days */}
          {selectedItinerary.plan.map((day, i) => (
            <ItineraryTimeline key={day.day} day={day} dayIndex={i} />
          ))}

          {/* Nota */}
          <div className="glass-card p-4 text-center">
            <p className="text-xs text-muted2">
              💡 Estos itinerarios son sugerencias — siéntanse libres de
              adaptar según el clima, las ganas y el ritmo de cada día.
              ¡Aprovechenlo al máximo!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ItinerariosPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto px-4 py-8 text-center text-muted2">
          Cargando itinerarios...
        </div>
      }
    >
      <ItinerariosContent />
    </Suspense>
  );
}
