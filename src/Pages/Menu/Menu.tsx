// import "./Menu.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import { data } from "../../data";

export default function Menu() {
  return (
    <div className="menu">
      <Navbar />
      <h1>Menu</h1>
      <Product products={data} />
      <Footer />
    </div>
  );
}
