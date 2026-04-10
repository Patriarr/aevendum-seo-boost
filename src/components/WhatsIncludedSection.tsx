import { motion } from 'framer-motion';
import { Package, BookOpen, CreditCard, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Package, title: 'Productos seleccionados', desc: 'Cada pack incluye los suplementos y compuestos especificados, en sus formatos originales de laboratorio.' },
  { icon: ShieldCheck, title: 'Certificación de pureza', desc: 'Todos los productos incluidos cuentan con análisis de pureza verificado por laboratorios independientes.' },
  { icon: BookOpen, title: 'Guía Aevendum', desc: 'Manual completo con la ciencia, dosificación y consejos para maximizar resultados.' },
  { icon: CreditCard, title: 'Tarjeta protocolo', desc: 'Referencia rápida con tu rutina diaria paso a paso.' },
];

export const WhatsIncludedSection = () => (
  <section id="incluye" className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Pack completo</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Qué <span className="gold-text font-medium">incluye</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden hover-lift flex flex-col"
          >
            <div className="aspect-square flex items-center justify-center bg-card">
              {item.icon && <item.icon className="w-16 h-16 text-gold/40" />}
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
