import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "./img/SELF.jpg"
import Image from "react-bootstrap/Image"
import "./header.css"

export default () => (
  <Navbar expand="sm">
    <Container>
      <Navbar.Brand href="/"><Image src={logo} className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Research</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <NavDropdown title="People" id="people">
            <NavDropdown.Item href="/members">All Members</NavDropdown.Item>
            <NavDropdown.Item href="#">Students</NavDropdown.Item>
            <NavDropdown.Item href="">Professors</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#">Industry Partners</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)