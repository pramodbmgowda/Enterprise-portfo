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

          {/* STATS — Sequential Reveal (10/10 Mobile UX) */}
<div className="mt-16 relative w-full">
  {/* The Technical Divider */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-10" />
  
  <div 
    className="
      pt-10
      flex 
      flex-col           /* Vertical on Mobile */
      sm:flex-row        /* Horizontal on Desktop */
      items-center       /* Centered for Mobile */
      sm:items-start     /* Left-aligned for Desktop */
      justify-center 
      sm:justify-start 
      gap-16             /* Increased gap for clear separation during scroll */
      md:gap-20
    "
  >
    {STATS.map((stat, i) => (
      <motion.div 
        key={i} 
        // Initial state: Invisible and slightly lower
        initial={{ opacity: 0, y: 30 }}
        // On Desktop (sm+): Animate immediately
        // On Mobile: Animate only when it enters the viewport
        whileInView={{ opacity: 1, y: 0 }}
        // viewport amount 0.8 means 80% of the stat must be visible before it pops in
        viewport={{ 
          once: true, 
          amount: 0.8,
          margin: "0px 0px -50px 0px" // Triggers slightly before hitting the bottom
        }}
        transition={{ 
          duration: 0.7, 
          ease: [0.21, 1.11, 0.81, 0.99], // Custom spring-like cubic bezier
          delay: typeof window !== 'undefined' && window.innerWidth > 640 ? i * 0.1 : 0 
        }}
        className="flex flex-col items-center sm:items-start group"
      >
        <div className="flex items-baseline gap-1">
          <span className="text-5xl md:text-5xl font-black text-white tracking-tighter tabular-nums group-hover:text-emerald-400 transition-colors duration-300">
            {stat.value.replace(/[^0-9]/g, '')}
          </span>
          <span className="text-2xl md:text-2xl font-bold text-emerald-500">
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