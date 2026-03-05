"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";

export default function RestaurantesPage() {
  const places = getPlacesByCategory("restaurantes");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          🍽️ Restaurantes
        </h1>
        <p className="text-muted2 leading-relaxed">
          Desde empanadas en el mercado hasta gastronomía mapuche contemporánea.
          Mis recomendaciones personales para comer en Pucón.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {places.map((place, i) => (
          <PlaceCard key={place.id} place={place} index={i} />
        ))}
      </div>
    </div>
  );
}
