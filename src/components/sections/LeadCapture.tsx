"use client";

import { Phone, MapPin, ChevronDown, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/data/inventory";

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
    <section id="contact" className="relative py-32 bg-slate-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Architectural Main Grid */}
        <div className="grid lg:grid-cols-12 border border-white/10">

          {/* LEFT: INFO BLOCK */}
          <div className="lg:col-span-5 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between bg-white/[0.02]">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-1.5 h-1.5 bg-emerald-500" />
                <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                  Direct Procurement
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] mb-8">
                Request <br />
                <span className="text-slate-600">Quotation</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Accurate pricing, subsidy documentation, and technical specs provided directly by our engineering sales team.
              </p>
            </div>

            <div className="mt-16 space-y-8">
              <div className="flex gap-6 items-start">
                <MapPin className="text-emerald-500 shrink-0" size={18} strokeWidth={1.5} />
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest">{SITE_CONFIG.address}</p>
              </div>
              <div className="flex gap-6 items-start">
                <Phone className="text-emerald-500 shrink-0" size={18} strokeWidth={1.5} />
                <p className="text-xs text-slate-500 font-mono tracking-widest">{SITE_CONFIG.phone}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7 p-10 md:p-16">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle2 size={48} className="text-emerald-500 mb-6" strokeWidth={1} />
                <h4 className="text-lg font-black uppercase tracking-widest">Enquiry Lodged</h4>
                <p className="text-slate-500 text-sm mt-2">A technical consultant will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Client Name</label>
                    <input name="name" required className="w-full bg-transparent border-b border-white/20 p-2 text-sm focus:border-emerald-500 outline-none transition-colors" placeholder="NAME" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Mobile</label>
                    <input name="phone" required pattern="[0-9]{10}" className="w-full bg-transparent border-b border-white/20 p-2 text-sm font-mono focus:border-emerald-500 outline-none transition-colors" placeholder="9XXXXXXXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Equipment Category</label>
                  <div className="relative">
                    <select name="category" required defaultValue="" className="w-full bg-transparent border-b border-white/20 p-2 text-sm outline-none appearance-none cursor-pointer">
                      <option value="" disabled>SELECT FROM LIST</option>
                      <option>Power Weeder / Tiller</option><option>Brush Cutter</option><option>Sprayer</option><option>Water Pump</option><option>Dairy Equipment</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-0 top-3 text-emerald-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Requirement Details</label>
                  <textarea name="message" rows={3} className="w-full bg-transparent border-b border-white/20 p-2 text-sm focus:border-emerald-500 outline-none resize-none" placeholder="Subsidy, usage area, model preference..." />
                </div>

                <button type="submit" disabled={status === "loading"} className="w-full border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white py-4 font-black uppercase tracking-[0.2em] text-[11px] transition-all flex items-center justify-center gap-3">
                  {status === "loading" ? <Loader2 size={14} className="animate-spin" /> : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}