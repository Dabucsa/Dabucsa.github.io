"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";

export default function TermasPage() {
  const places = getPlacesByCategory("termas");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          ♨️ Termas
        </h1>
        <p className="text-muted2 leading-relaxed">
          Desde pozones rústicos en medio del bosque hasta spa premium con
          cabinas privadas. Hay termas para cada gusto y presupuesto.
        </p>
      </motion.div>

      {/* Guía rápida */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-5 mb-6"
      >
        <h2 className="text-sm font-bold mb-3">🗺️ Guía rápida de termas</h2>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted2">
          <div className="flex items-start gap-2">
            <span className="text-lg">🌊</span>
            <div>
              <strong className="text-foreground block">Rústico</strong>
              Los Pozones — naturaleza pura, precio accesible
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">⚖️</span>
            <div>
              <strong className="text-foreground block">Equilibrado</strong>
              Menetúe — comodidad + naturaleza, ideal familias
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">💎</span>
            <div>
              <strong className="text-foreground block">Premium</strong>
              Huife / Geométricas — spa completo, experiencia top
            </div>
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
