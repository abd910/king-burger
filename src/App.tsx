import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import { AnimatePresence, motion } from 'motion/react';

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/deals" element={<Home />} /> {/* Temporary redirect */}
            <Route path="/locator" element={<Home />} /> {/* Temporary redirect */}
          </Routes>
        </PageWrapper>
      </main>
      
      <footer className="bg-brown-dark text-beige pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="font-display text-4xl font-black mb-6 uppercase tracking-tighter">
                KING BURGER<span className="text-flame">.</span>
              </div>
              <p className="text-beige/60 font-medium">Serving the kingdom since 1954 with the best flame-grilled flavor in the land.</p>
            </div>
            <div>
              <h4 className="font-display font-black uppercase text-lg mb-6">Explore</h4>
              <ul className="space-y-4 text-beige/60 font-bold uppercase text-sm tracking-widest">
                <li><a href="#" className="hover:text-mustard transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-mustard transition-colors">Offers</a></li>
                <li><a href="#" className="hover:text-mustard transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-mustard transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-black uppercase text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-beige/60 font-bold uppercase text-sm tracking-widest">
                <li><a href="#" className="hover:text-mustard transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-mustard transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-mustard transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-mustard transition-colors">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-black uppercase text-lg mb-6">Join the Kingdom</h4>
              <p className="text-sm font-bold opacity-60 mb-4 uppercase tracking-widest">Get hot deals straight to your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/10 border-2 border-beige/20 rounded-xl px-4 py-3 flex-grow outline-none focus:border-mustard transition-colors"
                />
                <button className="bg-mustard text-brown-dark px-6 py-3 rounded-xl font-black uppercase text-xs">Join</button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-beige/10 text-center text-xs font-bold uppercase tracking-[0.2em] opacity-40">
            &copy; 2026 King Burger Co. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Layout />
      </CartProvider>
    </Router>
  );
}
