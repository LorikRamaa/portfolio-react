import React from "react";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faSquareBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section id="Footer">
      <div class="container">
        <div class="footer__content">
          <div class="fotter__groups">
            <p class="fotter__p">Copyright &copy; 2024 LorikRama </p>
            <div class="fotter__sm">
              <Link to="https://instagram.com/lorikramaa" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="https://instagram.com/lorikramaa" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="https://linkedin.com/in/lorikramaa" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link to="https://behance.com/lorikramaa" target="_blank">
                <FontAwesomeIcon icon={faSquareBehance} />
              </Link>
              <Link to="https://github.com/lorikramaa" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
