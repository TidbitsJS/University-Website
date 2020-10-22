import React, { Component } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import course from "../../images/course01.jpeg";
import "./message.css";

class Message extends Component {
  render() {
    const displayMessageCard = [
      "card01",
      "card02",
      "card03",
      "card04",
      "card05",
      "card06",
      "card07",
    ].map((cards, index) => (
      <Col className="mx-auto my-3" lg={4} sm={6}>
        <Card className="message-card">
          <Row className="no-gutters">
            <Col className="col-sm-5">
              <Image
                src={course}
                fluid
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col className="col-sm-7">
              <Card.Body>
                <Card.Title>Learn Js in ease</Card.Title>
                <Card.Text>Lorem ipsum dolet lorem ipsum dolet lorem</Card.Text>
                <a href="#learn" className="btn btn-success">
                  Learn More
                </a>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    ));

    return (
      <section id="messages">
        <Container fluid className="message-container my-3">
          <Row>
            <Col className="mx-auto my-3 text-center text-capitalize">
              <h1>
                Latest <strong style={{ color: "brown" }}>Updates</strong>
              </h1>
              <div className="latest-news">
                <marquee>
                  We are coming soon with bunch of surprises{" "}
                  <i class="fas fa-certificate"></i>
                </marquee>
              </div>
            </Col>
          </Row>
          <Row className="mx-3 main-row">{displayMessageCard}</Row>
          <Row>
            <Col className="mx-auto text-center">
              <Button variant="danger">View More</Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Message;
