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
