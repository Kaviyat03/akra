import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

export function Hero({ onExplore, onDiscoverStory }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-28 pb-16 flex flex-col justify-between bg-brand-ivory overflow-hidden border-b border-brand-border/60"
    >
      {/* Subtle background ambient warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ivory via-brand-ivory to-brand-beige/25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Editorial Typography Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10">
            {/* Small label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="text-[11px] sm:text-xs font-medium tracking-mega-wide uppercase text-brand-grey">
                {BRAND_INFO.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-black tracking-tight leading-[0.92]">
                AKRA
              </h1>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.25em] text-brand-charcoal uppercase font-light">
                THE COUTURE
              </p>
            </div>

            {/* Supporting Line */}
            <p className="font-serif italic text-xl sm:text-2xl text-brand-charcoal font-light leading-relaxed">
              {BRAND_INFO.tagline}
            </p>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-brand-grey font-sans font-light max-w-xl leading-relaxed">
              {BRAND_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onExplore}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-all duration-300 shadow-sm group"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-brand-gold" />
              </button>

              <button
                type="button"
                onClick={onDiscoverStory}
                className="inline-flex items-center justify-center px-4 py-3 text-xs uppercase tracking-ultra-wide text-brand-black hover:text-brand-gold transition-colors duration-300 relative group"
              >
                <span>DISCOVER AKRA</span>
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-brand-black/40 group-hover:bg-brand-gold transition-all duration-300"></span>
              </button>
            </div>

            {/* Brand Assurance Note */}
            <div className="pt-4 flex items-center gap-6 text-[11px] uppercase tracking-widest text-brand-grey/80 border-t border-brand-border/60">
              <span>Bespoke Sarees</span>
              <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
              <span>Tailored Salwars</span>
              <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
              <span>Direct Concierge</span>
            </div>
          </div>

          {/* RIGHT: Editorial Fashion Vignette (Authentic Asset) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Editorial Image Frame */}
              <div className="relative aspect-[3/4] p-3 sm:p-4 bg-brand-ivory-light border border-brand-border shadow-lg">
                <div className="relative w-full h-full overflow-hidden image-zoom-container bg-brand-beige">
                  <img
                    src="/assets/products/sarees/saree-02.jpeg"
                    alt="AKRA — Saree with vintage mirror and signature card"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle vignette filter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent pointer-events-none"></div>

                  {/* Corner Brand Signature */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-brand-ivory">
                    <div>
                      <span className="text-[10px] tracking-mega-wide uppercase text-brand-ivory/80 block">
                        Editorial Preview
                      </span>
                      <p className="font-serif text-lg tracking-wide text-brand-ivory">
                        Signature Drapes
                      </p>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-brand-ivory/20 backdrop-blur-md px-2.5 py-1 border border-brand-ivory/30">
                      Archive 01
                    </span>
                  </div>
                </div>
              </div>

              {/* Offset Decorative Accent Badge */}
              <div className="hidden sm:block absolute -bottom-5 -left-6 bg-brand-beige border border-brand-border p-4 shadow-md max-w-[200px]">
                <p className="text-[10px] tracking-widest uppercase text-brand-grey font-medium">
                  Curated Archive
                </p>
                <p className="font-serif text-sm text-brand-black mt-1 leading-snug">
                  Handcrafted with quiet luxury aesthetic
                </p>
              </div>

              {/* Secondary Detail Inset */}
              <div className="hidden sm:block absolute -top-5 -right-5 w-24 h-28 border border-brand-border bg-brand-ivory-light p-1.5 shadow-md">
                <img
                  src="/assets/products/salwars/salwar-01.jpeg"
                  alt="AKRA Salwar Detail"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex justify-center pb-2">
        <button
          type="button"
          onClick={onExplore}
          className="flex flex-col items-center text-brand-grey hover:text-brand-black transition-colors focus:outline-none group"
          aria-label="Scroll to curated collections"
        >
          <span className="text-[9px] uppercase tracking-mega-wide mb-1 opacity-70 group-hover:opacity-100">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-70 group-hover:opacity-100 text-brand-gold" />
        </button>
      </div>
    </section>
  );
}
