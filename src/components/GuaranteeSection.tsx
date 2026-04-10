import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Lock } from 'lucide-react';

const guarantees = [
  { icon: ShieldCheck, title: 'Garantía 14 días', desc: 'Prueba durante 14 días. Si no te convence, devolución sin preguntas.' },
  { icon: Truck, title: 'Envío 24/48h', desc: 'Envío rápido desde España. Recíbelo en tu casa en 1-2 días laborables.' },
  { icon: Lock, title: 'Pago 100% seguro', desc: 'Tarjeta, PayPal o transferencia. Tus datos siempre protegidos con SSL.' },
];

export const GuaranteeSection = () => (
  <section className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Sin riesgo</p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Tu compra está <span className="gold-text font-medium">protegida</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {guarantees.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center hover-lift"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center gold-gradient">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
