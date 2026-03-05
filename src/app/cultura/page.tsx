"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";

export default function CulturaPage() {
  const places = getPlacesByCategory("cultura");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          🎨 Cultura
        </h1>
        <p className="text-muted2 leading-relaxed">
          Pucón está en territorio mapuche. Descubrí su historia, su cocina
          ancestral, artesanía y el cielo austral más impresionante que vas
          a ver.
        </p>
      </motion.div>

      {/* Nota cultural */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-5 mb-6 border-violet-500/20"
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl">🙏</span>
          <div>
            <h2 className="text-sm font-bold mb-1">Cultura Mapuche</h2>
            <p className="text-xs text-muted2 leading-relaxed">
              La zona de Pucón es parte del Wallmapu (territorio mapuche).
              Aprovechen de conocer su rica cultura, cocina y cosmovisión.
              Siempre con respeto y curiosidad genuina.
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
