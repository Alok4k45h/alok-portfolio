import React from "react";
import PhotographyData from "./PhotographyData";
import "./PhotographySection.css";

function PhotographySection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="heading">GLIMPSES OF MY CLICKS 📸</h1> <hr />
          </div>
        </div>
      </div>

      <div className="container projects-list" id="projects-list">
        <div className="row">
          {PhotographyData.map((project) => {
            return (
              <div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default PhotographySection;
