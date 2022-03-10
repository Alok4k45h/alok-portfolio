import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaMapMarked,
  FaPhone,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer position-relative">
        <div className="row justify-content-center follow-me">
          <div className="col-md-6">
            <div className="div">
              <h3>Follow me</h3>

              <hr />
              <div className="d-flex justify-content-around px-2">
                <a
                  href="https://www.facebook.com/alokaakash.me.0101"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="footer-icons" />
                </a>

                <a
                  href="https://www.instagram.com/alokkr.me.o7/?fbclid=IwAR3G9IPwXVnic7WB7xzCfqlcosN4wVECG7GnLJFtLv_fnePPfC0MqP3-CwY"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="footer-icons" />
                </a>

                <a href="" target="_blank" rel="noreferrer">
                  <FaMailBulk className="footer-icons" />
                </a>

                <a
                  href="https://www.linkedin.com/in/07alokkumar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="footer-icons" />
                </a>

                <a
                  href="https://github.com/Alok4k45h"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="footer-icons" />
                </a>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="footer-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 mb-3">
                <div className="d-flex flex-row">
                  <img
                    src="./alokImage.png"
                    className="footer-section-image"
                    alt="alokLogo"
                  />
                  <div className="ml-3">
                    <h1 className="footer-section-sub-heading">Alok Kumar</h1>
                    <p className="footer-section-text">Mern-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <h1 className="footer-section-sub-heading">Phone No.</h1>
                <div>
                  <FaPhone className="icon" />
                  <span className="footer-section-text ml-2">
                    +91-9334605118
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <h1 className="footer-section-sub-heading">E-mail</h1>
                <div>
                  <FaMailBulk className="icon" />
                  <span className="footer-section-text ml-2">
                    alok4k45h@mail.com
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <h1 className="footer-section-sub-heading">Address</h1>
                <div>
                  <FaMapMarked className="icon" />
                  <span className="footer-section-text ml-2">
                    Saran, Bihar, India-841207
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section-copyright-container">
            <FaCopyright className="icon mr-2" />
            <span className="footer-section-text">
              2022-me@alokkr.o7-Created with ❤️
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
