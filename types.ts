export type Bike = {
  title: string;
  category:  "mtb"| "gravel" | "road";
  brand: string;
  frameMaterial: "aluminum" | "carbon" | "steel" | "titanium";
  wheelSize: 26 | 27.5 | 29 | 700;
  weight: number;
  suspensionType: "full_suspension" | "hardtail" | "rigid" | "micro_suspension";
  price: number;
  colorOptions?: string[];
  usage: string;
  imageUrl: string[];
  favourite: boolean;
};
