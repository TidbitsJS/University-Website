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
      <Navbar bg="light" expand="lg" className="px-4 text-capitalize">
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
              <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
              <Link to="/gallery">
                <NavDropdown.Item href="/gallery">gallery</NavDropdown.Item>
              </Link>
              <Link to="/events">
                <NavDropdown.Item href="/events">events</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/admission">
              <Nav.Link href="/admission">Admission</Nav.Link>
            </Link>
            <Link to="/faculty">
              <Nav.Link href="/faculty">Faculty</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Link>
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
