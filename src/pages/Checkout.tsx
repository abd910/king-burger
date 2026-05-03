import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, Sparkles, ShoppingBag, CheckCircle2, Flame } from 'lucide-react';
import { getRecommendations } from '../lib/gemini';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { items, subtotal, shipping, total, updateQuantity, removeFromCart, clearCart } = useCart();
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    async function loadRecs() {
      const recs = await getRecommendations(items);
      setRecommendations(recs);
    }
    loadRecs();
  }, [items]);

  const handlePlaceOrder = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-6xl uppercase mb-4 tracking-tighter">ORDER RECEIVED!</h1>
        <p className="text-xl font-bold text-brown-dark/60 mb-12">The grills are firing up. Your feast will be ready in 20 minutes.</p>
        <Link to="/" className="btn-primary inline-flex">Back to Kingdom</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-brown-dark">
          <ShoppingBag className="w-10 h-10 text-brown-dark" />
        </div>
        <h1 className="text-6xl uppercase mb-4 tracking-tighter">Your bag is empty</h1>
        <p className="text-xl font-bold text-brown-dark/60 mb-12">Don't leave your hunger hanging. Explore our juicy menu!</p>
        <Link to="/menu" className="btn-primary inline-flex">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-6xl uppercase mb-12 tracking-tighter">Review Order</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Cart Items */}
          <div className="bg-cream rounded-[2.5rem] border-4 border-brown-dark overflow-hidden">
            {items.map((item, idx) => (
              <div 
                key={item.id} 
                className={`p-6 flex gap-6 items-center ${idx !== items.length - 1 ? 'border-b-4 border-brown-dark/10' : ''}`}
              >
                <img src={item.image} className="w-24 h-24 rounded-2xl object-cover border-2 border-brown-dark" alt={item.name} referrerPolicy="no-referrer" />
                <div className="flex-grow">
                  <h3 className="font-display font-black text-xl uppercase leading-none mb-1">{item.name}</h3>
                  <p className="text-sm text-brown-dark/50 font-bold uppercase">{item.calories} KCAL</p>
                </div>
                <div className="flex items-center gap-3 bg-white p-2 rounded-full border-2 border-brown-dark">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-flame transition-colors">
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="font-display font-black px-2 min-w-[2ch] text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-flame transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-xl font-display font-black text-brown-dark ml-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-brown-dark/30 hover:text-flame transition-colors"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>

          {/* AI Recommendations */}
          <section className="mt-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-flame animate-pulse" />
              <h2 className="text-2xl font-display font-black uppercase">Complete Your Burger</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {recommendations.map(item => (
                <div key={item.id} className="bg-white rounded-3xl p-4 border-2 border-brown-dark/10 hover:border-flame transition-colors group cursor-pointer" onClick={() => useCart().addToCart(item)}>
                  <img src={item.image} className="w-full aspect-square rounded-2xl object-cover mb-4 group-hover:scale-105 transition-transform" alt={item.name} referrerPolicy="no-referrer" />
                  <h4 className="font-display font-black text-sm uppercase mb-1">{item.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-flame">${item.price}</span>
                    <button className="bg-mustard p-2 rounded-lg text-brown-dark"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-brown-dark text-beige rounded-[3rem] p-8 sticky top-32 border-8 border-mustard">
            <h2 className="text-4xl uppercase mb-8 tracking-tighter">Your Bill</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-lg font-bold opacity-70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold opacity-70">
                <span>Royal Delivery</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold opacity-70">
                <span>Tax</span>
                <span>${(subtotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="h-0.5 bg-beige/20 my-4" />
              <div className="flex justify-between text-4xl font-display font-black">
                <span>Total</span>
                <span className="text-mustard">${(total + subtotal * 0.08).toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handlePlaceOrder}
                disabled={isOrdering}
                className="w-full btn-primary py-6 text-xl"
              >
                {isOrdering ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                    <Flame className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <>Place Order <ArrowRight className="w-6 h-6" /></>
                )}
              </button>
              <p className="text-[10px] uppercase font-bold opacity-40 text-center tracking-widest">
                By ordering, you agree to the King's terms and privacy treaty.
              </p>
            </div>

            <div className="mt-8 bg-white/5 p-6 rounded-2xl border-2 border-beige/10">
              <h4 className="font-display font-black text-sm uppercase mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-mustard" /> King Points
              </h4>
              <p className="text-xs font-bold opacity-70">You will earn <span className="text-mustard">145 points</span> from this order. That's a free shake halfway!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
