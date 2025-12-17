"use client";
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[650px] bg-slate-950 text-white overflow-hidden flex items-center">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpeg"
          alt="Farm and Home Landscape"
          className="w-full h-full object-cover opacity-100" 
        />
        
        {/* Gradient: Dark Left -> Transparent Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent md:via-slate-950/60"></div>
        {/* Gradient: Bottom Up */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-start" // items-start enforces perfect left alignment
        >
          {/* BADGE: Brighter Gold, Perfect Alignment */}
          <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-950/80 backdrop-blur-md px-4 py-2 rounded-sm mb-8 shadow-lg ring-1 ring-amber-500/20">
            <ShieldCheck size={16} className="text-amber-400" />
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
              Trusted by 12,000+ Farm Families
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 uppercase tracking-tighter drop-shadow-2xl">
            Powering Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Farm & Home.
            </span>
          </h1>

          {/* DESCRIPTION: Glassmorphism Fix */}
          <div className="mb-12 max-w-2xl bg-slate-950/40 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-2xl">
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed border-l-2 border-emerald-500 pl-4">
              From the field to your doorstep. We provide the machinery, service, and support that keeps your agricultural livelihood running smooth.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#inventory" 
              className="group bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 text-lg font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] flex items-center justify-center gap-2 rounded-sm"
            >
              View Machinery <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            
            <a 
              href="#contact" 
              className="px-10 py-5 text-lg font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center rounded-sm backdrop-blur-sm"
            >
              Visit Our Store
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}