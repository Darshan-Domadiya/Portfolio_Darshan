import React from "react";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section id="home" className="ubuntu-regular">
        <Container className="landing-page d-flex align-items-center justify-content-center">
          <Row>
            <Col
              sm={12}
              md={6}
              lg={6}
              xl={8}
              className="d-flex align-items-center flex-column justify-content-start"
            >
              <h2>Welcome!</h2>
              <h1>I am Darshan Domadiya</h1>
              <TypeAnimation
                sequence={[
                  "I'm Software Developer",
                  "I'm Full-Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />

              <div className="mt-3 d-flex gap-3 align-items-center justify-content-between">
                <Button variant="outline-primary" download>
                  Resume
                </Button>
                <Button variant="outline-primary">Hire Me!</Button>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={6}
              xl={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              my profile photo with blazer professional
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="ubuntu-regular">
        <About />
      </section>
      <section id="skills" className="ubuntu-regular">
        <Skills />
      </section>
      <section id="projects" className="ubuntu-regular">
        <Projects />
      </section>
      <section id="contact" className="ubuntu-regular">
        <Contact />
      </section>
    </>
  );
};

export default Home;
