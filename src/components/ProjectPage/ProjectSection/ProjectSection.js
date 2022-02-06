import React from "react";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="heading">MY PROJECTS 📑</h1> <hr />
          </div>
        </div>
      </div>

      <div className="project-section pt-5 pb-5">
        <div className="container">
          <div className="row flex-with-center">
            <div className="col-12 col-md-4" data-aos="fade-up">
              <div className="project-card  p-3 mb-3">
                <img
                  src="./tourism.png"
                  className="project-card-image"
                  alt=""
                />
                <h1 className="project-card-title mt-3">
                  Tourism, A Static website
                </h1>
                <p className="project-card-description">
                  Developed tourism website where users can browse through the
                  content, videos and images of popular destinations.
                </p>
                <p className="project-card-description">
                  Technologies used: HTML, CSS, Bootstrap
                </p>

                <div className="project-content">
                  <p>Description</p>
                  <ul>
                    <li>
                      Implemented mobile friendly layout using different HTML
                      block, inline elements, and Styled using CSS3 properties
                      such as background, flex, and CSS box model properties.
                    </li>
                    <li>
                      Implemented multiple images of a particular destination in
                      a carousel using bootstrap carousel and virtual tour
                      videos using bootstrap embed component.
                    </li>
                  </ul>
                  <a href="https://onthetourstatic.ccbp.tech/" target="_blank">
                    <button className="btn btn-light">Link</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4" data-aos="fade-up">
              <div className="project-card p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
                  className="project-card-image"
                />
                <h1 className="project-card-title mt-3">Food Munch Homepage</h1>
                <p className="project-card-description">
                  Developed a responsive homepage for Food Store where users can
                  see a list of food items, detailed information about a food
                  item, offers
                </p>
                <p className="project-card-description">
                  Technologies used: HTML, CSS, Bootstrap
                </p>

                <div className="project-content">
                  <p>Description</p>
                  <ul>
                    <li>
                      Designed page using following HTML structure elements like
                      li, header, article, footer elements and different
                      bootstrap components to show different sections in the
                      website and different bootstrap classes for responsiveness
                      through mobile-first approach.
                    </li>
                    <li>
                      Implemented product youtube videos by using bootstrap
                      embed and model components
                    </li>
                  </ul>
                  <a href="https://befoody.ccbp.tech/" target="_blank">
                    <button className="btn btn-light">Link</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4" data-aos="fade-up">
              <div className="project-card p-3 mb-3">
                <img src="./todo.png" className="project-card-image" />
                <h1 className="project-card-title mt-3"> Todos Application</h1>
                <p className="project-card-description">
                  Developed persistent todo application with CRUD operations to
                  track list of tasks
                </p>
                <p className="project-card-description">
                  Technologies used: HTML, CSS, JS, Bootstrap
                </p>

                <div className="project-content">
                  <p>Description</p>
                  <ul>
                    <li>
                      Displayed list of todos with HTML list elements, styled
                      todo list using CSS, Bootstrap
                    </li>
                    <li>
                      Implemented todo crud operations by using JavaScript event
                      listeners and updated UI dynamically by using JavaScript
                      DOM operations.
                    </li>
                  </ul>
                  <a href="https://todosapp07.ccbp.tech/" target="_blank">
                    <button className="btn btn-light">Link</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4" data-aos="fade-up">
              <div className="project-card p-3 mb-3">
                <img src="./wikipedia.png" className="project-card-image" />
                <h1 className="project-card-title mt-3">
                  {" "}
                  Wikipedia Search Application
                </h1>
                <p className="project-card-description">
                  Developed custom wikipedia search application where user can
                  search and view curated results and can see detailed
                  explanation in wikipedia by clicking on the specific result
                </p>
                <p className="project-card-description">
                  Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap
                </p>

                <div className="project-content">
                  <p>Description</p>
                  <ul>
                    <li>
                      Displayed list of search results with HTML list elements
                      with hyperlink as url, styled list using CSS, Bootstrap
                      and implemented responsiveness using Flex properties and
                      CSS Box model.
                    </li>
                    <li>
                      Fetched search results from server asynchronously using
                      fetch GET HTTP API call. When a user clicks on a
                      particular result, opens the website in a new tab by using
                      the target attribute of the anchor tag in HTML.
                    </li>
                  </ul>
                  <a href="https://searchon.ccbp.tech/" target="_blank">
                    <button className="btn btn-light">Link</button>
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

export default ProjectSection;
