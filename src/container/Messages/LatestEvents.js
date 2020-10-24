import React, { Component } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import "./LEvents.css";
import course from "../../images/course01.jpeg";

class LatestEvents extends Component {
  render() {
    const displayLatestEvents = [
      "event01",
      "event02",
      "event03",
      "event04",
    ].map((levent, index) => (
      <Col className="mx-auto  mb-5" lg={4} sm={6} data-aos="zoom-in-up">
        <Card className="message-card">
          <Row className="no-gutters">
            <Col className="col-sm-7">
              <Card.Body>
                <Card.Title>Learn Js in ease</Card.Title>
                <Card.Text>Lorem ipsum dolet lorem ipsum dolet lorem</Card.Text>
                <a href="#learn" className="btn btn-success">
                  Learn More
                </a>
              </Card.Body>
            </Col>
            <Col className="col-sm-5">
              <Image
                src={course}
                fluid
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    ));

    return (
      <Container fluid>
        <Row>
          <Col className="mx-auto mt-5 text-capitalize text-center mb-5">
            <h1>
              Latest <strong style={{ color: "brown" }}>Events</strong>
            </h1>
          </Col>
        </Row>
        <Row>{displayLatestEvents}</Row>
        <Row>
          <Col className="mx-auto text-center">
            <Button variant="danger" style={{ margin: "20px 0" }}>
              View More
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LatestEvents;
