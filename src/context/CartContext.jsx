import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const CartContext = createContext(null);

const STORAGE_KEY = 'akra_cart_demo';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      // Validate that each item has a matching product and valid quantity
      return Array.isArray(parsed)
        ? parsed.filter(item => item && item.productId && item.quantity > 0)
        : [];
    } catch (e) {
      console.warn('Failed to load cart from localStorage:', e);
      return [];
    }
  });

  const [lastOrder, setLastOrder] = useState(() => {
    try {
      const stored = localStorage.getItem('akra_last_demo_order');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  // Persist last completed demo order
  useEffect(() => {
    try {
      if (lastOrder) {
        localStorage.setItem('akra_last_demo_order', JSON.stringify(lastOrder));
      }
    } catch (e) {
      console.warn('Failed to save demo order to localStorage:', e);
    }
  }, [lastOrder]);

  /**
   * Add a product to the cart.
   * If the same product and variant already exists, increments its quantity.
   * If a new variant or product is passed, appends as distinct cart item.
   */
  const addToCart = (product, quantity = 1, selectedVariant = null) => {
    if (!product || !product.id) return;
    const addQty = Math.max(1, parseInt(quantity, 10) || 1);
    const size = selectedVariant?.size || null;
    const color = selectedVariant?.color || null;
    const variantKey = size ? `${product.id}_size_${size}` : product.id;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(item => item.id === variantKey);

      if (existingIndex > -1) {
        // Increment quantity of existing line item
        const updated = [...prevCart];
        const newQuantity = updated[existingIndex].quantity + addQty;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(99, newQuantity),
        };
        return updated;
      }

      // Read price directly from central product data to ensure source of truth
      const centralProduct = PRODUCTS.find(p => p.id === product.id) || product;
      const unitPrice = typeof centralProduct.price === 'number' ? centralProduct.price : 0;

      const newItem = {
        id: variantKey,
        productId: product.id,
        name: centralProduct.name,
        category: centralProduct.category,
        image: centralProduct.image,
        price: unitPrice,
        size: size,
        color: color,
        quantity: addQty,
      };

      return [...prevCart, newItem];
    });
  };

  /**
   * Update quantity of an existing cart item.
   * Prevents invalid quantities (< 1 or non-integer).
   */
  const updateQuantity = (itemId, newQuantity) => {
    const qty = parseInt(newQuantity, 10);
    if (isNaN(qty) || qty <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.min(99, qty) }
          : item
      )
    );
  };

  /**
   * Remove a line item from the cart.
   */
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  /**
   * Clear all items from cart (e.g. on order completion).
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * Currency calculations using integer paise to eliminate floating point issues.
   * 1 Rupee = 100 paise.
   */
  const subtotalInPaise = cart.reduce((acc, item) => {
    const unitPaise = Math.round((Number(item.price) || 0) * 100);
    const itemPaise = unitPaise * item.quantity;
    return acc + itemPaise;
  }, 0);

  const subtotal = subtotalInPaise / 100;
  
  // Complimentary boutique delivery for prototype demonstration
  const deliveryChargeInPaise = 0;
  const deliveryCharge = 0;

  const totalInPaise = subtotalInPaise + deliveryChargeInPaise;
  const total = totalInPaise / 100;

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        subtotalInPaise,
        deliveryCharge,
        total,
        totalInPaise,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        lastOrder,
        setLastOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
