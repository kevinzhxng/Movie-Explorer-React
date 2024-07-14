import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../assets/Movie Explorer Logo.webp";

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
              <a href="/">Home</a>
            </li>
            <li className="nav__link">
              <a href="/movies">Movies</a>
            </li>
            <li className="nav__link">
              <a href="/favorites">
              <FontAwesomeIcon icon="fa-bookmark" />
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
