import React from "react";
import Logo from "../assets/Movie Explorer Logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="footer__container">
          <hr />
          <div className="footer__row">
            <img
              className="footer__img"
              src={Logo}
              alt=""
            />
            <p className="footer__copyright">
            © Movie Explorer All Rights Reserved
            </p>
            <ul className="footer__github">
              <a
                href="https://github.com/kevinzhxng/Movie-Explorer-API-Project"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
