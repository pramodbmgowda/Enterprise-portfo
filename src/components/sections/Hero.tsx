"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section 
      id="home" 
      // Because the image is gone on mobile, we can safely lock the height to 100svh on ALL devices again!
      className="relative bg-white min-h-[100svh] flex flex-col justify-center border-b-8 border-brand-yellow overflow-hidden pt-20 lg:pt-0"
    >
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          
          {/* LEFT: Typography & Call to Actions */}
          {/* Added 'text-center lg:text-left' and 'items-center lg:items-start' to perfectly center the text on mobile */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            
            <div className="inline-flex items-center gap-3 mb-6 lg:mb-8">
              <div className="w-2.5 h-2.5 bg-brand-green"></div>
              <p className="uppercase tracking-widest text-slate-500 font-black text-[10px]">
                Authorized Dealership
              </p>
              <div className="w-2.5 h-2.5 bg-brand-green lg:hidden"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] text-slate-900 mb-6 lg:mb-8 uppercase tracking-tight">
              Built For The <br className="hidden lg:block" />
              <span className="text-brand-green">Hardest Soil.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg mb-8 lg:mb-10 font-medium mx-auto lg:mx-0">
              Stop losing yields to breakdowns. We supply robust agricultural equipment backed by local service and immediate on-ground support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
          {/* INDUSTRY STANDARD FIX: 'hidden lg:block' completely removes this entire block on screens smaller than a desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 relative">
            <div className="absolute top-0 right-0 bottom-0 left-16 bg-[#f4f4f4] border-t-4 border-l-4 border-gray-200 z-0"></div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green z-0"></div>

            <div className="relative z-10 aspect-square w-full max-w-lg mx-auto flex items-center justify-center p-8">
              <Image
                src="/pexels-dave-36033665.jpg"
                alt="Agricultural Machinery"
                fill
                priority
                sizes="50vw"
                className="object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}