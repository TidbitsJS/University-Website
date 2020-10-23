import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col } from "react-bootstrap";
import VideoGallery from "./VideoGallery";

class FullGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: IMAGES,
    };
  }

  render() {
    return (
      <section id="gallary">
        <Container fluid className="message-container">
          <Row>
            <Col className="mx-auto my-3 text-center text-capitalize">
              <h1>
                <strong style={{ color: "brown" }}>Gallery</strong>
              </h1>
            </Col>
          </Row>
          <Gallery images={IMAGES} />
        </Container>
        <VideoGallery />
      </section>
    );
  }
}

export default FullGallery;
