import React, { useEffect } from 'react';
import { X, Sparkles, Maximize2 } from 'lucide-react';
import { DesignObject } from '../types';

interface LightboxModalProps {
  object: DesignObject | null;
  onClose: () => void;
  onViewStory?: (id: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ object, onClose, onViewStory }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (object) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [object, onClose]);

  if (!object) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#181816]/95"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div 
        className="relative max-w-5xl w-full bg-[#FAF8F5] border border-stone max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 bg-ground border border-stone text-ink hover:bg-stone transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-ink"
          aria-label="Close visual inspector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Canvas */}
        <div className="md:w-3/5 bg-[#EBE7DF] relative flex items-center justify-center min-h-[360px] md:min-h-[550px] p-6">
          <img
            src={object.imageUrl}
            alt={object.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
          {object.isAiGenerated && (
            <div className="absolute bottom-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 bg-ink text-ground text-[10px] font-sans tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-terracotta" />
              <span>Original AI-Generated Still Life</span>
            </div>
          )}
        </div>

        {/* Object & Photographic Specification Sidebar */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-sans text-taupe border-b border-stone pb-3">
              <span>{object.code}</span>
              <span className="uppercase">{object.categoryLabel}</span>
            </div>

            <div>
              <h3 id="lightbox-title" className="font-serif text-2xl md:text-3xl font-normal text-ink leading-tight">
                {object.title}
              </h3>
              <p className="font-sans text-xs text-taupe mt-1">
                {object.subtitle}
              </p>
            </div>

            <p className="text-sm font-light text-ink-medium leading-relaxed">
              {object.summary}
            </p>

            {/* Curatorial & Photographic Specs */}
            <div className="space-y-2 pt-2">
              <span className="font-sans text-[10px] uppercase tracking-widest text-taupe block">
                Archival Specifications
              </span>
              <div className="text-xs space-y-1.5 font-sans text-ink-medium border-t border-stone pt-2">
                <div className="flex justify-between">
                  <span className="text-taupe">Maker:</span>
                  <span className="font-medium text-ink">{object.maker.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Origin:</span>
                  <span className="font-medium text-ink text-right">{object.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Dimensions:</span>
                  <span className="font-medium text-ink">{object.dimensions.metric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Weight:</span>
                  <span className="font-medium text-ink">{object.dimensions.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Credit:</span>
                  <span className="font-medium text-ink text-[10px]">{object.imageCredit}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-stone">
            {onViewStory && (
              <button
                onClick={() => {
                  onClose();
                  onViewStory(object.id);
                }}
                className="w-full py-3.5 px-4 bg-ink text-ground hover:bg-taupe-dark text-xs uppercase tracking-widest font-sans flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Read Full Monograph Story</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
