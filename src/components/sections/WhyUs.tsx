"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Todas las Edades",
    description:
      "Clases para kids, juveniles, adultos y femenino. Cada grupo con su propio espacio y metodologia.",
  },
  {
    icon: Award,
    title: "Instructores de Elite",
    description:
      "Profesionales con anos de experiencia en competencia nacional e internacional.",
  },
  {
    icon: Clock,
    title: "Horarios Amplios",
    description:
      "Desde las 9:00 hasta las 20:15. Multiples bloques horarios de lunes a viernes.",
  },
  {
    icon: Heart,
    title: "Espiritu Zen",
    description:
      "Mas que un gimnasio, un dojo. Disciplina, respeto y crecimiento personal en cada clase.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0c0a08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="jp-line justify-start mb-4">
              <span className="text-[#8a7a62] text-xs tracking-[0.3em] uppercase">
                Nuestro Dojo
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0e8] tracking-tight leading-tight">
              DONDE EL <span className="gradient-text">GUERRERO</span> NACE
            </h2>
            <div className="accent-line mt-6 mb-8" />
            <p className="text-[#c4b89a] text-lg leading-relaxed mb-6">
              En Dojo Zen Pucon forjamos cuerpo y caracter. Cada clase es una
              oportunidad de superarte, de conocer tus limites y trascenderlos.
            </p>
            <p className="text-[#8a7a62] leading-relaxed">
              Ubicados en Pucon, rodeados de la energia de la naturaleza y el
              volcan, ofrecemos un espacio unico donde las artes marciales se
              viven con intensidad, respeto y el espiritu zen.
            </p>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group p-6 bg-[#161210] border border-[#2a2318] rounded-xl hover:border-[#d4a843]/30 transition-all duration-300"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-[#d4a843]/10 rounded-lg mb-4 group-hover:bg-[#d4a843]/20 transition-colors">
                  <feature.icon className="text-[#d4a843]" size={22} />
                </div>
                <h3 className="text-[#f5f0e8] font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#8a7a62] text-sm leading-relaxed">
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
