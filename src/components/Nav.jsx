import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../assets/Movie Explorer Logo.webp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <a href="/">
            <img className="logo" src={Logo} alt="" />
          </a>
          <ul className="nav__links">
            <li className="nav__link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__link">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="nav__link">
              <Link to="/favorites">
                <FontAwesomeIcon icon="fa-bookmark" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
