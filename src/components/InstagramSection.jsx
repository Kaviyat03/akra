import React from 'react';
import { ExternalLink } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { BRAND_INFO } from '../data/brand';

export function InstagramSection() {
  // Curated editorial grid using local authorised product images
  const feedItems = [
    {
      id: 1,
      image: '/assets/products/sarees/saree-01.jpeg',
      label: 'Espresso Organza Drape',
    },
    {
      id: 2,
      image: '/assets/products/salwars/salwar-02.jpeg',
      label: 'Two-Tone Royal Ensemble',
    },
    {
      id: 3,
      image: '/assets/products/sarees/saree-05.jpeg',
      label: 'Olive Scalloped Drape',
    },
    {
      id: 4,
      image: '/assets/products/salwars/salwar-03.jpeg',
      label: 'Maroon & Mustard Coordinates',
    },
    {
      id: 5,
      image: '/assets/products/sarees/saree-06.jpeg',
      label: 'Crimson Threadwork Drape',
    },
    {
      id: 6,
      image: '/assets/products/salwars/salwar-05.jpeg',
      label: 'Cobalt Kurta & Artisan Drape',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-ivory border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2 text-brand-gold">
            <InstagramIcon className="w-4 h-4" />
            <span className="text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey">
              INSTAGRAM SPOTLIGHT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
            Follow the World of AKRA
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-brand-grey font-sans font-light">
            Explore the latest styles and collections from AKRA.
          </p>

          <div className="mt-6">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-all duration-300 shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-brand-gold" />
              <span>VISIT INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Editorial Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {feedItems.map((item) => (
            <a
              key={item.id}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-brand-beige border border-brand-border block image-zoom-container"
              aria-label={`View ${item.label} on Instagram`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Hover overlay with Instagram icon and handle */}
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-brand-ivory text-center">
                <InstagramIcon className="w-5 h-5 text-brand-gold mb-1.5" />
                <span className="text-[10px] tracking-widest uppercase font-medium">
                  {BRAND_INFO.instagramHandle}
                </span>
                <span className="text-[9px] text-brand-ivory/70 mt-1 line-clamp-1">
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Disclaimer / Note */}
        <p className="text-center text-[10px] text-brand-grey/80 tracking-wider uppercase mt-6">
          Follow {BRAND_INFO.instagramHandle} for bespoke bridal inquiries and live collection drops
        </p>

      </div>
    </section>
  );
}
