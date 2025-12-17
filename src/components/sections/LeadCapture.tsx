"use client";
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Phone, MapPin, Clock, ChevronDown } from 'lucide-react';

export function LeadCapture() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative border-t border-white/5">
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 border border-white/10 bg-slate-900/50 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm">
          
          {/* LEFT: INFO PANEL */}
          <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between bg-slate-950/50">
             <div>
               <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-8 rounded-sm">
                 Get Your Official Quote
               </div>
               <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-6">
                 Request <br/><span className="text-slate-600">Pricing</span>
               </h3>
               <p className="text-slate-400 text-lg leading-relaxed mb-12 border-l-2 border-amber-500/50 pl-6">
                 Guaranteed lowest market rates for genuine machinery. No hidden costs.
               </p>
             </div>

             <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                   <div className="p-3 bg-slate-900 border border-white/10 rounded-lg group-hover:border-amber-500/50 transition-colors">
                      <MapPin className="text-amber-500" size={20} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-xs mb-1">Showroom Location</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Bettahalli, Hutridurga,<br/>Kunigal, Karnataka</p>
                   </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                   <div className="p-3 bg-slate-900 border border-white/10 rounded-lg group-hover:border-amber-500/50 transition-colors">
                      <Phone className="text-amber-500" size={20} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-xs mb-1">Sales Support</h4>
                      <p className="text-slate-400 text-sm font-mono">+91 99000 00000</p>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="p-10 md:p-16 bg-slate-900/30">
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-950 border border-slate-800 p-4 text-white font-bold text-sm focus:border-amber-500 focus:outline-none transition-colors rounded-sm placeholder:text-slate-700" 
                        placeholder="ENTER NAME" 
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mobile Contact</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-slate-500 font-mono text-sm border-r border-slate-800 pr-3 select-none">+91</span>
                        <input 
                          type="tel" 
                          required 
                          pattern="[0-9]{10}"
                          className="w-full bg-slate-950 border border-slate-800 p-4 pl-16 text-white font-bold text-sm font-mono focus:border-amber-500 focus:outline-none transition-colors rounded-sm placeholder:text-slate-700" 
                          placeholder="99000..." 
                        />
                      </div>
                   </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Machinery Category</label>
                   <div className="relative">
                     <select 
                        required
                        defaultValue=""
                        className="w-full bg-slate-950 border border-slate-800 p-4 text-white font-bold text-sm focus:border-amber-500 focus:outline-none appearance-none cursor-pointer rounded-sm invalid:text-slate-700"
                     >
                        <option value="" disabled>SELECT EQUIPMENT TYPE...</option>
                        <option value="weeder">Power Weeder / Tiller</option>
                        <option value="cutter">Brush Cutter</option>
                        <option value="sprayer">Sprayer</option>
                        <option value="pump">Water Pump</option>
                        <option value="other">Other / Spare Parts</option>
                     </select>
                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Details</label>
                   <textarea 
                      rows={4} 
                      className="w-full bg-slate-950 border border-slate-800 p-4 text-white font-bold text-sm focus:border-amber-500 focus:outline-none placeholder:text-slate-700 resize-none rounded-sm" 
                      placeholder="Enter subsidy requirements or specific model details..."
                   ></textarea>
                </div>
                
                <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 py-5 font-black uppercase tracking-widest transition-all shadow-lg shadow-amber-900/20 mt-2 rounded-sm active:translate-y-0.5">
                   Generate Quote
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}