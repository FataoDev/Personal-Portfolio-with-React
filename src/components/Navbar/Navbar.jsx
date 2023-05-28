import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <header className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Fatao O</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/competence">Compétences</Link>
            </li>
            <li>
              <Link to="/experience">Expériences</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Témoignage
              </Link>
            </li> */}
          </ul>
        </div>
        <Link to="/contact">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </header>
  );
};

export default navbar;
