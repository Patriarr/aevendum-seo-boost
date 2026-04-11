import { cellularLabProducts } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';

export const ProductsSection = () => (
  <section id="cellular-lab" className="py-24 md:py-36">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body font-medium">Cellular Lab</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
          Catálogo <span className="blue-gray-text">Individual</span>
        </h2>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
          Moléculas de grado investigación seleccionadas bajo los más rigurosos estándares de calidad.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cellularLabProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);
