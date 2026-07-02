"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const faqs = [
    {
      question: "Do you provide on-site repair services?",
      answer: "Yes. We understand that downtime costs money. Our factory-trained technicians provide rapid on-site emergency field repairs during peak seasons to get your machinery running immediately."
    },
    {
      question: "Are your machines eligible for government subsidies?",
      answer: "Absolutely. We provide complete documentation and guidance for the Sub-Mission on Agricultural Mechanization (SMAM) and other state-level subsidy schemes to help you claim your benefits."
    },
    {
      question: "Do you stock original spare parts?",
      answer: "Yes, we maintain a massive local inventory of OEM (Original Equipment Manufacturer) replacement parts for all the brands we carry. This ensures you never have to wait weeks for shipping."
    },
    {
      question: "What is the warranty period on new equipment?",
      answer: "Warranty periods vary by manufacturer and equipment type, typically ranging from 6 months to 2 years. Because we are an authorized dealer, every machine comes with a fully validated, genuine warranty."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#f4f4f4] border-t border-gray-200">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row gap-16">
        
        {/* Left Side Header */}
        <div className="lg:w-1/3">
          <div className="inline-block bg-brand-yellow px-3 py-1 mb-6 border border-yellow-500">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
              Support Center
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Common <br/>
            <span className="text-brand-green">Inquiries.</span>
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Everything you need to know about our sales process, warranties, and after-sales field support.
          </p>
        </div>

        {/* Right Side Accordion */}
        <div className="lg:w-2/3 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`bg-white border transition-colors duration-200 ${
                  isOpen ? "border-brand-green" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
                >
                  <span className={`text-lg md:text-xl font-black uppercase tracking-tight pr-8 ${
                    isOpen ? "text-brand-green" : "text-slate-900"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-colors ${
                    isOpen ? "border-brand-green bg-brand-green text-white" : "border-gray-300 text-slate-400"
                  }`}>
                    {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 text-slate-600 leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}