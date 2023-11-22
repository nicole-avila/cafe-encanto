import "./Coffee.scss";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import coffeeBeans from "../../../public/assets/coffee-beans.jpg";
import Hero from "../../components/Hero/Hero";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import beanField from "../../../public/assets/coffee-bean-field.png";
// import coffeeVideo from "../../../public/video-cafe.mp4";

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
              alt: "En bild på en liten träskål fylld med kaffebönor, med turkos grön bakgrund och gröna löv runt trädskålen",
            }}
          />
          <div className="coffee__hero-content">
            <p
              aria-label="En textbeskrivning om Cafe Encanto"
              className="coffee__hero-text"
            >
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
          <video
            aria-label="Ett video klipp med engelska tal, finns med två alternativ video text"
            className="coffee__video"
            controls
          >
            <source src="/video-cafe.mp4" type="video/mp4" />
            <track
              kind="captions"
              srcLang="en"
              src="/subtitles.vtt"
              label="English"
            />
            <track
              kind="captions"
              srcLang="se"
              src="/subtitles-swe.vtt"
              label="Svenska"
            />
            Din webbläsare stöder inte videotaggen.
          </video>
          {/* <img className="coffee__video" src={beanField} alt="" /> */}
          <p
            aria-label="En textbeskrivning om cafe encanto's kaffe tillverkan"
            className="coffee__video-text"
          >
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
