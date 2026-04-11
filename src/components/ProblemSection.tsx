import { motion } from 'framer-motion';
import { TrendingDown, Trash2, BatteryLow } from 'lucide-react';

const problems = [
  { icon: TrendingDown, title: 'Resiliencia celular en declive', desc: 'Con el tiempo, la capacidad de tus células para repararse y regenerarse disminuye progresivamente.' },
  { icon: Trash2, title: 'Acumulación de residuos', desc: 'Los residuos celulares se acumulan, comprometiendo el funcionamiento óptimo de tus sistemas biológicos.' },
  { icon: BatteryLow, title: 'Fatiga y rendimiento reducido', desc: 'Menor claridad mental, fatiga crónica y un metabolismo ralentizado son las consecuencias visibles.' },
];

export const ProblemSection = () => (
  <section className="py-24 md:py-36">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body font-medium">El origen del problema</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
          El envejecimiento empieza en tus <span className="blue-gray-text">células</span>
        </h2>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
          Con el tiempo, los residuos se acumulan y la resiliencia celular disminuye. Esto se traduce en menor claridad mental, fatiga y un metabolismo ralentizado.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {problems.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center bg-secondary">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
