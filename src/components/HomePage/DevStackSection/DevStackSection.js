import React from "react";
import "./DevStackSection.css";

function DevStackSection() {
  return (
    <div className="container">
      <div className="devstack container dev-box my-5 n-box2 py-5">
        <div className="text-center" data-aos="fade-up">
          <h3 className="font-bold text-center">My Developement Stack</h3>

          <hr />

          <img
            src="./developer.svg"
            alt="img"
            height="200"
            width="200"
            className="text-center"
          />
        </div>

        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <div className="font-bold text-start content-center pl-3">
              <h3 className="font-bold">Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>ReactDOM</p>
              <p>Redux</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up">
            <div className="font-bold text-center">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />

              <p>Bootstrap</p>
              <p>CSS Flexbox</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-left">
            <div className="font-bold text-end pr-3">
              <h3 className="font-bold">Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>SQL</p>
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevStackSection;
