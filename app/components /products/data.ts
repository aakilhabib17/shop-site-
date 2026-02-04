import { Product } from '../../corecomponents /productcard/types/product';

export const newArrivalsData: Product[] = [
  {
    id: '1',
    brand: 'QUILLON',
    name: 'Soft Touch Jersey Long Sleeve Shirt',
    price: 145,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    ],
    colors: [
      { name: 'Navy', hex: '#1e3a8a' },
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    slug: 'soft-touch-jersey-long-sleeve-shirt',
  },
  {
    id: '2',
    brand: 'MOSES',
    name: 'Tapered Cotton Stretch Twill Pants',
    price: 285,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
    ],
    colors: [
      { name: 'Navy', hex: '#1e3a8a' },
      { name: 'Stone', hex: '#d4c5b9' },
      { name: 'Brown', hex: '#4a3f35' },
    ],
    isNew: true,
    slug: 'tapered-cotton-stretch-twill-pants',
  },
  {
    id: '3',
    brand: 'ANASTASIA',
    name: 'Printed Trench Coat',
    price: 495,
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
    ],
    colors: [
      { name: 'Floral', hex: '#f4a4c0' },
    ],
    isNew: true,
    slug: 'printed-trench-coat',
  },
  {
    id: '4',
    brand: 'MADDY ROSE',
    name: 'Sandal',
    price: 195,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1572033174662-027b2cb99b5c?w=400&h=500&fit=crop',
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Tan', hex: '#b87333' },
    ],
    slug: 'maddy-rose-sandal',
  },
  {
    id: '5',
    brand: 'GABRIELA',
    name: 'Midi Dress',
    price: 350,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop',
    ],
    colors: [
      { name: 'Floral', hex: '#f4a4c0' },
    ],
    isNew: true,
    slug: 'gabriela-midi-dress',
  },
  {
    id: '6',
    brand: 'URBAN',
    name: 'Classic Denim Jacket',
    price: 220,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop',
    ],
    colors: [
      { name: 'Blue', hex: '#4169e1' },
      { name: 'Black', hex: '#000000' },
    ],
    slug: 'classic-denim-jacket',
  },
];
