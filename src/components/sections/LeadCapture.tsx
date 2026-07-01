"use client";

import { Phone, MapPin, ChevronDown, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/data/inventory";
import { motion } from "framer-motion";

export function LeadCapture() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      category: (form.elements.namedItem("category") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-950 text-white border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Request a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-500">
              Quotation
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-sm border border-emerald-400/20 bg-emerald-950/40">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-300">
                    Official Pricing Request
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Get accurate pricing, subsidy guidance, and stock availability directly from our sales team. No middleman, no delay.
                </p>
              </div>

              <div className="space-y-5 pt-2 border-t border-white/5">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/15 flex-shrink-0">
                    <MapPin size={15} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                      Showroom
                    </p>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/15 flex-shrink-0">
                    <Phone size={15} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                      Sales Line
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-emerald-400 text-sm font-mono font-bold hover:text-emerald-300 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP CARD */}
            <div className="rounded-2xl border border-white/10 overflow-hidden relative flex-1 min-h-[240px] group">
              <iframe
                src="https://maps.google.com/maps?q=12.950889,77.115981&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Senthepete, Bettahalli, Hutridurga · Kunigal
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=12.950889,77.115981"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Open in Google Maps"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-16 h-16 rounded-full border border-emerald-500/30 bg-emerald-950/50 flex items-center justify-center">
                  <CheckCircle2 size={30} className="text-emerald-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-widest text-white mb-2">
                    Enquiry Received
                  </h4>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Our team will call you within a few hours with pricing and availability.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
                >
                  Submit another request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      Client Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder:text-slate-700 focus:border-emerald-500 focus:bg-black/60 outline-none transition-all"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono text-sm select-none">
                        +91
                      </span>
                      <input
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 pl-14 py-3.5 text-sm text-white font-mono placeholder:text-slate-700 focus:border-emerald-500 focus:bg-black/60 outline-none transition-all"
                        placeholder="9XXXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Equipment Category
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      required
                      defaultValue=""
                      className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white outline-none appearance-none cursor-pointer focus:border-emerald-500 focus:bg-black/60 transition-all"
                    >
                      <option value="" disabled className="bg-slate-950 text-slate-500">
                        Select Equipment Type
                      </option>
                      <option className="bg-slate-950">Power Weeder / Tiller</option>
                      <option className="bg-slate-950">Brush Cutter</option>
                      <option className="bg-slate-950">Sprayer</option>
                      <option className="bg-slate-950">Water Pump</option>
                      <option className="bg-slate-950">Dairy Equipment</option>
                      <option className="bg-slate-950">Other / Spare Parts</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Requirement Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder:text-slate-700 focus:border-emerald-500 focus:bg-black/60 outline-none resize-none transition-all"
                    placeholder="Subsidy details, model preference, usage area, quantity..."
                  />
                </div>

                {status === "error" && (
                  <div className="px-4 py-3 rounded-sm border border-red-500/20 bg-red-950/20">
                    <p className="text-red-400 text-xs font-bold uppercase tracking-widest">
                      Submission failed — please call {SITE_CONFIG.phone} directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 font-black uppercase tracking-widest text-xs rounded-sm transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Get Official Quote"
                  )}
                </button>

                <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest">
                  No spam · Shared only with our sales team
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}