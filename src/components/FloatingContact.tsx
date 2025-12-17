// src/components/FloatingContact.tsx
"use client";
import { MessageCircle, Phone } from 'lucide-react';

// 👇 CHANGE: remove "default". Use "export function"
export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="https://wa.me/919900000000" className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center">
        <MessageCircle size={28} />
      </a>
      <a href="tel:+919900000000" className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center">
        <Phone size={28} />
      </a>
    </div>
  );
}