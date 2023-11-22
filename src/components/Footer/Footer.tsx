import "./Footer.scss";
import Button from "../Button/Button";
import instagram from "../../../public/assets/instagram.svg";
import linkedin from "../../../public/assets/linkedin.svg";
import fb from "../../../public/assets/fb.svg";
import github from "../../../public/assets/github.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__headline">
        <h1 aria-label="titel 1" className="footer__headline-title">
          Smakresan fortsätter...
        </h1>
        <h2 aria-label="titel 2" className="footer__headline-text">
          Prenumerera för att vara del av Café Encantos kreativa kaffevärld!
        </h2>
        <div className="footer__subscribe-content">
          <input
            aria-label="en inputfält för att skriva in epostadress för prenumeration"
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
            <h3>Cafe Encanto</h3>
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
            <h3>Information</h3>
            <p>
              Näring och Allergener <br />
              Privacy Notice <br />
              Cookie Policy <br />
              Livsmedelssäkerhet <br />
              Användarvillkor - App <br />
            </p>
          </div>

          <div className="footer__social-media">
            <h3>Följ oss...</h3>
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
