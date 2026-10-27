import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/formatters';

export function SearchModal({ isOpen, onClose, onSelectProduct, onApplyCategory }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? []
    : PRODUCTS.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-brand-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search AKRA Collections"
    >
      <div
        className="w-full max-w-2xl bg-brand-ivory border border-brand-border shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b-2 border-brand-black pb-3">
          <Search className="w-5 h-5 text-brand-grey mr-3 stroke-[1.5]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Sarees, Salwars, or motifs..."
            className="w-full bg-transparent text-lg sm:text-xl font-serif text-brand-black placeholder:text-brand-grey/60 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-brand-grey hover:text-brand-black mr-2"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-ultra-wide text-brand-grey hover:text-brand-black pl-3 border-l border-brand-border"
          >
            Close
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-widest text-brand-grey">Popular:</span>
          {['Sarees', 'Salwars', 'Organza', 'Embroidery', 'Zari'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setQuery(tag)}
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-brand-beige border border-brand-border text-brand-charcoal hover:bg-brand-black hover:text-brand-ivory transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="mt-6 max-h-[50vh] overflow-y-auto space-y-3">
          {query.trim() !== '' && results.length === 0 && (
            <div className="py-8 text-center text-brand-grey text-xs">
              No pieces match your search "{query}". Try searching for "Saree" or "Salwar".
            </div>
          )}

          {results.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                onSelectProduct(product);
                onClose();
              }}
              className="group flex items-center gap-4 p-3 bg-brand-ivory-light border border-brand-border/60 hover:border-brand-black cursor-pointer transition-colors"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-14 object-cover border border-brand-border"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-widest uppercase text-brand-grey block">
                    {product.category}
                  </span>
                  <span className="text-xs sm:text-sm font-sans text-brand-black font-medium">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p className="font-serif text-base text-brand-black group-hover:text-brand-gold transition-colors truncate">
                  {product.name}
                </p>
                <p className="text-[11px] text-brand-grey truncate">
                  {product.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-grey group-hover:text-brand-black group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
