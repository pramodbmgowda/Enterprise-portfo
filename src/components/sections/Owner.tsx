"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Owner() {
  const commitments = [
    "Uncompromising Equipment Quality",
    "Direct-to-Farm Technical Support",
    "Transparent Dealership Pricing"
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Brutalist Image Staging */}
          <div className="w-full lg:w-2/5 relative">
            <div className="absolute -inset-4 bg-[#f4f4f4] border border-gray-200 z-0"></div>
            <div className="relative z-10 aspect-[4/5] w-full bg-gray-200 border-4 border-white shadow-md overflow-hidden">
              {/* Replace with actual owner/team photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                  Leadership Portrait
                </span>
              </div>
            </div>
            {/* Structural Accent */}
            <div className="absolute bottom-4 -right-8 z-20 w-32 h-32 bg-brand-yellow flex items-center justify-center p-6 border-4 border-white shadow-sm">
              <span className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight text-center">
                Built To Last
              </span>
            </div>
          </div>

          {/* Corporate Profile Content */}
          <div className="w-full lg:w-3/5 lg:pl-12">
            <div className="mb-8">
              <span className="text-brand-green font-black uppercase tracking-widest text-xs mb-3 block">
                Leadership
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-6">
                A Guarantee of <span className="text-brand-green">Reliability.</span>
              </h2>
              <div className="h-1 w-24 bg-brand-yellow mb-8"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              "We understand that in the agricultural sector, machinery failure isn't just an inconvenience—it's a threat to your livelihood. That is why GreenRider Enterprises operates on a foundation of absolute mechanical reliability."
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-10">
              Our commitment goes beyond the sale. We have engineered an infrastructure that guarantees rapid field service, massive local parts availability, and honest pricing. When you partner with us, you are backed by a team that works as hard as the machinery we sell.
            </p>

            <div className="space-y-4 mb-10">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-green" strokeWidth={2.5} />
                  <span className="text-sm font-black uppercase tracking-widest text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                PRAMOD B M
              </h4>
              <p className="text-sm font-bold text-brand-green uppercase tracking-widest mt-1">
                Founder & Director
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}