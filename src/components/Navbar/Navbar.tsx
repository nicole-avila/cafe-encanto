import "./Navbar.scss";
import logoSmall from "../../assets/logoSmall.svg";
import hamburger from "../../assets/hamburger.svg";
import cross from "../../assets/cross.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [crossVisibility, setCrossVisibility] = useState(true);

  function toggleMenu() {
    setMenuVisibility(!menuVisibility);
    setCrossVisibility(!crossVisibility);
  }

  return (
    <div className="navbar">
      {/* <div className="navbar__content"> */}
      <div className="navbar__logo">
        <h1>Café Encanto</h1>
        <img src={logoSmall} alt="under line detail for logo Cafe Encanto" />
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
        <Link to="/menu">Menu</Link>
        <Link to="/coffee">Kaffe</Link>
        <Link to="/about-us">Om Oss</Link>
      </div>
      {/* </div> */}
    </div>
  );
}
