import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
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
        <div className="row flex-with-center design">
          <div className="col-md-6">
            <p>Designed and Developed By</p>
            <p>❤️me@alokkr.o7❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
