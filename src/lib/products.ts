import productCapsule from '@/assets/product-capsule.jpg';
import productPowder from '@/assets/product-powder.jpg';
import productLiquid from '@/assets/product-liquid.jpg';
import productBottle from '@/assets/product-bottle.jpg';
import type { Product } from './store';

export const products: Product[] = [
  {
    id: 'nmn-pure',
    name: 'NMN Pure 500',
    subtitle: 'Nicotinamida Mononucleótido',
    price: 89.90,
    image: productCapsule,
    category: 'Longevidad',
    purity: '99.9%',
    description: 'NMN de ultra pureza para la activación de sirtuinas y producción de NAD+. Formulación liposomal para máxima biodisponibilidad.',
    badge: 'Bestseller',
  },
  {
    id: 'resveratrol-elite',
    name: 'Resveratrol Elite',
    subtitle: 'Trans-Resveratrol Micronizado',
    price: 64.90,
    image: productPowder,
    category: 'Antioxidante',
    purity: '99.5%',
    description: 'Trans-resveratrol de origen vegetal con tecnología de micronización para absorción celular optimizada.',
  },
  {
    id: 'nad-booster',
    name: 'NAD+ Booster',
    subtitle: 'Complejo Precursor NAD+',
    price: 119.90,
    image: productLiquid,
    category: 'Energía Celular',
    purity: '99.8%',
    description: 'Fórmula líquida sublingual de precursores NAD+ con entrega directa al torrente sanguíneo. Acción rápida.',
    badge: 'Premium',
  },
  {
    id: 'coq10-liposomal',
    name: 'CoQ10 Liposomal',
    subtitle: 'Ubiquinol Liposomal 200mg',
    price: 74.90,
    image: productBottle,
    category: 'Mitocondrial',
    purity: '99.7%',
    description: 'Coenzima Q10 en forma ubiquinol con tecnología liposomal. Soporte mitocondrial de grado farmacéutico.',
  },
];
