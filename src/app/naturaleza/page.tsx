"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";

export default function NaturalezaPage() {
  const places = getPlacesByCategory("naturaleza");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          🌲 Naturaleza
        </h1>
        <p className="text-muted2 leading-relaxed">
          Bosques milenarios de araucarias, lagos cristalinos, playas
          volcánicas y senderos que quitan el aliento. Lo mejor de la
          naturaleza del sur.
        </p>
      </motion.div>

      {/* Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-5 mb-6 border-emerald-500/20"
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl">🌲</span>
          <div>
            <h2 className="text-sm font-bold mb-1">
              El imperdible: Parque Huerquehue
            </h2>
            <p className="text-xs text-muted2 leading-relaxed">
              Si solo tienen tiempo para un trekking, que sea el sendero Los
              Lagos en Huerquehue. Araucarias milenarias, tres lagunas
              cristalinas y vistas al volcán. ~4-6 horas ida y vuelta.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {places.map((place, i) => (
          <PlaceCard key={place.id} place={place} index={i} />
        ))}
      </div>
    </div>
  );
}
