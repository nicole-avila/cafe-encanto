// import "./Menu.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function Product() {
  return (
    <div className="product">
      <Navbar />
      <ProductItem />
      <Footer />
    </div>
  );
}
