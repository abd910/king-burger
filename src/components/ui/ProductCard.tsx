import React from 'react';
import { Plus, Flame, Info } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-cream rounded-3xl border-4 border-brown-dark overflow-hidden group flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-white/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {product.isPopular && (
          <div className="absolute top-4 left-4 bg-mustard text-brown-dark px-3 py-1 rounded-full font-display font-black text-xs uppercase flex items-center gap-1 shadow-lg">
            <Flame className="w-3 h-3 fill-current" />
            Top Pick
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-display font-black text-brown-dark shadow-lg">
          ${product.price}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-black text-brown-dark uppercase leading-tight group-hover:text-flame transition-colors">
            {product.name}
          </h3>
          <span className="text-[10px] font-bold text-brown-dark/40 uppercase tracking-widest mt-1">
            {product.calories} KCAL
          </span>
        </div>
        <p className="text-sm text-brown-dark/70 mb-6 flex-grow line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-grow btn-secondary py-3 text-sm group-hover:bg-flame group-hover:text-white"
          >
            <Plus className="w-4 h-4" />
            Add to Order
          </button>
          <button className="p-3 border-4 border-brown-dark rounded-full hover:bg-brown-dark hover:text-white transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
