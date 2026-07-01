"use client";
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { OurBrand } from '@/components/sections/OurBrand';
import { Services } from '@/components/sections/Services';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { Owner } from '@/components/sections/Owner';
import { LeadCapture } from '@/components/sections/LeadCapture';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/ui/FloatingActions';


export default function Home() {
  return (
    <main className="bg-slate-950 selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <TrustStrip />
      <OurBrand />
      <Services />
      <BentoGrid />

      <Owner />
      <LeadCapture />
      <Footer />
      <FloatingActions />
    </main>
  );
}