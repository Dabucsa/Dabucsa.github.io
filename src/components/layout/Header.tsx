"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/disciplinas", label: "Disciplinas" },
  { href: "/horarios", label: "Horarios" },
  { href: "/planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a08]/95 backdrop-blur-md border-b border-[#2a2318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 overflow-hidden rounded-full border-2 border-[#d4a843]/30 group-hover:border-[#d4a843] transition-all duration-300">
              <img 
                src="/images/logo.jpg" 
                alt="Dojo Zen Pucon" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider">
                <span className="text-[#d4a843]">DOJO</span>{" "}
                <span className="text-[#f5f0e8]">ZEN</span>
              </span>
              <span className="text-[9px] text-[#8a7a62] tracking-[0.25em] uppercase">
                Pucon &middot; Artes Marciales
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#c4b89a] hover:text-[#d4a843] transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/dojozenpucon/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8a7a62] hover:text-[#d4a843] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://web.facebook.com/ZENpucon/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8a7a62] hover:text-[#d4a843] transition-colors"
            >
              <Facebook size={18} />
            </a>
            <Link
              href="/contacto"
              className="ml-2 px-5 py-2.5 btn-gold text-sm rounded transition-all"
            >
              Clase Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#d4a843]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c0a08] border-t border-[#2a2318]"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-[#c4b89a] hover:text-[#d4a843] transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-[#2a2318]">
                <a
                  href="https://www.instagram.com/dojozenpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#8a7a62] hover:text-[#d4a843] transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://web.facebook.com/ZENpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#8a7a62] hover:text-[#d4a843] transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
              <Link
                href="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-5 py-3 btn-gold rounded"
              >
                Clase Gratis
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
