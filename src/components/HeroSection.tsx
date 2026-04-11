import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import heroMolecular from '@/assets/hero-molecular.jpg';

const trustBadges = [
  'Pureza Certificada 99%+',
  'Entrega 24/48h desde España.',
  'Protocolos de Grado Clínico.',
];

export const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroMolecular} alt="Estructura molecular" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-xs tracking-[0.35em] uppercase text-gold mb-5 font-body font-medium">
        La Vanguardia de Berlín en España · Stock Inmediato
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6">
        Protocolos de Longevidad:<br className="hidden md:block" />
        <span className="gold-text font-medium">El Estándar de Excelencia.</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        Iniciamos nuestra selección con las moléculas de referencia en Berlín. Ingeniería biológica alemana y pureza de grado laboratorio certificada para la optimización de tu arquitectura biológica.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        {trustBadges.map((badge) => (
          <div key={badge} className="flex items-center gap-2 text-sm font-body text-foreground/80">
            <CheckCircle className="w-4 h-4 text-primary shrink-0" /><span>{badge}</span>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <a href="#contacto" className="inline-block gold-gradient text-primary-foreground px-10 py-4 rounded-sm text-sm font-body font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity">
          Explorar Protocolos
        </a>
      </motion.div>
    </div>
  </section>
);
