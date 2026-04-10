import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import heroCrystal from '@/assets/hero-crystal.jpg';

const trustBadges = [
  'Pureza certificada 99%+',
  'Entrega 24/48h desde España',
  'Protocolos de grado clínico',
];

export const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroCrystal}
        alt="Estructura molecular cristalina"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xs tracking-[0.35em] uppercase text-gold mb-5 font-body"
      >
        La Vanguardia de Berlín en España · Stock Inmediato
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-5"
      >
        Protocolos de Longevidad:{' '}
        <br className="hidden md:block" />
        <span className="gold-text font-medium">El Estándar de Excelencia.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
      >
        Iniciamos nuestra selección con el estándar de referencia en Berlín para moléculas de longevidad. Pureza de grado laboratorio y resultados biológicos certificados bajo la ingeniería alemana más exigente.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
      >
        {trustBadges.map((badge) => (
          <div key={badge} className="flex items-center gap-2 text-sm font-body text-foreground/80">
            <CheckCircle className="w-4 h-4 text-gold shrink-0" />
            <span>{badge}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#packs"
          className="gold-gradient px-10 py-4 rounded-sm text-sm font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Explorar Protocolos
        </a>
        <a
          href="#metodo"
          className="px-8 py-4 rounded-sm text-sm font-body tracking-wider uppercase border gold-border text-foreground hover:bg-card/50 transition-colors"
        >
          El Método Aevendum
        </a>
      </motion.div>
    </div>
  </section>
);
