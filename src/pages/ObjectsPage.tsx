import React, { useState, useMemo } from 'react';
import { Search, Eye, ArrowRight, LayoutGrid, List, Sparkles, Filter } from 'lucide-react';
import { DESIGN_OBJECTS } from '../data/objectsData';
import { DesignObject, ObjectCategory } from '../types';

interface ObjectsPageProps {
  onNavigate: (route: string) => void;
  onOpenLightbox: (object: DesignObject) => void;
  onOpenQuickView: (object: DesignObject) => void;
}

export const ObjectsPage: React.FC<ObjectsPageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ObjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const categories: Array<{ id: ObjectCategory; label: string }> = [
    { id: 'all', label: 'All Objects' },
    { id: 'tools', label: 'Home Tools' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'ceramics', label: 'Ceramics & Glass' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'everyday', label: 'Everyday Products' },
  ];

  const filteredObjects = useMemo(() => {
    return DESIGN_OBJECTS.filter((obj) => {
      const matchesCategory = selectedCategory === 'all' || obj.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery = 
        obj.title.toLowerCase().includes(q) ||
        obj.subtitle.toLowerCase().includes(q) ||
        obj.maker.name.toLowerCase().includes(q) ||
        obj.maker.studio.toLowerCase().includes(q) ||
        obj.materials.some((m) => m.name.toLowerCase().includes(q) || m.detail.toLowerCase().includes(q)) ||
        obj.origin.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-24 md:pt-28 space-y-12 md:space-y-16 pb-24">
      {/* 1. Header & Curatorial Premise */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-4 border-b border-stone pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe block">
                Archival Index / 12 Studies
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
                Curated Object Registry
              </h1>
            </div>
            <div className="text-right text-xs font-sans text-taupe hidden md:block">
              <span>SHOWING {filteredObjects.length} OF {DESIGN_OBJECTS.length} OBJECT MONOGRAPHS</span>
            </div>
          </div>
          <p className="font-sans text-[15px] sm:text-[16px] text-ink-medium max-w-2xl font-light leading-relaxed">
            A comprehensive catalog of everyday functional artefacts surveyed across our four-part monograph series.
            Each entry features material breakdowns, joinery schematics, and studio biographies.
          </p>
        </div>
      </section>

      {/* 2. Controls Bar: Categories, Search, and View Mode */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 sticky top-16 md:top-20 z-30 bg-[#FAF8F5] py-4 border-b border-stone">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none" role="tablist" aria-label="Object Categories">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              const count = cat.id === 'all' 
                ? DESIGN_OBJECTS.length 
                : DESIGN_OBJECTS.filter(o => o.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  role="tab"
                  aria-selected={active}
                  className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer rounded-none border ${
                    active 
                      ? 'bg-ink text-ground border-ink font-medium' 
                      : 'bg-linen/80 text-taupe hover:text-ink hover:bg-stone/50 border-stone/60'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Input & View Toggle */}
          <div className="flex items-center space-x-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search material, maker, origin..."
                className="w-full bg-linen border border-stone/80 text-xs text-ink px-3 py-2 pl-8 focus:outline-none focus:border-ink transition-colors font-sans"
                aria-label="Filter objects by material or maker"
              />
              <Search className="w-3.5 h-3.5 text-taupe absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-taupe hover:text-ink cursor-pointer"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-stone">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-ink text-ground' : 'bg-ground text-taupe hover:text-ink'
                }`}
                aria-label="Grid view"
                title="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-ink text-ground' : 'bg-ground text-taupe hover:text-ink'
                }`}
                aria-label="Editorial table view"
                title="Table view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Objects Display: Grid or Table Mode */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {filteredObjects.length === 0 ? (
          <div className="py-24 text-center space-y-4 border border-stone bg-linen/50">
            <Filter className="w-8 h-8 text-taupe mx-auto" />
            <h3 className="font-serif text-2xl text-ink">No objects matched your criteria</h3>
            <p className="text-sm font-light text-taupe max-w-sm mx-auto">
              Try searching for materials like "iron", "oak", "alabaster", "brass", or clearing filters.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-ink text-ground text-xs font-sans uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View: Editorial Magazine Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredObjects.map((obj) => (
              <article
                key={obj.id}
                className="group border border-stone bg-ground hover:border-taupe transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Actions */}
                  <div className="editorial-image-frame aspect-[4/3] relative bg-[#EBE7DF]">
                    <img
                      src={obj.imageUrl}
                      alt={obj.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* AI Generation or Craft Badge */}
                    {obj.isAiGenerated && (
                      <div className="absolute top-3 left-3 inline-flex items-center space-x-1 px-2.5 py-1 bg-ink text-ground text-[9px] font-sans uppercase tracking-widest">
                        <Sparkles className="w-2.5 h-2.5 text-terracotta" />
                        <span>AI Studio Asset</span>
                      </div>
                    )}

                    {/* Quick Action Overlay Buttons */}
                    <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenLightbox(obj);
                        }}
                        className="p-2 bg-ground hover:bg-ink hover:text-ground text-ink border border-stone transition-colors cursor-pointer"
                        aria-label={`Inspect ${obj.title} photograph`}
                        title="Inspect Still Life"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuickView(obj);
                        }}
                        className="px-3 py-1.5 bg-ground hover:bg-ink hover:text-ground text-ink border border-stone text-[10px] font-sans uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Quick Specs
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-sans text-taupe">
                      <span>{obj.code}</span>
                      <span className="uppercase">{obj.categoryLabel}</span>
                    </div>

                    <div>
                      <h2 
                        onClick={() => onNavigate(`story/${obj.id}`)}
                        className="font-serif text-2xl font-normal text-ink group-hover:text-taupe-dark transition-colors cursor-pointer leading-snug"
                      >
                        {obj.title}
                      </h2>
                      <p className="font-sans text-xs text-taupe mt-1 font-light line-clamp-2">
                        {obj.subtitle}
                      </p>
                    </div>

                    {/* Primary Materials Pill Strip */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {obj.materials.slice(0, 2).map((mat, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-0.5 bg-linen text-[10px] font-sans text-ink-medium border border-stone/50"
                        >
                          {mat.name.split(' ')[0]} {mat.name.split(' ')[1] || ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-stone/50 mt-4 flex items-center justify-between text-xs font-sans">
                  <span className="text-taupe">{obj.maker.studio}</span>
                  <button
                    onClick={() => onNavigate(`story/${obj.id}`)}
                    className="text-ink hover:text-taupe-dark flex items-center space-x-1 cursor-pointer font-medium group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Table View: Editorial Spec Registry */
          <div className="border border-stone overflow-x-auto bg-ground">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="bg-linen border-b border-stone text-taupe uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-normal">Index</th>
                  <th className="py-3.5 px-4 font-normal">Object Title</th>
                  <th className="py-3.5 px-4 font-normal">Category</th>
                  <th className="py-3.5 px-4 font-normal">Maker & Origin</th>
                  <th className="py-3.5 px-4 font-normal">Primary Matter</th>
                  <th className="py-3.5 px-4 font-normal">Weight</th>
                  <th className="py-3.5 px-4 font-normal text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone">
                {filteredObjects.map((obj) => (
                  <tr 
                    key={obj.id} 
                    className="hover:bg-linen/60 transition-colors cursor-pointer group"
                    onClick={() => onNavigate(`story/${obj.id}`)}
                  >
                    <td className="py-4 px-4 text-taupe">{obj.code}</td>
                    <td className="py-4 px-4">
                      <span className="font-serif text-base text-ink font-normal block group-hover:text-taupe-dark transition-colors">
                        {obj.title}
                      </span>
                      <span className="text-[10px] text-taupe block font-sans">
                        {obj.subtitle}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-ink uppercase">{obj.categoryLabel}</td>
                    <td className="py-4 px-4 text-ink-medium">
                      <div>{obj.maker.name}</div>
                      <div className="text-[10px] text-taupe">{obj.origin}</div>
                    </td>
                    <td className="py-4 px-4 text-ink">
                      {obj.materials[0].name}
                    </td>
                    <td className="py-4 px-4 text-taupe">{obj.dimensions.weight}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate(`story/${obj.id}`);
                        }}
                        className="px-3 py-1 bg-ink text-ground text-[10px] uppercase tracking-wider hover:bg-taupe-dark transition-colors cursor-pointer"
                      >
                        Read
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* 4. Curatorial Note on Conceptual Prototypes */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-6 bg-linen border border-stone flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-sans text-taupe">
          <div className="max-w-3xl space-y-1">
            <span className="text-ink font-semibold uppercase block">Note on Provenance & Conceptual Authorship:</span>
            <p className="font-sans text-[13px] text-ink-medium leading-relaxed font-light">
              All object monographs featured in this registry are original conceptual artefacts authored by the Objects & Stories editorial team.
              Each monograph rigorously analyzes verified industrial manufacturing techniques, authentic material behavior, and functional physics.
            </p>
          </div>
          <button
            onClick={() => onNavigate('studio')}
            className="px-4 py-2 border border-stone bg-ground hover:bg-linen text-ink uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors"
          >
            Review Criteria
          </button>
        </div>
      </section>
    </div>
  );
};
