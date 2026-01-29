"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const schedule = {
  Lunes: [
    { time: "10:30 - 12:00", discipline: "Boxeo", color: "#d4af37" },
    { time: "17:00 - 18:00", discipline: "Funcional", color: "#16a34a" },
    { time: "18:00 - 19:00", discipline: "Kickboxing", color: "#0891b2" },
    { time: "19:00 - 20:30", discipline: "BJJ", color: "#dc2626" },
    { time: "20:30 - 22:00", discipline: "MMA", color: "#ea580c" },
  ],
  Martes: [
    { time: "17:00 - 18:00", discipline: "Funcional", color: "#16a34a" },
    { time: "18:00 - 19:00", discipline: "Kickboxing", color: "#0891b2" },
    { time: "19:00 - 20:30", discipline: "No-Gi", color: "#7c3aed" },
    { time: "20:30 - 22:00", discipline: "Sparring Libre", color: "#ef4444" },
  ],
  Miercoles: [
    { time: "10:30 - 12:00", discipline: "Boxeo", color: "#d4af37" },
    { time: "17:00 - 18:00", discipline: "Funcional", color: "#16a34a" },
    { time: "18:00 - 19:00", discipline: "Kickboxing", color: "#0891b2" },
    { time: "19:00 - 20:30", discipline: "BJJ", color: "#dc2626" },
    { time: "20:30 - 22:00", discipline: "MMA", color: "#ea580c" },
  ],
  Jueves: [
    { time: "17:00 - 18:00", discipline: "Funcional", color: "#16a34a" },
    { time: "18:00 - 19:00", discipline: "Kickboxing", color: "#0891b2" },
    { time: "19:00 - 20:30", discipline: "No-Gi", color: "#7c3aed" },
    { time: "20:30 - 22:00", discipline: "Sparring Libre", color: "#ef4444" },
  ],
  Viernes: [
    { time: "10:30 - 12:00", discipline: "Boxeo", color: "#d4af37" },
    { time: "17:00 - 18:00", discipline: "Funcional", color: "#16a34a" },
    { time: "18:00 - 19:30", discipline: "BJJ", color: "#dc2626" },
    { time: "19:30 - 21:00", discipline: "Open Mat", color: "#6b7280" },
  ],
};

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"] as const;

export default function HorariosPage() {
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
            Horarios de Clases
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
            ENTRENA <span className="gradient-text">CUANDO QUIERAS</span>
          </h1>
          <div className="accent-line mt-6" />
          <p className="mt-6 text-gray-400 max-w-2xl">
            Ofrecemos multiples horarios para que puedas entrenar sin importar
            tu agenda. Todas las clases estan abiertas para todos los niveles,
            salvo indicacion especifica.
          </p>
        </motion.div>
      </div>

      {/* Schedule Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {[
            { name: "BJJ", color: "#dc2626" },
            { name: "No-Gi", color: "#7c3aed" },
            { name: "MMA", color: "#ea580c" },
            { name: "Kickboxing", color: "#0891b2" },
            { name: "Boxeo", color: "#d4af37" },
            { name: "Funcional", color: "#16a34a" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-400">{item.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Desktop Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5">
              {/* Header */}
              {days.map((day) => (
                <div
                  key={day}
                  className="p-4 bg-[#1a1a1a] border-b border-[#262626] text-center"
                >
                  <span className="text-white font-bold uppercase tracking-wider">
                    {day}
                  </span>
                </div>
              ))}

              {/* Content */}
              {days.map((day) => (
                <div key={day} className="p-4 border-r border-[#262626] last:border-r-0">
                  <div className="space-y-3">
                    {schedule[day].map((item, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg border border-[#262626] hover:border-[#dc2626]/30 transition-colors"
                        style={{
                          borderLeftWidth: "4px",
                          borderLeftColor: item.color,
                        }}
                      >
                        <div className="text-xs text-gray-500 mb-1">
                          {item.time}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {item.discipline}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Schedule Cards */}
        <div className="lg:hidden space-y-6">
          {days.map((day, dayIndex) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: dayIndex * 0.1 }}
              className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden"
            >
              <div className="p-4 bg-[#1a1a1a] border-b border-[#262626]">
                <span className="text-white font-bold uppercase tracking-wider">
                  {day}
                </span>
              </div>
              <div className="p-4 space-y-3">
                {schedule[day].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-[#0a0a0a] border border-[#262626]"
                  >
                    <div
                      className="w-1 h-12 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                      <div className="text-sm font-semibold text-white">
                        {item.discipline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 bg-[#141414] border border-[#262626] rounded-xl"
        >
          <h3 className="text-white font-bold mb-2">Nota importante</h3>
          <p className="text-gray-400 text-sm">
            Los horarios pueden estar sujetos a cambios. Para informacion
            actualizada, siguenos en nuestras redes sociales o contactanos
            directamente. La primera clase es gratuita para nuevos alumnos.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[#dc2626] hover:bg-[#991b1b] text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30"
          >
            Reservar Clase Gratis
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
