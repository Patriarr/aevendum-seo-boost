import productCapsule from '@/assets/product-capsule.jpg';
import productPowder from '@/assets/product-powder.jpg';
import productLiquid from '@/assets/product-liquid.jpg';
import productBottle from '@/assets/product-bottle.jpg';
import productResveratrol from '@/assets/product-resveratrol.jpg';
import packLongevityStarter from '@/assets/pack-longevity-starter.jpg';
import packFemalePerformance from '@/assets/pack-female-performance.jpg';
import packAevendumPeak from '@/assets/pack-aevendum-peak.jpg';
import type { Product } from './store';

// ── Cellular Lab (Advanced Molecules) ──
export const cellularLabProducts: Product[] = [
  {
    id: 'nmn-uthever',
    name: 'Protocolo de Restauración Celular [Cód. 01]',
    subtitle: 'Sustrato Vital NAD+ de Alta Pureza (500 mg)',
    price: 85.00,
    image: productCapsule,
    category: 'Cellular Lab',
    purity: '99.9%',
    description: 'La molécula de referencia en biogerontología. Combustible esencial para la reparación del ADN y energía mitocondrial. Tecnología de Cristalización Avanzada.',
    badge: 'Grado Investigación',
    buttonText: 'Solicitar Acceso',
  },
];

// ── Molecular Nutrition ──
export const molecularNutritionProducts: Product[] = [
  {
    id: 'spermidine-pro',
    name: 'Sistema de Renovación Molecular [Cód. 02]',
    subtitle: 'Inductor de Autofagia PRO (Cápsulas de Alta Concentración)',
    price: 75.00,
    image: productPowder,
    category: 'Cellular Renew',
    purity: '99.5%',
    description: 'Facilita la eliminación de componentes celulares dañados, promoviendo una renovación sistémica integral. El estándar de oro de la ciencia centroeuropea.',
    badge: 'Autofagia',
    buttonText: 'Solicitar Acceso',
  },
  {
    id: 'magnesio-ltreonato',
    name: 'Complejo de Optimización Cognitiva [Cód. 03]',
    subtitle: 'Sinfonía Neuro-Directa (Alta Permeabilidad)',
    price: 69.00,
    image: productLiquid,
    category: 'Mineral Excellence',
    purity: '99.8%',
    description: 'Compuesto quelado diseñado para superar la barrera hematoencefálica. Optimiza la claridad mental, memoria de trabajo y arquitectura del sueño profundo.',
    badge: 'Neuro',
    buttonText: 'Solicitar Acceso',
  },
  {
    id: 'resveratrol',
    name: 'Modulador de Resiliencia Biológica [Cód. 04]',
    subtitle: 'Activador de Sirtuinas (Trans-Resveratrol 500 mg)',
    price: 65.00,
    image: productResveratrol,
    category: 'Anti-Aging',
    purity: '99.5%',
    description: 'Trans-Resveratrol de alta pureza. El interruptor genético para una vida longeva. Protege el metabolismo y potencia el Protocolo 01.',
    badge: 'Sirtuinas',
    buttonText: 'Solicitar Acceso',
  },
];

// ── Packs (Sinergias) ──
export const packs: Product[] = [
  {
    id: 'vitalidad-total',
    name: 'Protocolo Vitalidad Total',
    subtitle: 'P.01 + P.04',
    price: 135.00,
    image: packLongevityStarter,
    category: 'Pack Sinergia',
    purity: '99.9%',
    description: 'Energía y antienvejecimiento sistémico.',
    badge: 'Sinergia Probada',
    buttonText: 'Consultar Disponibilidad Lote 01',
  },
  {
    id: 'mente-renovacion',
    name: 'Protocolo Mente & Renovación',
    subtitle: 'P.02 + P.03',
    price: 129.00,
    image: packFemalePerformance,
    category: 'Pack Cognitivo',
    purity: '99.5%',
    description: 'Claridad mental y limpieza celular profunda.',
    badge: 'Neuro + Autofagia',
    buttonText: 'Consultar Disponibilidad Lote 01',
  },
  {
    id: 'molecular-foundation',
    name: 'Molecular Foundation',
    subtitle: 'P.01 + P.02 + P.03',
    price: 195.00,
    image: packAevendumPeak,
    category: 'Protocolo Completo',
    purity: '99.9%',
    description: 'El Triángulo de Hierro: Energía, Limpieza y Cognición.',
    badge: 'Protocolo Completo',
    buttonText: 'Consultar Disponibilidad Lote 01',
  },
  {
    id: 'aevendum-full',
    name: 'Aevendum Full Protocol 360º',
    subtitle: 'P.01 + P.02 + P.03 + P.04',
    price: 249.00,
    image: packAevendumPeak,
    category: 'Protocolo 360º',
    purity: '99.9%',
    description: 'El protocolo definitivo. Todas las moléculas esenciales en un solo envío.',
    badge: 'Protocolo 360º',
    buttonText: 'Consultar Disponibilidad Lote 01',
  },
];

// Backwards-compat aliases
export const labProducts = cellularLabProducts;
export const supplementProducts = molecularNutritionProducts;

// Combined for cart compatibility
export const products: Product[] = [...cellularLabProducts, ...molecularNutritionProducts, ...packs];
