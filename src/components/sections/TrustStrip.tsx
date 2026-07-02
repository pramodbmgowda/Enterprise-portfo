"use client";

import { BRANDS } from "@/data/inventory";
import { motion } from "framer-motion";

export function TrustStrip() {
  return (
    <section
      id="brands"
      className="relative z-20 scroll-mt-24 bg-[#f4f4f4] py-12 md:py-20 border-y-4 border-gray-200 overflow-hidden max-w-[100vw]"
    >
      {/* Industrial Header */}
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16 mb-10 md:mb-16">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Heavy structural anchor instead of a glowing dot */}
          <div className="w-3 h-3 bg-brand-green flex-shrink-0" />
          <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-800 whitespace-nowrap">
            Authorized Global Partners
          </h3>
          {/* Heavy yellow divider line */}
          <div className="flex-grow h-1 bg-brand-yellow" />
        </div>
      </div>

      {/* Monolithic Marquee - Industrial Edition */}
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
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-300 uppercase tracking-tighter select-none flex items-center pr-12 md:pr-24 hover:text-brand-green transition-colors duration-300"
            >
              {brand}
              {/* Brutalist structural separators */}
              <span className="text-gray-200 text-4xl md:text-6xl font-black ml-12 md:ml-24">
                //
              </span>
            </span>
          ))}
        </motion.div>

        {/* Industrial Edge Masks (Matches the #f4f4f4 background) */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#f4f4f4] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#f4f4f4] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}