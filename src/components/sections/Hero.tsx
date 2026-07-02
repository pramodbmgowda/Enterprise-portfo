"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section 
      id="home" 
      // THE FIX: pt-32 pb-16 gives mobile a natural scroll. lg:min-h-[100svh] locks it ONLY on desktop.
      className="relative bg-white pt-32 pb-16 lg:pt-0 lg:pb-0 lg:min-h-[100svh] flex flex-col justify-center border-b-8 border-brand-yellow overflow-hidden"
    >
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Generous gap-12 on mobile ensures the text and image don't crush together */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          
          {/* LEFT: Typography & Call to Actions */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-3 mb-6 lg:mb-8">
              <div className="w-2.5 h-2.5 bg-brand-green"></div>
              <p className="uppercase tracking-widest text-slate-500 font-black text-[10px]">
                Authorized Dealership
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] text-slate-900 mb-6 lg:mb-8 uppercase tracking-tight">
              Built For The <br />
              <span className="text-brand-green">Hardest Soil.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg mb-8 lg:mb-10 font-medium">
              Stop losing yields to breakdowns. We supply robust agricultural equipment backed by local service and immediate on-ground support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inventory"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-slate-900 px-6 py-4 lg:px-8 text-sm font-black uppercase tracking-wide hover:bg-[#e6c800] transition-colors shadow-none w-full sm:w-auto"
              >
                View Equipment
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-4 lg:px-8 text-sm font-black uppercase tracking-wide hover:bg-green-800 transition-colors shadow-none w-full sm:w-auto"
              >
                <MapPin size={18} strokeWidth={2.5} />
                Find Our Store
              </a>
            </div>
          </div>

          {/* RIGHT: Industrial Staging Area for Product Image */}
          <div className="w-full lg:w-1/2 relative mt-2 lg:mt-0">
            {/* The grey backdrop is pulled slightly right on mobile so it doesn't break the layout */}
            <div className="absolute top-0 right-[-24px] lg:right-0 bottom-0 left-4 md:left-16 bg-[#f4f4f4] border-t-4 border-l-4 border-gray-200 z-0"></div>
            
            {/* The Green Accent Block: visible on mobile, but scales down gracefully */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-green z-0 sm:w-24 sm:h-24 lg:w-32 lg:h-32 lg:-bottom-6 lg:-right-6"></div>

            {/* 
               THE SECRET SAUCE: 
               aspect-video (16:9) on mobile creates a wide, short cinematic shot.
               lg:aspect-square returns it to the massive box layout on desktop.
            */}
            <div className="relative z-10 aspect-video lg:aspect-square w-full max-w-lg mx-auto flex items-center justify-center p-3 sm:p-6 lg:p-8">
              <Image
                src="/pexels-dave-36033665.jpg"
                alt="Agricultural Machinery"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 50vw"
                className="object-cover border-[3px] lg:border-4 border-white shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}