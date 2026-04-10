import { motion } from 'framer-motion';
import { TrendingDown, Trash2, BatteryLow } from 'lucide-react';

const problems = [
  { icon: TrendingDown, title: 'Disminuye NAD+', desc: 'El combustible celular cae drásticamente con la edad, ralentizando la reparación del ADN.' },
  { icon: Trash2, title: 'Se acumulan residuos', desc: 'Las células pierden su capacidad de limpieza, acumulando proteínas dañadas y toxinas.' },
  { icon: BatteryLow, title: 'Baja energía y rendimiento', desc: 'Menos energía mitocondrial, más fatiga, peor recuperación y envejecimiento acelerado.' },
];

export const ProblemSection = () => (
  <section id="problema" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">El origen del problema</p>
        <h2 className="font-display text-3xl md:text-5xl font-light mb-4">
          El envejecimiento empieza en tus{' '}
          <span className="gold-text font-medium">células</span>
        </h2>
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Con la edad, el NAD+ disminuye y los residuos se acumulan en tus células. Esto significa menos energía y más daño celular.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center hover-lift"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center bg-destructive/10 border border-destructive/20">
              <item.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
