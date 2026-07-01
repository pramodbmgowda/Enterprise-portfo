"use client";

import { useState } from "react";
import { Phone, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, OWNER } from "@/data/inventory";

const WHATSAPP_MESSAGE = encodeURIComponent(
  `Namaskara ${OWNER.name.split(" ")[1]} sir, I am interested in your machines. Can you please share details?`
);
const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}?text=${WHATSAPP_MESSAGE}`;

export function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    // pb-safe handles iPhone home bar + Android nav gesture zone
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 pb-safe">
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.85 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex items-center gap-2.5 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-lg font-bold text-sm uppercase tracking-widest"
            >
              <MessageCircle size={18} fill="white" stroke="none" />
              WhatsApp
            </motion.a>

            <motion.a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2.5 bg-emerald-600 text-white pl-4 pr-5 py-3.5 rounded-full shadow-lg font-bold text-sm uppercase tracking-widest"
            >
              <Phone size={18} fill="white" stroke="none" />
              {SITE_CONFIG.phone}
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
        aria-label="Contact us"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}