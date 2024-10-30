import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "./about.scss";

const About = () => {
  const [key, setKey] = useState("Experience");
  return (
    <Container className="about-container">
      <p className="text-center fs-2 mb-4">About Me</p>
      <Row>
        <Col sm={12} md={4} lg={5} xl={6}>
          <div className="about-image">
            <img
              src="/profile.png"
              className="image-fluid image-about object-fit-cover"
              height="100%"
              width="100%"
            />
          </div>
        </Col>
        <Col sm={12} md={8} lg={7} xl={6}>
          About section
          <div>
            Software developer with expertise in FUll stack MERN stack
            development. Equipped with strong data structures knowledge and
            fundamentals about programming.
          </div>
          <div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 d-flex flex-nowrap"
            >
              <Tab eventKey="Experience" title="Experience">
                Tab content for Experience
              </Tab>
              <Tab eventKey="Education" title="Education">
                Tab content for Education
              </Tab>
              <Tab eventKey="contact" title="Contact">
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
