"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Instructores Certificados",
    description:
      "Aprende de profesionales con anos de experiencia en competencias nacionales e internacionales.",
  },
  {
    icon: Award,
    title: "Metodologia Probada",
    description:
      "Sistema de entrenamiento progresivo adaptado a todos los niveles, desde principiantes hasta avanzados.",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description:
      "Multiples horarios de clases para que puedas entrenar sin importar tu agenda.",
  },
  {
    icon: Heart,
    title: "Comunidad Unida",
    description:
      "Mas que un gimnasio, somos una familia. Ambiente de respeto, disciplina y companerismo.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#dc2626] text-sm font-bold uppercase tracking-widest">
              Por que elegirnos
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              DONDE EL <span className="gradient-text">GUERRERO</span> NACE
            </h2>
            <div className="accent-line mt-6 mb-8" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              En Dojo Zen Pucon no solo entrenamos el cuerpo, forjamos el
              caracter. Cada clase es una oportunidad de superarte, de conocer
              tus limites y romperlos.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Ubicados en el corazon de Pucon, rodeados de la energia de la
              naturaleza, ofrecemos un espacio unico donde las artes marciales
              se viven con intensidad y respeto por la tradicion.
            </p>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group p-6 bg-[#141414] border border-[#262626] rounded-xl hover:border-[#dc2626]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#dc2626]/10 rounded-lg mb-4 group-hover:bg-[#dc2626]/20 transition-colors">
                  <feature.icon className="text-[#dc2626]" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
