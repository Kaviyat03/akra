import React from 'react';
import { X, Trash2, Heart, ArrowRight } from 'lucide-react';
import { WhatsAppEnquiryButton } from './WhatsAppEnquiryButton';
import { BRAND_INFO } from '../data/brand';
import { formatPrice } from '../utils/formatters';

export function WishlistDrawer({
  isOpen,
  onClose,
  shortlistedProducts,
  onRemoveItem,
  onViewProduct,
  onExplore,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-black/60 backdrop-blur-sm animate-fade-in flex justify-end"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortlist-title"
    >
      <div
        className="relative w-full max-w-md bg-brand-ivory border-l border-brand-border h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border bg-brand-ivory-light">
          <div>
            <span className="text-[10px] tracking-mega-wide uppercase text-brand-grey font-medium block">
              Bespoke Concierge
            </span>
            <h3 id="shortlist-title" className="font-serif text-2xl text-brand-black">
              Enquiry Shortlist ({shortlistedProducts.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-brand-grey hover:text-brand-black transition-colors rounded-full"
            aria-label="Close shortlist"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Shortlist Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <p className="text-xs text-brand-grey font-light leading-relaxed">
            Curate pieces you wish to discuss with our design team. Ready for consultation via WhatsApp or Instagram.
          </p>

          {shortlistedProducts.length === 0 ? (
            <div className="py-16 text-center space-y-4 border border-dashed border-brand-border p-6 mt-4">
              <Heart className="w-8 h-8 text-brand-grey/40 mx-auto stroke-[1.5]" />
              <p className="font-serif text-xl text-brand-black">No Pieces Shortlisted</p>
              <p className="text-xs text-brand-grey max-w-xs mx-auto">
                Explore our sarees and salwars and tap the heart icon on any creation to save it for your consultation.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onExplore();
                }}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal"
              >
                <span>Browse Creations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {shortlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-3 bg-brand-ivory-light border border-brand-border"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-20 object-cover border border-brand-border cursor-pointer"
                    onClick={() => {
                      onViewProduct(product);
                      onClose();
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] tracking-widest uppercase text-brand-grey block">
                      {product.category}
                    </span>
                    <h4
                      onClick={() => {
                        onViewProduct(product);
                        onClose();
                      }}
                      className="font-serif text-base text-brand-black hover:text-brand-gold cursor-pointer truncate"
                    >
                      {product.name}
                    </h4>
                    <span className="text-sm sm:text-base font-sans text-brand-black block mt-0.5 font-medium">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(product.id)}
                    className="p-2 text-brand-grey hover:text-red-700 transition-colors"
                    aria-label={`Remove ${product.name} from shortlist`}
                  >
                    <Trash2 className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        {shortlistedProducts.length > 0 && (
          <div className="p-6 border-t border-brand-border bg-brand-ivory-light space-y-3">
            <WhatsAppEnquiryButton
              product={shortlistedProducts[0]}
              className="w-full py-3.5 text-xs tracking-ultra-wide"
            />
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 border border-brand-border text-brand-black text-xs uppercase tracking-ultra-wide hover:bg-brand-beige transition-colors"
            >
              Enquire on Instagram
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
