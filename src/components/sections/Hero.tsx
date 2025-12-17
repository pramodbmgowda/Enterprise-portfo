"use client";

import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Phone } from "lucide-react";
import { STATS } from "@/data/inventory";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white min-h-[100svh] md:min-h-screen"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f0d] via-[#0f1a16] to-[#050807]" />

      <div className="container mx-auto px-4 pt-[clamp(6rem,18vh,10rem)] md:flex md:items-center md:min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* TRUST BADGE */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm border border-emerald-400/30 bg-emerald-950/40">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-300">
              Trusted by Farmers Since 2017
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="font-black uppercase tracking-tight leading-[0.95] mb-6 text-4xl sm:text-6xl lg:text-8xl">
            Powering Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600">
              Farm & Home
            </span>
          </h1>

          {/* DESCRIPTION */}
          <div className="max-w-2xl mb-10 border-l-4 border-emerald-500 pl-6">
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
              Sales, service, and government subsidy–supported agricultural
              machinery built for long-term reliability.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#inventory"
              className="group bg-emerald-600 hover:bg-emerald-500 px-8 py-5 text-sm sm:text-base font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
            >
              View Machinery
              <ChevronRight size={20} />
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="group border border-white/30 hover:bg-white hover:text-black px-8 py-5 text-sm sm:text-base font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm transition-all"
            >
              Call Now
              <Phone size={18} />
            </a>
          </div>

          {/* STATS (NOW HERE – SUBTLE, TRUST-DRIVEN) */}
          <div className="grid grid-cols-3 gap-8 max-w-xl">
            {STATS.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl md:text-4xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}