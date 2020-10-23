import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export class Topbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="px-4">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>

            <NavDropdown title="Administration" id="administration-dropdown">
              <NavDropdown.Item href="#courses">Courses</NavDropdown.Item>
              <Link to="/gallery">
                <NavDropdown.Item href="/gallery">gallery</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="#administration3">
                Administration
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admission" id="admission-dropdown">
              <NavDropdown.Item href="#messages">News</NavDropdown.Item>
              <NavDropdown.Item href="#admission2">Admission</NavDropdown.Item>
              <NavDropdown.Item href="#admission3">Admission</NavDropdown.Item>
              <NavDropdown.Item href="#admission4">Admission</NavDropdown.Item>
              <NavDropdown.Item href="#admission5">Admission</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Faculty" id="campus-dropdown">
              <NavDropdown.Item href="#campus1">Campus 01</NavDropdown.Item>
              <NavDropdown.Item href="#campus1">Campus 01</NavDropdown.Item>
              <NavDropdown.Item href="#campus1">Campus 01</NavDropdown.Item>
            </NavDropdown>
            <Link to="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success enroll-btn">Enroll</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
