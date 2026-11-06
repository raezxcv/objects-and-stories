import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { QuickViewDrawer } from './components/QuickViewDrawer';
import { HomePage } from './pages/HomePage';
import { ObjectsPage } from './pages/ObjectsPage';
import { StoryPage } from './pages/StoryPage';
import { StudioPage } from './pages/StudioPage';
import { DesignObject } from './types';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [lightboxObject, setLightboxObject] = useState<DesignObject | null>(null);
  const [quickViewObject, setQuickViewObject] = useState<DesignObject | null>(null);

  // Sync hash routing with window location
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
      setCurrentRoute(hash);
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: string) => {
    window.location.hash = `#/${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let pageContent: React.ReactNode;
  if (currentRoute === 'home') {
    pageContent = (
      <HomePage
        onNavigate={navigateTo}
        onOpenLightbox={(obj) => setLightboxObject(obj)}
        onOpenQuickView={(obj) => setQuickViewObject(obj)}
      />
    );
  } else if (currentRoute === 'objects') {
    pageContent = (
      <ObjectsPage
        onNavigate={navigateTo}
        onOpenLightbox={(obj) => setLightboxObject(obj)}
        onOpenQuickView={(obj) => setQuickViewObject(obj)}
      />
    );
  } else if (currentRoute.startsWith('story')) {
    const parts = currentRoute.split('/');
    const objectId = parts[1] || 'kanso-iron-kettle';
    pageContent = (
      <StoryPage
        objectId={objectId}
        onNavigate={navigateTo}
        onOpenLightbox={(obj) => setLightboxObject(obj)}
      />
    );
  } else if (currentRoute === 'studio') {
    pageContent = <StudioPage />;
  } else {
    pageContent = (
      <HomePage
        onNavigate={navigateTo}
        onOpenLightbox={(obj) => setLightboxObject(obj)}
        onOpenQuickView={(obj) => setQuickViewObject(obj)}
      />
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col bg-ground text-ink font-sans selection:bg-stone selection:text-ink">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-ground focus:text-xs focus:font-sans focus:tracking-wider focus:outline-none"
      >
        Skip to main editorial content
      </a>

      {/* Global Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main View Area */}
      <main id="main-content" className="flex-1">
        {pageContent}
      </main>

      {/* Colophon & Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Lightbox Visual Inspector Modal */}
      <LightboxModal
        object={lightboxObject}
        onClose={() => setLightboxObject(null)}
        onViewStory={(id) => navigateTo(`story/${id}`)}
      />

      {/* Quick View Drawer */}
      <QuickViewDrawer
        object={quickViewObject}
        isOpen={Boolean(quickViewObject)}
        onClose={() => setQuickViewObject(null)}
        onSelectStory={(id) => navigateTo(`story/${id}`)}
        onOpenLightbox={(obj) => setLightboxObject(obj)}
      />
    </div>
  );
}

export default App;
