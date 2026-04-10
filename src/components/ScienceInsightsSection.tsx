import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Dna, Activity, FlaskConical } from 'lucide-react';

const articles = [
  {
    icon: Dna,
    tag: 'NAD+ & Sirtuinas',
    title: 'NAD+: El Coenzima Maestro de la Resiliencia Celular',
    paragraphs: [
      {
        subtitle: null,
        text: 'En la frontera de la medicina regenerativa de 2026, una molécula destaca sobre todas las demás: el Nicotinamida Adenina Dinucleótido (NAD+). Presente en cada célula viva, este coenzima es el combustible crítico para las sirtuinas (las "proteínas de la longevidad") y las enzimas PARP encargadas de la reparación del ADN.',
      },
      {
        subtitle: 'El Declive Biológico',
        text: 'La evidencia científica actual confirma que los niveles de NAD+ disminuyen drásticamente con la edad. A los 50 años, el organismo humano medio posee apenas la mitad del NAD+ que tenía a los 20. Esta caída se correlaciona directamente con el envejecimiento mitocondrial y la pérdida de capacidad de reparación celular.',
      },
      {
        subtitle: 'Novedades 2026: El Enfoque en los Precursores',
        text: 'Las investigaciones más recientes de este año se centran en cómo el aporte de precursores directos puede estabilizar los niveles sistémicos de NAD+. Estudios publicados en Nature Aging sugieren que mantener una disponibilidad óptima de estos precursores no solo apoya el metabolismo energético, sino que refuerza la integridad genómica frente al estrés oxidativo.',
      },
      {
        subtitle: 'Conclusión Científica',
        text: 'La optimización del NAD+ representa hoy uno de los pilares fundamentales en cualquier protocolo de gestión de la edad biológica basado en la evidencia.',
      },
    ],
  },
  {
    icon: Activity,
    tag: 'Estabilidad & Pureza',
    title: 'Estabilidad Térmica y Pureza Estructural: El Protocolo Crystal-Guard',
    paragraphs: [
      {
        subtitle: 'El Problema de la Degradación',
        text: 'Uno de los mayores retos tecnológicos en la síntesis de nucleótidos es la sensibilidad a la temperatura. Muchos compuestos similares pierden su integridad estructural si no se mantienen bajo refrigeración constante, lo que compromete su eficacia antes de llegar al usuario final.',
      },
      {
        subtitle: 'El Estándar de Cristalización Avanzada',
        text: 'El compuesto que seleccionamos en Aevendum bajo el estándar de Cristalización Avanzada ha sido sometido a procesos de estabilización molecular que garantizan una integridad térmica excepcional. A diferencia de las versiones genéricas, nuestra molécula mantiene una pureza superior al 99% a temperatura ambiente durante periodos prolongados.',
      },
      {
        subtitle: 'Por qué importa la Higroscopía',
        text: 'La tecnología Crystal-Guard reduce la higroscopía (absorción de humedad) del compuesto. Esto significa que la molécula permanece estable y activa, sin necesidad de una cadena de frío estricta para su almacenamiento o transporte. Para el investigador o el usuario avanzado, esto se traduce en una garantía de potencia real en cada gramo, desde el laboratorio hasta su destino.',
      },
    ],
  },
];

export const ScienceInsightsSection = () => (
  <section id="science-research" className="py-20 md:py-32">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 flex items-center justify-center gap-2">
          <BookOpen className="w-3.5 h-3.5" />
          Ciencia y Biotecnología
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Claves de <span className="gold-text font-medium">Longevidad</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          Conocimiento basado en evidencia para quienes toman decisiones informadas sobre su biología.
        </p>
      </motion.div>

      <div className="space-y-16">
        {articles.map((article, ai) => (
          <motion.article
            key={ai}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ai * 0.1 }}
            className="border border-border/30 rounded-lg bg-card/40 backdrop-blur-sm overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border/20">
              <div className="flex items-center gap-2 mb-3">
                <article.icon className="w-4 h-4 text-gold" />
                <span className="text-[10px] font-body tracking-[0.2em] uppercase text-gold">{article.tag}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug">{article.title}</h3>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-6">
              {article.paragraphs.map((p, pi) => (
                <div key={pi}>
                  {p.subtitle && (
                    <h4 className="font-display text-sm font-semibold text-foreground/90 mb-2">{p.subtitle}</h4>
                  )}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bridge CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="#cellular-lab"
          className="inline-flex items-center gap-2 text-xs font-body tracking-wider uppercase text-muted-foreground hover:text-foreground border border-border/40 px-6 py-3 rounded-sm hover:border-primary/30 transition-all group"
        >
          <FlaskConical className="w-3.5 h-3.5 text-primary" />
          Explorar moléculas de investigación en Cellular Lab
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="font-body text-[11px] text-muted-foreground/60 italic mt-6 max-w-lg mx-auto">
          "La diferencia entre un suplemento genérico y una unidad de optimización molecular radica en la precisión analítica. En Aevendum, operamos bajo estándares de grado investigación. Si la pureza estructural no alcanza el 99.9% en los test de estabilidad, el lote no es admitido en nuestro Cellular Lab. No vendemos botes; entregamos biotecnología certificada."
        </p>
      </motion.div>
    </div>
  </section>
);
