import { motion } from 'framer-motion';

export const WowSection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto mb-8" />
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-light italic leading-snug">
            "No es un suplemento,{' '}
            <span className="gold-text font-medium not-italic">es una inversión</span>{' '}
            en tu arquitectura biológica."
          </h2>
          <div className="w-px h-16 bg-gradient-to-b from-primary via-primary to-transparent mx-auto mt-8 mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-body">Aevendum — Science & Longevity</p>
        </div>
      </motion.div>
    </div>
  </section>
);
