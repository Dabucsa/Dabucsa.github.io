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
      "El arte suave. Tecnicas de suelo, sumisiones y control. Clases para principiantes, avanzados, femenino y kids.",
    classes: ["Principiantes", "Grupo General", "Femenino", "Kids & Juveniles"],
    image: "/images/bjj.jpg",
    gradient: "from-[#d4a843]/20 via-[#1a1510] to-[#0c0a08]",
    pattern: "radial-gradient(ellipse at 30% 20%, rgba(212,168,67,0.15) 0%, transparent 60%)",
  },
  {
    id: "mma",
    name: "Artes Marciales Mixtas",
    shortName: "MMA",
    description:
      "Combate completo: striking + grappling. Preparacion integral para el deporte mas completo del mundo.",
    classes: ["MMA General", "Competidores"],
    image: "/images/mma.jpg",
    gradient: "from-[#c44a2e]/20 via-[#1a1510] to-[#0c0a08]",
    pattern: "radial-gradient(ellipse at 70% 30%, rgba(196,74,46,0.15) 0%, transparent 60%)",
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    shortName: "KICK",
    description:
      "Golpes de puno y patadas explosivas. Un sistema de combate dinamico que mejora tu condicion fisica al maximo.",
    classes: ["Kickboxing", "Kickboxing-Boxeo"],
    image: "/images/kickboxing.jpg",
    gradient: "from-[#d4a843]/20 via-[#1a1510] to-[#0c0a08]",
    pattern: "radial-gradient(ellipse at 20% 70%, rgba(212,168,67,0.12) 0%, transparent 60%)",
  },
  {
    id: "boxeo",
    name: "Boxeo",
    shortName: "BOX",
    description:
      "El dulce arte. Tecnica de manos, footwork, timing y potencia. La base fundamental del striking.",
    classes: ["Boxeo", "Kickboxing-Boxeo"],
    image: "/images/boxeo.jpg",
    gradient: "from-[#c44a2e]/20 via-[#1a1510] to-[#0c0a08]",
    pattern: "radial-gradient(ellipse at 80% 50%, rgba(196,74,46,0.12) 0%, transparent 60%)",
  },
  {
    id: "funcional",
    name: "Entrenamiento Funcional",
    shortName: "FIT",
    description:
      "Fuerza, resistencia y acondicionamiento fisico. El complemento perfecto para las artes marciales.",
    classes: ["Funcional", "Funcional-Kickboxing"],
    image: "/images/funcional.jpg",
    gradient: "from-[#d4a843]/20 via-[#1a1510] to-[#0c0a08]",
    pattern: "radial-gradient(ellipse at 50% 20%, rgba(212,168,67,0.10) 0%, transparent 60%)",
  },
  {
    id: "competidores",
    name: "Competidores",
    shortName: "COMP",
    description:
      "Entrenamiento especializado para atletas que compiten. Preparacion fisica y tecnica de alto rendimiento.",
    classes: ["Entrenamiento Competidores"],
    image: "/images/competidores.jpg",
    gradient: "from-[#c44a2e]/20 via-[#1a1510] to-[#0c0a08]",
    pattern: "radial-gradient(ellipse at 60% 80%, rgba(196,74,46,0.15) 0%, transparent 60%)",
  },
];

export default function Disciplines() {
  return (
    <section className="py-24 bg-[#0c0a08] paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="jp-line mb-4">
            <span className="text-[#8a7a62] text-xs tracking-[0.3em] uppercase">
              Disciplinas
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0e8] tracking-tight">
            ELIGE TU <span className="gradient-text">CAMINO</span>
          </h2>
          <div className="accent-line mx-auto mt-6" />
        </motion.div>

        {/* Featured: BJJ + MMA large cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {disciplines.slice(0, 2).map((discipline, index) => (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/disciplinas#${discipline.id}`}>
                <div className="group relative h-[340px] rounded-2xl overflow-hidden border border-[#2a2318] hover:border-[#d4a843]/40 transition-all duration-500">
                  {/* Background: image or gradient */}
                  {discipline.image ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-70"
                        style={{ 
                          backgroundImage: `url(${discipline.image})`,
                          backgroundPosition: 'center 35%'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/70 to-[#0c0a08]/40 backdrop-blur-[1px]" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[#161210]">
                      <div
                        className="absolute inset-0 transition-all duration-700 group-hover:opacity-80"
                        style={{ backgroundImage: discipline.pattern }}
                      />
                    </div>
                  )}

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-[10px] font-bold tracking-widest rounded bg-[#d4a843]/20 text-[#d4a843] border border-[#d4a843]/20">
                        {discipline.shortName}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#f5f0e8] mb-3 group-hover:text-[#d4a843] transition-colors duration-300">
                      {discipline.name}
                    </h3>
                    <p className="text-[#c4b89a] text-sm leading-relaxed mb-4 max-w-md">
                      {discipline.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discipline.classes.map((cls) => (
                        <span
                          key={cls}
                          className="px-2.5 py-1 text-[11px] bg-[#0c0a08]/60 backdrop-blur-sm border border-[#2a2318] rounded text-[#c4b89a]"
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#d4a843] text-sm font-semibold uppercase tracking-wider">
                      <span>Explorar</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Rest: 4 smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {disciplines.slice(2).map((discipline, index) => (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
            >
              <Link href={`/disciplinas#${discipline.id}`}>
                <div className="group relative h-[260px] rounded-xl overflow-hidden border border-[#2a2318] hover:border-[#d4a843]/40 transition-all duration-500">
                  {/* Background */}
                  {discipline.image ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105 opacity-55 group-hover:opacity-65"
                        style={{ 
                          backgroundImage: `url(${discipline.image})`,
                          backgroundPosition: 'center 35%'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/75 to-[#0c0a08]/45" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[#161210]">
                      <div
                        className="absolute inset-0"
                        style={{ backgroundImage: discipline.pattern }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="inline-block w-fit px-2.5 py-1 text-[10px] font-bold tracking-widest rounded bg-[#d4a843]/20 text-[#d4a843] border border-[#d4a843]/20 mb-3">
                      {discipline.shortName}
                    </span>
                    <h3 className="text-lg font-black text-[#f5f0e8] mb-2 group-hover:text-[#d4a843] transition-colors duration-300">
                      {discipline.name}
                    </h3>
                    <p className="text-[#8a7a62] text-xs leading-relaxed mb-3 line-clamp-2">
                      {discipline.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#d4a843] text-xs font-semibold uppercase tracking-wider">
                      <span>Ver mas</span>
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#d4a843] text-[#d4a843] hover:bg-[#d4a843] hover:text-[#0c0a08] font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
          >
            Ver Horarios
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
