"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const disciplines = [
  {
    id: "bjj",
    name: "Brazilian Jiu-Jitsu",
    shortName: "BJJ",
    description:
      "El arte suave. Domina las tecnicas de suelo, sumisiones y control que te daran ventaja en cualquier situacion.",
    color: "#dc2626",
    icon: "🥋",
  },
  {
    id: "nogi",
    name: "No-Gi / Grappling",
    shortName: "NO-GI",
    description:
      "Grappling sin kimono. Agarre, control y sumisiones en su forma mas pura y dinamica.",
    color: "#7c3aed",
    icon: "🤼",
  },
  {
    id: "mma",
    name: "MMA",
    shortName: "MMA",
    description:
      "Artes Marciales Mixtas. La combinacion perfecta de striking y grappling para el combate completo.",
    color: "#ea580c",
    icon: "🥊",
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    shortName: "KICK",
    description:
      "Golpes de puno y patadas en un sistema de combate explosivo y efectivo.",
    color: "#0891b2",
    icon: "🦵",
  },
  {
    id: "boxeo",
    name: "Boxeo",
    shortName: "BOX",
    description:
      "El dulce arte. Tecnica, velocidad y potencia con los punos. La base del striking.",
    color: "#d4af37",
    icon: "🥊",
  },
  {
    id: "funcional",
    name: "Funcional",
    shortName: "FIT",
    description:
      "Entrenamiento funcional de alto rendimiento. Fuerza, resistencia y acondicionamiento fisico.",
    color: "#16a34a",
    icon: "💪",
  },
];

export default function Disciplines() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#dc2626] text-sm font-bold uppercase tracking-widest">
            Nuestras disciplinas
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
            ELIGE TU <span className="gradient-text">CAMINO</span>
          </h2>
          <div className="accent-line mx-auto mt-6" />
        </motion.div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/disciplinas#${discipline.id}`}>
                <div className="group relative h-full bg-[#141414] border border-[#262626] rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-[#dc2626]/50 hover:shadow-lg hover:shadow-red-500/10">
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${discipline.color}15, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{discipline.icon}</span>
                      <span
                        className="px-3 py-1 text-xs font-bold tracking-wider rounded-full"
                        style={{
                          backgroundColor: `${discipline.color}20`,
                          color: discipline.color,
                        }}
                      >
                        {discipline.shortName}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#dc2626] transition-colors">
                      {discipline.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {discipline.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-[#dc2626] text-sm font-semibold uppercase tracking-wider">
                      <span>Ver mas</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: discipline.color }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/horarios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
          >
            Ver Horarios Completos
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
