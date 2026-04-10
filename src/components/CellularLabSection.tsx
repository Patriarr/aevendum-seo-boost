import { cellularLabProducts } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';
import { Atom, FlaskConical } from 'lucide-react';

export const CellularLabSection = () => (
  <section id="cellular-lab" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 flex items-center justify-center gap-2">
          <FlaskConical className="w-3.5 h-3.5" />
          Moléculas Avanzadas
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Cellular <span className="text-foreground/90 font-medium">Lab</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          Compuestos de vanguardia para protocolos de longevidad avanzada
        </p>
        <p className="font-body text-[11px] text-muted-foreground/70 italic max-w-md mx-auto mt-2">
          "Reservado para quienes no se conforman con la biología estándar"
        </p>
      </motion.div>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted border border-border/40">
          <Atom className="w-5 h-5 text-muted-foreground" />
        </div>
        <p className="text-xs text-muted-foreground font-body">Moléculas de Investigación Avanzada · Cada lote analizado por laboratorios independientes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cellularLabProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);
