"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Horarios organizados por tiempo
type DayClass = { name: string; color: string } | null;
type ScheduleRow = {
  time: string;
  lun: DayClass;
  mar: DayClass;
  mie: DayClass;
  jue: DayClass;
  vie: DayClass;
};

const schedule: ScheduleRow[] = [
  { 
    time: "09:00",
    lun: null,
    mar: { name: "Entrenamiento Funcional", color: "#d4a843" },
    mie: null,
    jue: { name: "Entrenamiento Funcional", color: "#d4a843" },
    vie: null
  },
  { 
    time: "10:00",
    lun: { name: "Funcional - Kickboxing", color: "#d4a843" },
    mar: null,
    mie: { name: "Funcional - Kickboxing", color: "#d4a843" },
    jue: null,
    vie: { name: "Funcional - Kickboxing", color: "#d4a843" }
  },
  { 
    time: "10:30",
    lun: null,
    mar: { name: "BJJ - MMA Kids", color: "#d4a843" },
    mie: null,
    jue: { name: "BJJ - MMA Kids", color: "#d4a843" },
    vie: null
  },
  { 
    time: "11:00",
    lun: { name: "Kickboxing - Boxeo", color: "#c44a2e" },
    mar: null,
    mie: { name: "Kickboxing - Boxeo", color: "#c44a2e" },
    jue: null,
    vie: { name: "Kickboxing - Boxeo", color: "#c44a2e" }
  },
  { 
    time: "11:30",
    lun: null,
    mar: { name: "BJJ Principiantes", color: "#d4a843" },
    mie: null,
    jue: { name: "BJJ Principiantes", color: "#d4a843" },
    vie: null
  },
  { 
    time: "12:00",
    lun: { name: "MMA", color: "#c44a2e" },
    mar: null,
    mie: { name: "MMA", color: "#c44a2e" },
    jue: null,
    vie: { name: "MMA", color: "#c44a2e" }
  },
  { 
    time: "12:30",
    lun: { name: "Competidores", color: "#d4a843" },
    mar: null,
    mie: { name: "Competidores", color: "#d4a843" },
    jue: null,
    vie: { name: "Competidores", color: "#d4a843" }
  },
  { 
    time: "16:00",
    lun: { name: "Boxeo", color: "#c44a2e" },
    mar: null,
    mie: { name: "Boxeo", color: "#c44a2e" },
    jue: null,
    vie: { name: "Boxeo", color: "#c44a2e" }
  },
  { 
    time: "17:00",
    lun: { name: "MMA", color: "#c44a2e" },
    mar: null,
    mie: { name: "MMA", color: "#c44a2e" },
    jue: null,
    vie: { name: "MMA", color: "#c44a2e" }
  },
  { 
    time: "18:00",
    lun: { name: "Kickboxing", color: "#d4a843" },
    mar: { name: "MMA", color: "#c44a2e" },
    mie: { name: "Kickboxing", color: "#d4a843" },
    jue: { name: "MMA", color: "#c44a2e" },
    vie: { name: "Kickboxing", color: "#d4a843" }
  },
  { 
    time: "19:00",
    lun: { name: "Kickboxing - Boxeo", color: "#c44a2e" },
    mar: { name: "BJJ Femenino", color: "#d4a843" },
    mie: { name: "Kickboxing - Boxeo", color: "#c44a2e" },
    jue: { name: "BJJ Femenino", color: "#d4a843" },
    vie: { name: "Kickboxing - Boxeo", color: "#c44a2e" }
  },
  { 
    time: "20:00",
    lun: { name: "Boxeo", color: "#c44a2e" },
    mar: null,
    mie: { name: "Boxeo", color: "#c44a2e" },
    jue: null,
    vie: { name: "Boxeo", color: "#c44a2e" }
  },
  { 
    time: "20:10",
    lun: null,
    mar: { name: "BJJ Grupo General", color: "#d4a843" },
    mie: null,
    jue: { name: "BJJ Grupo General", color: "#d4a843" },
    vie: null
  },
  { 
    time: "20:15",
    lun: { name: "BJJ - MMA", color: "#d4a843" },
    mar: null,
    mie: { name: "BJJ - MMA", color: "#d4a843" },
    jue: null,
    vie: { name: "BJJ - MMA", color: "#d4a843" }
  },
];

export default function HorariosPage() {
  const [selectedDay, setSelectedDay] = useState<'lun' | 'mar' | 'mie' | 'jue' | 'vie'>('lun');
  
  const dayNames = {
    lun: 'Lunes',
    mar: 'Martes',
    mie: 'Miércoles',
    jue: 'Jueves',
    vie: 'Viernes'
  };
  
  const dayShortNames = {
    lun: 'Lun',
    mar: 'Mar',
    mie: 'Mié',
    jue: 'Jue',
    vie: 'Vie'
  };

  return (
    <div className="min-h-screen bg-[#0c0a08] pt-24">
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
          <div className="jp-line justify-start mb-4">
            <span className="text-[#8a7a62] text-xs tracking-[0.3em] uppercase">
              Horarios de Clases
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#f5f0e8] tracking-tight">
            ENTRENA <span className="gradient-text">CUANDO QUIERAS</span>
          </h1>
          <div className="accent-line mt-6" />
          <p className="mt-6 text-[#8a7a62] max-w-2xl">
            Horario de verano. Multiples bloques de lunes a viernes para que
            entrenes sin importar tu agenda.
          </p>
        </motion.div>
      </div>

      {/* Schedule Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#161210] border border-[#2a2318] rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 bg-[#1a1510] border-b border-[#2a2318]">
            <h2 className="text-2xl font-black text-[#f5f0e8] uppercase tracking-wider text-center">
              Horarios Semanales
            </h2>
            <p className="text-[#8a7a62] text-xs text-center mt-2">
              (Horario de Verano)
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2a2318]">
                  <th className="p-4 text-left text-[#8a7a62] font-bold text-sm uppercase tracking-wider bg-[#0c0a08]">
                    Hora
                  </th>
                  <th className="p-4 text-center text-[#d4a843] font-bold text-sm uppercase tracking-wider bg-[#0c0a08]">
                    Lunes
                  </th>
                  <th className="p-4 text-center text-[#d4a843] font-bold text-sm uppercase tracking-wider bg-[#0c0a08]">
                    Martes
                  </th>
                  <th className="p-4 text-center text-[#d4a843] font-bold text-sm uppercase tracking-wider bg-[#0c0a08]">
                    Miércoles
                  </th>
                  <th className="p-4 text-center text-[#d4a843] font-bold text-sm uppercase tracking-wider bg-[#0c0a08]">
                    Jueves
                  </th>
                  <th className="p-4 text-center text-[#d4a843] font-bold text-sm uppercase tracking-wider bg-[#0c0a08]">
                    Viernes
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="border-b border-[#2a2318] hover:bg-[#0c0a08]/50 transition-colors"
                  >
                    <td className="p-3 text-[#d4a843] font-bold text-sm">
                      {row.time}
                    </td>
                    {(['lun', 'mar', 'mie', 'jue', 'vie'] as const).map((day) => {
                      const dayClass = row[day];
                      return (
                      <td key={day} className="p-2">
                        {dayClass ? (
                          <div
                            className="rounded-lg p-3 text-center text-[#f5f0e8] text-xs font-medium border border-[#2a2318] hover:border-[#d4a843]/30 transition-colors"
                            style={{ 
                              backgroundColor: dayClass.color + '15',
                              borderLeftWidth: '3px',
                              borderLeftColor: dayClass.color
                            }}
                          >
                            {dayClass.name}
                          </div>
                        ) : (
                          <div className="text-center text-[#2a2318] text-xs">—</div>
                        )}
                      </td>
                    );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View with Tabs */}
          <div className="md:hidden">
            {/* Day Tabs */}
            <div className="flex gap-2 mb-4 p-3 overflow-x-auto">
              {(['lun', 'mar', 'mie', 'jue', 'vie'] as const).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shrink-0 ${
                    selectedDay === day
                      ? 'bg-[#d4a843] text-[#0c0a08]'
                      : 'bg-[#161210] border border-[#2a2318] text-[#8a7a62] hover:border-[#d4a843]/40 hover:text-[#d4a843]'
                  }`}
                >
                  {dayShortNames[day]}
                </button>
              ))}
            </div>

            {/* Selected Day Schedule */}
            <div className="p-3">
              <h3 className="text-[#d4a843] font-bold text-lg mb-4 px-2">
                {dayNames[selectedDay]}
              </h3>
              <div className="space-y-2.5">
                {schedule
                  .filter(row => row[selectedDay])
                  .map((row, index) => {
                    const dayClass = row[selectedDay]!;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="rounded-lg p-4 border-l-4"
                        style={{ 
                          backgroundColor: dayClass.color + '15',
                          borderLeftColor: dayClass.color
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="shrink-0">
                            <div 
                              className="text-[#0c0a08] font-bold text-sm px-3 py-1.5 rounded-md"
                              style={{ backgroundColor: dayClass.color }}
                            >
                              {row.time}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-[#f5f0e8] font-medium text-sm leading-snug">
                              {dayClass.name}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
              
              {schedule.filter(row => row[selectedDay]).length === 0 && (
                <div className="text-center py-12 text-[#8a7a62]">
                  No hay clases programadas para este día
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 p-5 bg-[#161210] border border-[#2a2318] rounded-xl"
        >
          <p className="text-[#8a7a62] text-sm text-center">
            Los horarios pueden variar. Para información actualizada síguenos en{" "}
            <a
              href="https://www.instagram.com/dojozenpucon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a843] hover:underline"
            >
              @dojozenpucon
            </a>
            . La primera clase es gratuita.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 btn-gold rounded-lg"
          >
            Reservar Clase Gratis
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
