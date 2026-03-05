"use client";

import { motion } from "framer-motion";
import { getPlacesByCategory } from "@/data/places";
import PlaceCard from "@/components/ui/PlaceCard";
import { useLanguage, useT } from "@/i18n";

export default function RestaurantesPage() {
  const places = getPlacesByCategory("restaurantes");
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          {t("page.restaurantes.title")}
        </h1>
        <p className="text-muted2 leading-relaxed">
          {t("page.restaurantes.desc")}
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
