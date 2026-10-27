import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Lock, Package, Info } from 'lucide-react';

export function CheckoutPage({ onReturnToCart, onOrderConfirmed }) {
  const {
    cart,
    cartCount,
    subtotal,
    deliveryCharge,
    total,
    clearCart,
    setLastOrder,
  } = useCart();

  const [demoPaymentMethod, setDemoPaymentMethod] = useState('concierge');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, allow user to return to shopping
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-brand-ivory pt-28 pb-20 text-center">
        <div className="max-w-md mx-auto px-4 bg-brand-ivory-light border border-brand-border p-8 shadow-sm">
          <h2 className="font-serif text-2xl text-brand-black mb-3">No Items to Checkout</h2>
          <p className="text-xs text-brand-grey mb-6">
            Your shopping bag is currently empty. Please add creations before proceeding to checkout.
          </p>
          <button
            type="button"
            onClick={onReturnToCart}
            className="px-6 py-3 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide"
          >
            Return to Cart
          </button>
        </div>
      </div>
    );
  }

  const handleDemoCheckout = () => {
    setIsSubmitting(true);
    
    // Simulate brief processing for realistic demonstration feedback
    setTimeout(() => {
      const orderRef = `AKRA-DEMO-${Math.floor(10000 + Math.random() * 90000)}`;
      const orderSummary = {
        orderId: orderRef,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        items: [...cart],
        subtotal: subtotal,
        deliveryCharge: deliveryCharge,
        total: total,
        paymentMethod: demoPaymentMethod === 'concierge' ? 'Bespoke Concierge Reserve' : 'Cash on Delivery (Demo)',
      };

      setLastOrder(orderSummary);
      clearCart();
      setIsSubmitting(false);
      onOrderConfirmed(orderSummary);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-brand-ivory pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onReturnToCart}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-brand-grey hover:text-brand-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Shopping Bag</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-brand-border pb-6 mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey block mb-1">
            STEP 2 OF 2 · CHECKOUT PROTOTYPE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
            Checkout Demonstration
          </h1>
        </div>

        {/* Prominent Demonstration Notice */}
        <div className="mb-8 p-4 sm:p-5 bg-brand-beige/60 border border-brand-border flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <p className="font-semibold text-brand-black uppercase tracking-wider text-[11px]">
              Prototype Notice: No Real Financial Transactions
            </p>
            <p className="text-brand-charcoal font-sans leading-relaxed font-light">
              This is an interactive frontend reference for client review. We do not collect real personal data, payment cards, or bank details. Clicking <strong>Demo Checkout</strong> will simulate an instant order confirmation.
            </p>
          </div>
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Simulated Delivery & Payment Options */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Simulated Shipping Address Display (No personal data collected) */}
            <div className="bg-brand-ivory-light border border-brand-border p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-brand-gold" />
                  <h2 className="font-serif text-lg sm:text-xl text-brand-black">
                    Delivery Details (Prototype Mode)
                  </h2>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand-grey">
                  Pre-filled Sample
                </span>
              </div>

              <div className="text-xs text-brand-charcoal space-y-1.5 font-sans bg-brand-ivory p-4 border border-brand-border/60">
                <p className="font-medium text-brand-black">Client Sample Address (Reference)</p>
                <p className="text-brand-grey">Boutique Guest · Demonstration Suite</p>
                <p className="text-brand-grey">AKRA Couture Studio Reference · India</p>
                <p className="text-[11px] text-brand-gold pt-1">
                  ✓ Complimentary Express Boutique Dispatch Included
                </p>
              </div>
            </div>

            {/* Simulated Payment Method (Placeholder) */}
            <div className="bg-brand-ivory-light border border-brand-border p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brand-border">
                <Lock className="w-4 h-4 text-brand-gold" />
                <h2 className="font-serif text-lg sm:text-xl text-brand-black">
                  Simulated Payment Options
                </h2>
              </div>

              <div className="space-y-3 pt-1">
                <label
                  className={`flex items-start gap-3.5 p-3.5 border cursor-pointer transition-colors ${
                    demoPaymentMethod === 'concierge'
                      ? 'border-brand-black bg-brand-ivory'
                      : 'border-brand-border bg-brand-ivory/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="demoPayment"
                    value="concierge"
                    checked={demoPaymentMethod === 'concierge'}
                    onChange={() => setDemoPaymentMethod('concierge')}
                    className="mt-0.5 accent-brand-black"
                  />
                  <div>
                    <span className="font-medium text-xs text-brand-black block">
                      Demonstration Order — Reserve for Concierge Review
                    </span>
                    <span className="text-[11px] text-brand-grey leading-relaxed block mt-0.5">
                      Simulates placing an order into AKRA's reservation queue for client review.
                    </span>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3.5 p-3.5 border cursor-pointer transition-colors ${
                    demoPaymentMethod === 'cod'
                      ? 'border-brand-black bg-brand-ivory'
                      : 'border-brand-border bg-brand-ivory/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="demoPayment"
                    value="cod"
                    checked={demoPaymentMethod === 'cod'}
                    onChange={() => setDemoPaymentMethod('cod')}
                    className="mt-0.5 accent-brand-black"
                  />
                  <div>
                    <span className="font-medium text-xs text-brand-black block">
                      Demonstration Pay on Delivery (Simulated)
                    </span>
                    <span className="text-[11px] text-brand-grey leading-relaxed block mt-0.5">
                      Simulates checkout with payment due upon physical delivery.
                    </span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary & Demo Checkout Button */}
          <div className="lg:col-span-5">
            <div className="bg-brand-ivory-light border border-brand-border p-6 sm:p-8 space-y-6 sticky top-28 shadow-sm">
              
              <div className="pb-3 border-b border-brand-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-brand-grey font-medium block">
                    Review Order
                  </span>
                  <h2 className="font-serif text-2xl text-brand-black">
                    Summary ({cartCount} {cartCount === 1 ? 'Piece' : 'Pieces'})
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onReturnToCart}
                  className="text-xs uppercase tracking-widest text-brand-grey hover:text-brand-black underline"
                >
                  Edit Cart
                </button>
              </div>

              {/* Items List Mini */}
              <div className="max-h-60 overflow-y-auto divide-y divide-brand-border/60 pr-1">
                {cart.map((item) => {
                  const itemPaise = Math.round((Number(item.price) || 0) * 100) * item.quantity;
                  const itemTotal = itemPaise / 100;

                  return (
                    <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-14 object-cover border border-brand-border flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-serif text-sm text-brand-black truncate font-medium">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-brand-grey">
                            Qty: {item.quantity} {item.size ? `· Size: ${item.size}` : ''}
                          </p>
                        </div>
                      </div>

                      <span className="font-sans font-medium text-brand-black flex-shrink-0">
                        {formatPrice(itemTotal)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Subtotal & Delivery Totals */}
              <div className="space-y-3 pt-4 border-t border-brand-border text-xs text-brand-charcoal">
                <div className="flex items-center justify-between">
                  <span className="text-brand-grey">Subtotal</span>
                  <span className="font-sans font-medium text-brand-black">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-brand-grey">Delivery Charge Placeholder</span>
                  <span className="font-sans text-brand-black font-medium">
                    Complimentary (₹0)
                  </span>
                </div>

                <div className="pt-3 border-t border-brand-border flex items-baseline justify-between">
                  <span className="font-serif text-base text-brand-black font-semibold">
                    Grand Total
                  </span>
                  <div className="text-right">
                    <span className="font-sans text-2xl font-medium text-brand-black">
                      {formatPrice(total)}
                    </span>
                    <span className="block text-[10px] text-brand-grey font-sans">
                      All taxes included
                    </span>
                  </div>
                </div>
              </div>

              {/* Demo Action Button */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={handleDemoCheckout}
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-all duration-300 shadow-sm font-medium focus:outline-none disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Demo...</span>
                  ) : (
                    <>
                      <span>Complete Demo Checkout</span>
                      <ArrowRight className="w-4 h-4 text-brand-gold" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-brand-grey font-sans leading-relaxed">
                  Clicking Complete Demo Checkout generates a prototype order confirmation without charging payment.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
