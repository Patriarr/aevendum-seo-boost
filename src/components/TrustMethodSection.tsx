import { motion } from 'framer-motion';
import { Shield, Truck, FileText } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Selección',
    desc: 'Seleccionamos exclusivamente moléculas con certificación de grado clínico. Rechazamos ingredientes genéricos en favor de biotecnología patentada con estudios de estabilidad térmica y permeabilidad cerebral probados.',
    detail: 'Pureza 99%+ verificada',
  },
  {
    icon: Truck,
    title: 'Frescura',
    desc: 'Stock local en España. Envío en 24/48h desde Madrid. Sin intermediarios ni almacenes lejanos.',
    detail: 'Entrega express nacional',
  },
  {
    icon: FileText,
    title: 'Transparencia',
    desc: 'Etiquetas en español, certificados de análisis públicos y soporte experto por WhatsApp.',
    detail: 'Trazabilidad completa',
  },
];

export const TrustMethodSection = () => (
  <section id="metodo" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Nuestro Compromiso</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          El Método <span className="gold-text font-medium">Aevendum</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          No somos otra marca de suplementos. Somos un protocolo de longevidad con criterio farmacéutico.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 text-center hover-lift"
          >
            <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5">
              <p.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-gold font-body font-semibold border border-primary/20 px-3 py-1 rounded-sm">
              {p.detail}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
