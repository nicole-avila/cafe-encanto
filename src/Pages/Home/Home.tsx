import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import hero from "../../../public/assets/hero.jpg";
import Hero from "../../components/Hero/Hero";
import SpecialEditon from "../../components/SpecialEditon/SpecialEditon";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        image={{
          src: hero,
          alt: "En trevlig bild på en ljus grön kopp med kaffe med en trä bricka under koppen",
        }}
      />
      <SpecialEditon />
      <Footer />
    </>
  );
}
