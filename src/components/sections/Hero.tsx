"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { STATS, SITE_CONFIG } from "@/data/inventory";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] md:min-h-screen flex items-center bg-slate-950 pt-20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pexels-dave-36033665.jpg"
          alt="Heavy duty agricultural machinery"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        {/* Simple gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      </div>

      {/* CONTENT (Normal document flow, no absolute positioning traps) */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl" // Keeps text line-lengths readable
        >
          {/* Eyebrow */}
          <p className="text-emerald-500 font-bold tracking-[0.2em] text-xs uppercase mb-4">
            GreenRider Equipments
          </p>

          {/* Headline - Human readable, normal line-height */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Engineered for the Hardest Soil.
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10">
            Stop losing yields to cheap machinery breakdowns. We deliver robust agricultural equipment with a personal guarantee of zero tension and immediate on-ground support.
          </p>

          {/* CTAs - Standard UI sizes, no massive blocks */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#inventory"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded text-sm font-bold transition-colors"
            >
              View Machinery
              <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded text-sm font-bold transition-colors backdrop-blur-sm"
            >
              <Phone size={16} />
              Call Sales Direct
            </a>
          </div>

          {/* Stats - Anchored below the buttons with top-padding */}
          <div className="flex items-center gap-10 pt-8 border-t border-white/10">
            {STATS.slice(0, 2).map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}