import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/brand';

export function ShopByCategory({ onSelectCategory }) {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-brand-ivory border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-brand-border">
          <div>
            <span className="text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey block mb-1">
              DISCOVER BY SILHOUETTE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs text-brand-grey tracking-wider uppercase mt-2 md:mt-0">
            2 Curated Collections · 14 Distinct Pieces
          </p>
        </div>

        {/* Two Prominent Editorial Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="group relative bg-brand-ivory-light border border-brand-border overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden image-zoom-container bg-brand-beige">
                <img
                  src={cat.image}
                  alt={`AKRA ${cat.name} Collection`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Top Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-3 py-1 bg-brand-ivory/90 backdrop-blur-md text-[10px] tracking-mega-wide uppercase text-brand-black border border-brand-border font-medium">
                    {cat.name}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-brand-ivory flex flex-col justify-end">
                  <span className="text-xs sm:text-sm font-serif italic text-brand-gold-light tracking-wide block mb-1">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-ivory mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-ivory/80 font-sans font-light max-w-sm mb-6 leading-relaxed hidden sm:block">
                    {cat.description}
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => onSelectCategory(cat.filterKey)}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-brand-ivory text-brand-black text-xs uppercase tracking-ultra-wide hover:bg-brand-gold hover:text-brand-black transition-all duration-300 focus:outline-none"
                    >
                      <span>{cat.buttonText}</span>
                      <ArrowRight className="w-4 h-4 text-brand-black group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
