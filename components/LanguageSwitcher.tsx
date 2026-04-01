"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es");

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Cambiar idioma"
      className={`
        fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center 
        rounded-full bg-white/80 backdrop-blur-md border border-mist-160/60
        shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md
        lg:absolute lg:right-6 lg:left-auto
      `}
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
