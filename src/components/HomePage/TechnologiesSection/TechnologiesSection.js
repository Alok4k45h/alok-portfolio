import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import "./TechnologiesSection.css";

function TechnologiesSection() {
  return (
    <div>
      <div className="courosel-parent position-relative" id="courosel">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I use 💻
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-12 flex-with-center">
              <div className="gallery">
                <span style={{ "--i": 1 }}>
                  <FaReact color="cyan" />
                </span>

                <span style={{ "--i": 2 }}>
                  <FaJava color="orange" />
                </span>

                <span style={{ "--i": 3 }}>
                  <FaNodeJs color="green" />
                </span>

                <span style={{ "--i": 4 }}>
                  <FaBootstrap color="blue" />
                </span>

                <span style={{ "--i": 5 }}>
                  <FaHtml5 color="orange" />
                </span>

                <span style={{ "--i": 6 }}>
                  <FaCss3 color="blue" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologiesSection;
