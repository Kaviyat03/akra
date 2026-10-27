import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { ShoppingBag, ArrowLeft, ArrowRight, Trash2, Plus, Minus, ShieldCheck, Sparkles } from 'lucide-react';

export function CartPage({ onContinueShopping, onProceedToCheckout, onViewProduct }) {
  const {
    cart,
    cartCount,
    subtotal,
    deliveryCharge,
    total,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-brand-ivory pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onContinueShopping}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-brand-grey hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-brand-border pb-6 mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey block mb-1">
              DEMONSTRATION BAG
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
              Shopping Cart
            </h1>
          </div>
          <span className="text-xs uppercase tracking-widest text-brand-grey font-sans">
            {cartCount} {cartCount === 1 ? 'Piece' : 'Pieces'} Curated
          </span>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="py-20 sm:py-28 text-center bg-brand-ivory-light border border-dashed border-brand-border p-8 max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-beige/50 border border-brand-border flex items-center justify-center text-brand-grey">
              <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
            </div>
            
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">
                Your Shopping Bag is Empty
              </h2>
              <p className="text-xs sm:text-sm text-brand-grey max-w-sm mx-auto font-sans font-light leading-relaxed">
                Explore our curated collection of sarees and thoughtfully tailored salwars to add pieces to your bag.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onContinueShopping}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-all duration-300 shadow-sm"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>
        ) : (
          /* Active Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-brand-ivory-light border border-brand-border divide-y divide-brand-border">
                {cart.map((item) => {
                  const lineTotalInPaise = Math.round((Number(item.price) || 0) * 100) * item.quantity;
                  const lineTotal = lineTotalInPaise / 100;

                  return (
                    <article
                      key={item.id}
                      className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between transition-colors"
                    >
                      {/* Product Thumbnail & Details */}
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div
                          onClick={() => onViewProduct && onViewProduct(item.productId)}
                          className="w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 bg-brand-beige border border-brand-border overflow-hidden cursor-pointer image-zoom-container"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-1 min-w-0">
                          <span className="text-[9px] tracking-mega-wide uppercase text-brand-grey block">
                            {item.category}
                          </span>
                          <h3
                            onClick={() => onViewProduct && onViewProduct(item.productId)}
                            className="font-serif text-lg sm:text-xl text-brand-black hover:text-brand-gold transition-colors cursor-pointer truncate"
                          >
                            {item.name}
                          </h3>
                          
                          {/* Selected Size / Variant */}
                          {item.size && (
                            <p className="text-xs text-brand-charcoal font-sans">
                              <span className="text-brand-grey">Size:</span> {item.size}
                            </p>
                          )}

                          {/* Unit Price */}
                          <p className="text-xs sm:text-sm font-sans font-medium text-brand-grey">
                            Unit Price: <span className="text-brand-black">{formatPrice(item.price)}</span>
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls & Line Total */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-brand-border/40">
                        
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-brand-border bg-brand-ivory">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-brand-grey hover:text-brand-black hover:bg-brand-beige/50 transition-colors focus:outline-none"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          
                          <span className="w-10 text-center font-sans text-xs font-medium text-brand-black">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-brand-grey hover:text-brand-black hover:bg-brand-beige/50 transition-colors focus:outline-none"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line Total */}
                        <div className="text-right min-w-[90px]">
                          <span className="text-[9px] tracking-widest uppercase text-brand-grey block sm:hidden">
                            Line Total
                          </span>
                          <span className="font-sans text-base sm:text-lg font-medium text-brand-black">
                            {formatPrice(lineTotal)}
                          </span>
                        </div>

                        {/* Remove Action */}
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-brand-grey hover:text-red-700 transition-colors focus:outline-none"
                          aria-label={`Remove ${item.name} from bag`}
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4 stroke-[1.5]" />
                        </button>

                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Back to shopping inline link */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onContinueShopping}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-brand-black hover:text-brand-gold transition-colors font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Browsing Collections</span>
                </button>
              </div>
            </div>

            {/* Right Column: Order Summary Box */}
            <div className="lg:col-span-4">
              <div className="bg-brand-ivory-light border border-brand-border p-6 sm:p-8 space-y-6 sticky top-28 shadow-sm">
                
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-brand-grey font-medium block mb-1">
                    Reference Summary
                  </span>
                  <h2 className="font-serif text-2xl text-brand-black">
                    Order Summary
                  </h2>
                </div>

                <div className="space-y-3.5 text-xs text-brand-charcoal pt-4 border-t border-brand-border">
                  <div className="flex items-center justify-between">
                    <span className="text-brand-grey">Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'})</span>
                    <span className="font-sans font-medium text-brand-black text-sm">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-brand-grey">Delivery Charge</span>
                    <span className="font-sans text-brand-black font-medium">
                      Complimentary (₹0)
                    </span>
                  </div>

                  <div className="pt-3 border-t border-brand-border flex items-baseline justify-between">
                    <span className="font-serif text-base text-brand-black font-medium">
                      Total Amount
                    </span>
                    <div className="text-right">
                      <span className="font-sans text-xl sm:text-2xl font-medium text-brand-black">
                        {formatPrice(total)}
                      </span>
                      <span className="block text-[10px] text-brand-grey font-sans">
                        Inclusive of all bespoke taxes
                      </span>
                    </div>
                  </div>
                </div>

                {/* Demonstration Notice */}
                <div className="bg-brand-beige/50 border border-brand-border p-3.5 text-[11px] text-brand-grey space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-black font-medium">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span className="uppercase tracking-widest text-[10px]">Frontend Prototype</span>
                  </div>
                  <p className="leading-relaxed">
                    This is a reference boutique prototype. Prices shown are demonstration figures. Proceeding to checkout will simulate an order confirmation without real financial transactions.
                  </p>
                </div>

                {/* Checkout Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="button"
                    onClick={onProceedToCheckout}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-all duration-300 shadow-sm font-medium group"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={onContinueShopping}
                    className="w-full py-3 border border-brand-border bg-transparent text-brand-black text-xs uppercase tracking-ultra-wide hover:bg-brand-beige/40 transition-colors text-center"
                  >
                    Continue Shopping
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
