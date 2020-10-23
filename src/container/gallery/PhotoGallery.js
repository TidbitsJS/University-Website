import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col, Button } from "react-bootstrap";

class PhotoGallery extends Component {
  render() {
    return (
      <section id="gallary">
        <Container
          fluid
          className="message-container"
          style={{ margin: 0, padding: 0 }}
        >
          <Row style={{ margin: 0, padding: 0 }}>
            <Col
              className="mx-auto my-3 text-center text-capitalize"
              style={{ margin: 0, padding: 0 }}
            >
              <h1>
                University <strong style={{ color: "brown" }}>Gallery</strong>
              </h1>
            </Col>
          </Row>
          <Gallery images={IMAGES} />
          <div className="text-center">
            <Button variant="danger" style={{ margin: "20px 0" }}>
              View More
            </Button>
          </div>
        </Container>
      </section>
    );
  }
}

export default PhotoGallery;
