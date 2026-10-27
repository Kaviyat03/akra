import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

export function BrandStory({ onExploreCollections }) {
  return (
    <section id="story" className="py-20 sm:py-32 bg-brand-ivory-light border-b border-brand-border/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Side 1: Suitable Fashion Photograph */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Matting Frame */}
              <div className="p-3 sm:p-5 bg-brand-ivory border border-brand-border shadow-xl">
                <div className="aspect-[4/5] overflow-hidden image-zoom-container bg-brand-beige">
                  <img
                    src="/assets/products/sarees/saree-02.jpeg"
                    alt="The AKRA Experience — Timeless embroidered drape and vintage mirror"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Quote Stamp */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-brand-beige border border-brand-border p-5 shadow-lg max-w-[220px]">
                <span className="text-[9px] tracking-mega-wide uppercase text-brand-grey font-medium block mb-1">
                  Brand Philosophy
                </span>
                <p className="font-serif italic text-sm text-brand-black leading-snug">
                  "Grace in every thread, distinction in every drape."
                </p>
              </div>

            </div>
          </div>

          {/* Side 2: Brand Introduction Text */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left order-1 lg:order-2">
            
            {/* Title / Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey">
                THE AKRA EXPERIENCE
              </span>
            </div>

            {/* Supporting Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight leading-tight">
              A World of Effortless Elegance
            </h2>

            {/* Official Placeholder Copy as Requested */}
            <p className="font-serif italic text-xl sm:text-2xl text-brand-charcoal font-light leading-relaxed border-l-2 border-brand-gold pl-5 py-1">
              "{BRAND_INFO.storyPlaceholder}"
            </p>

            {/* Refined Context Paragraphs (Preserving honesty — no fake heritage claims) */}
            <div className="space-y-4 text-xs sm:text-sm text-brand-grey font-sans font-light leading-relaxed">
              <p>
                AKRA embraces a quiet-luxury sensibility rooted in classic Indian textile traditions. 
                Rather than following transient seasonal fads, each saree and salwar set is curated 
                to honor fine weaving, harmonious color palettes, and delicate embellishments.
              </p>
              <p>
                Whether seeking an heirloom saree with sculpted border accents or an impeccably tailored 
                salwar suit for festive celebrations, our boutique delivers a bespoke personal shopping 
                experience guided by thoughtful attention to detail.
              </p>
            </div>

            {/* Editorial Features */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-border/60">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-brand-black font-semibold block mb-1">
                  Curated Silhouettes
                </span>
                <p className="text-xs text-brand-grey font-light">
                  Hand-chosen sarees & salwars crafted for effortless presence.
                </p>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-brand-black font-semibold block mb-1">
                  Private Concierge
                </span>
                <p className="text-xs text-brand-grey font-light">
                  Direct client consultations via Instagram & WhatsApp.
                </p>
              </div>
            </div>

            {/* Small DISCOVER MORE link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreCollections}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-brand-black hover:text-brand-gold transition-colors font-medium group focus:outline-none"
              >
                <span>DISCOVER MORE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-gold" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
