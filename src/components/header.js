import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "./img/Logo_SELF_editado_transparente_1.png"
import Image from "react-bootstrap/Image"
import "./header.css"

export default () => (
  <Navbar expand="sm">
    <Container>
      <Navbar.Brand href="/"><Image src={logo} className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/research">Research</Nav.Link>
          <NavDropdown title="Projects" id="projects">
            <NavDropdown.Item href="/active_projects">Active Projects</NavDropdown.Item>
            <NavDropdown.Item href="/past_projects">Past Projects</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="People" id="people">
            <NavDropdown.Item href="/members">Active Members</NavDropdown.Item>
            <NavDropdown.Item href="/past_members">Past Members</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/partners">Industry Partners</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)