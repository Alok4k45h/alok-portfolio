import React from "react";
import "./IntroSection.css";

function IntroSection() {
  return (
    <div className="container">
      <div className="row justify-content-start" data-aos="fade-right">
        <div className="col-md-4">
          <div className="n-box2 p-5 font-bold devstack">
            <h1>Yes you are right...🙆</h1>
            <br />
            <p>I am a MERN stack Buff...</p>
          </div>
        </div>
      </div>

      <div className="row pt-5 justify-content-center" data-aos="fade-up">
        <div className="col-md-4">
          <div>
            <img src="./mernStack.jpg" alt="" height="200" className="w-100" />
          </div>
        </div>
      </div>

      <div className="row pt-5 justify-content-end" data-aos="fade-left">
        <div className="col-md-4">
          <div className="n-box2 p-5 font-bold devstack">
            <p>
              MERN Stack is a Javascript Stack that is used for easier and
              faster deployment of full-stack web applications. Each of these 4
              powerful technologies provides an end-to-end framework for the
              developers to work in and each of these technologies play a big
              part in the development of web applications...✍️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
