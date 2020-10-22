import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./courses.css";

export class Courses extends Component {
  render() {
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
              <p className="text-muted">
                Our Featured Courses are selected through a rigorous process and
                uniquely created for each semester.
              </p>
            </Col>
          </Row>
          <Row className="course-layout">
            <div className="course-image"></div>
            <div className="course-box">
              <Col
                xs={10}
                sm={8}
                lg={8}
                md={8}
                className="mx-auto my-3 course-item"
              >
                <div className="img-container">
                  <Image src={course01} fluid />
                </div>
                <div className="info-box">
                  <div style={{ width: "100%" }}>
                    <h6>Financial Analyst Course</h6>
                    <p>Charles Banks</p>
                  </div>
                  <div className="info-text">
                    <p className="mb-0">June 3, 2019</p>
                    <div className="icon-box">
                      {/* <i className="fas fa-desktop"></i>
                    <i className="fas fa-hourglass-half"></i>
                    <i className="fas fa-star"></i> */}
                      {["fa-desktop", "fa-star"].map((type) => (
                        <OverlayTrigger
                          key={type}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-${type}`}>Enroll</Tooltip>
                          }
                        >
                          <i className={`fas ${type}`}></i>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={10}
                sm={8}
                lg={8}
                md={8}
                className="mx-auto my-3 course-item"
              >
                <div className="img-container">
                  <Image src={course01} fluid />
                </div>
                <div className="info-box">
                  <div style={{ width: "100%" }}>
                    <h6>Financial Analyst Course</h6>
                    <p>Charles Banks</p>
                  </div>
                  <div className="info-text">
                    <p className="mb-0">June 3, 2019</p>
                    <div className="icon-box">
                      {/* <i className="fas fa-desktop"></i>
                    <i className="fas fa-hourglass-half"></i>
                    <i className="fas fa-star"></i> */}
                      {["fa-desktop", "fa-star"].map((type) => (
                        <OverlayTrigger
                          key={type}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-${type}`}>Enroll</Tooltip>
                          }
                        >
                          <i className={`fas ${type}`}></i>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={10}
                sm={8}
                lg={8}
                md={8}
                className="mx-auto my-3 course-item"
              >
                <div className="img-container">
                  <Image src={course01} fluid />
                </div>
                <div className="info-box">
                  <div style={{ width: "100%" }}>
                    <h6>Financial Analyst Course</h6>
                    <p>Charles Banks</p>
                  </div>
                  <div className="info-text">
                    <p className="mb-0">June 3, 2019</p>
                    <div className="icon-box">
                      {/* <i className="fas fa-desktop"></i>
                    <i className="fas fa-hourglass-half"></i>
                    <i className="fas fa-star"></i> */}
                      {["fa-desktop", "fa-star"].map((type) => (
                        <OverlayTrigger
                          key={type}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-${type}`}>Enroll</Tooltip>
                          }
                        >
                          <i className={`fas ${type}`}></i>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={10}
                sm={8}
                lg={8}
                md={8}
                className="mx-auto my-3 course-item"
              >
                <div className="img-container">
                  <Image src={course01} fluid />
                </div>
                <div className="info-box">
                  <div style={{ width: "100%" }}>
                    <h6>Financial Analyst Course</h6>
                    <p>Charles Banks</p>
                  </div>
                  <div className="info-text">
                    <p className="mb-0">June 3, 2019</p>
                    <div className="icon-box">
                      {/* <i className="fas fa-desktop"></i>
                    <i className="fas fa-hourglass-half"></i>
                    <i className="fas fa-star"></i> */}
                      {["fa-desktop", "fa-star"].map((type) => (
                        <OverlayTrigger
                          key={type}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-${type}`}>Enroll</Tooltip>
                          }
                        >
                          <i className={`fas ${type}`}></i>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Courses;
