import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs, Image } from "react-bootstrap";
import "./about.scss";

const About = () => {
  const [key, setKey] = useState("Experience");
  return (
    <Container>
      <div className="text-center">
        <p className="text-center fs-1 section-heading">About Me</p>
      </div>
      <Row className="mt-3">
        <Col sm={12} md={8} lg={5} xl={6} className="offset-md-2 offset-lg-0">
          <div className="about-image">
            <Image
              src="/profile.png"
              className="image-fluid image-about object-fit-cover"
              height="100%"
              width="100%"
            />
          </div>
        </Col>
        <Col sm={12} md={12} lg={7} xl={6}>
          <div className="p-2">
            Software developer with expertise in FUll stack MERN stack
            development. Equipped with strong data structures knowledge and
            fundamentals about programming.
          </div>
          <div className="mt-2 p-2 tab-text">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 d-flex flex-nowrap custom-tabs"
            >
              <Tab eventKey="Experience" title="Experience">
                <div>
                  <div className="d-flex flex-column">
                    <span className="fs-5">Web Developer Intern </span>
                    <span className="fs-5">DigiGlobe Solutions</span>
                    <span>Duration : July 2024 - Aug 2024</span>
                    <span>
                      Worked on developing and optimizing web applications using
                      modern web technologies.
                    </span>
                  </div>

                  <div className="d-flex flex-column mt-3">
                    <span className="fs-5">Software Developer Intern</span>
                    <span className="fs-5">Concetto Labs Pvt. Ltd.</span>
                    <span>Duration : Jan 2024 - June 2024</span>
                    <span>
                      Worked on developing and optimizing web applications using
                      modern web technologies.
                    </span>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <span className="fs-5">ReactJs Intern</span>
                    <span className="fs-5">Stypix Pvt. Ltd.</span>
                    <span>Duration : Jul 2023 - Sep 2023</span>
                    <span>
                      Worked on developing and optimizing web applications using
                      modern web technologies.
                    </span>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Education" title="Education">
                <div>
                  <div className="d-flex flex-column ">
                    <span className="fs-5">Master in Applied Computing</span>
                    <span className="fs-5">University of Windsor</span>
                    <span>Duration : Jan 2025 - Present</span>
                    <span>GPA : 3.8/4.0</span>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <span className="fs-5">B.E. in Information Technology</span>
                    <span className="fs-5">
                      Gujarat Technological University
                    </span>
                    <span>Duration : Aug 2020 - June 2024</span>
                    <span>CGPA : 8.78/10</span>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <span className="fs-5">12th Science(PCM)</span>
                    <span className="fs-5">Gayatri Vidhyalaya</span>
                    <span>Duration : June 2019 - Mar 2020</span>
                    <span>Percentage: 61%</span>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Skills" title="Skills">
                <div className="d-flex flex-column gap-3 ">
                  <span>
                    <span className="fw-bold"> Frameworks/Libraries:</span>{" "}
                    ReactJs, NodeJs, ExpressJs, Bootstrap-5, NextJs, Tailwind
                    CSS, Material UI
                  </span>
                  <span>
                    <span className="fw-bold"> Programming Languages: </span>
                    Java, JavaScript, TypeScript, C, Python
                  </span>
                  <span>
                    <span className="fw-bold">Web Technologies:</span> HTML5,
                    CSS3
                  </span>
                  <span>
                    <span className="fw-bold">Databases:</span> MySQL, MongoDB,
                  </span>
                  <span>
                    <span className="fw-bold"> Tools/IDE:</span> Postman, Git,
                    GitHub, Visual Studio Code, Intellij Idea
                  </span>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
