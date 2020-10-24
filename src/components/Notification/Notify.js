import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Notify extends Component {
  render() {
    return (
      <section>
        <Container
          style={{ backgroundColor: "brown", color: "#fff" }}
          className="text-center py-5 aboutpage"
          fluid
        >
          <Row>
            <Col>
              <h1>Notifications</h1>
              <p>
                Home / <span style={{ color: "brown" }}>Notifications</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row style={{ backgroundColor: "#fff" }}>
            <Col className="mx-auto px-lg-5 text-left mt-5 mb-5">
              <h1>Overview</h1>
              <div style={{ borderTop: "4px solid green", width: 50 }}></div>
              <p className="mt-3">
                The Thapar Institute of Engineering and Technology (TIET) is one
                of India's oldest and finest educational institutions, which
                provides a steady source of highly skilled talent to the nation
                as well as overseas. Founded in 1956 with a campus spread across
                sprawling 250 acres, Thapar Institute of Engineering &
                Technology, located in Patiala, has been a pioneer in
                engineering education, research and innovation. Our community
                involves ingenious minds solvers who are eager to make the world
                a better place to live in with their innovative techniques and
                discoveries.
              </p>
              <p className="mt-3">
                Rated amongst the top ranked innovation-driven private
                universities and technical institutes in the country, Thapar
                Institute of Engineering & Technology has been accredited with
                an 'A+' grade by the National Assessment and Accreditation
                Council (NAAC). We constantly evolve our teaching methods, and
                provide quality education to our students, whom we see as unique
                individuals with different interests and aspirations. We keep
                the quality of our curriculum, faculty and infrastructure
                unparalleled, and believe in encouraging thousands of young
                minds to excel in India and abroad. Our alumni have stood out in
                varied fields such as business and industry, administrative and
                regulatory services, research and education, and social and
                human rights organisations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Notify;
