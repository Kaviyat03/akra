import React, { useState } from 'react';
import { MessageCircle, ExternalLink, Copy, Check } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { BRAND_INFO } from '../data/brand';
import { formatPrice } from '../utils/formatters';

/**
 * Reusable WhatsApp Enquiry Button
 * Complies with requirement:
 * - Prepares WhatsApp message containing product name or reference
 * - Avoids inventing a business phone number
 * - Opens WhatsApp only if official number is configured
 * - Otherwise displays polished concierge modal directing to Instagram or copying message
 */
export function WhatsAppEnquiryButton({ product, variant = 'primary', className = '' }) {
  const [showConciergeModal, setShowConciergeModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const priceDisplay = product ? formatPrice(product.price) : null;
  const enquiryMessage = product
    ? priceDisplay
      ? `Hello AKRA Couture, I am inquiring about ${product.name} (${product.category}) priced at ${priceDisplay}. Could you please share more details regarding availability?`
      : `Hello AKRA Couture, I am inquiring about ${product.name} (${product.category}). Could you please share more details regarding availability and pricing?`
    : `Hello AKRA Couture, I would like to make an enquiry regarding your saree and salwar collections.`;

  const handleClick = (e) => {
    e.stopPropagation();
    if (BRAND_INFO.whatsAppNumber && BRAND_INFO.whatsAppNumber.trim() !== '') {
      // Official phone number is configured
      const cleanPhone = BRAND_INFO.whatsAppNumber.replace(/[^0-9]/g, '');
      const encodedMsg = encodeURIComponent(enquiryMessage);
      window.open(`https://wa.me/${cleanPhone}?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
    } else {
      // Official phone number not yet configured — show concierge guidance modal
      setShowConciergeModal(true);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(enquiryMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const baseStyles = variant === 'secondary'
    ? 'border border-brand-black/20 bg-transparent text-brand-black hover:border-brand-black hover:bg-brand-black/5'
    : 'bg-brand-black text-brand-ivory hover:bg-brand-charcoal';

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-ultra-wide uppercase transition-all duration-300 ${baseStyles} ${className}`}
        aria-label={`Enquire via WhatsApp for ${product?.name || 'collection'}`}
      >
        <MessageCircle className="w-4 h-4 text-brand-gold" />
        <span>Enquire on WhatsApp</span>
      </button>

      {/* Concierge Modal for unconfigured phone number */}
      {showConciergeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowConciergeModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="concierge-title"
        >
          <div
            className="relative w-full max-w-lg bg-brand-ivory border border-brand-border p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-5">
              <div>
                <span className="text-[10px] tracking-mega-wide uppercase text-brand-grey font-medium block">
                  AKRA Concierge
                </span>
                <h3 id="concierge-title" className="text-xl sm:text-2xl font-serif text-brand-black">
                  Product Enquiry
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowConciergeModal(false)}
                className="text-brand-grey hover:text-brand-black p-2 text-xl leading-none transition-colors"
                aria-label="Close concierge modal"
              >
                &times;
              </button>
            </div>

            {product && (
              <div className="flex items-center gap-4 p-3 bg-brand-beige/50 border border-brand-border/60 mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-16 object-cover border border-brand-border"
                />
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-brand-grey">
                    {product.category}
                  </span>
                  <p className="font-serif text-base text-brand-black font-medium">
                    {product.name}
                  </p>
                  <p className="text-xs text-brand-grey">
                    Ref: {product.id} {priceDisplay ? `· ${priceDisplay}` : ''}
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-4 text-sm text-brand-charcoal mb-6">
              <p className="text-xs leading-relaxed text-brand-grey">
                This website is a reference boutique concept. The brand's official WhatsApp business number will be linked upon client configuration.
              </p>

              <div className="bg-brand-ivory-light border border-brand-border p-3.5 rounded-sm">
                <span className="text-[10px] tracking-widest uppercase text-brand-grey block mb-1 font-medium">
                  Prepared Enquiry Message
                </span>
                <p className="text-xs text-brand-black font-sans italic leading-relaxed">
                  "{enquiryMessage}"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-brand-border">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-black text-brand-ivory px-5 py-3 text-xs tracking-ultra-wide uppercase hover:bg-brand-charcoal transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-brand-gold" />
                <span>Enquire via Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center justify-center gap-2 border border-brand-border bg-transparent px-5 py-3 text-xs tracking-ultra-wide uppercase text-brand-black hover:bg-brand-beige/40 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-brand-grey" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
