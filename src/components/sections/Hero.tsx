"use client";

import { motion } from "framer-motion";
import { ChevronRight, HeartHandshake, Phone } from "lucide-react";
import { STATS } from "@/data/inventory";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden text-white min-h-[100svh] md:min-h-screen flex items-center"
    >
      {/* 1. CINEMATIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/pexels-dave-36033665.jpg" 
          alt="Farmer operating power tiller" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* 2. ATMOSPHERIC BLUR & COLOR GRADING */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
        {/* 3. ELEGANT READING VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 28 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="max-w-4xl"
        >
          {/* KINSHIP BADGE */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm border border-emerald-400/30 bg-emerald-950/40 backdrop-blur-sm">
            <HeartHandshake size={16} className="text-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-300">
              Standing with the Indian Farmer
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="font-black uppercase tracking-tight leading-[0.95] mb-6 text-4xl sm:text-6xl lg:text-7xl">
            BUILT FOR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600">
              INDIAN SOIL
            </span>
          </h1>

          {/* PSYCHOLOGICAL SUBTEXT */}
          <div className="max-w-2xl mb-10 border-l-4 border-emerald-500 pl-6">
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow-md">
              Farming demands year-round resilience. Overcome labor shortages and seasonal pressures with heavy-duty, subsidy-approved machinery engineered to deliver relentless performance.
            </p>
          </div>

          {/* ELEGANT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a 
              href="#inventory" 
              className="group bg-emerald-700/90 hover:bg-emerald-600 px-8 py-5 text-sm sm:text-base font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm border border-emerald-500/20 transition-all"
            >
              View Our Machines <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+919844107053" 
              className="group bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-5 text-sm sm:text-base font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm transition-all backdrop-blur-md"
            >
              Talk to an Expert <Phone size={18} />
            </a>
          </div>

          {/* STATS STRIP */}
          <div className="mt-16 relative w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-10" />
            <div className="pt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-16 md:gap-20">
              {STATS.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.8 }} 
                  transition={{ duration: 0.7, delay: i * 0.1 }} 
                  className="flex flex-col items-center sm:items-start group"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white tracking-tighter tabular-nums group-hover:text-emerald-400 transition-colors">
                      {stat.value.replace(/[^0-9]/g, '')}
                    </span>
                    <span className="text-2xl font-bold text-emerald-500">
                      {stat.value.replace(/[0-9]/g, '')}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-[1px] w-3 bg-emerald-500/40 hidden sm:block" />
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-slate-500 font-extrabold whitespace-nowrap">
                      {stat.label}
                    </span>
                    <div className="h-[1px] w-3 bg-emerald-500/40 hidden sm:block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}