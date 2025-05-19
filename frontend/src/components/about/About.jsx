import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.scss";
import { ScrollAnimation } from "../scroll/ScrollAnimation";

const About = () => {
  const [ref, isVisible] = ScrollAnimation();

  return (
    <Container
      ref={ref}
      className={`section-content slide-in-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="text-center">
        <p className="text-center fs-1 section-heading">About Me</p>
      </div>
      <Row className="mt-3">
        <Col sm={12} md={6}>
          <div>
            <p className="fs-3 text-center fw-semibold">Education</p>

            <div className="mt-4">
              <Card className="custom-border">
                <Card.Body>
                  <Card.Title>Master{"'"}s in Applied Computing</Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">Jan 2025 - Present</span>
                      <span className="text-secondary">
                        University of Windsor - Ontario, Canada
                      </span>
                      <span>Current CGPA - </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <Card className="custom-border">
                <Card.Body>
                  <Card.Title>
                    Bachelor of Engineering in Information Technology
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">
                        Aug 2020 - June 2024
                      </span>
                      <span className="text-secondary">
                        Gujarat Technological University - Ahmedabad, India
                      </span>
                      <span>CGPA - 8.57/10 </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <Card className="custom-border">
                <Card.Body>
                  <Card.Title>12th Science</Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">
                        Jun 2019 - Mar 2020
                      </span>
                      <span className="text-secondary">
                        Gayatri Vidhyalaya - Ahmedabad, India
                      </span>
                      <span>Percentage - 61%</span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} className="mt-4 mt-sm-0">
          <div>
            <p className="text-center fs-3 fw-semibold">
              Professional Experience
            </p>

            <div className="mt-4">
              <Card className="custom-border">
                <Card.Body>
                  <Card.Title>Web Developer Intern</Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">
                        DigiGlobe Solutions{" "}
                      </span>
                      <span className="text-secondary">
                        {" "}
                        Jul 2024 - Aug 2024
                      </span>
                      <span>
                        <span className="fw-medium"> Skills:</span> ReactJs,
                        Bootstrap, SCSS, Postman, REST Api, GitHub
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mt-4">
              <Card className="custom-border">
                <Card.Body>
                  <Card.Title>Software Developer Intern</Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">
                        Concetto Labs Pvt. Ltd.{" "}
                      </span>
                      <span className="text-secondary">
                        {" "}
                        Jan 2024 - June 2024
                      </span>
                      <span>
                        <span className="fw-medium"> Skills:</span> ReactJs,
                        NodeJs, ExpressJs, MongoDB, React Bootstrap, Postman
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mt-4">
              <Card className="custom-border">
                <Card.Body>
                  <Card.Title>React Js Intern</Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">Stypix Pvt. Ltd. </span>
                      <span className="text-secondary">
                        {" "}
                        Jul 2023 - Sep 2023
                      </span>
                      <span>
                        <span className="fw-medium"> Skills:</span> HTML, CSS,
                        JavaScript, ReactJs, Bootstrap, Responsive Web Design
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
