import { cellularLabProducts, molecularNutritionProducts } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

const allProducts = [...cellularLabProducts, ...molecularNutritionProducts];

export const ProductsSection = () => (
  <section id="productos" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 flex items-center justify-center gap-2">
          <FlaskConical className="w-3.5 h-3.5" />
          Moléculas de Precisión
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Nuestros <span className="gold-text font-medium">Protocolos</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          Compuestos de vanguardia para protocolos de longevidad avanzada
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {allProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);
