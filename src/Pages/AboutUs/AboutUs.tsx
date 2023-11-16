// import "./AboutUs.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../../public/assets/hero.jpg";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <Navbar />
      <Hero
        image={{
          src: heroImg,
          alt: "hero image of a white cup o coffee and teal background",
        }}
      />
      <Footer />
    </div>
  );
}
