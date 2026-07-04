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
    // Form logic remains exactly the same
    setTimeout(() => setStatus("success"), 1000); // Mocked for UI, replace with your API call
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-brand-gray border-t border-gray-200">
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-brand-green font-black uppercase tracking-widest text-xs mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            Request an <span className="text-brand-green">Official Quote</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* LEFT COLUMN - Information & Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info card */}
            <div className="bg-white border-t-4 border-brand-green shadow-sm p-8 flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-gray-100 border border-gray-200">
                  <ShieldCheck size={16} className="text-brand-green" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-700">
                    Direct Dealership Pricing
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Get accurate pricing, subsidy guidance, and stock availability directly from our sales team. No middleman, no delay.
                </p>
              </div>

              <div className="space-y-5 pt-6 border-t border-gray-100">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gray-50 border border-gray-200 flex-shrink-0">
                    <MapPin size={18} className="text-brand-green" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">
                      Showroom
                    </p>
                    <p className="text-slate-800 text-sm font-medium leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gray-50 border border-gray-200 flex-shrink-0">
                    <Phone size={18} className="text-brand-green" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">
                      Sales Line
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-brand-green text-lg font-black hover:text-green-800 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP CARD */}
            <div className="border border-gray-200 overflow-hidden relative flex-1 min-h-[240px] group bg-white shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=12.950889,77.115981&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
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
            className="lg:col-span-3 bg-white border border-gray-200 shadow-sm p-8 md:p-12"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-20 h-20 rounded-full border-4 border-brand-green bg-green-50 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-brand-green" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-wide text-slate-900 mb-2">
                    Request Received
                  </h4>
                  <p className="text-slate-600 max-w-sm leading-relaxed">
                    Our sales team will contact you shortly with official pricing and stock availability.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-bold uppercase tracking-widest text-brand-green hover:text-green-800 transition-colors mt-4"
                >
                  Submit another request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Client Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full bg-gray-50 border border-gray-300 px-4 py-4 text-sm text-slate-900 placeholder:text-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm select-none">
                        +91
                      </span>
                      <input
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        className="w-full bg-gray-50 border border-gray-300 pl-14 pr-4 py-4 text-sm text-slate-900 font-bold placeholder:text-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                        placeholder="9XXXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Equipment Category
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      required
                      defaultValue=""
                      className="w-full bg-gray-50 border border-gray-300 px-4 py-4 text-sm text-slate-900 outline-none appearance-none cursor-pointer focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                    >
                      <option value="" disabled className="text-gray-400">Select Equipment Type</option>
                      <option>Power Weeder / Tiller</option>
                      <option>Brush Cutter</option>
                      <option>Sprayer</option>
                      <option>Water Pump</option>
                      <option>Dairy Equipment</option>
                      <option>Other / Spare Parts</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-green pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Requirement Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-300 px-4 py-4 text-sm text-slate-900 placeholder:text-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none resize-none transition-all"
                    placeholder="Subsidy details, model preference, usage area, quantity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-brand-yellow hover:bg-yellow-400 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed py-4 font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 shadow-sm mt-4"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Get Official Quote"
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}