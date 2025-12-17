"use client";

import { CATEGORIES } from "@/data/inventory";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function BentoGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inventory"
      className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-slate-950"
    >
      {/* Background depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f0d] via-[#0f1a16] to-[#050807]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-white/10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-2 block">
              Inventory Catalog
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Machinery <span className="text-slate-600">/</span> Stock
            </h2>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`
                group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-black/40
                shadow-xl
                transition-colors
                md:backdrop-blur-sm
                md:hover:border-amber-500/40
                ${cat.colSpan ? `lg:${cat.colSpan}` : ""}
              `}
            >
              {/* IMAGE */}
              <div className="relative h-[340px] md:h-[440px]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="
                    absolute inset-0 w-full h-full
                    object-cover object-center
                    opacity-85
                    transition-transform duration-700
                    md:group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* ID BADGE */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[10px] text-amber-400 border border-amber-400/30 bg-black/50 px-2 py-1 rounded-sm">
                  CAT_0{i + 1}
                </span>
              </div>

              {/* ARROW (DESKTOP ONLY, VISUAL ONLY) */}
              <div className="hidden md:block absolute top-4 right-4 z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={22} className="text-amber-400" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-3 md:group-hover:text-amber-400 transition-colors">
                  {cat.title}
                </h3>

                <div className="h-[2px] w-12 bg-amber-400 mb-4 md:group-hover:w-20 transition-all duration-500" />

                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}