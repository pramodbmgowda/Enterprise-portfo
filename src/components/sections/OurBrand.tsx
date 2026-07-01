"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, OWNER } from "@/data/inventory";
import { ShieldCheck, Wrench, IndianRupee, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    title: "Direct Warranty",
    desc: "No manufacturer hotline. No courier wait. Walk into our showroom and we handle your machine the same day.",
  },
  {
    icon: <Wrench size={24} strokeWidth={1.5} />,
    title: "Workshop Backed",
    desc: "Fully serviceable at our own facility. Genuine parts stocked on-shelf, never ordered on demand.",
  },
  {
    icon: <IndianRupee size={24} strokeWidth={1.5} />,
    title: "No Middleman Margin",
    desc: "You buy direct from the maker. No distributor cut, no retailer markup. Just the honest price.",
  },
];

export function OurBrand() {
  return (
    <section className="relative py-32 bg-slate-950 text-white border-t border-white/5">
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* TOP SECTION: The Manifesto */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-emerald-500" />
              <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                GREENRIDER Original's
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              The <br />
              <span className="text-slate-500">GreenRider</span> <br />
              Advantage
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end"
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-6">
              We engineered our own. Built specifically for the brutal reality of Indian soil conditions, priced without corporate margins, and backed by the same workshop you walk into.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg border-l border-white/10 pl-6 mb-10">
              When {OWNER.name} gives his "personal guarantee," it is literal. Not a faceless manufacturer in another city. Him. Here.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="#inventory"
                className="group flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-emerald-400 px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs transition-colors w-full sm:w-auto"
              >
                View Proprietary Stock
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Live Demos Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Architectural Grid (No Boxes) */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-white/10">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col"
            >
              <div className="text-emerald-500 mb-6 group-hover:text-emerald-400 transition-colors group-hover:-translate-y-1 transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-base font-black uppercase tracking-widest text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}