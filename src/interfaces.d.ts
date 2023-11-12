export interface button {
  btnText: string;
}

export interface ProductProps {
  products: ProductData[];
}

export interface ProductData {
  description: string;
  id: number;
  ingredients: string[];
  price: number;
  title: string;
}
