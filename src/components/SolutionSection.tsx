import { motion } from 'framer-motion';
import { Zap, Recycle } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    label: 'ACTIVAR',
    color: 'text-gold',
    bgColor: 'gold-gradient',
    subtitle: 'Protocolos 01 y 04',
    items: [
      { title: 'NMN → Energía celular', desc: 'Restaura el NAD+ para reactivar el metabolismo energético.' },
      { title: 'Resveratrol → Sirtuinas', desc: 'Enciende las proteínas de reparación del ADN.' },
    ],
  },
  {
    icon: Recycle,
    label: 'LIMPIAR',
    color: 'text-accent',
    bgColor: 'gold-gradient',
    subtitle: 'Protocolo 02',
    items: [
      { title: 'Espermidina → Autofagia', desc: 'Activa la limpieza celular natural para eliminar componentes dañados.' },
      { title: 'Eliminación de residuos', desc: 'Renueva las células desde dentro, mejorando función y longevidad.' },
    ],
  },
];

export const SolutionSection = () => (
  <section id="solucion" className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">La solución REGEN-CELL</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Una estrategia doble:{' '}
          <span className="gold-text font-medium">activar y limpiar</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 hover-lift"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${pillar.bgColor}`}>
                <pillar.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold tracking-wider">{pillar.label}</span>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-body mb-6">{pillar.subtitle}</p>
            <div className="space-y-4">
              {pillar.items.map((item) => (
                <div key={item.title}>
                  <h4 className="font-body text-sm font-semibold mb-1 text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
