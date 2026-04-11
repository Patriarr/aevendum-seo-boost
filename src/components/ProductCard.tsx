import { motion } from 'framer-motion';
import type { Product } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
    className="glass-card hover-lift overflow-hidden group">
    <div className="relative aspect-square overflow-hidden bg-secondary/50">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={1024} />
      {product.badge && (
        <span className="absolute top-4 left-4 text-[10px] font-body font-semibold tracking-wider uppercase gold-gradient text-primary-foreground px-3 py-1.5 rounded-sm">
          {product.badge}
        </span>
      )}
    </div>
    <div className="p-6">
      <p className="text-[10px] font-body tracking-[0.3em] uppercase text-gold font-semibold mb-1">{product.category}</p>
      <h3 className="font-display text-lg font-semibold text-foreground mb-1">{product.name}</h3>
      <p className="text-xs text-muted-foreground font-body mb-3">{product.subtitle}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-display text-2xl font-bold text-foreground">{product.price.toFixed(2)}€</span>
        <a href="#contacto" className="text-xs font-body font-semibold tracking-wider uppercase gold-gradient text-primary-foreground px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity">
          {product.buttonText || 'Solicitar Dossier'}
        </a>
      </div>
    </div>
  </motion.div>
);
