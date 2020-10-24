import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./event.css";

export class Event extends Component {
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
              <h1>Faculty</h1>
              <p>
                Home / <span style={{ color: "brown" }}>Faculty</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col xs={12}>
              <article className="blog-card">
                <div className="blog-card__background">
                  <div className="card__background--wrapper">
                    <div
                      className="card__background--main"
                      style={{
                        backgroundImage:
                          "url(http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg)",
                      }}
                    >
                      <div className="card__background--layer"></div>
                    </div>
                  </div>
                </div>
                <div className="blog-card__head">
                  <span className="date__box">
                    <span className="date__day">11</span>
                    <span className="date__month">JAN</span>
                  </span>
                </div>
                <div className="blog-card__info">
                  <h5>HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG THOSE</h5>
                  <p>
                    <a href="#icon1" className="icon-link mr-3">
                      <i className="fas fa-user"></i> Tony Jahson
                    </a>
                    <a href="#icon2" className="icon-link">
                      <i className="fas fa-comments"></i> 150
                    </a>
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque vero libero voluptatibus earum? Alias dignissimos
                    quo cum, nulla esse facere atque, blanditiis doloribus at
                    sunt quas, repellendus vel? Et, hic!
                  </p>
                  <a href="#icon3" className="btn btn--with-icon">
                    <i className="btn-icon fas fa-long-arrow-alt-right"></i>READ
                    MORE
                  </a>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Event;
