import productP02 from '@/assets/product-p02.jpg';
import productP03 from '@/assets/product-p03.jpg';
import productP04 from '@/assets/product-p04.jpg';
import type { Product } from './store';

export const cellularLabProducts: Product[] = [
  {
    id: 'protocolo-02',
    name: 'Renovación Molecular',
    subtitle: 'Inductor de Autofagia PRO.',
    price: 75.00,
    image: productP02,
    category: 'Protocolo 02',
    purity: '99.5%',
    description: 'Inspirado en los procesos de reciclaje celular premiados con el Nobel. Facilita la eliminación de proteínas dañadas, promoviendo una renovación sistémica desde el núcleo.',
    badge: 'Lanzamiento Inminente',
    buttonText: 'Solicitar Dossier Técnico',
  },
  {
    id: 'protocolo-03',
    name: 'Optimización Cognitiva',
    subtitle: 'Sinfonía Neuro-Directa (Alta Permeabilidad).',
    price: 69.00,
    image: productP03,
    category: 'Protocolo 03',
    purity: '99.8%',
    description: 'Compuesto quelado diseñado para superar la barrera más selectiva del cuerpo: la barrera hematoencefálica. Optimiza la memoria de trabajo y la arquitectura del sueño profundo.',
    badge: 'Lanzamiento Inminente',
    buttonText: 'Solicitar Dossier Técnico',
  },
  {
    id: 'protocolo-04',
    name: 'Resiliencia Biológica',
    subtitle: 'Modulador de Vías Sirtuinas.',
    price: 65.00,
    image: productP04,
    category: 'Protocolo 04',
    purity: '99.5%',
    description: 'El interruptor genético para la defensa metabólica. Un compuesto de alta pureza diseñado para potenciar la longevidad celular y proteger contra el estrés oxidativo.',
    badge: 'Lanzamiento Inminente',
    buttonText: 'Solicitar Dossier Técnico',
  },
];

export const packs: Product[] = [
  {
    id: 'mente-renovacion',
    name: 'Mente & Renovación',
    subtitle: 'P.02 + P.03',
    price: 129.00,
    image: productP02,
    category: 'Pack Sinergia',
    purity: '99.5%',
    description: 'Reset Cognitivo: Limpieza celular combinada con nutrición neuronal directa.',
    badge: 'Sinergia',
    buttonText: 'Solicitar Información',
  },
  {
    id: 'defensa-equilibrio',
    name: 'Defensa & Equilibrio',
    subtitle: 'P.03 + P.04',
    price: 115.00,
    image: productP03,
    category: 'Pack Neuronal',
    purity: '99.5%',
    description: 'Soporte Neuronal: Protección de sirtuinas con enfoque en el sistema nervioso.',
    badge: 'Soporte',
    buttonText: 'Solicitar Información',
  },
  {
    id: 'essential-trio',
    name: 'Aevendum Essential Trio',
    subtitle: 'P.02 + P.03 + P.04',
    price: 179.00,
    image: productP04,
    category: 'Protocolo Integral',
    purity: '99.9%',
    description: 'Protocolo Integral: La base definitiva de la ingeniería biológica de Aevendum.',
    badge: 'Protocolo Completo',
    buttonText: 'Solicitar Información',
  },
];

export const labProducts = cellularLabProducts;
export const supplementProducts = cellularLabProducts;
export const molecularNutritionProducts = cellularLabProducts;
export const products: Product[] = [...cellularLabProducts, ...packs];
