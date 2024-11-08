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
            Aspiring software developer with nearly a year of hands-on
            internships experience in full-stack web development, specializing
            in the MERN stack (MongoDB, Express.js, React, Node.js). Equipped
            with skills and poised to apply and expand my expertise in a
            dynamic, growth-oriented environment.
          </div>
          <div className=" p-2 tab-text">
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
                    <span>Organization : DigiGlobe Solutions - Remote</span>
                    <span>Duration : July 2024 - Aug 2024</span>
                    <ul>
                      <li>
                        Assisted in the development and maintenance of web
                        applications using HTML, CSS, and JavaScript.
                      </li>
                      <li>
                        Utilized version control systems (e.g., Git, GitHub) for
                        code management and collaboration.
                      </li>
                    </ul>
                  </div>

                  <div className="d-flex flex-column">
                    <span className="fs-5">Software Developer Intern</span>
                    <span>
                      Organization : Concetto Labs Pvt. Ltd. - Ahmedabad,Gujarat
                    </span>
                    <span>Duration : Jan 2024 - June 2024</span>
                    <ul>
                      <li>
                        Gained hands-on experience with MERN stack development.
                      </li>
                      <li>
                        Developed <strong>eCart</strong>, an e-commerce website
                        integrated with APIs.
                      </li>
                      <li>
                        Enhanced skills in building scalable and responsive
                        applications using React, Node.js, Express, and MongoDB.
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="fs-5">ReactJs Intern</span>
                    <span>
                      Organization : Stypix Pvt. Ltd. - Ahmedabad,India
                    </span>
                    <span>Duration : Jul 2023 - Sep 2023</span>
                    <ul>
                      <li>
                        Gained fundamental knowledge of frontend development and
                        implemented it while developing a car rental website
                        utilizing React Js.
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="Education" title="Education">
                <div>
                  <div className="d-flex flex-column ">
                    <span className="fs-5">Master in Applied Computing</span>
                    <span>University of Windsor - Windsor, Canada</span>
                    <span>Duration : Jan 2025 - Present</span>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <span className="fs-5">B.E. in Information Technology</span>
                    <span>
                      Gujarat Technological University - Ahmedabad, India
                    </span>
                    <span>Duration : Aug 2020 - June 2024</span>
                    <span>CGPA : 8.78/10</span>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <span className="fs-5">12th Science(PCM)</span>
                    <span>Gayatri Vidhyalaya - Ahmedabad, India</span>
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
