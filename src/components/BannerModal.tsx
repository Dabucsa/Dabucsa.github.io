"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BannerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if banner was already closed
    const bannerClosed = localStorage.getItem("bannerClosed");
    if (!bannerClosed) {
      // Show banner after a short delay
      setTimeout(() => setIsOpen(true), 1000);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("bannerClosed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#d4a843] hover:bg-[#c44a2e] text-[#0c0a08] rounded-full transition-colors shadow-lg"
              >
                <X size={24} strokeWidth={3} />
              </button>

              {/* Banner Image */}
              <div className="relative overflow-hidden rounded-2xl border-4 border-[#d4a843] shadow-2xl">
                <img
                  src="/images/banner.jpg"
                  alt="Banner Dojo Zen"
                  className="w-full h-auto cursor-pointer"
                  onClick={handleClose}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
