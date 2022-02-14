import React from "react";
import "./BannerSection.css";

function BannerSection() {
  return (
    <div>
      <div
        className="bg-container flex-with-center"
        style={{ backgroundImage: `url('./bg-banner.png')` }}
        id="bannerHome"
      >
        <div className="container">
          <div className="row">
            

            <div className="col-12 col-md-7 order-2 order-md-1">
              <div className="bg-content">
                <h3>Hi👋...it's me...</h3>
                <h1 data-aos="fade-up">ALOK</h1>
                <p>
                  Full Stack<span> MERN </span>Developer 🧑‍💻 || B.Tech
                  @IIT(ISM) Dhanbad
                </p>
                <div>
                  <a href="#courosel" className="mr-3">
                    <button className="btn btn-light button font-bold">
                      Get started
                    </button>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1cM6yIfG-XMCZDqeAViPGb-R6OpGXVJUI/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="btn btn-outline-light button font-bold">
                      See my Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
