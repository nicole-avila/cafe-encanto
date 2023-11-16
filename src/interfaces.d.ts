export interface ButtonProps {
  btnText: string;
  onClick?: () => void;
}

export interface ProductProps {
  products: ProductData[];
  productClick?: (productId: number) => void;
}

export interface ProductData {
  category: string;
  description: string;
  id: number;
  image: string;
  ingredients: string[];
  price: number;
  title: string;
}

export interface ImageProps {
  image: {
    src: string;
    alt: string;
  };
  className?: string;
}
