"use client";

import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: PurchaseModalProps) {
  const { content } = useLanguage();

  if (!isOpen) return null;

  // Render on client side only to avoid hydration issues with createPortal
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-mist-160/60 bg-white/95 p-8 shadow-2xl ring-1 ring-white/50 backdrop-blur-xl sm:p-10 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute right-4 top-4 rounded-full p-2 text-ink-400 transition-colors hover:bg-mist-40 hover:text-ink-900"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-rose-220/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-260">
              Colecciones
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-ink-900 sm:text-3xl">
              Selecciona tu variante
            </h3>
            <p className="mt-3 text-sm text-ink-500">
              Elige el color que resuene con tu espacio. Pago seguro gestionado por Amazon España.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {content.colorVariants.map((variant) => {
              if (!variant.link || variant.name === "Colección" || variant.name === "Collection") return null;
              
              return (
                <a
                  key={variant.name}
                  href={variant.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-mist-160/60 bg-mist-20/50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-rose-220 hover:bg-white hover:shadow-lg"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                     <Image 
                       src={variant.image} 
                       alt={variant.name} 
                       fill 
                       className="object-cover"
                     />
                  </div>
                  <div className="flex flex-col text-left">
                     <span className="font-bold text-ink-900">{variant.name}</span>
                     <span className="text-xs font-semibold uppercase tracking-wider text-rose-260">
                       39,99 € • Comprar ↗
                     </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
