import "./AboutUs.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../../public/assets/hero.jpg";
import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const successMessageRef = useRef<HTMLParagraphElement | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [handleForm, setHandleForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setHandleForm(true);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("ERROR", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (formSubmitted && successMessageRef.current) {
      successMessageRef.current.focus();
    }
  }, [formSubmitted]);

  useEffect(() => {
    function handleBeforeUnload(e: BeforeUnloadEvent) {
      if (handleForm) {
        const message = "du har ett osparad meldande ";
        e.returnValue = message;
        return message;
      }
      console.log(handleBeforeUnload);
    }
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      console.log(handleBeforeUnload);
    };
  }, [handleForm]);

  return (
    <div className="about">
      <Navbar />
      <Hero
        image={{
          src: heroImg,
          alt: "hero image of a white cup o coffee and teal background",
        }}
      />
      <div className="about__content">
        <h1 className="about__title">Om oss</h1>
        <p className="about__us">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          voluptas hic aperiam voluptatibus velit dolorum optio error sapiente
          blanditiis culpa voluptatem nihil nesciunt nisi iure quae voluptatum,
          itaque voluptates inventore!
        </p>
        <div className="about__follow-us">
          <fieldset className="about__follow-us">
            <legend>Våra länkar</legend>
            <a className="about__link" href="#" id="linkedIn">
              LinkedIn
            </a>
            <a className="about__link" href="#" id="linkedIn">
              Instagram
            </a>
            <a className="about__link" href="#" id="linkedIn">
              Facebook
            </a>
            <a className="about__link" href="#" id="linkedIn">
              Github
            </a>
          </fieldset>
        </div>

        <h2 className="about__title">Kontakta oss</h2>
        {formSubmitted && (
          <p
            className="about__success-message"
            ref={successMessageRef}
            aria-live="assertive"
          >
            Tack för ditt meddelande! Vi återkommer till dig snart.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="about__input-content">
            <label htmlFor="">Förnamn</label>
            <input
              type="text"
              placeholder="förnamn"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="about__input-content">
            <label htmlFor="">Efternamn</label>
            <input
              type="text"
              placeholder="efternamn"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="about__input-content">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="exempel@mail.se"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="about__input-content">
            <label htmlFor="">Ditt meddelande</label>
            <textarea
              placeholder="Skriv ditt medelande här.."
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              cols={30}
              rows={10}
            ></textarea>
          </div>

          <button type="submit">Skicka</button>
        </form>

        {/* <h3 className="about__title">Hitta oss</h3> */}
      </div>
      <Footer />
    </div>
  );
}
