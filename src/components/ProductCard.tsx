import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown, FlaskConical, Flag, FileText, AlertTriangle, Shield, Dna, Thermometer } from 'lucide-react';
import type { Product } from '@/lib/store';
import { useStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  index: number;
}

const accordionData: Record<string, { howItWorks: string; protocol: string }> = {
  'nmn-uthever': {
    howItWorks: 'El β-Nicotinamida Mononucleótido (NMN) es un nucleótido precursor del NAD+ (Nicotinamida Adenina Dinucleótido), coenzima esencial en las rutas metabólicas de producción energética celular y reparación del ADN. Estudios preclínicos documentan su rol en la activación de sirtuinas (SIRT1-SIRT7).',
    protocol: 'Especificaciones del compuesto: 500 mg por unidad. Forma: β-NMN cristalino. Pureza certificada ≥99.5% por HPLC. Almacenamiento: lugar fresco y seco, protegido de la luz.',
  },
  'spermidine-pro': {
    howItWorks: 'La espermidina activa la autofagia, el proceso natural por el que las células eliminan componentes dañados y se renuevan. Es como un "programa de reciclaje" celular que previene la acumulación de desechos moleculares.',
    protocol: 'Tomar 1 cápsula al día con la comida principal. Compatible con otros protocolos de renovación celular.',
  },
  'magnesio-ltreonato': {
    howItWorks: 'Nuestra fórmula utiliza una Matriz de Transporte Lipofílico (derivada del L-Treonato) que actúa como una \'llave maestra\' biológica. Es la única estructura molecular capaz de cruzar la barrera hematoencefálica de manera eficiente, nutriendo directamente las conexiones neuronales y potenciando la plasticidad sináptica. Esta entrega directa garantiza que el principio activo llegue exactamente donde se necesita: el sistema nervioso central.',
    protocol: 'Tomar 1 medida (2g) disuelta en agua por la noche, 30-60 minutos antes de dormir. Mejora el sueño profundo y la función cognitiva.',
  },
  'resveratrol': {
    howItWorks: 'El Trans-Resveratrol activa las sirtuinas (SIRT1), las proteínas responsables de la reparación celular y la regulación metabólica. Su sinergia con el Protocolo 01 potencia la resíntesis de NAD+, amplificando los beneficios de ambos compuestos.',
    protocol: 'Tomar 1 cápsula al día con una comida que contenga grasas saludables para maximizar la biodisponibilidad. Sinergia óptima combinado con el Protocolo 01.',
  },
};

const isCellularLab = (product: Product) => product.category === 'Cellular Lab';

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const addToCart = useStore((s) => s.addToCart);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const data = accordionData[product.id];
  const isLab = isCellularLab(product);

  const toggle = (key: string) => setOpenAccordion(openAccordion === key ? null : key);

  // Cellular Lab uses a "lab datasheet" aesthetic
  if (isLab) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="border border-border/40 bg-card/50 backdrop-blur-sm rounded-lg flex flex-col max-w-xl mx-auto w-full"
      >
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover opacity-90"
          />
          <span className="absolute top-3 left-3 bg-foreground/90 text-background text-[9px] font-body font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm">
            {product.badge}
          </span>
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-[10px] font-body font-semibold tracking-wider px-2.5 py-1.5 rounded-sm text-foreground/90 border border-primary/20 flex items-center gap-1">
            <FlaskConical className="w-3 h-3 text-primary" />
            {product.purity} Pureza
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5">
          <span className="text-[9px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
            <FlaskConical className="w-3 h-3" />
            {product.category} · Investigación Avanzada
          </span>
          <h3 className="font-display text-lg font-semibold mb-0.5">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-3 font-mono">{product.subtitle}</p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Accordion: Compound specs, stability, CoA */}
          {data && (
            <div className="space-y-1 mb-4 border-t border-border/20 pt-3">
              {[
                { key: 'how', label: 'Propiedades documentadas', content: data.howItWorks, icon: null },
                { key: 'protocol', label: 'Especificaciones del compuesto', content: data.protocol, icon: null },
                { key: 'stability', label: 'Estabilidad y Tecnología Crystal-Guard', icon: null, content: 'Este compuesto ha sido sometido a procesos de cristalización avanzada que garantizan una estabilidad térmica excepcional, superando los estándares convencionales del mercado. Gracias a esta tecnología de vanguardia, se reduce drásticamente la higroscopía (absorción de humedad), manteniendo una pureza certificada >99% a temperatura ambiente (25°C) sin necesidad de cadena de frío. Esta ingeniería nos permite garantizar una potencia biológica real en cada gramo, asegurando que la molécula llegue intacta a su destino celular desde nuestro almacén en España.' },
                { key: 'cert', label: 'Certificado de análisis (CoA)', icon: 'file', content: 'Cada lote es verificado mediante cromatografía líquida de alta resolución (HPLC). Pureza (HPLC): >99.9% · Metales pesados: <0.5 ppm · Contenido microbiano: Ausente · Estabilidad: Certificada a 25°C. Informe analítico completo disponible bajo petición a info@aevendum.com.' },
              ].map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => toggle(item.key)}
                    className="w-full flex items-center justify-between py-2 text-xs font-body text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <span className="flex items-center gap-1.5 min-w-0 flex-1">
                      {item.icon === 'file' && <FileText className="w-3 h-3 text-primary" />}
                      {item.label}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform shrink-0 ml-2 ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[11px] text-muted-foreground leading-relaxed pb-2 pl-1 font-mono">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* COA Verified Widget */}
          <div className="flex items-center gap-3 bg-muted/40 border border-border/30 rounded px-3 py-2.5 mb-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-body font-semibold text-foreground/90 tracking-wide">COA Verificado: Lote #2026-01</p>
              <p className="text-[9px] font-body text-muted-foreground">Reporte de pureza verificado por laboratorio independiente</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-between gap-2 mb-4">
            {[
              { icon: Dna, label: 'Pureza', sub: '≥99.5%' },
              { icon: Shield, label: 'Verificado', sub: 'Lab. Independiente' },
              { icon: Thermometer, label: 'Estabilidad', sub: 'Crystal-Guard' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5 text-center">
                <badge.icon className="w-3 h-3 text-muted-foreground shrink-0" />
                <div className="text-left">
                  <p className="text-[8px] font-body font-semibold text-foreground/70 leading-tight">{badge.label}</p>
                  <p className="text-[7px] font-body text-muted-foreground leading-tight">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal disclaimer */}
          <div className="bg-muted/50 border border-border/30 rounded px-3 py-2.5 mb-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-[9px] text-muted-foreground leading-relaxed">
                Este producto se suministra exclusivamente como sustancia química para fines de investigación. No apto para el consumo humano según normativa Novel Food.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
            <span className="font-display text-xl font-semibold">
              {product.price.toFixed(2)}€
            </span>
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-foreground/90 text-background px-4 py-2 rounded-sm text-xs font-body font-semibold tracking-wider uppercase hover:bg-foreground/80 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {product.buttonText || 'Solicitar Acceso'}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Molecular Nutrition card
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card hover-lift group flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 gold-gradient text-primary-foreground text-[10px] font-body font-bold tracking-wider uppercase px-3 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-[10px] font-body font-semibold tracking-wider px-2.5 py-1.5 rounded-sm text-foreground/90 border border-primary/20 flex items-center gap-1">
          <FlaskConical className="w-3 h-3 text-primary" />
          {product.purity} Pureza
        </div>
        <div className="absolute bottom-3 right-3 bg-background/70 backdrop-blur-sm text-[10px] font-body tracking-wider px-2 py-1 rounded-sm text-muted-foreground flex items-center gap-1">
          <Flag className="w-3 h-3" />
          Formulado en Europa
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <span className="text-[10px] font-body tracking-[0.2em] uppercase text-gold mb-2">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-semibold mb-0.5">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{product.subtitle}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          {product.description}
        </p>

        {data && (
          <div className="space-y-1 mb-4 border-t border-border/20 pt-3">
            {[
              { key: 'how', label: product.id === 'magnesio-ltreonato' ? '¿Cómo funciona? [El Secreto de la Permeabilidad]' : '¿Cómo funciona?', content: data.howItWorks },
              { key: 'protocol', label: 'Protocolo de uso', content: data.protocol },
              { key: 'cert', label: 'Certificado de análisis', content: 'Cada lote incluye certificado de análisis (CoA) emitido por laboratorio independiente europeo. Disponible bajo solicitud a info@aevendum.com.' },
            ].map((item) => (
              <div key={item.key}>
                <button
                  onClick={() => toggle(item.key)}
                  className="w-full flex items-center justify-between py-2 text-xs font-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openAccordion === item.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[11px] text-muted-foreground leading-relaxed pb-2 pl-1">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
          <span className="font-display text-xl font-semibold">
            {product.price.toFixed(2)}€
          </span>
          {product.comingSoon ? (
            <span className="flex items-center gap-2 bg-muted/60 text-muted-foreground px-4 py-2 rounded-sm text-xs font-body font-semibold tracking-wider uppercase cursor-default">
              Próximamente
            </span>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 gold-gradient px-4 py-2 rounded-sm text-xs font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {product.buttonText || 'Solicitar Acceso'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
