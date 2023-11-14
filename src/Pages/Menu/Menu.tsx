// import "./Menu.scss";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import heroImg from "../../assets/coffee-menu.jpg";
import { data } from "../../data";
import { useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductData } from "../../interfaces";

export default function Menu() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

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
      {selectedProductId ? (
        <ProductItem />
      ) : (
        <ProductCard products={data} productClick={handleClick} />
      )}
      <Footer />
    </div>
  );
}
