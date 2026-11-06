import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Journal', route: 'home' },
    { label: 'Objects', route: 'objects' },
    { label: 'Stories', route: 'story/kanso-iron-kettle' },
    { label: 'Studio', route: 'studio' },
  ];

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (route: string) => {
    if (route === 'home' && currentRoute === 'home') return true;
    if (route === 'objects' && currentRoute === 'objects') return true;
    if (route.startsWith('story') && currentRoute.startsWith('story')) return true;
    if (route === 'studio' && currentRoute === 'studio') return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 border-b ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-stone' 
          : 'bg-[#FAF8F5] border-stone/80'
      }`}
    >
      {/* Top Editorial Ticker Bar */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-12 py-2 text-[11px] font-sans tracking-widest text-taupe border-b border-stone/60">
        <div>
          <span>ISSUE NO. 04 / THE TACTILE FORM</span>
        </div>
        <div className="flex items-center space-x-6">
          <span>AUTUMN / WINTER 2024</span>
          <span className="inline-block w-1 h-1 rounded-full bg-taupe/40"></span>
          <span>AN INDEPENDENT DESIGN MONOGRAPH</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Brand / Publication Title */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-4"
          aria-label="Objects and Stories homepage"
        >
          <span className="block font-serif text-xl md:text-2xl font-normal tracking-tight text-ink group-hover:text-taupe-dark transition-colors">
            OBJECTS & STORIES
          </span>
          <span className="block font-sans text-[10px] uppercase tracking-widest text-taupe font-medium -mt-0.5">
            The Design Behind Everyday Objects
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.route);
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.route)}
                className={`relative py-1 text-[13px] tracking-wider uppercase font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-ink ${
                  active ? 'text-ink font-semibold' : 'text-taupe hover:text-ink'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-ink" />
                )}
              </button>
            );
          })}

          <div className="h-4 w-[1px] bg-stone"></div>

          <button
            onClick={() => handleLinkClick('studio')}
            className="inline-flex items-center text-[12px] uppercase tracking-widest text-ink hover:text-taupe-dark font-medium transition-colors group cursor-pointer"
          >
            <span>Colophon</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-taupe group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink hover:text-taupe-dark transition-colors focus-visible:outline-2 focus-visible:outline-ink cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone px-6 py-8">
          <div className="space-y-6">
            <div className="text-[10px] tracking-widest text-taupe uppercase mb-4 font-sans">
              Publication Index
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.route)}
                className={`block w-full text-left py-2 text-2xl font-serif ${
                  isActive(link.route) ? 'text-ink italic font-normal' : 'text-taupe hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-6 border-t border-stone flex flex-col space-y-2 text-xs font-sans text-taupe">
              <span>ISSUE NO. 04: THE TACTILE FORM</span>
              <span>FOUR-PART MONOGRAPH SERIES</span>
            </div>
          </div>
        </div>
      )}
      {/* Reading Progress Indicator */}
      <div 
        className="h-[2px] bg-ink transition-transform duration-75 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
    </header>
  );
};
