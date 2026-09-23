export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  line: "cumbre-home" | "electrodomesticos";
  category: string;
  description: string;
  stock: number;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};
