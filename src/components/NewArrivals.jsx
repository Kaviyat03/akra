import React, { useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export function NewArrivals({
  products,
  activeCategory,
  onCategoryChange,
  onViewDetails,
  onQuickEnquire,
  onAddToCartQuick,
  favorites,
  onToggleFavorite,
  searchQuery,
  onClearSearch
}) {
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' ||
        item.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  const categories = ['All', 'Sarees', 'Salwars'];

  return (
    <section id="shop" className="py-16 sm:py-24 bg-brand-ivory border-b border-brand-border/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-brand-gold"></span>
            <span className="text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey">
              THE LATEST FROM AKRA
            </span>
            <span className="w-6 h-[1px] bg-brand-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
            New Arrivals
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-brand-grey font-sans font-light max-w-xl mx-auto">
            A quiet exploration of hand-finished sarees and artisanal salwar coordinates for timeless celebrations.
          </p>
        </div>

        {/* Filter Controls & Search Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 pb-5 border-b border-brand-border">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0" role="tablist">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? products.length
                : products.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;
              const isActive = activeCategory.toLowerCase() === cat.toLowerCase();

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-ultra-wide transition-all duration-300 border focus:outline-none whitespace-nowrap ${
                    isActive
                      ? 'bg-brand-black text-brand-ivory border-brand-black'
                      : 'bg-transparent text-brand-grey border-brand-border hover:border-brand-black/40 hover:text-brand-black'
                  }`}
                >
                  {cat === 'All' ? 'All Pieces' : cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Result Counter & Active Search Badge */}
          <div className="flex items-center gap-3 text-xs text-brand-grey w-full sm:w-auto justify-between sm:justify-end">
            {searchQuery && (
              <div className="flex items-center gap-2 bg-brand-beige px-3 py-1 border border-brand-border text-xs">
                <span>Search: "{searchQuery}"</span>
                <button
                  type="button"
                  onClick={onClearSearch}
                  className="text-brand-black hover:text-brand-gold font-bold ml-1"
                  aria-label="Clear search"
                >
                  &times;
                </button>
              </div>
            )}
            <span className="tracking-wider uppercase text-[11px]">
              Showing {filteredProducts.length} of {products.length} Pieces
            </span>
          </div>

        </div>

        {/* Product Grid: 4 columns desktop, 2-3 tablet, 2 mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onQuickEnquire={onQuickEnquire}
                onAddToCartQuick={onAddToCartQuick}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-brand-ivory-light border border-dashed border-brand-border p-8 max-w-lg mx-auto">
            <p className="font-serif text-2xl text-brand-black mb-2">No Pieces Found</p>
            <p className="text-xs text-brand-grey mb-6">
              We couldn't find any creations matching your current selection.
            </p>
            <button
              type="button"
              onClick={() => {
                onCategoryChange('All');
                if (onClearSearch) onClearSearch();
              }}
              className="px-6 py-2.5 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
