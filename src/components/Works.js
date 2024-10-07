import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
const Works = () => {
  const checkForLink = (work) => {
    if (work.url) {
      return (
        <Link to={work.url} target="_blank" className="works-btn">
          See more
        </Link>
      );
    } else {
      return <p className="not-published">*This website is not published*</p>;
    }
  };

  return (
    <div id="Works">
      <div className="container">
        <h1 className="works-title">Works</h1>
        <div className="works-content">
          {data.map((work) => (
            <div className="works-detail">
              <div className="work-image">
                <img alt="work" src={work.image} />
              </div>
              <div className="works-detail-text">
                <div className="works-detail-text-tech">
                  {work.tech.map((lang, index) => (
                    <span key={index}>{lang}</span>
                  ))}
                </div>
                <div className="works-detail-text-info">
                  <h2>{work.title}</h2>
                  <p>{work.description}</p>
                </div>
                {checkForLink(work)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Works;
