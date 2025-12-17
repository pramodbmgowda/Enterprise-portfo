"use client";

import { OWNER, SITE_CONFIG } from "@/data/inventory";
import { ShieldCheck, Phone, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Owner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f0d] via-[#0f1a16] to-[#050807]" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">

          {/* ================= IMAGE (TOP ON MOBILE) ================= */}
          <div className="order-1 md:order-2 md:col-span-2 relative flex items-end justify-center bg-black/40">
            {/* Gradient frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <motion.img
              src={OWNER.image}
              alt={OWNER.name}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-[85%] md:w-[90%] object-contain drop-shadow-2xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />

            {/* Verified Badge */}
            <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
              <BadgeCheck
                size={22}
                className="text-blue-500"
                fill="currentColor"
                stroke="white"
              />
            </div>
          </div>

          {/* ================= CONTENT (BOTTOM ON MOBILE) ================= */}
          <div className="order-2 md:order-1 md:col-span-3 p-10 md:p-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              {/* Trust Label */}
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-emerald-400/30 bg-emerald-950/40 rounded-sm">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Proprietor’s Assurance
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
                {OWNER.name}
              </h2>

              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-8">
                {OWNER.role}
              </p>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
                {OWNER.message}
              </p>

              {/* Assurance CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 px-5 py-3 border border-white/10 rounded-lg bg-black/30">
                  <ShieldCheck size={18} className="text-emerald-400" />
                  <span className="text-sm font-bold text-slate-200">
                    Serving Since 2017
                  </span>
                </div>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                >
                  <Phone size={18} />
                  <span className="text-sm font-black uppercase tracking-widest">
                    Speak Directly
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}