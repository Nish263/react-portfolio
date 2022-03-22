import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
export const Header = () => {
  return (
    <Navbar expand="md" id="navbar" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bolder mt-5 fs-3">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
