import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
// import WorkDetail from "./pages/work";

function Content() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={() => scrollToSection("navbar")} />
      <Home scrollToSection={() => scrollToSection("Home")} />
      <About scrollToSection={() => scrollToSection("About")} />
      <Skills scrollToSection={() => scrollToSection("Skills")} />
      <Experience scrollToSection={() => scrollToSection("Experience")} />
      <Works scrollToSection={() => scrollToSection("Works")} />
      <Contact scrollToSection={() => scrollToSection("Contact")} />
      <Footer scrollToSection={() => scrollToSection("Footer")} />
    </div>
  );
}

export default Content;
