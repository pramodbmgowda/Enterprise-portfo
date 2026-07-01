"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Assuming this is imported from your content.ts
const TESTIMONIALS = [
  {
    name: "Ramesh Gowda",
    location: "Tumkur District",
    crop: "Arecanut & Coconut",
    text: "The power weeder from GreenRider cut my labor dependency in half. When the blades needed replacement after a heavy season, Mr. Purushotham had it sorted in two hours at the showroom.",
  },
  {
    name: "Siddaraju M.",
    location: "Mandya",
    crop: "Sugarcane",
    text: "I bought a cheaper machine online last year and it died in a month with zero service. GreenRider's brush cutter is heavier, stronger, and the direct warranty gives me total peace of mind.",
  },
  {
    name: "Kantharaj",
    location: "Kunigal",
    crop: "Dairy Farmer",
    text: "Their single bucket milking machine is perfectly calibrated. Subsidy paperwork was handled transparently, and the installation team actually taught my workers how to maintain the vacuum pump.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 flex-shrink-0" />
              <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Field Performance Reports
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.9]">
              Tested By <br />
              <span className="text-slate-500">Karnataka's Soil</span>
            </h2>
          </motion.div>
        </div>

        {/* Blueprint Grid */}
        <div className="grid md:grid-cols-3 border-t border-l border-white/10">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative border-r border-b border-white/10 p-8 md:p-10 flex flex-col bg-transparent hover:bg-white/[0.02] transition-colors duration-500"
            >
              <Quote size={24} strokeWidth={1} className="text-emerald-500/50 mb-8 transform group-hover:-translate-y-1 transition-transform" />
              
              <p className="text-slate-300 text-sm leading-relaxed mb-10 flex-grow italic">
                "{item.text}"
              </p>

              <div className="mt-auto pt-6 border-t border-white/5">
                <h4 className="text-sm font-black uppercase tracking-widest text-white mb-1">
                  {item.name}
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                  {item.location} // {item.crop}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}