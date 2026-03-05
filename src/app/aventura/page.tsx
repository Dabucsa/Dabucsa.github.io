"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";

export default function AventuraPage() {
  const places = getPlacesByCategory("aventura");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          🏔️ Aventura
        </h1>
        <p className="text-muted2 leading-relaxed">
          Pucón es la capital de la aventura en Chile. Desde el ascenso al
          volcán hasta rafting, kayak, escalada y mountain bike.
        </p>
      </motion.div>

      {/* Nivel de dificultad */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-5 mb-6"
      >
        <h2 className="text-sm font-bold mb-3">⚡ Nivel de intensidad</h2>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted2">
          <div className="flex items-start gap-2">
            <span className="badge badge-green">Suave</span>
            <span>Kayak, canopy, rocódromo</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="badge badge-orange">Medio</span>
            <span>Rafting, bike, escalada</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="badge" style={{ background: "rgba(248,113,113,0.15)", color: "#fca5a5", border: "1px solid rgba(248,113,113,0.25)" }}>Extremo</span>
            <span>Volcán, enduro</span>
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
