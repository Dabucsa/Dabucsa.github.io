"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#0c0a08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a843]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#161210] border border-[#2a2318] rounded-full mb-8">
            <MapPin size={14} className="text-[#d4a843]" />
            <span className="text-sm text-[#8a7a62]">
              Enrique Novoa 910, Pucon
            </span>
          </div>

          {/* Main text */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f0e8] tracking-tight mb-4">
            TU PRIMERA CLASE
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-8">
            ES GRATIS
          </h3>

          <p className="text-lg text-[#8a7a62] max-w-xl mx-auto mb-10">
            Ven a conocernos sin compromiso. Prueba cualquier disciplina y
            descubre el espiritu del dojo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="group px-8 py-4 btn-gold rounded-lg flex items-center gap-2 text-base"
            >
              <span>Agendar Clase Gratis</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#2a2318]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-72.97!3d-39.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE2JzEyLjAiUyA3MsKwNTgnMTIuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[80%] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-[#161210]/95 backdrop-blur-sm border border-[#2a2318] rounded-xl p-4 max-w-xs">
              <h3 className="text-[#f5f0e8] font-bold mb-1">Dojo Zen Pucon</h3>
              <p className="text-[#8a7a62] text-sm">
                Enrique Novoa 910, Pucon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
