import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import hero from "../../assets/hero.jpg";
import Hero from "../../components/Hero/Hero";
import SpecialEditon from "../../components/SpecialEditon/SpecialEditon";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__hero-content">
        <Hero
          image={{ src: hero, alt: "hero image of a white cup o coffee" }}
        />
      </div>
      <SpecialEditon />
      <Footer />
    </div>
  );
}
