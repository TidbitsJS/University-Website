import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import college from "../../images/College Logo.png";
import "./footer.css";
import MapContainer from "./MapContainer";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="site-footer"
        id="contact"
        style={{ backgroundColor: "#fff" }}
      >
        <Container fluid>
          <Row>
            <MapContainer />
          </Row>
          <Row className="mt-5">
            <Col
              sm={6}
              md={4}
              data-aos="fade-right"
              className="mx-auto  d-flex justify-content-start align-items-center flex-column flex-wrap"
            >
              <Image src={college} fluid />
              <h4 className="mt-3">University of York</h4>
            </Col>
            <Col
              sm={6}
              md={4}
              data-aos="fade-left"
              className="d-flex mt-3 justify-content-start  flex-column flex-wrap"
            >
              <h3 className="mb-2 text-capitalize text-start">contact us</h3>
              <div
                className="justify-content-start align-items-center flex-column"
                style={{ borderTop: "2px solid green", paddingTop: "0.5rem" }}
              >
                <p class="d-flex flex-wrap">
                  <span class="mr-4 footer-icon">
                    <i class="fas fa-map"></i>
                  </span>
                  <span>221 baker street, London</span>
                </p>
                <p class="d-flex flex-wrap">
                  <span class="mr-4 footer-icon">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span>+91 9834905510 </span>
                </p>
                <p class="d-flex flex-wrap">
                  <span class="mr-4 footer-icon">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span>enolaholmes@email.com</span>
                </p>
              </div>
            </Col>
            <Col
              sm={6}
              md={4}
              data-aos="fade-left"
              className="mx-auto mt-3 d-flex justify-content-start  flex-column flex-wrap"
            >
              <h3 className="mb-2">NewsLetter</h3>

              <div
                style={{ borderTop: "2px solid green", paddingTop: "0.5rem" }}
              >
                Enter your email address to get the latest University news,
                special events and student activities delivered right to your
                inbox.
                <div class="input-group mb-3 mt-3 is-warning">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <span
                      class="input-group-text"
                      style={{ backgroundColor: "darkorange", color: "white" }}
                      id="basic-addon2"
                    >
                      subscribe
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <Row>
            <Col md={8} sm={6} xs={12}>
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#copyright"> Company</a>.
              </p>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#fb">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#dribble">
                    <i class="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#linkedin">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
