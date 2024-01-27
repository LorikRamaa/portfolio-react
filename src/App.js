import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "../components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Content from "./components/Content";
// import WorkDetail from "../pages/Work";

function App() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Content />} />
        {/* <Route
          path="/"
          exact={true}
          element={<Home scrollToSection={() => scrollToSection("Home")} />}
        />
        <Route
          path="About"
          exact={true}
          element={<About scrollToSection={() => scrollToSection("About")} />}
        />
        <Route
          path="Skills"
          element={<Skills scrollToSection={() => scrollToSection("Skills")} />}
        />
        <Route
          path="Works"
          element={<Works scrollToSection={() => scrollToSection("Works")} />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
