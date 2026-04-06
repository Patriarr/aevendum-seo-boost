import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/lib/store';
import { useStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const addToCart = useStore((s) => s.addToCart);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card hover-lift group flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 gold-gradient text-primary-foreground text-[10px] font-body font-bold tracking-wider uppercase px-3 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 bg-background/70 backdrop-blur-sm text-[10px] font-body font-medium tracking-wider px-2 py-1 rounded-sm text-muted-foreground">
          {product.purity} Pureza
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <span className="text-[10px] font-body tracking-[0.2em] uppercase text-gold mb-2">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-semibold mb-0.5">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{product.subtitle}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
          <span className="font-display text-xl font-semibold">
            {product.price.toFixed(2)}€
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 gold-gradient px-4 py-2 rounded-sm text-xs font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Añadir
          </button>
        </div>
      </div>
    </motion.div>
  );
};
