import { motion } from 'framer-motion';
import { FlaskConical, Award } from 'lucide-react';

const evidence = [
  {
    icon: FlaskConical,
    title: 'Aumento de NAD+',
    desc: 'El NAD+ es vital para el metabolismo celular. Su declive está directamente vinculado al envejecimiento. El NMN es su precursor más eficaz.',
    tag: 'Vital para la energía celular',
  },
  {
    icon: Award,
    title: 'Autofagia',
    desc: 'La autofagia — el sistema de reciclaje celular — fue reconocida con el Premio Nobel de Medicina 2016. La espermidina es su activador natural más potente.',
    tag: 'Premio Nobel 2016',
  },
];

export const ScienceBackingSection = () => (
  <section id="ciencia" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Evidencia científica</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Respaldado por la ciencia de la{' '}
          <span className="gold-text font-medium">longevidad</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {evidence.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 hover-lift"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center gold-gradient">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <span className="text-[10px] font-body tracking-wider uppercase text-gold">{item.tag}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
