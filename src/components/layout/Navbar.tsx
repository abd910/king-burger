import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, User, Search, Flame } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Deals', path: '/deals' },
    { name: 'Locator', path: '/locator' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-beige/90 backdrop-blur-md border-b-4 border-brown-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-flame p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <Flame className="w-8 h-8 text-mustard fill-current" />
              </div>
              <span className="font-display text-2xl font-black text-brown-dark uppercase tracking-tighter">
                King Burger<span className="text-flame">.</span>
              </span>
            </Link>

            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-display font-extrabold uppercase text-sm tracking-widest transition-colors hover:text-flame ${
                    location.pathname === link.path ? 'text-flame underline underline-offset-8' : 'text-brown-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-brown-dark/10 rounded-full transition-colors">
              <Search className="w-6 h-6 text-brown-dark" />
            </button>
            <button className="p-2 hover:bg-brown-dark/10 rounded-full transition-colors">
              <User className="w-6 h-6 text-brown-dark" />
            </button>
            <Link to="/checkout" className="btn-primary px-4 py-2 text-sm relative group">
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-mustard text-brown-dark w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ring-4 ring-beige"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="hidden sm:inline">Order Now</span>
            </Link>
            <button className="md:hidden p-2">
              <MenuIcon className="w-8 h-8 text-brown-dark" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
