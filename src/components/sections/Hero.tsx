"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { STATS, SITE_CONFIG } from "@/data/inventory";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 min-h-[90svh] flex items-center pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/pexels-dave-36033665.jpg"
          alt="Agricultural Machinery"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/55" />

        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

        {/* Radial Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,.18),transparent_45%)]" />
      </div>

      <div className="container mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Small Heading */}
          <p className="uppercase tracking-[0.35em] text-emerald-400 font-semibold text-sm mb-5">
            GreenRider Equipments
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
            Engineered for the
            <br />
            Hardest Soil.
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
            Stop losing yields to cheap machinery breakdowns. We deliver robust
            agricultural equipment with a personal guarantee of zero tension
            and immediate on-ground support.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <a
              href="#inventory"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-9 py-4 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
            >
              View Machinery
              <ArrowRight size={18} />
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-9 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              <Phone size={18} />
              Call Sales Direct
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-16 max-w-xl">
  {STATS.slice(0, 2).map((stat, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
    >
      <h2 className="text-4xl font-black text-white">
        {stat.value}
      </h2>
      <p className="mt-2 uppercase tracking-[0.2em] text-xs text-slate-400 whitespace-nowrap">
        {stat.label}
      </p>
    </motion.div>
  ))}
</div>
        </motion.div>
      </div>
    </section>
  );
}