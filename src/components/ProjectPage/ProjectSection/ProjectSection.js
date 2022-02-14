import React from "react";
import ProjectData from "./ProjectData";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="pro-heading">MY PROJECTS 📑</h1> <hr />
          </div>
        </div>
      </div>

      <div className="project-section pt-5 pb-5">
        <div className="container">
          <div className="row flex-with-center">
            {ProjectData.map((project) => {
              return (
                <div className="col-12 col-md-4" data-aos="fade-up">
                  <div className="project-card  p-3 mb-3">
                    <img
                      src={project.image}
                      className="project-card-image"
                      alt=""
                    />
                    <h1 className="project-card-title mt-3">
                      {project.heading}
                    </h1>
                    <p className="project-card-description">
                      {project.description}
                    </p>
                    <p className="project-card-description">
                      {project.technologies}
                    </p>

                    <div className="project-content">
                      <p>Description</p>
                      <ul>
                        <li>{project.listFirst}</li>
                        <li>{project.listSecond}</li>
                      </ul>
                      <a href={project.link} target="_blank">
                        <button className="btn btn-light">Link</button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
