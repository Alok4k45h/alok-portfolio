import React from "react";
import "./CollegeSection.css";

function CollegeSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="edu-heading">MY EDUCATION 📚</h1> <hr />
          </div>
        </div>
      </div>

      <div className="college-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-right border border-primary rounded-right">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="text-center">
                <img
                  src="./IITLogo.png"
                  className="college-section-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-md-7 college-section-content-container">
              <h1 className="college-section-heading">IIT (ISM) Dhanbad</h1>
              <h3 className="colleges-section-description">
                BACHELOR OF TECHNOLOGY IN MINING ENGINEERING
              </h3>
              <p className="college-section-description">2019-Present</p>
              <a
                href="https://www.iitism.ac.in/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-outline-primary mt-3">
                  Go to Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-end">
        <div className="colleges-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-left border border-warning rounded-left">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 order-1 order-md-2">
                <div className="text-center">
                  <img
                    src="./biharboard.png"
                    className="colleges-section-img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 order-2 order-md-1 college-section-content-container">
                <h1 className="colleges-section-heading">
                  BSEB-JAGLAL ROY COLLEGE,SARAN
                </h1>
                <h3 className="colleges-section-description">
                  HIGHER SECONDARY EDUCATION(BSEB-12th)
                </h3>
                <p className="colleges-section-description">
                  June 2016 - June 2018
                </p>
                <a
                  href="http://biharboardonline.bihar.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline-warning mt-3">
                    Go to Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="college-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-right border border-primary rounded-right">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="text-center">
                <img src="./jnv.jpg" className="college-section-img" alt="" />
              </div>
            </div>
            <div className="col-12 col-md-7 college-section-content-container">
              <h1 className="college-section-heading">JNV,VAISHALI</h1>
              <h3 className="college-section-description">
                SECONDARY SCHOOL EDUCATION(CBSE-10th)
              </h3>
              <p className="college-section-description">
                June 2011- June 2016
              </p>
              <a
                href="https://navodaya.gov.in/nvs/nvs-school/VAISHALI/en/home/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-outline-primary mt-3">
                  Go to Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeSection;
