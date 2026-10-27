import React from 'react';
import { formatPrice } from '../utils/formatters';
import { CheckCircle2, ArrowRight, ShoppingBag, ShieldCheck, Printer } from 'lucide-react';

export function OrderConfirmationPage({ order, onContinueShopping }) {
  if (!order) {
    return (
      <div className="min-h-screen bg-brand-ivory pt-28 pb-20 text-center">
        <div className="max-w-md mx-auto px-4 bg-brand-ivory-light border border-brand-border p-8 shadow-sm">
          <h2 className="font-serif text-2xl text-brand-black mb-3">No Active Demo Order Found</h2>
          <p className="text-xs text-brand-grey mb-6">
            You can return to the boutique to browse our saree and salwar collections.
          </p>
          <button
            type="button"
            onClick={onContinueShopping}
            className="px-6 py-3 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide"
          >
            Explore Collections
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-ivory pt-24 sm:pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Banner Card */}
        <div className="bg-brand-ivory-light border border-brand-border p-6 sm:p-10 shadow-sm text-center space-y-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-brand-beige border border-brand-border mx-auto flex items-center justify-center text-green-700">
            <CheckCircle2 className="w-9 h-9 stroke-[1.5]" />
          </div>

          <div>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey block mb-1">
              DEMONSTRATION PROTOTYPE COMPLETE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
              Order Confirmed
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-brand-grey max-w-lg mx-auto font-sans font-light leading-relaxed">
            Thank you for exploring the AKRA couture ecommerce prototype. Your simulated order has been registered in the demonstration environment.
          </p>

          <div className="inline-block py-2 px-5 bg-brand-beige/60 border border-brand-border text-xs text-brand-black font-sans">
            Reference ID: <strong className="font-semibold tracking-wider font-mono">{order.orderId}</strong>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mb-8 p-4 bg-brand-beige/50 border border-brand-border flex items-start gap-3 text-xs text-brand-charcoal">
          <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Demonstration Notice:</strong> This website is an interactive frontend reference concept. No actual bank charge or financial transaction occurred, and no commercial shipment will be dispatched.
          </p>
        </div>

        {/* Order Details Breakdown */}
        <div className="bg-brand-ivory-light border border-brand-border p-6 sm:p-8 space-y-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-brand-border gap-2">
            <div>
              <span className="text-[10px] tracking-mega-wide uppercase text-brand-grey block">
                Order Information
              </span>
              <p className="font-serif text-xl text-brand-black">
                Items Purchased ({order.items?.length || 0})
              </p>
            </div>
            <span className="text-xs text-brand-grey font-sans">
              Placed on: {order.date}
            </span>
          </div>

          {/* Items Table */}
          <div className="divide-y divide-brand-border/60">
            {order.items?.map((item) => {
              const itemPaise = Math.round((Number(item.price) || 0) * 100) * item.quantity;
              const itemTotal = itemPaise / 100;

              return (
                <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover border border-brand-border flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-[9px] tracking-widest uppercase text-brand-grey block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-brand-black truncate font-medium">
                        {item.name}
                      </h4>
                      <p className="text-xs text-brand-grey mt-0.5">
                        Qty: {item.quantity} {item.size ? `· Size: ${item.size}` : ''}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-brand-grey block">
                      {item.quantity} &times; {formatPrice(item.price)}
                    </span>
                    <span className="font-sans text-sm sm:text-base font-medium text-brand-black">
                      {formatPrice(itemTotal)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Totals Summary */}
          <div className="pt-4 border-t border-brand-border space-y-2.5 text-xs text-brand-charcoal">
            <div className="flex justify-between">
              <span className="text-brand-grey">Subtotal</span>
              <span className="font-sans font-medium text-brand-black">
                {formatPrice(order.subtotal)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-brand-grey">Delivery (Bespoke Prototype)</span>
              <span className="font-sans font-medium text-brand-black">
                Complimentary (₹0)
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-brand-grey">Payment Method</span>
              <span className="font-sans font-medium text-brand-black">
                {order.paymentMethod}
              </span>
            </div>

            <div className="pt-3 border-t border-brand-border flex justify-between items-baseline">
              <span className="font-serif text-base text-brand-black font-semibold">
                Grand Total
              </span>
              <span className="font-sans text-2xl font-medium text-brand-black">
                {formatPrice(order.total)}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onContinueShopping}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-black text-brand-ivory text-xs uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-all duration-300 shadow-sm"
          >
            <span>Continue Browsing Boutique</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </button>
        </div>

      </div>
    </div>
  );
}
