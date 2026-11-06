import React, { useEffect } from 'react';
import { X, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import { DesignObject } from '../types';

interface QuickViewDrawerProps {
  object: DesignObject | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectStory: (id: string) => void;
  onOpenLightbox: (object: DesignObject) => void;
}

export const QuickViewDrawer: React.FC<QuickViewDrawerProps> = ({
  object,
  isOpen,
  onClose,
  onSelectStory,
  onOpenLightbox,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !object) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Semi-transparent dark ground */}
      <div 
        className="absolute inset-0 bg-[#181816]/75 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          className="w-screen max-w-lg bg-[#FAF8F5] border-l border-stone flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-stone flex items-center justify-between sticky top-0 bg-[#FAF8F5] z-10">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                {object.code} / {object.categoryLabel}
              </span>
              <h2 id="drawer-title" className="font-serif text-2xl font-normal text-ink">
                {object.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-stone text-ink hover:bg-stone transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 md:p-8 space-y-8 flex-1">
            {/* Image Preview & Zoom Action */}
            <div className="relative group bg-[#EAE5DC] overflow-hidden">
              <img
                src={object.imageUrl}
                alt={object.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => onOpenLightbox(object)}
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-ground border border-stone text-[11px] font-sans uppercase tracking-wider flex items-center space-x-1.5 hover:bg-ink hover:text-ground transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Image</span>
              </button>
            </div>

            {/* Curatorial Summary */}
            <div className="space-y-3">
              <h3 className="font-sans text-[11px] uppercase tracking-widest text-taupe">
                Curatorial Thesis
              </h3>
              <p className="text-[14px] leading-relaxed text-ink-medium font-light">
                {object.summary}
              </p>
            </div>

            {/* Materials Breakdown */}
            <div className="space-y-4">
              <h3 className="font-sans text-[11px] uppercase tracking-widest text-taupe">
                Material Composition
              </h3>
              <div className="space-y-3">
                {object.materials.map((m, idx) => (
                  <div key={idx} className="p-3 bg-linen border border-stone/60 space-y-1">
                    <div className="flex justify-between items-center text-xs font-semibold text-ink">
                      <span>{m.name}</span>
                    </div>
                    <p className="text-xs text-ink-medium font-light">{m.detail}</p>
                    <p className="text-[11px] font-sans text-taupe">Tactility: {m.tactility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Maker Spotlight */}
            <div className="p-4 bg-[#F2ECE3] border border-stone space-y-2">
              <div className="flex items-center space-x-2 text-xs font-sans text-taupe">
                <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
                <span>ARCHIVAL MAKER FILE</span>
              </div>
              <h4 className="font-serif text-lg font-medium text-ink">{object.maker.name}</h4>
              <p className="text-xs text-taupe font-sans">{object.maker.studio} — {object.maker.location}</p>
              <p className="text-xs text-ink-medium italic pt-1 font-serif">
                "{object.maker.philosophy}"
              </p>
            </div>

            {/* Specifications Quick Grid */}
            <div className="space-y-2">
              <h3 className="font-sans text-[11px] uppercase tracking-widest text-taupe">
                Technical Blueprint
              </h3>
              <div className="text-xs font-sans space-y-1.5 border-t border-stone pt-2">
                <div className="flex justify-between py-1 border-b border-stone/40">
                  <span className="text-taupe">Dimensions</span>
                  <span className="text-ink">{object.dimensions.metric}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone/40">
                  <span className="text-taupe">Dry Weight</span>
                  <span className="text-ink">{object.dimensions.weight}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone/40">
                  <span className="text-taupe">Craft Edition</span>
                  <span className="text-ink text-right max-w-[240px] truncate">{object.edition}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-6 md:p-8 border-t border-stone bg-[#FAF8F5] sticky bottom-0 z-10">
            <button
              onClick={() => {
                onClose();
                onSelectStory(object.id);
              }}
              className="w-full py-4 px-6 bg-ink text-ground hover:bg-taupe-dark text-xs uppercase tracking-widest font-sans flex items-center justify-center space-x-2 transition-colors cursor-pointer group"
            >
              <span>Explore Complete Monograph</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
