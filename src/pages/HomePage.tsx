import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { DESIGN_OBJECTS, EDITORIAL_ARTICLES } from '../data/objectsData';
import { DesignObject } from '../types';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onOpenLightbox: (object: DesignObject) => void;
  onOpenQuickView: (object: DesignObject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenQuickView,
}) => {
  const leadObject = DESIGN_OBJECTS[0]; // Kanso Nambu Cast Iron Kettle
  const featuredObjects = [DESIGN_OBJECTS[1], DESIGN_OBJECTS[2], DESIGN_OBJECTS[3]]; // Bench, Lamp, Ceramic Vessel
  const leadEssay = EDITORIAL_ARTICLES[0];

  return (
    <div className="pt-24 md:pt-28 space-y-24 md:space-y-36">
      {/* 1. Masthead & Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-stone pb-12 md:pb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 font-sans text-[11px] tracking-widest text-taupe uppercase">
              <span className="w-2 h-2 rounded-full bg-terracotta inline-block"></span>
              <span>Issue No. 04 / The Tactile Form</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-ink leading-[1.02]">
              The quiet intelligence of everyday objects.
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-4 lg:pb-2">
            <p className="font-sans text-[15px] sm:text-[16px] text-ink-medium leading-relaxed font-light">
              An independent design journal dedicated to material permanence, slow manufacturing, and the cultural meaning locked inside functional artefacts.
            </p>
            <div className="flex items-center space-x-6 pt-2">
              <button
                onClick={() => onNavigate('objects')}
                className="text-xs font-sans tracking-wider text-ink hover:text-taupe-dark flex items-center space-x-2 cursor-pointer group font-medium"
              >
                <span>Explore all 12 studies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('studio')}
                className="text-xs font-sans tracking-wider text-taupe hover:text-ink flex items-center space-x-1 cursor-pointer font-medium"
              >
                <span>Curatorial manifesto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lead Monograph Feature: The Kanso Cast Iron Kettle */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                Featured Monograph / No. 01
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-ink font-normal">
                Kanso Nambu Tetsubin Kettle
              </h2>
            </div>
            <button
              onClick={() => onNavigate(`story/${leadObject.id}`)}
              className="hidden sm:inline-flex items-center space-x-2 text-xs font-sans tracking-wider text-ink hover:text-taupe-dark cursor-pointer group font-medium"
            >
              <span>Read monograph</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Monumental Hero Photography Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F3EFEA] border border-stone p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-7">
              <div 
                className="editorial-image-frame cursor-pointer relative"
                onClick={() => onOpenLightbox(leadObject)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onOpenLightbox(leadObject); }}
                aria-label="Inspect Kanso Kettle high resolution photograph"
              >
                <img
                  src={leadObject.imageUrl}
                  alt="Kanso Nambu Tetsubin Cast Iron Kettle"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[560px] object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-ground px-3 py-1.5 border border-stone text-[11px] font-sans uppercase tracking-wider text-ink opacity-90 group-hover:opacity-100 transition-opacity">
                  Click to inspect still life
                </div>
              </div>
            </div>

            {/* Editorial Side Narrative */}
            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              <div className="space-y-2">
                <span className="font-sans text-xs text-taupe block">
                  Studio Omi / Morioka, Japan
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-light italic text-ink leading-snug">
                  "The kettle does not decorate the hearth; it anchors the room in geological gravity."
                </p>
              </div>

              <p className="text-[15px] text-ink-medium font-light leading-relaxed">
                Before water boils, it meets three millimeters of porous river-sand cast iron.
                Tuned acoustic flaps in the base transform the turbulence of boiling bubbles
                into a low harmonic hum reminiscent of wind through pine needles.
              </p>

              {/* Specification Table Snippet */}
              <div className="border-t border-stone pt-4 space-y-2 font-sans text-xs text-taupe">
                <div className="flex justify-between py-1 border-b border-stone/50">
                  <span>Material Base:</span>
                  <span className="text-ink font-medium">Grey River-Sand Cast Iron</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone/50">
                  <span>Lid Finial:</span>
                  <span className="text-ink font-medium">Turned American Walnut</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone/50">
                  <span>Weight (Dry):</span>
                  <span className="text-ink font-medium">2.14 Kilograms</span>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => onNavigate(`story/${leadObject.id}`)}
                  className="px-6 py-3 bg-ink text-ground hover:bg-taupe-dark text-xs font-sans tracking-wider transition-colors cursor-pointer font-medium"
                >
                  Full story & blueprint
                </button>
                <button
                  onClick={() => onOpenQuickView(leadObject)}
                  className="px-5 py-3 border border-stone bg-ground hover:bg-linen text-xs font-sans tracking-wider text-ink transition-colors cursor-pointer font-medium"
                >
                  Quick specifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Essay Callout: On the Weight of Everyday Tools */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#FAF8F5] border border-stone p-8 md:p-14 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                Editorial Inquiry / Essay
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                {leadEssay.title}
              </h2>
              <div className="pt-2 text-xs font-sans text-taupe space-y-1">
                <p>BY {leadEssay.author.name.toUpperCase()} ({leadEssay.author.role.toUpperCase()})</p>
                <p>{leadEssay.date.toUpperCase()} / {leadEssay.readTime.toUpperCase()}</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <p className="font-sans text-[17px] md:text-[18px] text-ink leading-relaxed drop-cap font-light">
                {leadEssay.leadParagraph}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone text-[14px] text-ink-medium leading-relaxed font-light">
                {leadEssay.bodySections.slice(0, 2).map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    {section.heading && (
                      <h3 className="font-sans text-xs uppercase tracking-wider text-ink font-semibold">
                        {section.heading}
                      </h3>
                    )}
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Selected Recent Studies (3-Column Asymmetric Grid) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-stone pb-6">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
              Curated Registry
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-normal">
              Selected Object Studies
            </h2>
          </div>
          <button
            onClick={() => onNavigate('objects')}
            className="text-xs font-sans tracking-wider text-ink hover:text-taupe-dark flex items-center space-x-2 cursor-pointer group font-medium"
          >
            <span>View all 12 objects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredObjects.map((obj) => (
            <article 
              key={obj.id} 
              className="group space-y-4 cursor-pointer"
              onClick={() => onNavigate(`story/${obj.id}`)}
            >
              {/* Image Frame */}
              <div className="editorial-image-frame aspect-[3/4] relative bg-[#EBE7DF]">
                <img
                  src={obj.imageUrl}
                  alt={obj.title}
                  className="w-full h-full object-cover"
                />
                {obj.isAiGenerated && (
                  <div className="absolute top-3 left-3 inline-flex items-center space-x-1 px-2.5 py-1 bg-ink text-ground text-[9px] font-sans uppercase tracking-widest">
                    <Sparkles className="w-2.5 h-2.5 text-terracotta" />
                    <span>AI Studio Asset</span>
                  </div>
                )}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-ground text-[10px] font-sans tracking-wider uppercase border border-stone text-ink">
                    View Story
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px] font-sans text-taupe">
                  <span>{obj.code}</span>
                  <span className="uppercase">{obj.categoryLabel}</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-ink group-hover:text-taupe-dark transition-colors">
                  {obj.title}
                </h3>
                <p className="font-sans text-xs text-taupe line-clamp-2 font-light">
                  {obj.subtitle}
                </p>
                <div className="pt-2 text-[11px] font-sans text-ink-medium flex items-center justify-between border-t border-stone/50">
                  <span>{obj.maker.studio}</span>
                  <span className="text-taupe">{obj.origin.split(',')[0]}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Editorial Philosophy & Studio Teaser Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#181816] text-[#FAF8F5] p-8 md:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                The Curatorial Stance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                "We do not review consumer products. We study the enduring thought behind objects that respect the human hand."
              </h2>
              <p className="font-sans text-[14px] text-[#A8A194] max-w-xl font-light leading-relaxed">
                Four criteria govern our monographs: Material Honesty, Economy of Gesture, Tactile Intelligence, and Reparability. Read our founding colophon and review methodology.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <button
                onClick={() => onNavigate('studio')}
                className="py-4 px-6 bg-[#FAF8F5] text-ink hover:bg-[#EAE5DC] text-xs font-sans tracking-wider text-center transition-colors cursor-pointer font-medium"
              >
                Read studio philosophy
              </button>
              <button
                onClick={() => onNavigate('objects')}
                className="py-4 px-6 border border-[#3E3B35] text-[#FAF8F5] hover:bg-[#262420] text-xs font-sans tracking-wider text-center transition-colors cursor-pointer font-medium"
              >
                Browse all 12 objects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
