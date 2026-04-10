import { motion } from 'framer-motion';
import { Shield, FlaskConical, Microscope, Sparkles } from 'lucide-react';

const standards = [
  { icon: Shield, title: 'Pureza 99.9%', desc: 'Cada lote analizado por laboratorios independientes. Sin excipientes innecesarios.' },
  { icon: FlaskConical, title: 'Origen Controlado', desc: 'Trazabilidad completa desde la materia prima hasta el producto final.' },
  { icon: Microscope, title: 'Estabilidad Térmica', desc: 'Tests de estabilidad acelerada y a largo plazo para garantizar eficacia.' },
  { icon: Sparkles, title: 'Biodisponibilidad', desc: 'Tecnologías liposomal y microencapsulación para máxima absorción celular.' },
];

export const ScienceSection = () => (
  <section id="ciencia" className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Estándares sin Concesiones</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Rigor <span className="gold-text font-medium">Científico</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {standards.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center hover-lift"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center gold-gradient">
              <item.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
