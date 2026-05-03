import React from 'react';
import { motion } from 'motion/react';
import { Flame, ArrowRight, Star, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DEALS, MENU_ITEMS } from '../constants';
import ProductCard from '../components/ui/ProductCard';

export default function Home() {
  const popularItems = MENU_ITEMS.filter(i => i.isPopular).slice(0, 3);

  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-4">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-flame rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-mustard rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-flame/10 text-flame px-4 py-2 rounded-full font-display font-black text-sm uppercase tracking-widest mb-6">
              <Flame className="w-5 h-5 fill-current" />
              Flame-Grilled Since '54
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-black text-brown-dark leading-[0.9] mb-8 uppercase tracking-tighter">
              Bigger<br />
              <span className="text-flame">Boldest</span><br />
              Burgers.
            </h1>
            <p className="text-xl text-brown-dark/80 mb-10 max-w-lg leading-relaxed font-medium">
              Taste the difference of true flame-grilling. Fresh ingredients, legendary recipes, and zero compromise on flavor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary text-xl px-10 py-5">
                Order Delivery <ArrowRight className="w-6 h-6" />
              </Link>
              <Link to="/deals" className="btn-secondary text-xl px-10 py-5">
                View Deals
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t-2 border-brown-dark/10 pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`}
                    className="w-12 h-12 rounded-full border-4 border-beige"
                    alt="User"
                  />
                ))}
              </div>
              <div className="text-sm font-bold">
                <div className="flex gap-1 text-mustard mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-brown-dark opacity-60">Loved by 45,000+ King Fans</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="relative"
          >
            <div className="relative z-10 w-full animate-float">
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop"
                alt="Main Burger"
                className="w-full drop-shadow-[0_35px_35px_rgba(214,35,0,0.3)] pointer-events-none rounded-[3rem] border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-10 z-20 bg-mustard text-brown-dark p-6 rounded-3xl border-4 border-brown-dark shadow-2xl rotate-12"
            >
              <span className="block text-4xl font-black">100%</span>
              <span className="block text-xs uppercase font-black">Pure Beef</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-brown-dark py-12 text-beige">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-flame flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-lg">Top Quality</div>
              <div className="text-xs opacity-60 font-bold uppercase">Award-winning recipes</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-mustard flex items-center justify-center">
              <Clock className="w-6 h-6 text-brown-dark" />
            </div>
            <div>
              <div className="font-extrabold text-lg">Fast Delivery</div>
              <div className="text-xs opacity-60 font-bold uppercase">Ready in 20 mins</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
              <Trophy className="w-6 h-6 text-flame" />
            </div>
            <div>
              <div className="font-extrabold text-lg">King Rewards</div>
              <div className="text-xs opacity-60 font-bold uppercase">Earn points every bite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl uppercase mb-2">Fan Favorites</h2>
            <p className="text-brown-dark/60 font-bold">The burgers that built the kingdom.</p>
          </div>
          <Link to="/menu" className="hidden md:flex items-center gap-2 font-display font-black text-flame hover:underline group">
            FULL MENU <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {popularItems.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Deal Section */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="bg-mustard rounded-[4rem] p-8 md:p-20 border-8 border-brown-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-flame/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brown-dark text-mustard px-4 py-2 rounded-full font-black text-sm uppercase mb-6">Limited Time Offer</span>
              <h2 className="text-6xl md:text-8xl mb-6 leading-none">THE FAMILY FEAST BUNDLE</h2>
              <p className="text-xl font-bold mb-8 opacity-80">Feed the whole kingdom for less. Includes 2 Whoppers, 2 Small Burgers, 2 Large Fries, and 4 Drinks.</p>
              <div className="flex items-center gap-6 mb-10">
                <span className="text-7xl font-black text-flame">$29.99</span>
                <span className="text-3xl font-bold line-through opacity-40">$42.50</span>
              </div>
              <button className="btn-primary text-xl px-12 py-6">Claim This Deal</button>
            </div>
            <div className="relative">
              <img
                src={DEALS[0].image}
                alt="Family Deal"
                className="w-full rounded-[3rem] border-6 border-brown-dark shadow-2xl rotate-3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
