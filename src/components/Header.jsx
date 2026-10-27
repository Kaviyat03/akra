import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

export function Header({
  onNavigate,
  onOpenSearch,
  onOpenShortlist,
  onOpenCart,
  cartCount = 0,
  shortlistCount = 0,
  activeCategory = 'All',
  currentView = 'home',
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, categoryFilter = null) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId, categoryFilter);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || currentView !== 'home'
            ? 'bg-brand-ivory/95 backdrop-blur-md border-b border-brand-border py-3 shadow-sm'
            : 'bg-brand-ivory/80 backdrop-blur-sm border-b border-brand-border/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Actual AKRA Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('hero');
                }}
                className="group flex items-center gap-3 transition-opacity hover:opacity-85 focus:outline-none"
                aria-label="AKRA — The Couture Home"
              >
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="AKRA — THE COUTURE"
                  className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
                />
              </a>
            </div>

            {/* CENTRE: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-10" aria-label="Main Navigation">
              <button
                type="button"
                onClick={() => handleNavClick('hero')}
                className={`text-xs uppercase tracking-ultra-wide transition-colors py-1 relative group focus:outline-none ${
                  currentView === 'home' && activeCategory === 'All'
                    ? 'text-brand-black font-semibold'
                    : 'text-brand-charcoal hover:text-brand-black'
                }`}
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'All')}
                className={`text-xs uppercase tracking-ultra-wide transition-colors py-1 relative group focus:outline-none ${
                  currentView === 'home' && activeCategory === 'All'
                    ? 'text-brand-black font-medium'
                    : 'text-brand-grey hover:text-brand-black'
                }`}
              >
                SHOP
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'Sarees')}
                className={`text-xs uppercase tracking-ultra-wide transition-colors py-1 relative group focus:outline-none ${
                  currentView === 'home' && activeCategory === 'Sarees'
                    ? 'text-brand-black font-semibold'
                    : 'text-brand-grey hover:text-brand-black'
                }`}
              >
                SAREES
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'Salwars')}
                className={`text-xs uppercase tracking-ultra-wide transition-colors py-1 relative group focus:outline-none ${
                  currentView === 'home' && activeCategory === 'Salwars'
                    ? 'text-brand-black font-semibold'
                    : 'text-brand-grey hover:text-brand-black'
                }`}
              >
                SALWARS
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('story')}
                className="text-xs uppercase tracking-ultra-wide text-brand-grey hover:text-brand-black transition-colors py-1 relative group focus:outline-none"
              >
                OUR STORY
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-black transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>

            {/* RIGHT: Search, Wishlist, Shopping Bag & Mobile Menu Trigger */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              {/* Search button */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 text-brand-black hover:text-brand-gold transition-colors focus:outline-none"
                aria-label="Search collections"
                title="Search collections"
              >
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>

              {/* Wishlist button */}
              <button
                type="button"
                onClick={onOpenShortlist}
                className="p-2 text-brand-black hover:text-brand-gold transition-colors relative focus:outline-none"
                aria-label="View Saved Pieces"
                title="Saved Shortlist"
              >
                <Heart className="w-5 h-5 stroke-[1.5]" />
                {shortlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-gold text-brand-black font-semibold text-[9px] font-sans flex items-center justify-center rounded-full leading-none shadow-sm">
                    {shortlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag (Cart) icon with live immediate count */}
              <button
                type="button"
                onClick={onOpenCart}
                className={`p-2 transition-colors relative focus:outline-none ${
                  currentView === 'cart' ? 'text-brand-gold' : 'text-brand-black hover:text-brand-gold'
                }`}
                aria-label={`View Shopping Bag (${cartCount} items)`}
                title="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-black text-brand-ivory text-[9px] font-sans flex items-center justify-center rounded-full leading-none font-medium">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 text-brand-black hover:text-brand-gold transition-colors focus:outline-none"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-brand-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-brand-ivory border-l border-brand-border p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="AKRA — THE COUTURE"
                  className="h-9 w-auto object-contain mix-blend-multiply"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-brand-black hover:text-brand-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 stroke-[1.5]" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 pt-6" aria-label="Mobile Links">
                <button
                  type="button"
                  onClick={() => handleNavClick('hero')}
                  className="text-left font-serif text-2xl text-brand-black hover:text-brand-gold transition-colors tracking-wide"
                >
                  Home
                </button>

                <button
                  type="button"
                  onClick={() => handleNavClick('shop', 'All')}
                  className="text-left font-serif text-2xl text-brand-black hover:text-brand-gold transition-colors tracking-wide"
                >
                  All Collections
                </button>

                <button
                  type="button"
                  onClick={() => handleNavClick('shop', 'Sarees')}
                  className="text-left font-serif text-2xl text-brand-black hover:text-brand-gold transition-colors tracking-wide pl-3 border-l-2 border-brand-gold"
                >
                  Sarees
                </button>

                <button
                  type="button"
                  onClick={() => handleNavClick('shop', 'Salwars')}
                  className="text-left font-serif text-2xl text-brand-black hover:text-brand-gold transition-colors tracking-wide pl-3 border-l-2 border-brand-border"
                >
                  Salwars
                </button>

                <button
                  type="button"
                  onClick={() => handleNavClick('story')}
                  className="text-left font-serif text-2xl text-brand-black hover:text-brand-gold transition-colors tracking-wide"
                >
                  Our Story
                </button>

                {/* Ecommerce shortcuts in mobile drawer */}
                <div className="pt-4 border-t border-brand-border/60 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCart();
                    }}
                    className="w-full flex items-center justify-between py-2 text-xs uppercase tracking-ultra-wide text-brand-black font-medium"
                  >
                    <span>Shopping Bag</span>
                    <span className="px-2 py-0.5 bg-brand-black text-brand-ivory text-[10px] rounded-full">
                      {cartCount}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenShortlist();
                    }}
                    className="w-full flex items-center justify-between py-2 text-xs uppercase tracking-ultra-wide text-brand-grey hover:text-brand-black"
                  >
                    <span>Saved Shortlist</span>
                    <span className="px-2 py-0.5 bg-brand-beige border border-brand-border text-brand-black text-[10px]">
                      {shortlistCount}
                    </span>
                  </button>
                </div>
              </nav>
            </div>

            {/* Drawer Bottom */}
            <div className="pt-6 border-t border-brand-border space-y-4">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-3 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-colors"
              >
                Visit Instagram
              </a>
              <p className="text-[11px] text-center text-brand-grey">
                {BRAND_INFO.name} · Prototype Store
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
