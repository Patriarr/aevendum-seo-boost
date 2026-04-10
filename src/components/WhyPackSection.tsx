import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const benefits = [
  'Fórmulas ya optimizadas y combinadas',
  'Sin errores de combinación ni dosificación',
  'Sin dudas: protocolo claro y guiado',
  'Sin esperas: todo en un solo envío',
  'Guía y tarjeta protocolo incluidas',
];

const problems = [
  'Riesgo de combinaciones incorrectas',
  'Múltiples pedidos y marcas distintas',
  'Sin guía de uso ni protocolo claro',
  'Mayor coste total comprando por separado',
];

export const WhyPackSection = () => (
  <section className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Diferenciación</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          ¿Por qué <span className="gold-text font-medium">no comprarlo</span> por separado?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="font-display text-lg font-semibold mb-6 gold-text">✅ En Packs</h3>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 opacity-70"
        >
          <h3 className="font-display text-lg font-semibold mb-6 text-muted-foreground">❌ Comprando por separado</h3>
          <ul className="space-y-4">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);
