import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-[100svh] bg-[#f4f4f4] pt-32 pb-24">
      <div className="mx-auto max-w-screen-md w-full px-6">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 hover:text-brand-green transition-colors"
        >
          <ChevronLeft size={14} /> Back to Home
        </Link>

        <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <div className="h-1 w-16 bg-brand-green mb-8"></div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 font-medium mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
            <p className="text-slate-600 mb-4">
              At GreenRider Enterprises, we take your privacy seriously. This policy dictates how we collect, use, and protect your personal information when you interact with our dealership.
            </p>
            <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 mt-8 mb-4">Information Collection</h2>
            <p className="text-slate-600 mb-4">
              We collect information you provide directly to us when you request a quote, inquire about machinery, or contact our sales team. This may include your name, phone number, and farming requirements.
            </p>
            {/* Add more legal text here later as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}