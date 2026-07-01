"use client";
import { BRANDS } from "@/data/inventory";
import { motion } from "framer-motion";

export function TrustStrip() {
  return (
    <section
      id="brands"
      className="relative z-20 scroll-mt-24 bg-slate-950 py-12 md:py-20 border-y border-white/10 overflow-hidden max-w-[100vw]"
    >
      {/* Architectural Header */}
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16 mb-10 md:mb-16">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-1.5 h-1.5 bg-emerald-500 flex-shrink-0" />
          <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">
            Authorized Global Partners
          </h3>
          <div className="flex-grow h-[1px] bg-white/5" />
        </div>
      </div>

      {/* Monolithic Marquee */}
      <div
        className="relative flex overflow-hidden z-10 group w-full max-w-[100vw]"
        style={{ touchAction: "pan-y" }}
      >
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          style={{ touchAction: "pan-y" }}
        >
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 uppercase tracking-tighter select-none flex items-center pr-12 md:pr-24 hover:text-slate-600 transition-colors duration-500"
            >
              {brand}
              <span className="text-emerald-500/20 text-4xl md:text-6xl font-light ml-12 md:ml-24">
                /
              </span>
            </span>
          ))}
        </motion.div>

        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}