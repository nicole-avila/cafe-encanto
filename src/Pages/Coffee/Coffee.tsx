import "./Coffee.scss";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import coffeeBeans from "../../../public/assets/coffee-beans.jpg";
// import beanField from "../../../public/assets/coffee-bean-field.png";
import Hero from "../../components/Hero/Hero";
// import coffeeVideo from "../../../public/video-cafe.mp4";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import video from "../../../public/";

export default function Coffee() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coffee">
      <Navbar />
      <div className="coffee__container">
        <div className="coffee__hero">
          <Hero
            className="coffee__hero-img"
            image={{
              src: coffeeBeans,
              alt: "a wooden bowl filled with coffee beans",
            }}
          />
          <div className="coffee__hero-content">
            <p className="coffee__hero-text">
              Välkommen till Café Encanto, där varje kopp bär med sig en
              historia av omsorgsfullt utvalda kaffebönor. Våra bönor hämtas
              från källor runt om i världen, där jordens mångfald och unika
              klimat samverkar för att skapa kaffekvalitet i världsklass. Vi
              strävar efter att erbjuda inte bara en dryck, utan en resa genom
              kaffeodlingarnas speciella karaktär.{" "}
            </p>
            <Button btnText="Tillbaka hem" onClick={handleClick} />
          </div>
        </div>

        <div className="coffee__video-content">
          <video className="coffee__video" controls>
            <source src="/video-cafe.mp4" type="video/mp4" />
            <track
              kind="captions"
              srcLang="en"
              src="/subtitles.vtt"
              label="English"
            />
            Din webbläsare stöder inte videotaggen.
          </video>
          {/* <img className="coffee__video" src={beanField} alt="" /> */}
          <p className="coffee__video-text">
            Vårt engagemang för hög kvalitet genomsyrar hela processen, från
            böna till bryggning. Varje bönas resa är noga övervakad för att
            säkerställa att endast de mest utsökta och karakteristiska smakerna
            når ditt kaffekrus. Vi är stolta över att kunna erbjuda en
            upplevelse där varje klunk av Café Encanto är en hyllning till
            kaffets ursprung och rika arv.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
