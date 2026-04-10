import { motion } from 'framer-motion';
import { Sparkles, Brain, FlaskConical, Crown } from 'lucide-react';

const protocols = [
  {
    icon: Sparkles,
    level: 'Sinergia',
    name: 'Protocolo Vitalidad Total',
    objective: 'Energía y antienvejecimiento sistémico',
    codes: 'P.01 + P.04',
    price: '135 €',
    href: '#packs',
  },
  {
    icon: Brain,
    level: 'Cognitivo',
    name: 'Mente & Renovación',
    objective: 'Claridad mental y limpieza celular',
    codes: 'P.02 + P.03',
    price: '129 €',
    href: '#packs',
  },
  {
    icon: FlaskConical,
    level: 'Protocolo Completo',
    name: 'Molecular Foundation',
    objective: 'Energía, renovación y cognición',
    codes: 'P.01 + P.02 + P.03',
    price: '195 €',
    href: '#packs',
  },
  {
    icon: Crown,
    level: 'Protocolo 360º',
    name: 'Aevendum Full Protocol',
    objective: 'Todas las moléculas esenciales',
    codes: 'P.01 + P.02 + P.03 + P.04',
    price: '249 €',
    href: '#packs',
  },
];

export const ProtocolGuideSection = () => (
  <section id="guia-protocolo" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Selección Inteligente</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          ¿Qué protocolo <span className="gold-text font-medium">elegir?</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
          Protocolo diseñado por expertos para eliminar la fatiga de decisión en su suplementación diaria.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {protocols.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-6 flex flex-col items-center text-center hover-lift cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center gold-gradient mb-4 group-hover:scale-110 transition-transform">
              <p.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-body font-semibold mb-1">{p.level}</span>
            <h3 className="font-display text-base font-semibold mb-1">{p.name}</h3>
            <p className="text-[11px] text-muted-foreground font-body leading-relaxed mb-1">{p.objective}</p>
            <p className="text-[10px] text-muted-foreground/70 font-body mb-3">{p.codes}</p>
            <span className="font-display text-lg font-semibold gold-text mt-auto">{p.price}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
