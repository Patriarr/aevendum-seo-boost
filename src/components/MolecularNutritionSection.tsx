import { molecularNutritionProducts } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';
import { Dna } from 'lucide-react';

const systems = [
  { label: 'Excelencia Mineral', filter: 'Mineral Excellence' },
  { label: 'Renovación Celular', filter: 'Cellular Renew' },
  { label: 'Anti-Aging', filter: 'Anti-Aging' },
];

export const MolecularNutritionSection = () => (
  <section id="molecular-nutrition" className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Formulaciones Avanzadas</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Molecular <span className="gold-text font-medium">Nutrition</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          Máxima biodisponibilidad · Tecnología Sustancia Pura · Sin excipientes innecesarios
        </p>
      </motion.div>

      {systems.map((system) => {
        const items = molecularNutritionProducts.filter((p) => p.category === system.filter);
        if (items.length === 0) return null;
        return (
          <div key={system.filter} className="mb-12 last:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center gold-gradient">
                <Dna className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-wide">{system.label}</h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
