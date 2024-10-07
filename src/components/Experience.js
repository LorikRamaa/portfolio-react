import React from "react";
import ExcperienceBox from "./ExcperienceBox";

const Experience = () => {
  return (
    <div id="Experience">
      <div className="container">
        <h1 className="experience-title">Experience</h1>
        <div className="experience-box">
          <div className="experience-box-year">
            <h1>4+</h1>
            <p>Years experience</p>
          </div>
          <div className="experience-container">
            <ExcperienceBox
              title="Software Engineer Instructor"
              year="Sept 2023 - Present"
              company="Innovation Academy"
              desc=" As a Software Engineer Instructor at Innovation Academy, I guide aspiring developers through the fundamentals and advanced concepts of software engineering. I focus on providing hands-on experience, ensuring that students not only understand programming languages but also learn how to build real-world applications."
            />
            <ExcperienceBox
              title="Graphic Designer"
              year="June 2024 - Sept 2024"
              company="Unimax AutoDekor"
              desc="As a graphic designer at Unimax Autodekor, I create dynamic social media posts and videos to showcase our custom automotive graphics and vehicle wraps. My goal is to deliver engaging content that highlights the creativity and precision behind each design. Through visually appealing posts and promotional videos"
            />
            <ExcperienceBox
              title="Front-end Developer"
              year="June 2022 - June 2023"
              company="Infinit Design"
              desc="As a Front-end Developer at Infinit Design, I focus on creating responsive and visually appealing web interfaces. My role involves translating design concepts into functional websites that provide seamless user experiences. By using modern front-end technologies and frameworks, I ensure that each project is optimized for performance and usability."
            />
            <ExcperienceBox
              title="Freelancer"
              year="June 2021 - Present"
              company="Upwork"
              desc="As a Freelancer on Upwork, I offer a range of services in graphic design, front-end development, and software engineering. I work with clients globally, providing customized solutions that meet their unique project needs. Whether it's creating visually compelling designs, developing user-friendly websites, or building software applications."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
