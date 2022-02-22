import React from "react";
import PhotographyData from "./PhotographyData";
import "./PhotographySection.css";

function PhotographySection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="photo-heading">GLIMPSES OF MY CLICKS 📸</h1> <hr />
          </div>
        </div>
      </div>
      <div className="pb-5">
        <div className="container">
          <div className="row">
            {PhotographyData.map((photo) => {
              return (
                <div className="col-md-4 ">
                  <div className="position-relative photo">
                    <img src={photo.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default PhotographySection;
