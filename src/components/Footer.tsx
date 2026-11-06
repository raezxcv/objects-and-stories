import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#181816] text-[#FAF8F5] pt-20 pb-12 px-6 lg:px-12 border-t border-ink selection:bg-[#FAF8F5] selection:text-[#181816]">
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#33312E]">
          {/* Masthead & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                Independent Monograph Press
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                OBJECTS & STORIES
              </h2>
            </div>
            <p className="font-sans text-[15px] leading-relaxed text-[#BDB7AB] max-w-md font-light">
              A quarterly publication devoted to the contemplative study of industrial design,
              craft heritage, material ethics, and sculptural utility. Published in digital
              and archival print editions.
            </p>
            <div className="pt-2 text-xs font-sans text-taupe space-y-1">
              <p>STOCKHOLM / KYOTO / MILAN / BERLIN</p>
              <p>ISSN 2814-9022 (DIGITAL JOURNAL)</p>
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
              Journal Index
            </span>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D8D2C5] hover:text-white transition-colors cursor-pointer"
                >
                  Current Issue (No. 04)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('objects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D8D2C5] hover:text-white transition-colors cursor-pointer"
                >
                  Object Registry (12 Studies)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('story/kanso-iron-kettle'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D8D2C5] hover:text-white transition-colors cursor-pointer"
                >
                  Monograph Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('studio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D8D2C5] hover:text-white transition-colors cursor-pointer"
                >
                  Studio Manifesto & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('studio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D8D2C5] hover:text-white transition-colors cursor-pointer"
                >
                  Curatorial Board & Submissions
                </button>
              </li>
            </ul>
          </div>

          {/* Dispatch Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
              The Quarterly Dispatch
            </span>
            <p className="text-[13px] text-[#A8A194] leading-relaxed font-light">
              Receive one long-form essay each season on material culture, new monographs, and print folio releases. No marketing promotions.
            </p>
            {subscribed ? (
              <div className="p-4 bg-[#262420] border border-[#3E3B35] flex items-center space-x-3 text-xs text-[#E5E0D5]">
                <Check className="w-4 h-4 text-[#8FA382]" />
                <span>You have been added to the Autumn dispatch roster. Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full bg-[#242320] border border-[#3E3B35] text-white px-4 py-3 text-xs focus:outline-none focus:border-[#FAF8F5] transition-colors pr-10 font-sans"
                    aria-label="Email address for dispatch"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-taupe hover:text-white transition-colors cursor-pointer"
                    aria-label="Subscribe to dispatch"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="block text-[10px] font-sans tracking-wide text-taupe">
                  UNSUBSCRIBE ANY TIME WITH A SINGLE CLICK.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Colophon & Fictional Disclaimer */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-[12px] text-taupe space-y-4 md:space-y-0">
          <div className="max-w-2xl leading-relaxed">
            <p>
              © {new Date().getFullYear()} Objects & Stories. Crafted as an independent design publication.
              All featured designers, studios, and historical narratives are curated fictional concepts
              authored to illuminate authentic industrial craftsmanship and material philosophy.
            </p>
          </div>
          <div className="flex items-center space-x-6 text-xs font-sans">
            <button
              onClick={() => { onNavigate('studio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              COLOPHON
            </button>
            <span>•</span>
            <button
              onClick={() => { onNavigate('studio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              CRITERIA
            </button>
            <span>•</span>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
