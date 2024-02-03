import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Pfp from "../assets/LorikRama.jpeg";
const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    console.log(element);
  };
  return (
    <div>
      <div id="Home">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lorikramaa" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.github.com/lorikramaa" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.behance.net/lorikramaa" target="_blank">
            <FontAwesomeIcon icon={faSquareBehance} />
          </a>
        </div>
        <div className="home-container">
          <div className="home-div">
            <div className="left-home">
              <h1>
                Hi! <br /> I'm Lorik Rama
              </h1>
              <h3>Front-end Developer</h3>
              <Link
                to="#Contact"
                className="contact-home"
                onClick={() => scrollToSection("Contact")}
              >
                Contact me <FontAwesomeIcon icon={faPaperPlane} />{" "}
              </Link>

              <div className="social-links-home">
                <a
                  href="https://www.linkedin.com/in/lorikramaa"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.github.com/lorikramaa" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.behance.net/lorikramaa" target="_blank">
                  <FontAwesomeIcon icon={faSquareBehance} />
                </a>
              </div>
            </div>
            <div className="right-home">
              <img src={Pfp} className="personal-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
