"use client";
import { OWNER, SITE_CONFIG } from '@/data/inventory';
import { Quote, ShieldCheck, Phone, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function Owner() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* CONTENT AREA */}
          <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
            {/* On Mobile, this reveals as you scroll down */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8 bg-slate-950 border border-slate-800 px-4 py-1.5 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-widest">
                  Proprietor's Guarantee
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
                {OWNER.name}
              </h2>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-10 pb-6 border-b border-slate-800">
                {OWNER.role}
              </p>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-serif italic font-light">
                "{OWNER.message}"
              </p>

              {/* Action Area - Buttons light up on scroll reveal */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-slate-800 bg-slate-950/50">
                   <ShieldCheck className="text-emerald-500" size={20} />
                   <p className="text-slate-200 font-bold text-sm">Since 2017</p>
                </div>

                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-4 px-5 py-3 rounded-lg bg-emerald-600 text-white">
                   <Phone size={18} fill="currentColor" />
                   <span className="font-bold text-sm uppercase">Call Support</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* IMAGE AREA */}
          <div className="w-full md:w-2/5 relative min-h-[400px] bg-slate-950 overflow-hidden flex items-end justify-center order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 opacity-100"></div>
            
            {/* The Image zooms in slightly when it enters the phone screen */}
            <motion.img 
              initial={{ opacity: 0, scale: 1.1, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={OWNER.image} 
              alt={OWNER.name}
              className="relative z-10 w-[85%] md:w-[90%] h-auto object-contain drop-shadow-2xl"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />

            <div className="absolute top-6 right-6 z-20 bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700/50">
               <BadgeCheck className="text-blue-500" size={24} fill="currentColor" stroke="white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}