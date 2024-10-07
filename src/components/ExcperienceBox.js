import React from "react";
function ExcperienceBox({ title, year, company, desc }) {
  return (
    <div className="info-container">
      <div className="info-title">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
      <div className="info-company">
        <h3>{company}</h3>
      </div>
      <div className="info-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ExcperienceBox;
