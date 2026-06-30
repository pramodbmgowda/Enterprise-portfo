"use client";
import { BRANDS } from "@/data/inventory"; // Corrected import
import { motion } from "framer-motion";

export function TrustStrip() {
  return (
    // Added scroll-mt-24 to offset the fixed navbar height
    <section id="brands" className="relative z-20 scroll-mt-24">
      <div className="bg-slate-950 text-white border-y border-white/5">
        
        {/* BRANDS MARQUEE */}
        <div className="py-16 bg-emerald-950/30 overflow-hidden relative flex flex-col justify-center">

          {/* Label Badge */}
          <div className="container mx-auto px-4 mb-10 relative z-10 text-center">
            <span className="bg-emerald-900/50 border border-emerald-500/20 text-emerald-100 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm backdrop-blur-sm">
              Authorized Service Partners
            </span>
          </div>

          {/* Marquee */}
          <div className="relative flex overflow-hidden z-10">
            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {/* Corrected mapping to use BRANDS array */}
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-5xl font-black text-white/20 uppercase select-none flex items-center gap-16"
                >
                  {brand}
                  <span className="text-emerald-500/30 text-2xl">/</span>
                </span>
              ))}
            </motion.div>

            {/* Side fades */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}