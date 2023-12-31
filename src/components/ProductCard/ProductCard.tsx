import "./ProductCard.scss";
import { data } from "../../data";
import { ProductProps } from "../../interfaces";
import { useNavigate } from "react-router-dom";

console.log(data);

export default function ProductCard({ products, productClick }: ProductProps) {
  const navigate = useNavigate();

  function handleClick(productId: number) {
    if (productClick) {
      productClick(productId);
      navigate(`/product/${productId}`);
    }
  }

  return (
    <div className="product-card">
      {products.map((product) => (
        <div
          className="product-card__content"
          key={product.id}
          onClick={() => handleClick(product.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick(product.id);
            }
          }}
          // role="button"
          tabIndex={0}
          aria-label={product.title}
        >
          <img
            className="product-card__img"
            src={product.image}
            alt={product.title}
          />

          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
}
