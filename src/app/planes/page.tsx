"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Star } from "lucide-react";

const plans = [
  {
    name: "Plan 8 Clases",
    frequency: "2 clases a la semana",
    price: "35.000",
    features: [
      "2 clases semanales",
      "Una disciplina",
      "Acceso a sala de pesas",
    ],
    popular: false,
  },
  {
    name: "Plan 12 Clases",
    frequency: "3 clases semanales",
    price: "40.000",
    features: [
      "3 clases semanales",
      "Una disciplina",
      "Acceso a sala de pesas",
    ],
    popular: true,
  },
  {
    name: "Plan 20 Clases",
    frequency: "5 clases a la semana",
    price: "50.000",
    features: [
      "5 clases semanales",
      "Una disciplina",
      "Acceso a sala de pesas",
    ],
    popular: false,
  },
];

export default function PlanesPage() {
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
          className="text-center"
        >
          <div className="jp-line mb-4">
            <span className="text-[#8a7a62] text-xs tracking-[0.3em] uppercase">
              Planes Mensuales
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#f5f0e8] tracking-tight">
            INVIERTE EN <span className="gradient-text">TI</span>
          </h1>
          <div className="accent-line mx-auto mt-6" />
          <p className="mt-6 text-[#8a7a62] max-w-xl mx-auto">
            Elige el plan que mejor se adapte a tu ritmo. Todos incluyen acceso
            a sala de pesas y tu primera clase es gratis.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-[-16px]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1 btn-gold text-xs rounded-full">
                    <Star size={12} />
                    Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-[#161210] border rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-[#d4a843]/10 ${
                  plan.popular
                    ? "border-[#d4a843]/50 shadow-md shadow-[#d4a843]/5"
                    : "border-[#2a2318] hover:border-[#d4a843]/30"
                }`}
              >
                <h3 className="text-sm font-bold text-[#d4a843] uppercase tracking-widest mb-1">
                  {plan.name}
                </h3>
                <p className="text-[#8a7a62] text-sm mb-6">{plan.frequency}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#8a7a62]">$</span>
                    <span className="text-4xl font-black text-[#f5f0e8]">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#8a7a62]">CLP / mes</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={16} className="text-[#d4a843] shrink-0" />
                      <span className="text-sm text-[#c4b89a]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className={`block w-full text-center py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                    plan.popular
                      ? "btn-gold"
                      : "border-2 border-[#2a2318] text-[#c4b89a] hover:border-[#d4a843] hover:text-[#d4a843]"
                  }`}
                >
                  Inscribirme
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#8a7a62] text-sm mt-8"
        >
          Todos los planes incluyen acceso a sala de pesas. Consulta por planes
          multi-disciplina.
        </motion.p>
      </div>
    </div>
  );
}
