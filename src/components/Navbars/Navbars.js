import React, { Component } from "react";
import { Link } from "react-router-dom"; // instead of using anchor tag we use react link for navigation
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
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
            Alok-4k45h
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav d-flex justify-content-center>
                <Nav.Link
                  as={Link}
                  to={"/#"}
                  className={`${path === "/" && "active"}`}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/education"}
                  className={`${path === "/education" && "active"}`}
                >
                  Education
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/project"}
                  className={`${path === "/project" && "active"}`}
                >
                  Project
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/extras"}
                  className={`${path === "/extras" && "active"}`}
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
