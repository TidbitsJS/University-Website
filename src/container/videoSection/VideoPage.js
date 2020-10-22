import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bookvideo from "../../videos/Book.mp4";
import "./video.css";

export class VideoPage extends Component {
  render() {
    return (
      <section>
        <Container fluid className="video-container">
          <Row className="video-row">
            <Col xs={10} className="mx-auto video-col">
              <video autoPlay loop muted>
                <source src={bookvideo} type="video/mp4"></source>
              </video>
              <div className="video-text">
                <p>Trusted by 10,000+ students</p>
                <Button variant="danger">Register</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>
                Our <strong style={{ color: "brown" }}>Mission</strong>
              </h2>
              <p></p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default VideoPage;
