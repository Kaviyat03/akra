import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionIntro } from './components/CollectionIntro';
import { ShopByCategory } from './components/ShopByCategory';
import { NewArrivals } from './components/NewArrivals';
import { BrandStory } from './components/BrandStory';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { CartProvider, useCart } from './context/CartContext';
import { PRODUCTS } from './data/products';
import { BRAND_INFO } from './data/brand';
import { ShoppingBag, Check } from 'lucide-react';

function AppContent() {
  const { cartCount, addToCart, lastOrder } = useCart();
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shortlistOpen, setShortlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartToast, setCartToast] = useState(null);

  // View state: 'home' | 'cart' | 'checkout' | 'confirmation'
  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#cart') return 'cart';
    if (hash === '#checkout') return 'checkout';
    if (hash === '#order-confirmation') return 'confirmation';
    return 'home';
  });

  const [confirmedOrder, setConfirmedOrder] = useState(lastOrder);

  // Listen to browser hash changes (enables back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#cart') {
        setCurrentView('cart');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#checkout') {
        setCurrentView('checkout');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#order-confirmation') {
        setCurrentView('confirmation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Local favorite pieces state with graceful fallback
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('akra_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('akra_favorites', JSON.stringify(favorites));
    } catch {
      // Storage access may be restricted
    }
  }, [favorites]);

  const handleToggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const navigateToView = (view, hash = '') => {
    setCurrentView(view);
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId, categoryFilter = null) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = `#${sectionId}`;
    }

    if (categoryFilter) {
      setActiveCategory(categoryFilter);
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectCategoryFromCards = (categoryKey) => {
    setActiveCategory(categoryKey);
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = '#shop';
    }
    setTimeout(() => {
      const shopElement = document.getElementById('shop');
      if (shopElement) {
        shopElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleQuickAdd = (product) => {
    addToCart(product, 1, {
      size: product.availableSizes?.[0] || (product.category === 'Sarees' ? 'Free Size (6.3m Drape)' : 'M'),
    });
    setCartToast({ name: product.name, image: product.image });
    setTimeout(() => setCartToast(null), 3200);
  };

  const handleBuyNowDirect = () => {
    navigateToView('checkout', '#checkout');
  };

  const handleProceedToCheckout = () => {
    navigateToView('checkout', '#checkout');
  };

  const handleOrderConfirmed = (orderSummary) => {
    setConfirmedOrder(orderSummary);
    navigateToView('confirmation', '#order-confirmation');
  };

  const handleContinueShopping = () => {
    setCurrentView('home');
    window.location.hash = '#shop';
    setTimeout(() => {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const shortlistedProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-black flex flex-col font-sans selection:bg-brand-beige selection:text-brand-black">
      
      {/* Sticky Top Header */}
      <Header
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenShortlist={() => setShortlistOpen(true)}
        onOpenCart={() => navigateToView('cart', '#cart')}
        cartCount={cartCount}
        shortlistCount={favorites.length}
        activeCategory={activeCategory}
        currentView={currentView}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Full-width Luxury Fashion Editorial Hero */}
            <Hero
              onExplore={() => handleNavigate('shop')}
              onDiscoverStory={() => handleNavigate('story')}
            />

            {/* Minimal Curated Introduction */}
            <CollectionIntro />

            {/* Shop By Category (Sarees & Salwars) */}
            <ShopByCategory
              onSelectCategory={handleSelectCategoryFromCards}
            />

            {/* New Arrivals & Complete Product Collection */}
            <NewArrivals
              products={PRODUCTS}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              onViewDetails={(prod) => setSelectedProduct(prod)}
              onQuickEnquire={(prod) => setSelectedProduct(prod)}
              onAddToCartQuick={handleQuickAdd}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              searchQuery={searchQuery}
              onClearSearch={() => setSearchQuery('')}
            />

            {/* Brand Story Editorial Section */}
            <BrandStory
              onExploreCollections={() => handleNavigate('shop')}
            />

            {/* Instagram Connection & Local Visual Feed */}
            <InstagramSection />
          </>
        )}

        {currentView === 'cart' && (
          <CartPage
            onContinueShopping={handleContinueShopping}
            onProceedToCheckout={handleProceedToCheckout}
            onViewProduct={(id) => setSelectedProduct(PRODUCTS.find(p => p.id === id))}
          />
        )}

        {currentView === 'checkout' && (
          <CheckoutPage
            onReturnToCart={() => navigateToView('cart', '#cart')}
            onOrderConfirmed={handleOrderConfirmed}
          />
        )}

        {currentView === 'confirmation' && (
          <OrderConfirmationPage
            order={confirmedOrder}
            onContinueShopping={handleContinueShopping}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isFavorite={favorites.includes(selectedProduct.id)}
          onToggleFavorite={handleToggleFavorite}
          onBuyNowDirect={handleBuyNowDirect}
        />
      )}

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onApplyCategory={(cat) => {
          setActiveCategory(cat);
          handleNavigate('shop');
        }}
      />

      {/* Wishlist / Enquiry Shortlist Drawer */}
      <WishlistDrawer
        isOpen={shortlistOpen}
        onClose={() => setShortlistOpen(false)}
        shortlistedProducts={shortlistedProducts}
        onRemoveItem={handleToggleFavorite}
        onViewProduct={(prod) => setSelectedProduct(prod)}
        onExplore={() => handleNavigate('shop')}
      />

      {/* Cart Quick Notification Toast */}
      {cartToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-black text-brand-ivory border border-brand-gold/40 p-4 shadow-2xl flex items-center gap-3 animate-fade-up max-w-sm">
          <img
            src={cartToast.image}
            alt={cartToast.name}
            className="w-10 h-12 object-cover border border-brand-border/40"
          />
          <div className="flex-1 min-w-0 text-xs">
            <span className="text-[10px] tracking-widest uppercase text-brand-gold font-medium flex items-center gap-1">
              <Check className="w-3 h-3" />
              Added to Bag
            </span>
            <p className="font-serif text-sm text-brand-ivory truncate mt-0.5">
              {cartToast.name}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setCartToast(null);
              navigateToView('cart', '#cart');
            }}
            className="px-3 py-1.5 bg-brand-ivory text-brand-black text-[10px] uppercase tracking-ultra-wide font-medium hover:bg-brand-gold transition-colors"
          >
            View Bag
          </button>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
