import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  Send 
} from 'lucide-react';
import { CONTRIBUTORS } from '../data/objectsData';

export const StudioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manifesto' | 'criteria' | 'board' | 'contact'>('manifesto');
  
  // Contact Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inquiryType: 'monograph-submission',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', inquiryType: 'monograph-submission', message: '' });
      }, 5000);
    }
  };

  const principles = [
    {
      num: 'I',
      title: 'Material Honesty',
      motto: 'Honoring natural density, grain, and oxidative lifespan.',
      body: 'We reject coatings that simulate what they are not—veneered plastics that mimic marble, chrome spray over brittle zinc, and faux distress. An iron kettle should celebrate its porous sand grain; an oak bench should breathe through natural beeswax; unglazed stoneware should smell of dry shale.'
    },
    {
      num: 'II',
      title: 'Economy of Gesture',
      motto: 'Removing decorative vanity until only pure necessity remains.',
      body: 'Form does not simply follow function; form is the distilled physical expression of purpose. When a designer eliminates arbitrary bevels, decorative knickknacks, and logo badges, the object gains a calm authority that outlives transient stylistic fads.'
    },
    {
      num: 'III',
      title: 'Tactile Intelligence',
      motto: 'The way the artefact meets the human hand and shifts in weight.',
      body: 'Industrial design is fundamentally haptic. We evaluate the center of gravity in a fountain pen, the acoustic dampening of boiling water in cast iron, the friction of knurled brass thumb screws, and the way a ceramic pour lip shears a drop of spring water without dripping.'
    },
    {
      num: 'IV',
      title: 'Reparability & Permanence',
      motto: 'Designed to be disassembled, resharpened, re-oiled, and passed down.',
      body: 'Every reviewed object must possess a clear path to longevity. If a component fails after ten years, can it be unscrewed and replaced with standard tools? We prioritize mechanical joins over chemical adhesives, and organic patinas over disposable surfaces.'
    }
  ];

  return (
    <div className="pt-24 md:pt-28 space-y-16 md:space-y-24 pb-28">
      {/* 1. Masthead & Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-4 border-b border-stone pb-8">
          <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
            Studio Colophon & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-ink font-normal tracking-tight">
            Why We Study Objects
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-ink-medium max-w-3xl font-light leading-relaxed">
            Objects & Stories operates as an independent quarterly publication and research studio.
            We examine the relationship between human labor, geological matter, and the contemplative
            objects that inhabit our everyday spaces.
          </p>
        </div>
      </section>

      {/* 2. Sub-Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center space-x-2 border-b border-stone overflow-x-auto pb-1 scrollbar-none" role="tablist">
          <button
            onClick={() => setActiveTab('manifesto')}
            className={`px-4 py-2.5 text-xs font-sans tracking-widest uppercase transition-colors cursor-pointer border-b-2 -mb-[2px] ${
              activeTab === 'manifesto' ? 'border-ink text-ink font-semibold' : 'border-transparent text-taupe hover:text-ink'
            }`}
            role="tab"
            aria-selected={activeTab === 'manifesto'}
          >
            Editorial Manifesto
          </button>
          <button
            onClick={() => setActiveTab('criteria')}
            className={`px-4 py-2.5 text-xs font-sans tracking-widest uppercase transition-colors cursor-pointer border-b-2 -mb-[2px] ${
              activeTab === 'criteria' ? 'border-ink text-ink font-semibold' : 'border-transparent text-taupe hover:text-ink'
            }`}
            role="tab"
            aria-selected={activeTab === 'criteria'}
          >
            Evaluation Criteria (4 Pillars)
          </button>
          <button
            onClick={() => setActiveTab('board')}
            className={`px-4 py-2.5 text-xs font-sans tracking-widest uppercase transition-colors cursor-pointer border-b-2 -mb-[2px] ${
              activeTab === 'board' ? 'border-ink text-ink font-semibold' : 'border-transparent text-taupe hover:text-ink'
            }`}
            role="tab"
            aria-selected={activeTab === 'board'}
          >
            Curatorial Board & Contributors
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2.5 text-xs font-sans tracking-widest uppercase transition-colors cursor-pointer border-b-2 -mb-[2px] ${
              activeTab === 'contact' ? 'border-ink text-ink font-semibold' : 'border-transparent text-taupe hover:text-ink'
            }`}
            role="tab"
            aria-selected={activeTab === 'contact'}
          >
            Correspondence & Submissions
          </button>
        </div>
      </section>

      {/* 3. Tab Content 1: Manifesto */}
      {activeTab === 'manifesto' && (
        <section className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12 animate-in fade-in duration-300">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
              The Material Ethic of Reduction
            </h2>
            <p className="font-sans text-[17px] text-ink leading-relaxed font-light drop-cap">
              In an age dominated by planned obsolescence and software-driven distraction, the objects in our homes have largely become weightless plastic envelopes destined for municipal landfills. We swipe glass screens sixteen hours a day, losing physical intimacy with the resistance of matter.
            </p>
            <p className="font-sans text-[16px] text-ink-medium leading-relaxed font-light">
              Objects & Stories was founded to resist this dematerialization. We do not accept advertising banners, sponsored product placement, or affiliate retail commissions. Our monographs treat functional objects not as merchandise to be sold, but as cultural artefacts worthy of the same intellectual rigour afforded to architecture, literature, or sculpture.
            </p>
          </div>

          <div className="p-8 bg-linen border border-stone space-y-4">
            <h3 className="font-serif text-2xl text-ink italic font-normal">
              "When an object is well-made, it stops being a possession and becomes a quiet companion to our living days."
            </h3>
            <span className="font-sans text-xs text-taupe block">
              — Henrik Söderström, Founder & Editor-in-Chief
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <h4 className="font-sans text-xs uppercase tracking-wider text-ink font-semibold">
                No Commercial Storefronts
              </h4>
              <p className="text-sm font-sans text-ink-medium font-light leading-relaxed">
                You will not find "Add to Cart" buttons, countdown sales, or discount coupons in these pages. If you wish to acquire an object, we direct you straight to the independent craft workshops and foundries where they are made.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-sans text-xs uppercase tracking-wider text-ink font-semibold">
                Slow Curatorial Rhythm
              </h4>
              <p className="text-sm font-sans text-ink-medium font-light leading-relaxed">
                We publish only four issues per year. Each monograph is developed over sixty days of studio handling, metallurgical analysis, and natural daylight still-life photography.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 4. Tab Content 2: The Four Evaluation Criteria */}
      {activeTab === 'criteria' && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 animate-in fade-in duration-300">
          <div className="space-y-3 max-w-2xl">
            <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
              The Curatorial Rubric
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              Four Pillars of Object Evaluation
            </h2>
            <p className="font-sans text-sm text-ink-medium font-light">
              Every artefact admitted into our registry is evaluated against four non-negotiable principles before a monograph is commissioned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div key={p.num} className="border border-stone bg-ground p-8 space-y-4">
                <div className="flex justify-between items-baseline border-b border-stone pb-4">
                  <span className="font-sans text-xs text-taupe font-semibold">CRITERION {p.num}</span>
                  <span className="font-serif text-2xl text-ink font-normal">{p.title}</span>
                </div>
                <p className="font-serif text-base italic text-ink-light">
                  "{p.motto}"
                </p>
                <p className="text-sm font-sans text-ink-medium font-light leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-linen border border-stone flex items-center space-x-4 text-xs font-sans text-taupe">
            <ShieldCheck className="w-5 h-5 text-terracotta shrink-0" />
            <p className="font-sans text-[13px] text-ink-medium leading-relaxed font-light">
              We explicitly identify conceptual and speculative pieces in our archive. Speculative studies must satisfy all mechanical, structural, and chemical tolerances of physical fabrication.
            </p>
          </div>
        </section>
      )}

      {/* 5. Tab Content 3: Curatorial Board & Contributors */}
      {activeTab === 'board' && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 animate-in fade-in duration-300">
          <div className="space-y-3 max-w-2xl">
            <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
              Editorial Collective
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              Curatorial Board & Critics
            </h2>
            <p className="font-sans text-sm text-ink-medium font-light">
              Our editorial collective unites industrial designers, cultural anthropologists, architectural historians, and studio photographers based in Stockholm, Kyoto, Milan, and Berlin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTRIBUTORS.map((contributor, idx) => (
              <div key={idx} className="border border-stone bg-ground p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                {/* Monogram / Portrait Avatar */}
                <div className="w-16 h-16 rounded-none bg-linen border border-stone flex items-center justify-center font-serif text-2xl text-ink shrink-0">
                  {contributor.portraitInitials}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-2xl text-ink font-normal">
                      {contributor.name}
                    </h3>
                  </div>
                  <div className="text-xs font-sans text-taupe">
                    <span>{contributor.role}</span> / <span>{contributor.location}</span>
                  </div>
                  <p className="text-sm font-sans text-ink-medium font-light leading-relaxed pt-2">
                    {contributor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Physical Print Edition Specification Box */}
          <div className="bg-[#181816] text-[#FAF8F5] p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                The Archival Print Imprint
              </span>
              <h3 className="font-serif text-3xl font-normal">
                Issue No. 04 Print Monograph Series
              </h3>
            </div>
            <p className="font-sans text-[15px] text-[#C5BFAe] font-light max-w-2xl leading-relaxed">
              Printed on 180gsm uncoated Swedish Munken Lynx paper with cold-set mineral inks, thread-sewn Swiss open binding, and foil-stamped grey buckram spine. Produced in a single limited run of 800 hand-numbered copies per issue.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans text-taupe border-t border-[#33312E] pt-6">
              <div>
                <span className="block text-[#FAF8F5]">FORMAT</span>
                <span>230 × 300 mm Folio</span>
              </div>
              <div>
                <span className="block text-[#FAF8F5]">PAPER STOCK</span>
                <span>Munken Lynx 180gsm</span>
              </div>
              <div>
                <span className="block text-[#FAF8F5]">BINDING</span>
                <span>Thread-Sewn Swiss Ota</span>
              </div>
              <div>
                <span className="block text-[#FAF8F5]">PRINT RUN</span>
                <span>800 Numbered Copies</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Tab Content 4: Reader Correspondence & Submissions */}
      {activeTab === 'contact' && (
        <section className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12 animate-in fade-in duration-300">
          <div className="space-y-3">
            <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
              Editorial Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              Correspondence & Monograph Submissions
            </h2>
            <p className="font-sans text-sm text-ink-medium font-light max-w-2xl leading-relaxed">
              We welcome correspondence from independent craft studios, metallurgists, industrial designers, and collectors. We do not accept commercial press releases.
            </p>
          </div>

          <div className="border border-stone bg-ground p-8 sm:p-10">
            {formSubmitted ? (
              <div className="p-8 bg-linen border border-stone text-center space-y-4">
                <Check className="w-8 h-8 text-terracotta mx-auto" />
                <h3 className="font-serif text-2xl text-ink">Correspondence Received</h3>
                <p className="text-sm font-sans text-ink-medium max-w-md mx-auto font-light">
                  Thank you for your dispatch. Our curatorial review board meets every second Tuesday. If your inquiry meets our four evaluation criteria, we will be in touch.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-ink text-ground text-xs font-sans uppercase tracking-wider cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-sans uppercase text-taupe">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-linen border border-stone p-3 text-xs text-ink font-sans focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-sans uppercase text-taupe">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. studio@workshop.org"
                      className="w-full bg-linen border border-stone p-3 text-xs text-ink font-sans focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="block text-xs font-sans uppercase text-taupe">
                    Nature of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full bg-linen border border-stone p-3 text-xs text-ink font-sans focus:outline-none focus:border-ink transition-colors cursor-pointer"
                  >
                    <option value="monograph-submission">Object Monograph Submission</option>
                    <option value="workshop-tip">Suggest a Rural Workshop or Foundry</option>
                    <option value="print-inquiry">Print Folio & Institutional Orders</option>
                    <option value="editorial-critique">Reader Critique or Historical Correction</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-sans uppercase text-taupe">
                    Dispatch Details & Material Specification *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe the object, its maker, materials, and why it satisfies our four curatorial principles..."
                    className="w-full bg-linen border border-stone p-3 text-xs text-ink font-sans font-light focus:outline-none focus:border-ink transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ink text-ground hover:bg-taupe-dark text-xs font-sans uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Editorial Dispatch</span>
                </button>
              </form>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
