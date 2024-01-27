import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Pfp from "../assets/pfp.png";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div>
      <div id="Home">
        <div className="social-links">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
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
              <a href="#" className="contact-home">
                Contact me <FontAwesomeIcon icon={faPaperPlane} />{" "}
              </a>
            </div>
            <div className="right-home">
              <svg
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                class="profile__image__svg"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image class="home_blob-img" x="12" y="18" xlinkHref={Pfp} />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
