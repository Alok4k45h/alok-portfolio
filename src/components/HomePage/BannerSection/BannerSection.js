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
            <div className="col-10 col-md-7 mr-auto">
              <div className="bg-content">
                <h3>Hi👋...it's me...</h3>
                <h1 data-aos="fade-up">@alok</h1>
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
                    rel="noreferrer"
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
