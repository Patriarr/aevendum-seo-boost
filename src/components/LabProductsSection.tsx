import { labProducts } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

export const LabProductsSection = () => (
  <section id="laboratorio" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Grado Farmacéutico</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Productos de <span className="gold-text font-medium">Laboratorio</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          Certificación independiente · Pureza verificada · Trazabilidad completa
        </p>
      </motion.div>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
          <FlaskConical className="w-5 h-5 text-primary" />
        </div>
        <p className="text-xs text-muted-foreground font-body">Cada lote analizado por laboratorios independientes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {labProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);
