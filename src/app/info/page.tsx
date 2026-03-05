"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Car,
  Thermometer,
  Wifi,
  ShoppingCart,
  Mountain,
  Plane,
  Bus,
  Shield,
} from "lucide-react";

export default function InfoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          📋 Info Útil
        </h1>
        <p className="text-muted2 leading-relaxed">
          Todo lo que necesitas saber para disfrutar Pucón sin preocupaciones.
          Emergencias, transporte, clima y datos prácticos.
        </p>
      </motion.div>

      <div className="space-y-5">
        {/* Emergencias */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Phone size={18} className="text-red-400" />
            </div>
            <h2 className="text-base font-bold">Números de emergencia</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "131", label: "SAMU (Ambulancia)", color: "text-red-400" },
              { num: "132", label: "Bomberos", color: "text-orange-400" },
              { num: "133", label: "Carabineros", color: "text-sky-400" },
              { num: "134", label: "PDI (Investigaciones)", color: "text-violet-400" },
              { num: "137", label: "CONAF (Incendios forestales)", color: "text-emerald-400" },
              { num: "130", label: "Rescate marítimo", color: "text-blue-400" },
            ].map((e) => (
              <div key={e.num} className="flex items-center gap-3 text-sm">
                <span className={`font-mono font-bold text-lg ${e.color}`}>
                  {e.num}
                </span>
                <span className="text-muted2 text-xs">{e.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 bg-red-500/5 border border-red-500/15 rounded-xl text-xs text-muted2">
            <strong className="text-red-400">Hospital Pucón:</strong> Colo Colo
            635 · Tel: (045) 244-3500
          </div>
        </motion.div>

        {/* Cómo llegar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Plane size={18} className="text-sky-400" />
            </div>
            <h2 className="text-base font-bold">Cómo llegar</h2>
          </div>
          <div className="space-y-3 text-xs text-muted2">
            <div className="flex items-start gap-2">
              <Plane size={14} className="text-sky-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-foreground">Desde Santiago en avión:</strong>{" "}
                Vuelo a Temuco (ZCO) ~1.5 hrs. Luego transfer o auto a Pucón (~1.5 hrs).
                También hay vuelos a Villarrica más cerca pero menos frecuentes.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Car size={14} className="text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-foreground">En auto desde Santiago:</strong>{" "}
                ~8 hrs por Ruta 5 Sur hasta Freire, luego desvío a Villarrica/Pucón.
                Ruta en excelente estado.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Bus size={14} className="text-orange-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-foreground">En bus:</strong>{" "}
                Pullman Bus, Tur Bus y JAC tienen servicios directos Santiago-Pucón (~10 hrs).
                Salón cama recomendado para viaje nocturno.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transporte local */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Car size={18} className="text-emerald-400" />
            </div>
            <h2 className="text-base font-bold">Transporte local</h2>
          </div>
          <ul className="space-y-2 text-xs text-muted2">
            <li className="flex items-start gap-2">
              🚗 <span><strong className="text-foreground">Arriendo de auto</strong> — Lo más práctico para llegar a termas, parques y lagos. Varias empresas en el centro y aeropuerto de Temuco.</span>
            </li>
            <li className="flex items-start gap-2">
              🚐 <span><strong className="text-foreground">Transfers</strong> — Todas las agencias de turismo ofrecen transfers a termas, Huerquehue, Caburgua, etc. Preguntar en la oficina de turismo.</span>
            </li>
            <li className="flex items-start gap-2">
              🚶 <span><strong className="text-foreground">A pie</strong> — El centro de Pucón es completamente caminable. Restaurantes, playa y feria a pocos minutos.</span>
            </li>
            <li className="flex items-start gap-2">
              🚌 <span><strong className="text-foreground">Buses locales</strong> — Línea Pucón-Villarrica cada 15 min (~$1.000). También hay micros a Caburgua.</span>
            </li>
            <li className="flex items-start gap-2">
              📱 <span><strong className="text-foreground">Taxis</strong> — Apps locales y taxis en la calle. Negociar precio antes de subir para destinos fuera del pueblo.</span>
            </li>
          </ul>
        </motion.div>

        {/* Clima */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <Thermometer size={18} className="text-yellow-400" />
            </div>
            <h2 className="text-base font-bold">Clima & qué llevar</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted2">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">☀️ Verano (Dic - Mar)</h3>
              <ul className="space-y-1">
                <li>• 20-30°C durante el día</li>
                <li>• Protector solar SPF50+ y lentes</li>
                <li>• Sombrero y ropa ligera</li>
                <li>• Zapatillas de trekking</li>
                <li>• Traje de baño</li>
                <li>• Polera manga larga para la noche (baja a 12°C)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">❄️ Invierno (Jun - Sep)</h3>
              <ul className="space-y-1">
                <li>• 2-10°C, puede bajar a -2°C</li>
                <li>• Chaqueta impermeable</li>
                <li>• Capas térmicas</li>
                <li>• Botas impermeables</li>
                <li>• Gorro, guantes, bufanda</li>
                <li>• Lluvia frecuente — paraguas siempre</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Volcán */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Mountain size={18} className="text-orange-400" />
            </div>
            <h2 className="text-base font-bold">Estado del Volcán Villarrica</h2>
          </div>
          <div className="text-xs text-muted2 space-y-2">
            <p>
              El Villarrica es uno de los volcanes más activos de Chile.
              SERNAGEOMIN (Servicio Nacional de Geología y Minería) publica
              alertas regulares. Los niveles son:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-emerald-500/5 border border-emerald-500/15 rounded-lg">
                <strong className="text-emerald-400">🟢 Verde</strong> — Sin actividad. Acceso normal.
              </div>
              <div className="p-2 bg-yellow-500/5 border border-yellow-500/15 rounded-lg">
                <strong className="text-yellow-400">🟡 Amarillo</strong> — Actividad menor. Restricciones parciales.
              </div>
              <div className="p-2 bg-orange-500/5 border border-orange-500/15 rounded-lg">
                <strong className="text-orange-400">🟠 Naranja</strong> — Actividad importante. Zona de exclusión.
              </div>
              <div className="p-2 bg-red-500/5 border border-red-500/15 rounded-lg">
                <strong className="text-red-400">🔴 Rojo</strong> — Erupción. Evacuación si corresponde.
              </div>
            </div>
            <a
              href="https://www.sernageomin.cl/volcanes/volcan-villarrica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-400 hover:underline font-semibold mt-1"
            >
              <Shield size={12} />
              Ver estado actual en SERNAGEOMIN →
            </a>
          </div>
        </motion.div>

        {/* Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <ShoppingCart size={18} className="text-violet-400" />
            </div>
            <h2 className="text-base font-bold">Servicios cercanos</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-muted2">
            <div>
              <h3 className="font-bold text-foreground mb-1.5">🛒 Supermercados</h3>
              <ul className="space-y-1">
                <li>• <strong>Unimarc</strong> — Centro de Pucón</li>
                <li>• <strong>Santa Isabel</strong> — Av. O&apos;Higgins</li>
                <li>• <strong>Minimarkets</strong> — Varios en el centro</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1.5">💊 Farmacias</h3>
              <ul className="space-y-1">
                <li>• <strong>Cruz Verde</strong> — Centro</li>
                <li>• <strong>Salcobrand</strong> — Av. O&apos;Higgins</li>
                <li>• <strong>Farmacia del pueblo</strong> — Centro</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* WiFi y conectividad */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Wifi size={18} className="text-sky-400" />
            </div>
            <h2 className="text-base font-bold">WiFi & Conectividad</h2>
          </div>
          <ul className="space-y-2 text-xs text-muted2">
            <li>📶 WiFi disponible en el alojamiento (contraseña en el check-in)</li>
            <li>📱 Señal celular buena en Pucón centro (Entel, Movistar, WOM, Claro)</li>
            <li>⛰️ Sin señal en zonas de montaña (Huerquehue, termas, Cañi)</li>
            <li>💡 Descargar mapas offline de Google Maps antes de salir</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
