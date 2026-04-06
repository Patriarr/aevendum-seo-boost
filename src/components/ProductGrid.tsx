import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';

export const ProductGrid = () => (
  <section id="productos" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Selección Exclusiva</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Nuestros <span className="gold-text font-medium">Productos</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);
