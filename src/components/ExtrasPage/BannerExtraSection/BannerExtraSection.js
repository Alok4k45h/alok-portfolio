import React from "react";
import { Carousel } from "react-bootstrap";
import "./BannerExtraSection.css";

function BannerExtraSection() {
  return (
    <div>
      <div className="nav-adjust"></div>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./extras1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./extras2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./extras3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerExtraSection;
