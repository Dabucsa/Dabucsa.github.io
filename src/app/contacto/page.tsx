"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";

const disciplines = [
  "Brazilian Jiu-Jitsu",
  "BJJ Kids / Juveniles",
  "BJJ Femenino",
  "MMA",
  "Kickboxing",
  "Boxeo",
  "Funcional",
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", discipline: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-[#0c0a08] border border-[#2a2318] rounded-lg text-[#f5f0e8] placeholder-[#8a7a62]/50 focus:outline-none focus:border-[#d4a843] transition-colors";

  return (
    <div className="min-h-screen bg-[#0c0a08] pt-24">
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
              Contacto
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#f5f0e8] tracking-tight">
            COMIENZA TU <span className="gradient-text">CAMINO</span>
          </h1>
          <div className="accent-line mt-6" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#f5f0e8] mb-6">
              Visitanos
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-[#d4a843]/10 rounded-lg shrink-0">
                  <MapPin className="text-[#d4a843]" size={22} />
                </div>
                <div>
                  <h3 className="text-[#f5f0e8] font-semibold mb-1">Direccion</h3>
                  <p className="text-[#8a7a62]">
                    Enrique Novoa 910<br />
                    Pucon, Chile
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-[#d4a843]/10 rounded-lg shrink-0">
                  <Clock className="text-[#d4a843]" size={22} />
                </div>
                <div>
                  <h3 className="text-[#f5f0e8] font-semibold mb-1">Horarios</h3>
                  <p className="text-[#8a7a62]">
                    Lun / Mie / Vie: 10:00 - 21:00<br />
                    Mar / Jue: 09:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mb-8">
              <h3 className="text-[#f5f0e8] font-semibold mb-4">Siguenos</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/dojozenpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#161210] border border-[#2a2318] rounded-lg text-[#8a7a62] hover:text-[#d4a843] hover:border-[#d4a843]/40 transition-all"
                >
                  <Instagram size={18} />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://web.facebook.com/ZENpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#161210] border border-[#2a2318] rounded-lg text-[#8a7a62] hover:text-[#d4a843] hover:border-[#d4a843]/40 transition-all"
                >
                  <Facebook size={18} />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20informacion%20sobre%20las%20clases"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escribenos por WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#161210] border border-[#2a2318] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-2">
                Reserva tu Clase Gratis
              </h2>
              <p className="text-[#8a7a62] mb-8">
                Completa el formulario y nos pondremos en contacto.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#d4a843]/20 rounded-full">
                    <svg className="w-8 h-8 text-[#d4a843]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#f5f0e8] mb-2">OSS! Mensaje Enviado</h3>
                  <p className="text-[#8a7a62]">Nos pondremos en contacto contigo pronto.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-6 text-[#d4a843] hover:underline">
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#c4b89a] mb-2">
                      Nombre completo *
                    </label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Tu nombre" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#c4b89a] mb-2">
                        Email *
                      </label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="tu@email.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#c4b89a] mb-2">
                        Telefono
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+56 9 1234 5678" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="discipline" className="block text-sm font-medium text-[#c4b89a] mb-2">
                      Disciplina de interes
                    </label>
                    <select id="discipline" name="discipline" value={formData.discipline} onChange={handleChange} className={inputClasses}>
                      <option value="">Selecciona una disciplina</option>
                      {disciplines.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#c4b89a] mb-2">
                      Mensaje
                    </label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Cuentanos sobre ti y tus objetivos..." />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 btn-gold rounded-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
