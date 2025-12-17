"use client";

import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center text-white"
    >
      {/* ================= BACKGROUND MAGIC ================= */}
      <div className="absolute inset-0 -z-10">
        {/* Base soil tone */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f0d] via-[#0f1a16] to-[#050807]" />

        {/* Emerald growth glow */}
        <div className="absolute -top-1/3 -left-1/3 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-[-20%] w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[160px]" />

        {/* Warm trust accent */}
        <div className="absolute bottom-[-30%] left-1/3 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[160px]" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

        {/* Grain illusion */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:3px_3px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* TRUST BADGE */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-sm border border-emerald-400/30 bg-emerald-950/40 backdrop-blur-md">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-300">
              Trusted by 12,000+ Farm Families
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="font-black uppercase tracking-tight leading-[0.95] mb-8 text-4xl sm:text-6xl lg:text-8xl">
            Powering Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600">
              Farm & Home
            </span>
          </h1>

          {/* DESCRIPTION */}
          <div className="max-w-2xl mb-12 border-l-4 border-emerald-500 pl-6">
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
              Sales, service, and government subsidy–supported agricultural
              machinery — built for farmers who value reliability and results.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#inventory"
              className="group bg-emerald-600 hover:bg-emerald-500 px-8 py-5 text-sm sm:text-base font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
            >
              View Machinery
              <ChevronRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="group border border-white/30 hover:bg-white hover:text-black px-8 py-5 text-sm sm:text-base font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm transition-all"
            >
              Call Now
              <Phone size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}