// import "./Menu.scss";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import heroImg from "../../assets/coffee-menu.jpg";
import { data } from "../../data";

export default function Menu() {
  return (
    <div className="menu">
      <Navbar />
      <Hero
        image={{
          src: heroImg,
          alt: "a white cup of coffe with a pink macaron besides",
        }}
      />
      <h1>Menu</h1>
      <Product products={data} />
      <Footer />
    </div>
  );
}
