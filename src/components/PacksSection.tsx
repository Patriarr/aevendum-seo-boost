import { packs } from '@/lib/products';
import { motion } from 'framer-motion';

export const PacksSection = () => (
  <section id="packs" className="py-24 md:py-36 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-body font-medium">Sinergias</p>
        <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
          Sistema de <span className="gold-text font-medium">Packs</span>
        </h2>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
          Combinaciones diseñadas para maximizar el impacto biológico.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packs.map((pack, i) => (
          <motion.div key={pack.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`glass-card hover-lift p-8 flex flex-col ${i === 2 ? 'gold-border border' : ''}`}>
            {i === 2 && (
              <span className="text-[10px] font-body font-semibold tracking-wider uppercase gold-gradient text-primary-foreground px-3 py-1 rounded-sm self-start mb-4">
                Recomendado
              </span>
            )}
            <p className="text-[10px] font-body tracking-[0.3em] uppercase text-gold font-semibold mb-1">{pack.subtitle}</p>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{pack.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{pack.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-display text-3xl font-bold text-foreground">{pack.price.toFixed(2)}€</span>
              <a href="#contacto" className="text-xs font-body font-semibold tracking-wider uppercase gold-gradient text-primary-foreground px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity">
                Solicitar Info
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
