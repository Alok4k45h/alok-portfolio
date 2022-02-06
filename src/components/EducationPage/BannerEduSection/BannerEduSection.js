import React from "react";
import { Carousel } from "react-bootstrap";
import "./BannerEduSection.css";

function BannerEduSection() {
  return (
    <div>
      <div className="nav-adjust"></div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./education1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./education2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./education3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerEduSection;
