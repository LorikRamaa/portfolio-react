import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("nav-responsive");
    const toggler = document.querySelector(".menu-toggler");
    toggler.classList.toggle("nav-responsive");
  };
  const changeBackground = () => {
    if (window.scrollY > 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    console.log(element);
    // const navLinks = document.querySelectorAll(".nav-links a");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" className="logo-text">
              Lorik Rama
            </Link>
            <svg
              class="logo"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </svg>
          </div>
          <div className="nav-links" ref={navRef}>
            <Link to="/" onClick={() => scrollToSection("Home")}>
              Home
            </Link>
            <Link to="#About" onClick={() => scrollToSection("About")}>
              About
            </Link>
            <Link to="#Skills" onClick={() => scrollToSection("Skills")}>
              Specialized at
            </Link>
            <Link to="#Works" onClick={() => scrollToSection("Works")}>
              Works
            </Link>
            <Link to="#Contact" onClick={() => scrollToSection("Contact")}>
              Contact
            </Link>
          </div>
          <div className="menu-toggler" onClick={showNavBar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
