import React from "react";
import { Carousel } from "react-bootstrap";
import "./WhoAmISection.css";

function WhoAmISection() {
  return (
    <div className="who-am-i-container">
      <div className="container">
        <div className="row mt-3 mb-3" data-aos="fade-up">
          <div className="col-12">
            <h1 className="text-center mt-5">Who Am i ⁉️</h1>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-md-4">
            <div className="">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100 alok-image"
                    src="./alokImage.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 alok-image"
                    src="./alokImage1.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 alok-image"
                    src="./alokImage2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-6 mt-3" data-aos="fade-up">
            <div>
              <h3 className="font-bold text-center">Hi 👋, Hello ✋, Nameste🙏</h3>
              <hr />
              <p className="flow-hidden">
                <pre>
                  {JSON.stringify(
                    {
                      MyName: "Alok kumar",
                      Nickname: "Aakash",
                      Place: "Saran,Bihar-841207",
                      Hobbies: "Nature Photography & Creative Writing",
                    },
                    null,
                    2
                  )}
                </pre>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAmISection;
