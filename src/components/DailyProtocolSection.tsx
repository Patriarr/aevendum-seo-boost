import { motion } from 'framer-motion';
import { Sun, UtensilsCrossed, CalendarCheck, Moon } from 'lucide-react';

const steps = [
  { icon: Sun, time: 'Mañana', action: 'NMN Uthever®', desc: 'Toma 2 cápsulas en ayunas para maximizar la absorción y elevar tus niveles de NAD+.', emoji: '☀️' },
  { icon: UtensilsCrossed, time: 'Mediodía', action: 'Spermidine PRO', desc: 'Toma 1 cápsula con la comida para activar la autofagia y la renovación celular.', emoji: '🍽' },
  { icon: Moon, time: 'Noche', action: 'Magnesio L-Treonato', desc: 'Toma 1 dosis antes de dormir para potenciar el sueño profundo y la regeneración neuronal.', emoji: '🌙' },
  { icon: CalendarCheck, time: 'Todos los días', action: 'Constancia', desc: 'Los resultados se acumulan con el tiempo. La constancia es la clave de la regeneración celular.', emoji: '🔄' },
];

export const DailyProtocolSection = () => (
  <section id="protocolo" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Fácil de seguir</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Tu protocolo <span className="gold-text font-medium">diario</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-20 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {steps.map((step, i) => (
          <motion.div
            key={step.time}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 text-center hover-lift relative"
          >
            <div className="text-3xl mb-3">{step.emoji}</div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center gold-gradient">
              <step.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-sm font-semibold tracking-wider uppercase text-gold block mb-1">{step.time}</span>
            <h3 className="font-display text-lg font-semibold mb-2">{step.action}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
