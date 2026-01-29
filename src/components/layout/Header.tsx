"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/disciplinas", label: "Disciplinas" },
  { href: "/horarios", label: "Horarios" },
  { href: "/instructores", label: "Instructores" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
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
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="220 60"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#d4af37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#dc2626]">ZEN</span>{" "}
                <span className="text-white">DOJO</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
                Artes Marciales
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#dc2626] transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/dojozenpucon/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#dc2626] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://web.facebook.com/ZENpucon/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#dc2626] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <Link
              href="/contacto"
              className="ml-2 px-5 py-2.5 bg-[#dc2626] hover:bg-[#991b1b] text-white text-sm font-bold uppercase tracking-wider rounded transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
            >
              Inscribirse
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
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
            className="md:hidden bg-[#0a0a0a] border-t border-[#262626]"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-gray-300 hover:text-[#dc2626] transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-[#262626]">
                <a
                  href="https://www.instagram.com/dojozenpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-[#dc2626] transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://web.facebook.com/ZENpucon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-[#dc2626] transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
              <Link
                href="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-[#dc2626] hover:bg-[#991b1b] text-white font-bold uppercase tracking-wider rounded transition-colors"
              >
                Inscribirse
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
