import ProductCard from "../ProductCard/ProductCard";
import { data } from "../../data";

export default function Coffee() {
  console.log(data);

  return (
    <div>
      <ProductCard products={data} />
    </div>
  );
}
