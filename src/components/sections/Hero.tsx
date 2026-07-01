"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/inventory";

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

        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,.18),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-emerald-400 font-semibold text-sm mb-5">
            GreenRider Equipments
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
            Engineered for the
            <br />
            Hardest Soil.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
            Stop losing yields to cheap machinery breakdowns. We deliver
            robust agricultural equipment with a personal guarantee of zero
            tension and immediate on-ground support.
          </p>

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
        </motion.div>
      </div>
    </section>
  );
}