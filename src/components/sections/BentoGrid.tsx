"use client";

import { CATEGORIES } from "@/data/inventory";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function BentoGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="inventory" className="relative py-24 md:py-32 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">

        {/* Clean Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-white/10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">
              Inventory Catalog
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Machinery <span className="text-slate-600">/</span> Stock
            </h2>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <Link href={`/category/${cat.id}`} key={cat.id} className={cat.colSpan ? `lg:${cat.colSpan}` : ""}>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: reduceMotion ? 0 : i * 0.08 }}
                className="group relative overflow-hidden bg-slate-900 border border-white/10 hover:border-emerald-500/50 transition-colors h-[380px] md:h-[440px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-50 transition-transform duration-700 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                </div>

                <div className="absolute top-6 left-6 z-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-emerald-400 transition-colors">
                    CAT_0{i + 1}
                  </span>
                </div>

                <div className="relative z-10 p-6 md:p-8">
                  <h3 className="text-2xl font-black text-white uppercase mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
                    {cat.desc}
                  </p>

                  <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500 group-hover:text-white transition-colors">
                    <span>Explore Models</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}