import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection = () => (
  <section className="py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Da el paso</p>
        <h2 className="font-display text-3xl md:text-5xl font-light mb-4">
          Empieza hoy tu protocolo de{' '}
          <span className="gold-text font-medium">regeneración celular</span>
        </h2>
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Protocolos de longevidad diseñados por expertos. Moléculas de grado investigación con stock inmediato en España.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#packs"
            className="gold-gradient px-12 py-4 rounded-sm text-sm font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Explorar Protocolos
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            🇪🇸 Envío 24/48h · 🔒 Pago seguro · 🛡 Garantía 14 días
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
