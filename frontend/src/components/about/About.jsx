import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import "./about.scss";

const About = () => {
  const [key, setKey] = useState("Experience");
  return (
    <Container>
      <div className="text-center">
        <p className="text-center fs-1 section-heading">About Me</p>
      </div>
      <Row className="mt-3">
        <Col sm={12} md={5}>
          <div>
            <p className="fs-3 text-center">Education</p>

            <div className="mt-4">
              <Card border="info">
                <Card.Body>
                  <Card.Title>Master{"'"}s in Applied Computing</Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">Jan 2025 - Present</span>
                      <span className="text-secondary">
                        University of Windsor - Ontario, Canada
                      </span>
                      <span>Current CGPA - </span>
                      <span>
                        Major Courses: Advanced Software Engineering, Advanced
                        Computing Concepts, Advanced Database Topics
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <Card border="info">
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
                      <span>
                        Major Courses: Advanced Web Programming, Web
                        Development, Data Structures and Algorithms
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
        <Col sm={12} md={7}>
          <div>
            <p className="text-center fs-3">Professional Experience</p>
            <div className="mt-4">
              <Card border="info">
                <Card.Body>
                  <Card.Title>Software Developer Intern</Card.Title>
                  <Card.Text>
                    <div className="d-flex flex-column">
                      <span className="text-secondary">
                        Concetto Labs Pvt. Ltd. ---> Jan 2024 - June 2024
                      </span>
                      <span className="text-secondary"></span>
                      <span>
                        <ul>
                          <li>
                            Gained hands-on experience with MERN stack
                            development.
                          </li>
                          <li>
                            Developed <strong>eCart</strong>, an e-commerce
                            website integrated with APIs.
                          </li>
                          <li>
                            Enhanced skills in building scalable and responsive
                            applications using React, Node.js, Express, and
                            MongoDB.
                          </li>
                        </ul>
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
