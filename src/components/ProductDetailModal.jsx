import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Heart, ShoppingBag, ArrowRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppEnquiryButton } from './WhatsAppEnquiryButton';
import { BRAND_INFO } from '../data/brand';
import { formatPrice } from '../utils/formatters';
import { useCart } from '../context/CartContext';

export function ProductDetailModal({
  product,
  onClose,
  isFavorite,
  onToggleFavorite,
  onBuyNowDirect,
}) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product?.availableSizes?.[0] || (product?.category === 'Sarees' ? 'Free Size (6.3m Drape)' : 'M')
  );
  const [addedFeedback, setAddedFeedback] = useState(false);

  const formattedPrice = product ? formatPrice(product.price) : null;

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedSize(
        product.availableSizes?.[0] || (product.category === 'Sarees' ? 'Free Size (6.3m Drape)' : 'M')
      );
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity, { size: selectedSize });
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, { size: selectedSize });
    onClose();
    if (onBuyNowDirect) {
      onBuyNowDirect();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-brand-black/70 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-brand-ivory border border-brand-border shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-ivory-light">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-brand-black hover:text-brand-gold transition-colors focus:outline-none"
            aria-label="Return to Collection"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Collection</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-brand-grey hover:text-brand-black transition-colors rounded-full focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Modal Body: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] md:max-h-[78vh] overflow-y-auto">
          
          {/* Left Column: Large Product Image */}
          <div className="md:col-span-6 bg-brand-beige p-6 sm:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-border">
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden border border-brand-border shadow-md bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-1 bg-brand-ivory/90 backdrop-blur-sm text-[9px] tracking-mega-wide uppercase text-brand-black border border-brand-border font-medium">
                  Reference Asset · {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Product Information & Ecommerce Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Category & Ref Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-mega-wide uppercase text-brand-grey font-semibold">
                  AKRA ARCHIVE · {product.category}
                </span>

                <button
                  type="button"
                  onClick={() => onToggleFavorite(product.id)}
                  className={`p-2 rounded-full border transition-colors ${
                    isFavorite
                      ? 'bg-brand-black border-brand-black text-brand-gold'
                      : 'border-brand-border text-brand-grey hover:text-brand-black hover:border-brand-black'
                  }`}
                  aria-label={isFavorite ? "Saved in Shortlist" : "Save Piece"}
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-brand-gold stroke-brand-gold' : 'stroke-[1.5]'}`} />
                </button>
              </div>

              {/* Title */}
              <h3 id="product-modal-title" className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-tight">
                {product.name}
              </h3>

              {/* Price Display */}
              <div className="py-3 px-4 bg-brand-beige/60 border border-brand-border inline-block w-full">
                <span className="text-[10px] tracking-widest uppercase text-brand-grey block mb-1">
                  Price
                </span>
                <p className="font-sans text-[22px] sm:text-2xl md:text-[26px] text-brand-black font-medium tracking-tight">
                  {formattedPrice}
                </p>
                <p className="text-[11px] text-brand-grey font-sans mt-0.5">
                  Demonstration illustrative price · Prototype checkout active
                </p>
              </div>

              {/* Description */}
              {product.description && (
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] tracking-widest uppercase text-brand-grey font-medium block">
                    Curatorial Notes
                  </span>
                  <p className="text-xs sm:text-sm text-brand-charcoal font-sans font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Available Sizes / Variants */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-brand-border/60">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase text-brand-grey font-medium">
                      Select Size
                    </span>
                    <span className="text-[11px] text-brand-charcoal font-sans">
                      Selected: <strong>{selectedSize}</strong>
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 text-xs font-sans tracking-wider border transition-colors focus:outline-none ${
                          selectedSize === size
                            ? 'border-brand-black bg-brand-black text-brand-ivory font-medium'
                            : 'border-brand-border bg-brand-ivory text-brand-charcoal hover:border-brand-black/60'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Controls */}
              <div className="pt-2 flex items-center justify-between border-t border-brand-border/60">
                <span className="text-[10px] tracking-widest uppercase text-brand-grey font-medium">
                  Quantity
                </span>
                
                <div className="flex items-center border border-brand-border bg-brand-ivory">
                  <button
                    type="button"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-brand-grey hover:text-brand-black transition-colors focus:outline-none"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-xs font-sans font-medium text-brand-black">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(q => Math.min(99, q + 1))}
                    className="w-8 h-8 flex items-center justify-center text-brand-grey hover:text-brand-black transition-colors focus:outline-none"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

            {/* Prominent Ecommerce Actions */}
            <div className="pt-4 border-t border-brand-border space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs uppercase tracking-ultra-wide transition-all duration-300 font-medium border ${
                    addedFeedback
                      ? 'bg-green-800 text-white border-green-800'
                      : 'border-brand-black bg-transparent text-brand-black hover:bg-brand-black hover:text-brand-ivory'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{addedFeedback ? 'Added to Bag ✓' : 'Add to Cart'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-all duration-300 font-medium shadow-sm group"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Secondary Concierge Enquiries */}
              <div className="pt-2 grid grid-cols-2 gap-2 text-center">
                <WhatsAppEnquiryButton
                  product={product}
                  variant="secondary"
                  className="w-full py-2.5 text-[10px] tracking-wider"
                />

                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 border border-brand-border text-brand-black text-[10px] uppercase tracking-wider hover:bg-brand-beige/40 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Instagram</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-brand-grey tracking-wider uppercase pt-1">
                Ref ID: {product.id} · Demonstration Frontend Prototype
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
