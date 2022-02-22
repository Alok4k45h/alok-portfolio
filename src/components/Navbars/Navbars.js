import React, { Component } from "react";
import { Link } from "react-router-dom"; // instead of using anchor tag we use react link for navigation
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbars.css";

export default class Navbars extends Component {
  render() {
    const path = window.location.pathname;
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="dark"
          className="bg-color fixed-top"
        >
          <Navbar.Brand href="#home" className="margin-padding">
            <span className="title">Alok-4k45h</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav d-flex justify-content-center>
                <Nav.Link
                  as={Link}
                  to={"/#"}
                  className={`${path === "/" && "active bold-italic"}`}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/education"}
                  className={`${path === "/education" && "active bold-italic"}`}
                >
                  Education
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/project"}
                  className={`${path === "/project" && "active bold-italic"}`}
                >
                  Project
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/extras"}
                  className={`${path === "/extras" && "active bold-italic"}`}
                >
                  Extras
                </Nav.Link>
              </Nav>

              <Nav className="ml-auto">
                <img src="./alokImage.png" alt="" className="alok-logo" />
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
