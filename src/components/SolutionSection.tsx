import { motion } from 'framer-motion';
import { Recycle, Brain, Shield } from 'lucide-react';

const steps = [
  { icon: Recycle, label: 'LIMPIAR', protocol: 'Protocolo 02', title: 'Activación de Autofagia', desc: 'Activación de la autofagia para el reciclaje de componentes celulares dañados.' },
  { icon: Brain, label: 'CALIBRAR', protocol: 'Protocolo 03', title: 'Optimización Cognitiva', desc: 'Optimización de la barrera hematoencefálica para el rendimiento cognitivo.' },
  { icon: Shield, label: 'PROTEGER', protocol: 'Protocolo 04', title: 'Modulación de Sirtuinas', desc: 'Modulación de sirtuinas para fortalecer la resiliencia biológica.' },
];

export const SolutionSection = () => (
  <section className="py-24 md:py-36 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body font-medium">La Solución Aevendum</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
          El Método <span className="blue-gray-text">Regen-Cell</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-background rounded-lg p-8 hover-lift border border-border">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-foreground mb-5">
              <step.icon className="w-5 h-5 text-background" />
            </div>
            <span className="text-[10px] font-body tracking-[0.3em] uppercase text-primary font-semibold">{step.protocol}</span>
            <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-1">{step.label}</h3>
            <p className="font-display text-sm font-medium text-foreground/70 mb-3">{step.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
