"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/inventory";

export function Hero() {
  return (
    <section 
      id="home" 
      // THE FIX: min-h-[100svh] ensures it takes up 100% of the screen height. 
      // flex-col and justify-center keep the content perfectly centered.
      className="relative bg-white min-h-[100svh] flex flex-col justify-center pt-24 border-b-8 border-brand-yellow overflow-hidden"
    >
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT: Typography & Call to Actions */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-brand-green"></div>
              <p className="uppercase tracking-widest text-slate-500 font-black text-[10px]">
                Authorized Dealership
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] text-slate-900 mb-8 uppercase tracking-tight">
              Built For The <br />
              <span className="text-brand-green">Hardest Soil.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
              Stop losing yields to breakdowns. We supply robust agricultural equipment backed by local service and immediate on-ground support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inventory"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-slate-900 px-8 py-4 font-black uppercase tracking-wide hover:bg-[#e6c800] transition-colors shadow-none"
              >
                View Equipment
                <ArrowRight size={20} strokeWidth={2.5} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 font-black uppercase tracking-wide hover:bg-green-800 transition-colors shadow-none"
              >
                <MapPin size={20} strokeWidth={2.5} />
                Find Our Store
              </a>
            </div>
          </div>

          {/* RIGHT: Industrial Staging Area for Product Image */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            {/* The Deere-style Grey Square Backdrop */}
            <div className="absolute top-0 right-0 bottom-0 left-8 md:left-16 bg-[#f4f4f4] border-t-4 border-l-4 border-gray-200 z-0"></div>
            
            {/* The Green Accent Block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green z-0 hidden md:block"></div>

            {/* Product Image Stage */}
            <div className="relative z-10 aspect-square w-full max-w-lg mx-auto flex items-center justify-center p-8">
              <Image
                src="/pexels-dave-36033665.jpg"
                alt="Agricultural Machinery"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}