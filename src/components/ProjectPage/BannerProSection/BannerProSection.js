import React from "react";
import { Carousel } from "react-bootstrap";
import "./BannerProSection.css";

function BannerProSection() {
  return (
    <div>
      <div className="nav-adjust"></div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./project1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./project2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./project3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerProSection;
