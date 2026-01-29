"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Instagram, Award } from "lucide-react";

// Placeholder instructors - these should be updated with real data
const instructors = [
  {
    id: 1,
    name: "Instructor Principal",
    role: "Head Coach",
    disciplines: ["BJJ", "No-Gi", "MMA"],
    bio: "Mas de 10 anos de experiencia en artes marciales. Cinturon negro en BJJ con multiples competencias nacionales e internacionales.",
    achievements: [
      "Cinturon Negro BJJ",
      "Campeon Nacional Amateur MMA",
      "Instructor Certificado",
    ],
    image: null, // Placeholder - add real image path
    instagram: null,
  },
  {
    id: 2,
    name: "Coach de Striking",
    role: "Striking Coach",
    disciplines: ["Kickboxing", "Boxeo", "MMA"],
    bio: "Especialista en striking con background en kickboxing y boxeo profesional. Enfoque en tecnica y preparacion para competencia.",
    achievements: [
      "Ex-boxeador profesional",
      "Entrenador certificado",
      "Especialista en preparacion de peleadores",
    ],
    image: null,
    instagram: null,
  },
  {
    id: 3,
    name: "Preparador Fisico",
    role: "S&C Coach",
    disciplines: ["Funcional", "S&C"],
    bio: "Preparador fisico especializado en deportes de combate. Programas de fuerza y acondicionamiento adaptados a cada disciplina.",
    achievements: [
      "Licenciado en Educacion Fisica",
      "Certificacion NSCA",
      "Especialista en rendimiento deportivo",
    ],
    image: null,
    instagram: null,
  },
];

export default function InstructoresPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#dc2626] transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>Volver al inicio</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#dc2626] text-sm font-bold uppercase tracking-widest">
            Nuestro Equipo
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
            APRENDE DE LOS <span className="gradient-text">MEJORES</span>
          </h1>
          <div className="accent-line mt-6" />
          <p className="mt-6 text-gray-400 max-w-2xl">
            Nuestro equipo de instructores esta compuesto por profesionales con
            anos de experiencia en competencia y ensenanza. Cada uno aporta su
            especialidad para brindarte la mejor formacion.
          </p>
        </motion.div>
      </div>

      {/* Instructors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#dc2626]/30 transition-all duration-300">
                {/* Image placeholder */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
                  {instructor.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#262626] flex items-center justify-center">
                          <span className="text-4xl text-gray-500">
                            {instructor.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">
                          Foto proximamente
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                  {/* Disciplines badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {instructor.disciplines.map((discipline) => (
                      <span
                        key={discipline}
                        className="px-2 py-1 text-xs font-bold bg-[#dc2626]/90 text-white rounded"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#dc2626] transition-colors">
                        {instructor.name}
                      </h3>
                      <p className="text-sm text-[#dc2626] font-medium uppercase tracking-wider">
                        {instructor.role}
                      </p>
                    </div>
                    {instructor.instagram && (
                      <a
                        href={instructor.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-[#dc2626] transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {instructor.bio}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {instructor.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <Award size={14} className="text-[#d4af37]" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#141414] border border-[#262626] rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Quieres ser parte del equipo?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Si eres instructor con experiencia y compartes nuestra pasion por
            las artes marciales, nos encantaria conocerte.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[#dc2626] hover:bg-[#991b1b] text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
          >
            Contactanos
          </Link>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>
            * La informacion de los instructores es ilustrativa. Contactanos
            para conocer a nuestro equipo actual.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
