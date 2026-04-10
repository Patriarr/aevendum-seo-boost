import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Laura M.',
    text: 'Más energía y claridad mental. Una maravilla. Noto la diferencia desde la segunda semana.',
    stars: 5,
  },
  {
    name: 'Javier G.',
    text: 'Mis análisis mejoraron en solo un mes. ¡Increíble! El protocolo es muy fácil de seguir.',
    stars: 5,
  },
  {
    name: 'Carmen L.',
    text: 'Me siento renovada. Ha transformado mi día a día. La guía incluida es un gran plus.',
    stars: 5,
  },
];

export const TestimonialsSection = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Prueba social</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Experiencias <span className="gold-text font-medium">reales</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 hover-lift text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-foreground/90 italic mb-4 leading-relaxed">"{t.text}"</p>
            <p className="text-xs text-gold font-body font-semibold tracking-wider">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
