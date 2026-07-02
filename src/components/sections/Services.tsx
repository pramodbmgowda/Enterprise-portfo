"use client";

import { Wrench, Settings, ShieldCheck } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "Warranty",
      title: "Genuine Warranty",
      desc: "Every machine comes with valid manufacturer warranties. We guarantee no grey-market risk and full OEM support.",
      icon: ShieldCheck,
    },
    {
      id: "Repairs",
      title: "Expert Repairs",
      desc: "When the rain hits, you can't wait days for a mechanic. Our factory-trained engineers prioritize emergency field repairs.",
      icon: Wrench,
    },
    {
      id: "Parts",
      title: "Spare Parts Hub",
      desc: "We stock thousands of OEM replacement parts locally. Minimize downtime with our rapid-dispatch inventory.",
      icon: Settings,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f4f4f4]">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Parts & Service
          </h2>
          <div className="h-1 w-24 bg-brand-yellow mb-6"></div>
          <p className="text-slate-700 max-w-2xl text-lg">
            Maximizing your uptime is our priority. Rely on GreenRider for certified technicians and genuine OEM parts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white border border-gray-200 p-8 flex flex-col group hover:border-brand-green transition-colors">
                <div className="mb-6 bg-[#f4f4f4] w-16 h-16 flex items-center justify-center rounded-sm">
                  <Icon size={32} className="text-brand-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}