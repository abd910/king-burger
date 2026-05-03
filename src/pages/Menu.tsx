import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import ProductCard from '../components/ui/ProductCard';
import { Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['all', 'burgers', 'sides', 'drinks', 'desserts'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-6xl md:text-8xl uppercase mb-6 tracking-tighter">The Royal Menu</h1>
        <p className="text-xl text-brown-dark/60 font-bold max-w-2xl mx-auto">
          From flame-grilled icons to hand-spun shakes, every bite is a crowning achievement.
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between sticky top-24 z-40 bg-beige/80 backdrop-blur py-4 px-2 rounded-2xl">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-display font-black uppercase text-sm tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-flame text-white scale-105 shadow-lg' 
                : 'bg-cream text-brown-dark hover:bg-brown-dark hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-dark/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search your hunger..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-cream border-4 border-brown-dark rounded-full py-4 pl-12 pr-6 font-display font-bold outline-none focus:ring-4 focus:ring-mustard/20 focus:border-flame transition-all"
          />
        </div>
      </div>

      {/* Menu Grid */}
      <motion.div 
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        <AnimatePresence mode='popLayout'>
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="text-center py-24 bg-cream rounded-[4rem] border-4 border-dashed border-brown-dark/20">
          <div className="text-6xl mb-4">👑</div>
          <h2 className="text-3xl font-display font-black text-brown-dark uppercase">Nothing found in the kingdom</h2>
          <p className="text-brown-dark/60 font-bold mt-2">Try searching for something else!</p>
          <button 
            onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
            className="mt-8 btn-secondary"
          >
            Show All Items
          </button>
        </div>
      )}
    </div>
  );
}
