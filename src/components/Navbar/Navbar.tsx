import "./Navbar.scss";
import encantoIcon from "../../../public/assets/encanto-icon.svg";
import hamburger from "../../../public/assets/hamburger.svg";
import cross from "../../../public/assets/cross.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [crossVisibility, setCrossVisibility] = useState(true);
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  function toggleMenu() {
    setMenuVisibility(!menuVisibility);
    setCrossVisibility(!crossVisibility);
  }

  return (
    <nav className={color ? "navbar navbar__bg" : "navbar"}>
      <div className="navbar__logo">
        <h1>Café Encanto</h1>
        <img
          className="navbar__img-logo"
          src={encantoIcon}
          alt="logo ikon cafe encanto"
        />
      </div>

      {crossVisibility ? (
        <img
          className="navbar__hamburger-icon"
          src={hamburger}
          alt="menu icon for all links"
          onClick={toggleMenu}
        />
      ) : (
        <img
          className="navbar__cross-icon"
          src={cross}
          alt="cross icon to close menu-icon for all links"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`navbar__links ${
          menuVisibility ? "navbar__menu-links" : ""
        }`}
      >
        <Link to="/">Hem</Link>
        <Link to="/menu">Meny</Link>
        <Link to="/coffee">Kaffe</Link>
        <Link to="/about-us">Om Oss</Link>
      </div>
    </nav>
  );
}
