import { packs } from '@/lib/products';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { ShoppingBag, Tag, Diamond, Microscope, Shield } from 'lucide-react';

const packDetails: Record<string, { tagline: string; savings: string; originalPrice: number }> = {
  'vitalidad-total': {
    tagline: 'Energía y antienvejecimiento sistémico.',
    originalPrice: 150,
    savings: 'Ahorras 15€',
  },
  'mente-renovacion': {
    tagline: 'Claridad mental y limpieza celular profunda.',
    originalPrice: 144,
    savings: 'Ahorras 15€',
  },
  'molecular-foundation': {
    tagline: 'El Triángulo de Hierro: Energía, Limpieza y Cognición.',
    originalPrice: 229,
    savings: 'Ahorras 34€',
  },
  'aevendum-full': {
    tagline: 'El protocolo definitivo. Todas las moléculas esenciales en un solo envío.',
    originalPrice: 294,
    savings: 'Ahorras 45€',
  },
};

const qualityBadges = [
  { icon: Diamond, label: 'Pureza Certificada', sub: 'Grado Clínico' },
  { icon: Microscope, label: 'Rigor Científico', sub: 'Berlín, Alemania' },
  { icon: Shield, label: 'Stock en España', sub: 'Envío 24/48h' },
];

export const PacksSection = () => {
  const addToCart = useStore((s) => s.addToCart);

  return (
    <section id="packs" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Protocolos de Longevidad · Disponibilidad Inmediata</p>
          <h2 className="font-display text-3xl md:text-5xl font-light">
            Nuestros <span className="gold-text font-medium">Packs</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
            Protocolos diseñados por expertos para eliminar la fatiga de decisión. Moléculas de longevidad con stock inmediato en España.
          </p>
        </motion.div>

        {/* Quality badges row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
        >
          {qualityBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-4 h-4 text-gold" />
              <div>
                <span className="text-[11px] font-body font-semibold text-foreground/80">{badge.label}</span>
                <span className="text-[10px] font-body text-muted-foreground ml-1">· {badge.sub}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packs.map((pack, i) => {
            const details = packDetails[pack.id];
            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden hover-lift flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={pack.image}
                    alt={pack.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  {details?.savings && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-primary/90 text-primary-foreground text-[10px] font-body font-bold tracking-wide px-3 py-1.5 rounded-sm backdrop-blur-sm">
                      <Tag className="w-3 h-3" />
                      {details.savings}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <span className="inline-block gold-gradient text-primary-foreground text-[10px] font-body font-bold tracking-wider uppercase px-3 py-1 rounded-sm mb-3">
                      {pack.badge}
                    </span>
                    <h3 className="font-display text-xl font-semibold mb-1">{pack.name}</h3>
                    <p className="text-xs text-muted-foreground font-body mb-1">{pack.subtitle}</p>
                    {details?.tagline && (
                      <p className="text-xs text-gold/90 font-body italic mb-3">{details.tagline}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div>
                      {details?.originalPrice && (
                        <span className="text-sm font-body text-muted-foreground line-through mr-2">{details.originalPrice.toFixed(2)}€</span>
                      )}
                      <span className="font-display text-2xl font-semibold gold-text">{pack.price.toFixed(2)}€</span>
                    </div>
                    <button
                      onClick={() => addToCart(pack)}
                      className="flex items-center gap-2 gold-gradient px-5 py-2.5 rounded-sm text-[10px] font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      {pack.buttonText || 'Consultar Disponibilidad'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
