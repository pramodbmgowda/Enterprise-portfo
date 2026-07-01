"use client";

import { OWNER, SITE_CONFIG } from "@/data/inventory";
import { Phone, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Owner() {
  return (
    <section className="relative py-20 bg-slate-950 border-t border-white/5">
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >

          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative order-2 md:order-1">
            <Quote size={60} className="text-white/5 absolute top-6 left-6" />

            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1">
                {OWNER.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-6">
                {OWNER.role}
              </p>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 italic">
                "{OWNER.message}"
              </p>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-bold uppercase tracking-widest text-xs transition-colors shadow-lg shadow-emerald-900/20 w-fit"
              >
                <Phone size={14} /> Speak Directly
              </a>
            </div>
          </div>

          <div className="md:w-2/5 relative bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center py-12 md:py-0 order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/5 min-h-[300px]">
             <div className="absolute w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full" />

             <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-br from-emerald-500/40 to-slate-800 shadow-2xl overflow-hidden">
               <div className="relative w-full h-full rounded-full border-4 border-slate-950 bg-slate-900 overflow-hidden">
                 <Image
                  src={OWNER.image}
                  alt={OWNER.name}
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover object-top"
                 />
               </div>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}