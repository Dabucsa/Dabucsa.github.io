import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradientFooter)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="220 60"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="gradientFooter"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">
                  <span className="text-[#dc2626]">ZEN</span>{" "}
                  <span className="text-white">DOJO</span>
                </span>
                <span className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">
                  Artes Marciales
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Centro de artes marciales en Pucon. Entrena con los mejores
              instructores en BJJ, MMA, Kickboxing, Boxeo y mas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dojozenpucon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#141414] border border-[#262626] rounded-lg text-gray-400 hover:text-[#dc2626] hover:border-[#dc2626] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://web.facebook.com/ZENpucon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#141414] border border-[#262626] rounded-lg text-gray-400 hover:text-[#dc2626] hover:border-[#dc2626] transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Disciplinas */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Disciplinas
            </h3>
            <ul className="space-y-3">
              {[
                "Brazilian Jiu-Jitsu",
                "No-Gi / Grappling",
                "MMA",
                "Kickboxing",
                "Boxeo",
                "Funcional",
              ].map((discipline) => (
                <li key={discipline}>
                  <Link
                    href="/disciplinas"
                    className="text-gray-400 hover:text-[#dc2626] text-sm transition-colors"
                  >
                    {discipline}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Enlaces
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/horarios", label: "Horarios" },
                { href: "/instructores", label: "Instructores" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#dc2626] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#dc2626] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Av. O&apos;Higgins 717, Local 3<br />
                  Segundo Piso, Pucon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#dc2626] shrink-0" />
                <span className="text-gray-400 text-sm">
                  Lun - Vie: 10:30 - 22:00
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#dc2626] shrink-0" />
                <a
                  href="tel:+56912345678"
                  className="text-gray-400 hover:text-[#dc2626] text-sm transition-colors"
                >
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#dc2626] shrink-0" />
                <a
                  href="mailto:contacto@dojozenpucon.cl"
                  className="text-gray-400 hover:text-[#dc2626] text-sm transition-colors"
                >
                  contacto@dojozenpucon.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dojo Zen Pucon. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desarrollado con pasion por las artes marciales
          </p>
        </div>
      </div>
    </footer>
  );
}
