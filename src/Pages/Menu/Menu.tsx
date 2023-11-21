import "./Menu.scss";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductCard from "../../components/ProductCard/ProductCard";
// import Coffee from "../../components/CoffeeMenu/Coffee";
import heroImg from "../../../public/assets/coffee-menu.jpg";

import { data } from "../../data";
import { useState, useEffect } from "react";
import { ProductData } from "../../interfaces";
// import HotDrinks from "../../components/CoffeeMenu/HotDrinks";
// import Smooties from "../../components/CoffeeMenu/Smooties";
// import ChristmasDrinks from "../../components/CoffeeMenu/ChristmasDrinks";

export default function Menu() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("coffee");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleClick(productId: number) {
    setSelectedProductId(productId);
    console.log(selectedProduct);
  }

  const selectedProduct: ProductData | undefined = data.find(
    (product) => product.id === selectedProductId
  );

  return (
    <div className="menu">
      <Navbar />
      <Hero
        image={{
          src: heroImg,
          alt: "a white cup of coffe with a pink macaron besides",
        }}
      />

      <h1 className="menu__title">Meny</h1>

      <div className="menu__links">
        <a
          href="#"
          className={`menu__link-coffee ${
            selectedCategory === "coffee" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("coffee")}
        >
          Kaffe sorter
        </a>
        <a href="#">Varma drycker</a>
        <a href="#">Smooties</a>
        <a href="#">Christmas Edition</a>
      </div>

      {/* <div>{selectedCategory === "coffee" && <Coffee />}</div> */}

      {selectedProductId ? (
        <ProductItem />
      ) : (
        <ProductCard products={data} productClick={handleClick} />
      )}
      <Footer />
    </div>
  );
}
