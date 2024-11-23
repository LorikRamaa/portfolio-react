import React from "react";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faWordpress,
  // faBootstrap,
  faFigma,
  faGithub,
  faPhp,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const SkillList = [
    {
      icon: <FontAwesomeIcon icon={faHtml5} />,
      percent: "90%",
      text: "HTML",
    },
    {
      icon: <FontAwesomeIcon icon={faCss3} />,
      percent: "90%",
      text: "CSS",
    },
    {
      icon: <FontAwesomeIcon icon={faSass} />,
      percent: "65%",
      text: "Sass",
    },
    {
      icon: <FontAwesomeIcon icon={faJs} />,
      percent: "80%",
      text: "JavaScript",
    },
    {
      icon: <FontAwesomeIcon icon={faReact} />,
      percent: "70%",
      text: "ReactJs",
    },
    {
      icon: <FontAwesomeIcon icon={faWordpress} />,
      percent: "90%",
      text: "Wordpress",
    },
    {
      icon: <FontAwesomeIcon icon={faPhp} />,
      percent: "60%",
      text: "PHP",
    },
    {
      icon: <FontAwesomeIcon icon={faGit} />,
      percent: "70%",
      text: "Git",
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      percent: "80%",
      text: "Github",
    },
    {
      icon: <FontAwesomeIcon icon={faFigma} />,
      percent: "90%",
      text: "Figma",
    },
  ];

  return (
    <div id="Skills">
      <div className="container">
        <h1 className="skill-title">Specialized at</h1>
        <div className="skills-content">
          {SkillList.map((skill, index) => (
            <div className="skill">
              <div className="skill-bg">
                <i>{skill.icon}</i>
                <h3>{skill.percent}</h3>
              </div>
              <h2>{skill.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
