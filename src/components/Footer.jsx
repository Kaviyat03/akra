import React from 'react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { BRAND_INFO } from '../data/brand';

export function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-ivory-light border-t border-brand-border text-brand-black">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-block">
              <img
                src={BRAND_INFO.logoUrl}
                alt="AKRA — THE COUTURE"
                className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply"
              />
            </div>

            <p className="text-xs sm:text-sm text-brand-grey font-sans font-light max-w-sm leading-relaxed">
              Discover timeless sarees and thoughtfully curated salwar collections, presented with a contemporary couture sensibility.
            </p>

            <div className="pt-2">
              <span className="text-[10px] tracking-mega-wide uppercase text-brand-grey block mb-2 font-medium">
                Official Social Channel
              </span>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-brand-black hover:text-brand-gold transition-colors font-medium"
              >
                <InstagramIcon className="w-4 h-4 text-brand-gold" />
                <span>Instagram: {BRAND_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-ultra-wide text-brand-charcoal">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('hero')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'All')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'Sarees')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Sarees
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'Salwars')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Salwars
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    window.location.hash = '#cart';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-brand-gold transition-colors"
                >
                  Shopping Bag
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Placeholder & Client Consultation */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey block">
              Client Enquiries
            </span>
            <p className="text-xs text-brand-grey font-sans font-light leading-relaxed">
              For bespoke appointments, fabric queries, and private consultations, connect with us directly through our official Instagram profile.
            </p>
            <div className="p-4 bg-brand-beige/50 border border-brand-border space-y-2">
              <span className="text-[10px] tracking-widest uppercase text-brand-charcoal block font-medium">
                Boutique Assistance
              </span>
              <p className="text-xs text-brand-grey leading-relaxed">
                Direct Messaging on Instagram is currently the primary avenue for customer assistance.
              </p>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] uppercase tracking-ultra-wide text-brand-black hover:text-brand-gold font-medium pt-1"
              >
                Send Instagram Direct Message &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-brand-grey">
          <p className="tracking-wider">
            &copy; {BRAND_INFO.copyrightYear} {BRAND_INFO.name}. All rights reserved.
          </p>

          <p className="text-[11px] text-brand-grey/80 tracking-normal">
            Boutique reference concept presented for client demonstration.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-ultra-wide text-brand-black hover:text-brand-gold transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-gold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
