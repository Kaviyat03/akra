import React from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export function ProductCard({
  product,
  onViewDetails,
  onAddToCartQuick,
  isFavorite,
  onToggleFavorite,
}) {
  const formattedPrice = formatPrice(product.price);

  return (
    <article className="group relative flex flex-col bg-brand-ivory-light border border-brand-border/70 hover:border-brand-border transition-all duration-300">
      
      {/* Image Container with Zoom & Hover Actions */}
      <div className="relative aspect-[4/5] bg-brand-beige overflow-hidden image-zoom-container">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center cursor-pointer"
          onClick={() => onViewDetails(product)}
          loading="lazy"
        />

        {/* Favorite Icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 z-10 ${
            isFavorite
              ? 'bg-brand-black text-brand-gold shadow-md'
              : 'bg-brand-ivory/80 text-brand-grey hover:text-brand-black hover:bg-brand-ivory'
          }`}
          aria-label={isFavorite ? `Remove ${product.name} from shortlist` : `Add ${product.name} to shortlist`}
          title={isFavorite ? "Saved in Shortlist" : "Save Piece"}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-brand-gold stroke-brand-gold' : 'stroke-[1.5]'}`} />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2 py-0.5 bg-brand-ivory/90 backdrop-blur-md text-[9px] tracking-mega-wide uppercase text-brand-charcoal border border-brand-border/60">
            {product.category}
          </span>
        </div>

        {/* Subtle Hover Action Overlay (Desktop) */}
        <div className="absolute inset-0 bg-brand-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-3">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-brand-ivory text-brand-black text-[10px] tracking-ultra-wide uppercase hover:bg-brand-gold transition-colors shadow-md"
            aria-label={`View details for ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCartQuick) onAddToCartQuick(product);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-brand-black text-brand-ivory text-[10px] tracking-ultra-wide uppercase hover:bg-brand-charcoal transition-colors shadow-md"
            aria-label={`Quick add ${product.name} to bag`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-brand-gold" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Card Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-t border-brand-border/40">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-widest uppercase text-brand-grey block mb-1">
            {product.category}
          </span>
          <h4 className="font-serif text-lg sm:text-xl text-brand-black tracking-normal leading-snug">
            {product.name}
          </h4>
          <p className="text-xs text-brand-grey font-sans line-clamp-1 mt-1 font-light min-h-[1rem]">
            {product.description}
          </p>

          {/* Price displayed clearly below product name or description in clean sans-serif */}
          <div className="mt-3">
            <span className="font-sans text-base sm:text-lg text-brand-black font-medium tracking-tight block">
              {formattedPrice}
            </span>
          </div>
        </div>

        {/* Bottom Action Row: properly aligned Explore button */}
        <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between text-xs">
          <span className="text-[10px] tracking-widest uppercase text-brand-grey truncate max-w-[50%]">
            {product.availabilityStatus || 'Available'}
          </span>

          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="text-[11px] uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors font-medium flex items-center gap-1 focus:outline-none"
          >
            <span>Explore</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

      </div>
    </article>
  );
}
