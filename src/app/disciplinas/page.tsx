"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Target } from "lucide-react";

const disciplines = [
  {
    id: "bjj",
    name: "Brazilian Jiu-Jitsu",
    description:
      "El Brazilian Jiu-Jitsu (BJJ) es un arte marcial de origen brasileno que se enfoca en el combate en el suelo. A traves de tecnicas de control, derribes y sumisiones, el BJJ permite que una persona de menor tamano pueda defenderse y vencer a oponentes mas grandes.",
    benefits: [
      "Defensa personal efectiva",
      "Mejora cardiovascular",
      "Desarrollo de resolucion de problemas",
      "Aumento de flexibilidad",
      "Reduccion del estres",
    ],
    schedule: ["Lunes y Miercoles: 19:00 - 20:30", "Viernes: 18:00 - 19:30"],
    level: "Todos los niveles",
    color: "#d4a843",
    image: "/images/bjj.jpg",
  },
  {
    id: "nogi",
    name: "No-Gi / Grappling",
    description:
      "El No-Gi es grappling sin kimono, donde se utilizan tecnicas de control y sumision sin depender del agarre del gi. Es mas dinamico y rapido que el BJJ tradicional, ideal para quienes buscan un estilo mas atletico.",
    benefits: [
      "Mayor velocidad de reaccion",
      "Transiciones mas fluidas",
      "Aplicable a MMA",
      "Menos friccion, mas tecnica",
      "Excelente cardio",
    ],
    schedule: ["Martes y Jueves: 19:00 - 20:30"],
    level: "Todos los niveles",
    color: "#7c3aed",
    image: "/images/bjj.jpg",
  },
  {
    id: "mma",
    name: "MMA - Artes Marciales Mixtas",
    description:
      "Las Artes Marciales Mixtas combinan lo mejor de diferentes disciplinas: striking, clinch y combate en el suelo. Es el deporte de combate mas completo, preparandote para cualquier situacion.",
    benefits: [
      "Formacion integral de combate",
      "Preparacion fisica completa",
      "Desarrollo de adaptabilidad",
      "Mentalidad de competidor",
      "Confianza en si mismo",
    ],
    schedule: ["Lunes y Miercoles: 20:30 - 22:00"],
    level: "Intermedio a Avanzado",
    color: "#c44a2e",
    image: "/images/mma.jpg",
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description:
      "El Kickboxing combina tecnicas de boxeo con patadas. Es un deporte de alto impacto que desarrolla potencia, velocidad y coordinacion. Perfecto para quemar calorias mientras aprendes a defenderte.",
    benefits: [
      "Quema de calorias intensiva",
      "Tonificacion muscular",
      "Mejora de coordinacion",
      "Aumento de reflejos",
      "Liberacion de tension",
    ],
    schedule: ["Martes y Jueves: 18:00 - 19:00"],
    level: "Todos los niveles",
    color: "#0891b2",
    image: "/images/kickboxing.jpg",
  },
  {
    id: "boxeo",
    name: "Boxeo",
    description:
      "El arte dulce. El boxeo es la base del striking y te ensena a usar los punos con precision, potencia y velocidad. Desarrolla reflejos, footwork y una condicion fisica excepcional.",
    benefits: [
      "Tecnica de manos superior",
      "Mejora del footwork",
      "Desarrollo de timing",
      "Condicion fisica elite",
      "Disciplina mental",
    ],
    schedule: ["Lunes, Miercoles y Viernes: 10:30 - 12:00"],
    level: "Todos los niveles",
    color: "#d4a843",
    image: "/images/boxeo.jpg",
  },
  {
    id: "funcional",
    name: "Entrenamiento Funcional",
    description:
      "Entrenamiento disenado especificamente para complementar las artes marciales. Desarrolla fuerza, resistencia, explosividad y movilidad con ejercicios funcionales.",
    benefits: [
      "Fuerza funcional",
      "Resistencia muscular",
      "Explosividad",
      "Prevencion de lesiones",
      "Mejor rendimiento general",
    ],
    schedule: ["Todos los dias: 17:00 - 18:00"],
    level: "Todos los niveles",
    color: "#16a34a",
    image: "/images/funcional.jpg",
  },
];

export default function DisciplinasPage() {
  return (
    <div className="min-h-screen bg-[#0c0a08] paper-bg pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8a7a62] hover:text-[#d4a843] transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>Volver al inicio</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="jp-line mb-4">
            <span className="text-[#8a7a62] text-xs tracking-[0.3em] uppercase">
              Nuestras Disciplinas
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#f5f0e8] tracking-tight">
            ELIGE TU <span className="gradient-text">ARTE</span>
          </h1>
          <div className="accent-line mt-6" />
        </motion.div>
      </div>

      {/* Disciplines List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-12">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.id}
              id={discipline.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="scroll-mt-32"
            >
              <div className="bg-[#141414] border border-[#2a2318] rounded-2xl overflow-hidden hover:border-[#d4a843]/30 transition-all duration-300">
                {/* Header with image background */}
                <div className="relative h-32 overflow-hidden">
                  {discipline.image ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover opacity-45"
                        style={{ 
                          backgroundImage: `url(${discipline.image})`,
                          backgroundPosition: 'center 35%'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141414]/60 to-[#141414]" />
                    </>
                  ) : (
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background: `radial-gradient(ellipse at 50% 50%, ${discipline.color} 0%, transparent 70%)`
                      }}
                    />
                  )}
                  <div
                    className="absolute top-0 left-0 right-0 h-2"
                    style={{ backgroundColor: discipline.color }}
                  />
                </div>

                <div className="p-8 -mt-8 relative">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl font-black text-[#f5f0e8] mb-4 flex items-center gap-3">
                        <span 
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-black"
                          style={{ 
                            backgroundColor: `${discipline.color}20`,
                            color: discipline.color,
                            border: `2px solid ${discipline.color}40`
                          }}
                        >
                          {discipline.name.charAt(0)}
                        </span>
                        {discipline.name}
                      </h2>

                      <p className="text-[#c4b89a] leading-relaxed mb-6">
                        {discipline.description}
                      </p>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h3 className="text-[#f5f0e8] font-bold mb-3 flex items-center gap-2">
                          <Target size={18} style={{ color: discipline.color }} />
                          Beneficios
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {discipline.benefits.map((benefit, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-[#8a7a62] text-sm"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: discipline.color }}
                              />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Info */}
                    <div className="lg:w-72 space-y-4">
                      {/* Schedule Card */}
                      <div className="bg-[#0c0a08] border border-[#2a2318] rounded-xl p-4">
                        <h3 className="text-[#f5f0e8] font-bold mb-3 flex items-center gap-2">
                          <Clock size={18} style={{ color: discipline.color }} />
                          Horarios
                        </h3>
                        <ul className="space-y-2">
                          {discipline.schedule.map((time, i) => (
                            <li key={i} className="text-[#8a7a62] text-sm">
                              {time}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Level Card */}
                      <div className="bg-[#0c0a08] border border-[#2a2318] rounded-xl p-4">
                        <h3 className="text-[#f5f0e8] font-bold mb-3 flex items-center gap-2">
                          <Users size={18} style={{ color: discipline.color }} />
                          Nivel
                        </h3>
                        <span
                          className="inline-block px-3 py-1 text-sm rounded-full font-semibold"
                          style={{
                            backgroundColor: `${discipline.color}20`,
                            color: discipline.color,
                          }}
                        >
                          {discipline.level}
                        </span>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contacto"
                        className="block w-full text-center px-6 py-3 font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: discipline.color,
                          color: '#0c0a08'
                        }}
                      >
                        Inscribirme
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
