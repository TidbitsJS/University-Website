import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./courses.css";

export class Courses extends Component {
  render() {
    const displayCourse = ["course01", "course02", "course03", "course04"].map(
      (course, index) => (
        <Col
          xs={10}
          sm={6}
          lg={4}
          className="course-item mx-auto my-3"
          key={course + index}
          data-aos="fade-up"
        >
          <Card className="course-card">
            <div className="img-container">
              <Card.Img variant="top" src={course01} className="course-img" />
              <span className="course-item-icon">
                <i className="fas fa-star"></i>
              </span>
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="primary text-center">Register</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )
    );

    return (
      <section id="courses" className="courses py-5">
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                Our Featured <strong style={{ color: "brown" }}>Courses</strong>
              </h1>
              <p
                style={{
                  borderTop: "3px solid white",
                  width: 70,
                  marginTop: 20,
                }}
              ></p>
              <p className="text-muted" data-aos="fade-up">
                Our Featured Courses are selected through a rigorous process and
                uniquely created for each semester.
              </p>
            </Col>
          </Row>
          <Row>{displayCourse}</Row>
          <Row>
            <Col className="mx-auto my-3" data-aos="zoom-in">
              <div className="text-center">
                <Button variant="danger">View More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Courses;
