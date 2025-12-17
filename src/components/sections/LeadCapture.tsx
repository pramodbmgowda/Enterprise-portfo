"use client";

import { Phone, MapPin, ChevronDown, ShieldCheck } from "lucide-react";

export function LeadCapture() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden text-white"
    >
      {/* ================= BACKGROUND MAGIC ================= */}
      <div className="absolute inset-0 -z-10">
        {/* Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f0d] via-[#0f1a16] to-[#050807]" />

        {/* Depth glows */}
        <div className="absolute -top-1/3 -left-1/3 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[160px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 shadow-2xl">
          
          {/* ================= LEFT INFO ================= */}
          <div className="p-10 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-black/20">
            <div>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-sm border border-emerald-400/30 bg-emerald-950/40">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Official Pricing Request
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black uppercase leading-[1] mb-6">
                Request <br />
                <span className="text-slate-500">Quotation</span>
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed border-l-4 border-emerald-500/60 pl-6 max-w-md">
                Get accurate pricing, subsidy guidance, and availability directly
                from our sales team.
              </p>
            </div>

            <div className="space-y-8 mt-14">
              <div className="flex gap-5 items-start">
                <div className="p-3 bg-black/40 border border-white/10 rounded-lg">
                  <MapPin className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">
                    Showroom
                  </p>
                  <p className="text-slate-300 text-sm">
                    Bettahalli, Hutridurga<br />
                    Kunigal, Karnataka
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 bg-black/40 border border-white/10 rounded-lg">
                  <Phone className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">
                    Sales Support
                  </p>
                  <p className="text-slate-300 text-sm font-mono">
                    +91 99000 00000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="p-10 md:p-16 bg-black/30">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Client Name
                  </label>
                  <input
                    required
                    className="w-full bg-black border border-white/10 p-4 text-white text-sm font-bold focus:border-emerald-500 outline-none rounded-sm"
                    placeholder="ENTER FULL NAME"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono text-sm">
                      +91
                    </span>
                    <input
                      required
                      pattern="[0-9]{10}"
                      className="w-full bg-black border border-white/10 p-4 pl-16 text-white text-sm font-mono focus:border-emerald-500 outline-none rounded-sm"
                      placeholder="99000XXXXX"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Machinery Category
                </label>
                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-black border border-white/10 p-4 text-white text-sm font-bold focus:border-emerald-500 outline-none appearance-none rounded-sm"
                  >
                    <option value="" disabled>
                      SELECT EQUIPMENT TYPE
                    </option>
                    <option>Power Weeder / Tiller</option>
                    <option>Brush Cutter</option>
                    <option>Sprayer</option>
                    <option>Water Pump</option>
                    <option>Other / Spare Parts</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-black border border-white/10 p-4 text-white text-sm focus:border-emerald-500 outline-none resize-none rounded-sm"
                  placeholder="Subsidy details, model preference, usage area..."
                />
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-black py-5 font-black uppercase tracking-widest rounded-sm transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] active:translate-y-0.5">
                Get Official Quote
              </button>

              <p className="text-center text-xs text-slate-500 mt-3">
                No spam. Your details are shared only with our sales team.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}