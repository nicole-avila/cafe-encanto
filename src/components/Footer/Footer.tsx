import "./Footer.scss";
import Button from "../Button/Button";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import fb from "../../assets/fb.svg";
import github from "../../assets/github.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__headline">
        <h2 className="footer__headline-title">Smakresan fortsätter...</h2>
        <h3 className="footer__headline-text">
          Prenumerera för att vara del av Café Encantos kreativa kaffevärld!
        </h3>
        <div className="footer__subscribe-content">
          <input
            className="footer__input"
            type="email"
            name="email"
            id="email"
            placeholder="e-postadress.."
          />
          <Button btnText="prenumerera" />
        </div>
      </div>

      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__links">
            <strong>Cafe Encanto</strong>
            <p>
              Vårt Kaffe <br />
              Kaffe för Hemmet <br />
              Mat och Dryck <br />
              Presentkort <br />
              Om Oss <br />
              Kontakt <br />
              Bli en av oss! <br />
            </p>
          </div>

          <div className="footer__information">
            <strong>Information</strong>
            <p>
              Näring och Allergener <br />
              Privacy Notice <br />
              Cookie Policy <br />
              Livsmedelssäkerhet <br />
              Användarvillkor - App <br />
            </p>
          </div>

          <div className="footer__social-media">
            <strong>Följ oss...</strong>
            <div>
              <a
                href="https://github.com/nicole-avila/cafe-encanto"
                target="_blank"
                aria-label="länk till instagram"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                href="https://github.com/nicole-avila/cafe-encanto"
                target="_blank"
                aria-label="länk till linkedin"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/nicole-avila/cafe-encanto"
                target="_blank"
                aria-label="länk till facebook"
              >
                <img src={fb} alt="" />
              </a>
              <a
                href="https://github.com/nicole-avila/cafe-encanto"
                target="_blank"
                aria-label="länk till github"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
