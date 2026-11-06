import React, { useMemo } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  Share2, 
  Printer 
} from 'lucide-react';
import { DESIGN_OBJECTS } from '../data/objectsData';
import { DesignObject } from '../types';

interface StoryPageProps {
  objectId: string;
  onNavigate: (route: string) => void;
  onOpenLightbox: (object: DesignObject) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({
  objectId,
  onNavigate,
  onOpenLightbox,
}) => {
  const currentObject = useMemo(() => {
    return DESIGN_OBJECTS.find((o) => o.id === objectId) || DESIGN_OBJECTS[0];
  }, [objectId]);

  const currentIndex = DESIGN_OBJECTS.findIndex((o) => o.id === currentObject.id);
  const prevObject = DESIGN_OBJECTS[(currentIndex - 1 + DESIGN_OBJECTS.length) % DESIGN_OBJECTS.length];
  const nextObject = DESIGN_OBJECTS[(currentIndex + 1) % DESIGN_OBJECTS.length];

  const relatedObjects = useMemo(() => {
    return currentObject.relatedIds
      .map((id) => DESIGN_OBJECTS.find((o) => o.id === id))
      .filter((o): o is DesignObject => Boolean(o));
  }, [currentObject]);

  return (
    <div className="pt-24 md:pt-28 space-y-16 md:space-y-24 pb-28">
      {/* 1. Monograph Navigation Breadcrumbs & Story Switcher */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone pb-6 text-xs font-sans text-taupe">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('objects')}
              className="hover:text-ink transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>REGISTRY INDEX</span>
            </button>
            <span>/</span>
            <span className="uppercase">{currentObject.categoryLabel}</span>
            <span>/</span>
            <span className="text-ink font-semibold">{currentObject.code}</span>
          </div>

          {/* Quick Object Jumper Selector */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
            <label htmlFor="object-selector" className="text-[11px] text-taupe uppercase">
              Monograph:
            </label>
            <select
              id="object-selector"
              value={currentObject.id}
              onChange={(e) => onNavigate(`story/${e.target.value}`)}
              className="bg-linen border border-stone px-3 py-1.5 text-xs text-ink font-sans focus:outline-none focus:border-ink cursor-pointer"
            >
              {DESIGN_OBJECTS.map((obj) => (
                <option key={obj.id} value={obj.id}>
                  {obj.code} — {obj.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 2. Hero Headline & Object Title */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-3 text-xs font-sans text-taupe">
              <span className="px-2 py-0.5 bg-linen border border-stone text-ink">
                {currentObject.code}
              </span>
              <span>{currentObject.year} EDITION</span>
              <span>•</span>
              <span>{currentObject.origin}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-ink tracking-tight leading-[1.04]">
              {currentObject.title}
            </h1>
            <p className="font-sans text-lg sm:text-xl text-taupe-dark font-light max-w-2xl leading-relaxed">
              {currentObject.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right space-y-2">
            <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
              Manufacture Classification
            </span>
            <p className="text-sm font-sans text-ink">
              {currentObject.edition}
            </p>
            <div className="flex lg:justify-end items-center space-x-3 pt-2 text-xs font-sans text-taupe">
              <button
                onClick={() => window.print()}
                className="hover:text-ink flex items-center space-x-1 cursor-pointer"
                title="Print monograph"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT</span>
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Monograph permalink copied to clipboard.');
                }}
                className="hover:text-ink flex items-center space-x-1 cursor-pointer"
                title="Copy monograph link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>SHARE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Monumental Hero Still-Life Frame with Photography Metadata */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border border-stone bg-[#F3EFEA] overflow-hidden">
          <div 
            className="editorial-image-frame relative cursor-pointer"
            onClick={() => onOpenLightbox(currentObject)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onOpenLightbox(currentObject); }}
            aria-label={`Inspect ${currentObject.title} photography in high resolution`}
          >
            <img
              src={currentObject.imageUrl}
              alt={currentObject.title}
              className="w-full h-[450px] sm:h-[620px] lg:h-[720px] object-cover"
            />

            {/* Badge */}
            {currentObject.isAiGenerated ? (
              <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3 py-1.5 bg-ink text-ground text-[10px] font-sans uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>Original Studio Image-Generator Asset</span>
              </div>
            ) : (
              <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1.5 bg-ground border border-stone text-ink text-[10px] font-sans uppercase tracking-widest">
                <span>Curated Archival Selection</span>
              </div>
            )}

            {/* Inspect Overlay Trigger */}
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <span className="px-4 py-2 bg-ground border border-stone text-xs font-sans uppercase tracking-wider text-ink flex items-center space-x-2 hover:bg-ink hover:text-ground transition-colors">
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Studio Still Life</span>
              </span>
            </div>
          </div>

          {/* Photographic Metadata Strip */}
          <div className="p-4 sm:p-6 bg-ground border-t border-stone grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans text-taupe">
            <div>
              <span className="block text-[10px] uppercase text-taupe/80">Photographic Style</span>
              <span className="text-ink font-medium">Studio Still Life / North Light</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-taupe/80">Surface Focus</span>
              <span className="text-ink font-medium">{currentObject.materials[0].name}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-taupe/80">Aspect Composition</span>
              <span className="text-ink font-medium">Controlled Studio Plinth</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-taupe/80">Curatorial Credit</span>
              <span className="text-ink font-medium truncate block">{currentObject.imageCredit}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curatorial Synthesis & Specifications Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Curatorial Synthesis & Design History */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                01 / Curatorial Synthesis
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-ink font-light leading-snug">
                {currentObject.summary}
              </p>
            </div>

            <div className="space-y-4 border-t border-stone pt-8">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                02 / Historical Antecedents & Evolution
              </span>
              <p className="font-sans text-[15px] sm:text-[16px] text-ink-medium leading-relaxed font-light">
                {currentObject.designHistory}
              </p>
            </div>

            {/* Deep Fictional Maker Profile */}
            <div className="bg-linen border border-stone p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-sans text-taupe">
                <ShieldCheck className="w-4 h-4 text-terracotta" />
                <span>STUDIO PROVENANCE / FICTIONAL MAKER FILE</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-ink font-normal">
                  {currentObject.maker.name}
                </h3>
                <p className="text-xs font-sans text-taupe">
                  {currentObject.maker.studio} — Est. {currentObject.maker.yearEstablished} ({currentObject.maker.location})
                </p>
                <p className="text-xs font-sans text-ink-light uppercase">
                  Discipline: {currentObject.maker.discipline}
                </p>
              </div>

              <blockquote className="border-l-2 border-terracotta pl-4 italic font-serif text-lg text-ink">
                "{currentObject.maker.philosophy}"
              </blockquote>

              <p className="text-xs font-sans text-ink-medium leading-relaxed font-light pt-2">
                {currentObject.maker.bio}
              </p>
            </div>
          </div>

          {/* Right Column: Technical Blueprint & Material Ecology */}
          <div className="lg:col-span-5 space-y-8">
            {/* Technical Specifications Table */}
            <div className="border border-stone bg-ground p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-stone pb-3">
                <span className="font-sans text-[11px] uppercase tracking-widest text-taupe">
                  Technical Blueprint
                </span>
                <span className="font-sans text-[10px] text-taupe">TOLERANCE ±0.2MM</span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between py-1.5 border-b border-stone/50">
                  <span className="text-taupe">Metric Dimensions</span>
                  <span className="text-ink font-medium">{currentObject.dimensions.metric}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone/50">
                  <span className="text-taupe">Imperial</span>
                  <span className="text-ink font-medium">{currentObject.dimensions.imperial}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone/50">
                  <span className="text-taupe">Total Mass</span>
                  <span className="text-ink font-medium">{currentObject.dimensions.weight}</span>
                </div>
                {currentObject.specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-stone/50">
                    <span className="text-taupe">{spec.label}</span>
                    <span className="text-ink font-medium text-right max-w-[200px]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Ecology Cards */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                Material Ecology ({currentObject.materials.length} Elements)
              </span>

              <div className="space-y-3">
                {currentObject.materials.map((mat, idx) => (
                  <div key={idx} className="border border-stone bg-ground p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-semibold text-ink">{mat.name}</span>
                      <span className="text-taupe text-[10px]">RAW SPEC</span>
                    </div>
                    <p className="text-xs text-ink-medium font-light">
                      {mat.detail}
                    </p>
                    <div className="pt-2 border-t border-stone/40 text-[11px] font-sans space-y-0.5">
                      <p className="text-taupe">
                        <span className="text-ink font-medium">Sourcing:</span> {mat.sourcing}
                      </p>
                      <p className="text-taupe">
                        <span className="text-ink font-medium">Tactile Response:</span> {mat.tactility}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Three-Chapter Longform Editorial Narrative */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="space-y-4 text-center">
          <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
            Longform Monograph Essay
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal">
            The Physics of Daily Utility
          </h2>
        </div>

        {/* Chapter 1 */}
        <article className="space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-ink">
            {currentObject.narrative.chapter1Title}
          </h3>
          <p className="font-sans text-[16px] sm:text-[17px] text-ink leading-relaxed font-light drop-cap">
            {currentObject.narrative.chapter1Text}
          </p>
        </article>

        {/* Chapter 2 */}
        <article className="space-y-4 border-t border-stone pt-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-ink">
            {currentObject.narrative.chapter2Title}
          </h3>
          <p className="font-sans text-[16px] sm:text-[17px] text-ink-medium leading-relaxed font-light">
            {currentObject.narrative.chapter2Text}
          </p>
        </article>

        {/* Editorial Pullquote */}
        <div className="my-12 py-10 px-8 sm:px-12 bg-linen border-y border-stone text-center space-y-4">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-ink font-light leading-snug max-w-2xl mx-auto">
            "{currentObject.narrative.pullQuote.text}"
          </p>
          <div className="text-xs font-sans text-taupe space-y-0.5">
            <span className="block text-ink font-medium">{currentObject.narrative.pullQuote.attribution}</span>
            <span>{currentObject.narrative.pullQuote.title}</span>
          </div>
        </div>

        {/* Chapter 3 */}
        <article className="space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-ink">
            {currentObject.narrative.chapter3Title}
          </h3>
          <p className="font-sans text-[16px] sm:text-[17px] text-ink-medium leading-relaxed font-light">
            {currentObject.narrative.chapter3Text}
          </p>
        </article>
      </section>

      {/* 6. Previous / Next Object Pagination */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-stone pt-10">
          {/* Previous Object */}
          <button
            onClick={() => onNavigate(`story/${prevObject.id}`)}
            className="p-6 border border-stone bg-ground hover:bg-linen text-left transition-colors flex items-center justify-between cursor-pointer group"
          >
            <div className="space-y-1">
              <span className="font-sans text-[10px] uppercase tracking-wider text-taupe block flex items-center space-x-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS MONOGRAPH</span>
              </span>
              <h4 className="font-serif text-xl text-ink group-hover:text-taupe-dark transition-colors">
                {prevObject.title}
              </h4>
              <p className="text-xs font-sans text-taupe">{prevObject.code} / {prevObject.categoryLabel}</p>
            </div>
            <img
              src={prevObject.imageUrl}
              alt={prevObject.title}
              className="w-16 h-16 object-cover border border-stone hidden sm:block"
            />
          </button>

          {/* Next Object */}
          <button
            onClick={() => onNavigate(`story/${nextObject.id}`)}
            className="p-6 border border-stone bg-ground hover:bg-linen text-right transition-colors flex items-center justify-between cursor-pointer group"
          >
            <img
              src={nextObject.imageUrl}
              alt={nextObject.title}
              className="w-16 h-16 object-cover border border-stone hidden sm:block"
            />
            <div className="space-y-1 ml-auto">
              <span className="font-sans text-[10px] uppercase tracking-wider text-taupe block flex items-center justify-end space-x-1">
                <span>NEXT MONOGRAPH</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <h4 className="font-serif text-xl text-ink group-hover:text-taupe-dark transition-colors">
                {nextObject.title}
              </h4>
              <p className="text-xs font-sans text-taupe">{nextObject.code} / {nextObject.categoryLabel}</p>
            </div>
          </button>
        </div>
      </section>

      {/* 7. Related Objects Recommendations */}
      {relatedObjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8 border-t border-stone pt-16">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                Cross-Material Dialogue
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-ink font-normal">
                Related Monograph Inquiries
              </h3>
            </div>
            <button
              onClick={() => onNavigate('objects')}
              className="text-xs uppercase font-sans tracking-widest text-ink hover:text-taupe-dark cursor-pointer"
            >
              All 12 Objects →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedObjects.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`story/${rel.id}`)}
                className="group border border-stone bg-ground p-4 hover:border-taupe transition-colors cursor-pointer space-y-3"
              >
                <div className="editorial-image-frame aspect-[16/10] bg-[#EBE7DF]">
                  <img
                    src={rel.imageUrl}
                    alt={rel.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-sans text-taupe uppercase block">
                    {rel.code} / {rel.categoryLabel}
                  </span>
                  <h4 className="font-serif text-lg text-ink group-hover:text-taupe-dark transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-taupe font-sans">
                    {rel.materials[0].name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
