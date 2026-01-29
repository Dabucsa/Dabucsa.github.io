"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";

const disciplines = [
  "Brazilian Jiu-Jitsu",
  "No-Gi / Grappling",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      discipline: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Contacto
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
            COMIENZA TU <span className="gradient-text">CAMINO</span>
          </h1>
          <div className="accent-line mt-6" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Informacion de Contacto
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#dc2626]/10 rounded-lg shrink-0">
                  <MapPin className="text-[#dc2626]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Direccion</h3>
                  <p className="text-gray-400">
                    Av. O&apos;Higgins 717, Local 3<br />
                    Segundo Piso, Pucon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#dc2626]/10 rounded-lg shrink-0">
                  <Phone className="text-[#dc2626]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Telefono</h3>
                  <a
                    href="tel:+56912345678"
                    className="text-gray-400 hover:text-[#dc2626] transition-colors"
                  >
                    +56 9 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#dc2626]/10 rounded-lg shrink-0">
                  <Mail className="text-[#dc2626]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:contacto@dojozenpucon.cl"
                    className="text-gray-400 hover:text-[#dc2626] transition-colors"
                  >
                    contacto@dojozenpucon.cl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#dc2626]/10 rounded-lg shrink-0">
                  <Clock className="text-[#dc2626]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Horarios</h3>
                  <p className="text-gray-400">
                    Lunes a Viernes: 10:30 - 22:00
                    <br />
                    Sabados y Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Siguenos</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/dojozenpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-gray-400 hover:text-[#dc2626] hover:border-[#dc2626] transition-all"
                >
                  <Instagram size={20} />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://web.facebook.com/ZENpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-gray-400 hover:text-[#dc2626] hover:border-[#dc2626] transition-all"
                >
                  <Facebook size={20} />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20informacion%20sobre%20las%20clases"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Escribenos por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Reserva tu Clase Gratis
              </h2>
              <p className="text-gray-400 mb-8">
                Completa el formulario y nos pondremos en contacto contigo.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-500/20 rounded-full">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Mensaje Enviado!
                  </h3>
                  <p className="text-gray-400">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-[#dc2626] hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] transition-colors"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="discipline"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Disciplina de interes
                    </label>
                    <select
                      id="discipline"
                      name="discipline"
                      value={formData.discipline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#dc2626] transition-colors"
                    >
                      <option value="">Selecciona una disciplina</option>
                      {disciplines.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] transition-colors resize-none"
                      placeholder="Cuentanos un poco sobre ti y tus objetivos..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#dc2626] hover:bg-[#991b1b] disabled:bg-[#dc2626]/50 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Enviando...</span>
                      </>
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
