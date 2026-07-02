"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section 
      id="home" 
      // Force exactly 100svh on ALL devices. 
      // pt-24 clears your 80px fixed Navbar so nothing gets hidden underneath it.
      className="relative bg-white min-h-[100svh] flex flex-col justify-center pt-24 pb-8 lg:pt-0 lg:pb-0 border-b-8 border-brand-yellow overflow-hidden"
    >
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Tighter gap on mobile so it fits in the screen */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          
          {/* LEFT: Typography & Call to Actions */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-4 lg:mb-8">
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-brand-green"></div>
              <p className="uppercase tracking-widest text-slate-500 font-black text-[9px] lg:text-[10px]">
                Authorized Dealership
              </p>
            </div>

            {/* Scaled down heading for mobile to prevent wrapping into too many lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.05] text-slate-900 mb-4 lg:mb-8 uppercase tracking-tight">
              Built For The <br />
              <span className="text-brand-green">Hardest Soil.</span>
            </h1>

            {/* Smaller subtext on mobile */}
            <p className="text-sm lg:text-xl text-slate-600 leading-relaxed max-w-lg mb-6 lg:mb-10 font-medium">
              Stop losing yields to breakdowns. We supply robust agricultural equipment backed by local service and immediate on-ground support.
            </p>

            {/* Buttons stack and shrink on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a
                href="#inventory"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-slate-900 px-6 py-3 lg:px-8 lg:py-4 text-xs lg:text-sm font-black uppercase tracking-wide hover:bg-[#e6c800] transition-colors shadow-none"
              >
                View Equipment
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 lg:px-8 lg:py-4 text-xs lg:text-sm font-black uppercase tracking-wide hover:bg-green-800 transition-colors shadow-none"
              >
                <MapPin size={18} strokeWidth={2.5} />
                Find Our Store
              </a>
            </div>
          </div>

          {/* RIGHT: Industrial Staging Area for Product Image */}
          <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
            {/* The Deere-style Grey Square Backdrop */}
            <div className="absolute top-0 right-[-20px] lg:right-0 bottom-0 left-4 md:left-16 bg-[#f4f4f4] border-t-4 border-l-4 border-gray-200 z-0"></div>
            
            {/* The Green Accent Block */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-16 h-16 lg:w-32 lg:h-32 bg-brand-green z-0 hidden sm:block"></div>

            {/* 
              THE SECRET FIX: aspect-[21/9] on mobile makes the image a wide, short cinematic banner. 
              This prevents it from pushing the content down and breaking the 100svh lock.
            */}
            <div className="relative z-10 aspect-[21/9] sm:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto flex items-center justify-center p-3 lg:p-8">
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