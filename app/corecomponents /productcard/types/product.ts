export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  colors: ProductColor[];
  isNew?: boolean;
  isSale?: boolean;
  slug: string;
}
