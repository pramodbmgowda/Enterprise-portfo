"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Simplified context since we aren't using heavy translations anymore
// But keeping it to prevent breaking existing hooks
const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  // Mock translation object to prevent errors in legacy components
  const t = {
    hero: { label: "Dealer", title: "Heavy Duty", desc: "Best machines", cta: "View" },
    brands: { title: "Brands" }
  };

  if (!mounted) return <div className="h-screen bg-slate-950" />;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}