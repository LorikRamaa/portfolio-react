import React, { useEffect } from "react";
// import Pfp from "../assets/pfp.png";

const About = () => {
  return (
    <div id="About">
      <div className="container">
        <h1 className="designed-title">About</h1>
        <div className="about-content">
          <div className="about-content-text">
            <p>
              Hello! I am <span>Lorik Rama </span> I am a Web Developer, Web
              Designer, Graphic Designer. I started to like programming and so I
              decided to continue learning more and more about coding. After
              years of learning programming I have graduated at different
              categories.
            </p>
            <div className="experience">
              <h1 className="big-4">4+</h1>
              <p className="experience-p">
                Years of experience. Specialised in building apps, while
                ensuring a seamless web experience for end users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
