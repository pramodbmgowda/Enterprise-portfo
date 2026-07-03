"use client";
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { OurBrand } from '@/components/sections/OurBrand';
import { Services } from '@/components/sections/Services';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { Owner } from '@/components/sections/Owner';
import { LeadCapture } from '@/components/sections/LeadCapture';
import { FloatingActions } from '@/components/ui/FloatingActions';
import { FAQ } from '@/components/sections/FAQ';
import { AboutUs } from '@/components/sections/AboutUs';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-slate-950 selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <OurBrand />
      <TrustStrip />
      <Services />
      <BentoGrid />
      <FAQ /> 
      <LeadCapture />
      <FloatingActions />
    </main>
  );
}