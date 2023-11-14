import "./ProductItem.scss";
import { ProductData } from "../../interfaces";
import { useParams, Link } from "react-router-dom";
import { data } from "../../data";
import ProductFacts from "../ProductFacts/ProductFacts";

export default function ProductItem() {
  const { productId } = useParams();

  const product: ProductData | undefined = data.find(
    (product) => product.id === Number(productId)
  );

  console.log(product);

  if (!product) {
    return <h2>Produkten hittades inte...</h2>;
  }

  return (
    <div className="product-item">
      <div className="product-item__breadcrumbs">
        <Link to="/menu">Meny {">"}</Link>{" "}
        <p className="product-item__breadcrumbs-p">{product.title}</p>
      </div>
      <div className="product-item__product">
        <div className="product-item__img-container">
          <img className="product-item__img" src={product.image} alt="" />
        </div>

        <div className="product-item__product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>

      <ProductFacts />
    </div>
  );
}
