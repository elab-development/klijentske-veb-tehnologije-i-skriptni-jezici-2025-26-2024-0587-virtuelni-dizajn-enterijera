export interface Proizvod {
  id: string;
  name: string;
  category: string;
  dimensions: { width: number; depth: number; height: number };
  image_path: string;
  wood_type: string;
  finish: string;

  getFormattedDimensions(): string;
  getFullName(): string;
  getWoodTypeLabel(): string;
}
export class ProizvodModel implements Proizvod {
  id: string;
  name: string;
  category: string;
  dimensions: { width: number; depth: number; height: number; };
  image_path: string;
  wood_type: string;
  finish: string;

  constructor(data: Omit<Proizvod, 'getFormattedDimensions' | 'getFullName'>) {
    this.id = data.id;
    this.name = data.name;
    this.category = data.category;
    this.dimensions = data.dimensions;
    this.image_path = data.image_path;
    this.wood_type = data.wood_type;
    this.finish = data.finish;
  }
  
  getFormattedDimensions(): string {
    return `${this.dimensions.width}*${this.dimensions.depth} cm`;
  }
  getWoodTypeLabel(): string {
    const prevodi: Record < string, string> = {
      oak: " Hrast",
      walnut: "Orah",
      pine: "Bor",
      maple: "Javor",
      bamboo: "Bambus",
      cedar: "Kedar",
  
    };
    return prevodi[this.wood_type] || this.wood_type;
  }
  getFullName(): string {
  return `${this.name} - ${this.getWoodTypeLabel()}`;

}
}