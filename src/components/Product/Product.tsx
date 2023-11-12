import "./Product.scss";
import { data } from "../../data";
import { ProductProps } from "../../interfaces";

console.log(data);

export default function Product({ products }: ProductProps) {
  return (
    <div className="product">
      {products.map((product) => (
        <div className="product__content" key={product.id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
}
