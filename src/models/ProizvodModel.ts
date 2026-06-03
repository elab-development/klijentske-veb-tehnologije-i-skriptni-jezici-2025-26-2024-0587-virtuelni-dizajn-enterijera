export interface Proizvod {
  id: string;
  name: string;
  category: string;
  dimensions: { width: number; depth: number; height: number };
  image_path: string;
  price: number;
  wood_type: string;
  finish: string;
}