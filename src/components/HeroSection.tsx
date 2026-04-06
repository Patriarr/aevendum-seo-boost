import { motion } from 'framer-motion';
import heroCrystal from '@/assets/hero-crystal.jpg';

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
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Suplementación Premium con Aval Científico
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6"
      >
        Longevidad con{' '}
        <span className="gold-text font-medium">Rigor</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Los suplementos más puros, científicamente respaldados y exclusivos del panorama global. Ahora en España.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#productos"
          className="gold-gradient px-8 py-3 rounded-sm text-sm font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Ver Productos
        </a>
        <a
          href="#ciencia"
          className="px-8 py-3 rounded-sm text-sm font-body tracking-wider uppercase border gold-border text-foreground hover:bg-card/50 transition-colors"
        >
          Nuestra Ciencia
        </a>
      </motion.div>
    </div>
  </section>
);
