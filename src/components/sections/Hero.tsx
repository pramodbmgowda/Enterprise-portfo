"use client";

import { motion } from "framer-motion";
import { ChevronRight, Phone, BadgeCheck, ShieldCheck } from "lucide-react";
import { STATS, OWNER, SITE_CONFIG } from "@/data/inventory";

export function Hero() {
  const heroQuote = OWNER.message
    .replace(/^Namaskara\.\s*/i, "")
    .split(".")[0]
    .trim();

  return (
    <section
      id="home"
      className="relative overflow-hidden text-white min-h-[100svh] md:min-h-screen flex items-center"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pexels-dave-36033665.jpg"
          alt="Farmer operating power tiller"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-sm border border-emerald-400/20 bg-black/40 backdrop-blur-md"
          >
            <ShieldCheck size={13} className="text-emerald-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-300">
              Authorized Multi-Brand Dealer · Since 2017
            </span>
          </motion.div>

          {/* HEADLINE */}
          <h1 className="font-black uppercase tracking-tight leading-[0.92] mb-8 text-5xl sm:text-6xl lg:text-7xl">
            BUILT FOR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">
              INDIAN SOIL
            </span>
          </h1>

          {/* OWNER QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 items-start mb-10 max-w-lg"
          >
            <div className="w-1 self-stretch bg-emerald-500 rounded-full flex-shrink-0 mt-1" />
            <div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                "{heroQuote}."
              </p>
              <div className="flex items-center gap-2.5 mt-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={OWNER.image}
                    alt={OWNER.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-emerald-500/50"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 bg-slate-950 rounded-full p-0.5">
                    <BadgeCheck
                      size={11}
                      className="text-blue-400"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white leading-none">
                    {OWNER.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-0.5">
                    {OWNER.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#inventory"
              className="group bg-emerald-600 hover:bg-emerald-500 px-8 py-4 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              View Our Machines
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="group bg-white/5 hover:bg-white/10 border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm transition-all backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Talk to {OWNER.name.split(" ")[1]}
              <Phone size={16} />
            </a>
          </div>

          {/* STATS */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-40 h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <div className="pt-8 flex flex-row items-start justify-start gap-12 md:gap-20">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col group"
                >
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-emerald-400 transition-colors">
                      {stat.value.replace(/[^0-9]/g, "")}
                    </span>
                    <span className="text-xl font-bold text-emerald-500">
                      {stat.value.replace(/[0-9]/g, "")}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-extrabold mt-1 whitespace-nowrap">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}