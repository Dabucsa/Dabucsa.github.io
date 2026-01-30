import Link from "next/link";
import { Instagram, Facebook, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0a08] border-t border-[#2a2318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/logo.jpg" 
                alt="Dojo Zen Logo" 
                className="w-12 h-12 object-cover rounded-full border-2 border-[#d4a843]/30"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider">
                  <span className="text-[#d4a843]">DOJO</span>{" "}
                  <span className="text-[#f5f0e8]">ZEN</span>
                </span>
                <span className="text-[9px] text-[#8a7a62] tracking-[0.2em] uppercase">
                  Artes Marciales
                </span>
              </div>
            </div>
            <p className="text-[#8a7a62] text-sm leading-relaxed mb-6">
              10 años formando guerreros en Pucón. BJJ, MMA, Kickboxing, Boxeo y Funcional. Más de 42 clases semanales con instructores de élite.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dojozenpucon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#161210] border border-[#2a2318] rounded-lg text-[#8a7a62] hover:text-[#d4a843] hover:border-[#d4a843]/40 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://web.facebook.com/ZENpucon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#161210] border border-[#2a2318] rounded-lg text-[#8a7a62] hover:text-[#d4a843] hover:border-[#d4a843]/40 transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Disciplinas */}
          <div>
            <h3 className="text-[#f5f0e8] font-bold uppercase tracking-wider text-sm mb-6">
              Disciplinas
            </h3>
            <ul className="space-y-3">
              {[
                "Brazilian Jiu-Jitsu",
                "MMA",
                "Kickboxing",
                "Boxeo",
                "Funcional",
                "Competidores",
              ].map((d) => (
                <li key={d}>
                  <Link
                    href="/disciplinas"
                    className="text-[#8a7a62] hover:text-[#d4a843] text-sm transition-colors"
                  >
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#f5f0e8] font-bold uppercase tracking-wider text-sm mb-6">
              Enlaces
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/horarios", label: "Horarios" },
                { href: "/planes", label: "Planes" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8a7a62] hover:text-[#d4a843] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f5f0e8] font-bold uppercase tracking-wider text-sm mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#d4a843] mt-0.5 shrink-0" />
                <span className="text-[#8a7a62] text-sm">
                  Enrique Novoa 910<br />
                  Pucon, Chile
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#d4a843] shrink-0" />
                <span className="text-[#8a7a62] text-sm">
                  Lun - Vie: 09:00 - 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2318] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8a7a62]/60 text-sm">
            &copy; {new Date().getFullYear()} Dojo Zen Pucon. Todos los derechos
            reservados.
          </p>
          <p className="text-[#8a7a62]/40 text-xs">
            @dojozenpucon
          </p>
        </div>
      </div>
    </footer>
  );
}
