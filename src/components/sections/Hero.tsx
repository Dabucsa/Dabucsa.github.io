"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0c0a08]">
        {/* Warm ambient glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#d4a843]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a07c2e]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#d4a843]/3 rounded-full blur-[80px]" />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#d4a843 1px, transparent 1px), linear-gradient(90deg, #d4a843 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-8 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-float"
          >
            <img 
              src="/images/logo.jpg" 
              alt="Dojo Zen Pucon Logo" 
              className="w-full h-full object-contain rounded-full border-4 border-[#d4a843]/30 shadow-2xl shadow-[#d4a843]/20"
            />
          </motion.div>

          {/* Japanese decorative line */}
          <div className="jp-line mb-8">
            <span className="text-[#8a7a62] text-xs tracking-[0.3em] uppercase">
              Pucon, Chile
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="block text-[#f5f0e8]">DOJO ZEN</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text tracking-wider mb-8">
            ARTES MARCIALES
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#8a7a62] max-w-2xl mx-auto mb-12 leading-relaxed">
            BJJ &middot; MMA &middot; Kickboxing &middot; Boxeo &middot;
            Funcional
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="px-8 py-4 btn-gold rounded-lg text-base"
            >
              Primera Clase Gratis
            </Link>
            <Link
              href="/disciplinas"
              className="px-8 py-4 border-2 border-[#2a2318] hover:border-[#d4a843] text-[#c4b89a] hover:text-[#d4a843] font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
            >
              Conocer Mas
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "10+", label: "Años Exp" },
            { value: "42", label: "Clases/Sem" },
            { value: "6", label: "Instructores" },
            { value: "6+", label: "Disciplinas" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#8a7a62] uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#8a7a62]"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
