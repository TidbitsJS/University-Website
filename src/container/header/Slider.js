import React, { Component } from "react";
import { Button, Container, Row, Col, Carousel, Image } from "react-bootstrap";
import slide01 from "../../images/slide-01.jpg";
import slide02 from "../../images/slide-02.jpg";
import slide03 from "../../images/slide-03.jpg";
import "./header.css";

class Slider extends Component {
  render() {
    return (
      <Container fluid style={{ height: "calc(100vh - 77px)" }}>
        <Row className="max-height">
          <Col xs={10} className="mx-auto div-col">
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide01}
                  alt="First slide"
                  fluid
                  style={{ objectFit: "cover" }}
                />
                <Carousel.Caption
                  className="text-left"
                  data-aos="fade-down"
                  // data-aos-offset="300"
                  // data-aos-easing="ease-in-sine"
                >
                  <h1> First slide label First slide label </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <Button variant="danger" style={{ marginBottom: 10 }}>
                    Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide02}
                  alt="Third slide"
                  fluid
                  style={{ objectFit: "cover" }}
                />

                <Carousel.Caption data-aos="fade-right" className="text-left">
                  <h1>Second slide label</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button variant="danger" style={{ marginBottom: 10 }}>
                    Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide03}
                  alt="Third slide"
                  fluid
                  style={{ objectFit: "cover" }}
                />

                <Carousel.Caption data-aos="fade-right" className="text-left">
                  <h1>Third slide label</h1>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <Button variant="danger" style={{ marginBottom: 10 }}>
                    Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Slider;
