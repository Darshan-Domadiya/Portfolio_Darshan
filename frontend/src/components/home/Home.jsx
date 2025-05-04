import React, { useEffect } from "react";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowCircleDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  const handleGetStartedClick = () => {
    const aboutSection = document.getElementById("projects");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once it's animated in
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer when component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <section id="home" className="section ubuntu-regular">
        <Container className="mt-5 landing-page d-flex align-items-center flex-column justify-content-center ">
          <Row className="w-100 d-flex align-items-start mt-md-5 row-landingPage">
            <Col
              sm={{ span: 12, order: 1 }}
              md={{ span: 4, order: 2 }}
              lg={5}
              xl={4}
              className="d-flex align-items-center justify-content-center mb-4 mt-4"
            >
              <div className="glass-image-container">
                <div className="glass-image-frame">
                  <Image
                    src="./profile_photo.JPG"
                    alt="profile_photo"
                    className="profile-image"
                    height="100%"
                    width="100%"
                  />
                </div>
              </div>
            </Col>

            <Col
              sm={{ span: 12, order: 2 }}
              md={{ span: 8, order: 1 }}
              lg={7}
              xl={7}
              className="d-flex align-items-start justify-content-start offset-xl-1 mt-0 mt-md-5"
            >
              <div className="d-flex flex-column">
                <span className=" hello-text fw-medium">Hi There,</span>
                <span className=" my-name">I{"'"}m Darshan Domadiya</span>
                <div className="type-animation-text">
                  <TypeAnimation
                    sequence={[
                      "My expertise in Front End Development",
                      1000,
                      "My expertise in Back End Development",
                      1000,
                      "My expertise in Full Stack Development ",
                      1000,
                      "My expertise in Responsive Web Design ",
                      1000,
                      "My expertise in API Development ",
                      1000,
                      "My expertise in AWS cloud ",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{
                      display: "inline-block",
                      // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                    repeat={Infinity}
                  />
                </div>
                <div className="mt-3 d-flex flex-column flex-sm-row gap-3 gap-sm-4">
                  <div>
                    <a
                      href="/Resume_Darshan.pdf"
                      download="Darshan_Domadiya_Resume.pdf"
                    >
                      <Button className="btn-style-landingPage ">
                        Download Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <Button
                      className="btn-style-landingPage d-flex align-items-center gap-2"
                      onClick={handleGetStartedClick}
                    >
                      Show Projects
                      <FaArrowCircleDown />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 fw-semibold d-flex align-items-center ">
                  <div>
                    <a
                      href="https://www.instagram.com/_i_m_darshan_23/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        size={30}
                        className="fa-style"
                      />
                    </a>
                    <a
                      href="https://github.com/Darshan-Domadiya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        size={30}
                        className="fa-style"
                      />
                    </a>
                    <a
                      href="https://leetcode.com/u/Darshan_Domadiya23/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiLeetcode
                        size={30}
                        className="fa-style"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/domadiya-darshan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin
                        size={30}
                       className="fa-style"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="section  ubuntu-regular">
        <About />
      </section>
      <section id="skills" className="section ubuntu-regular">
        <Skills />
      </section>
      <section id="projects" className="section ubuntu-regular">
        <Projects />
      </section>
      <section id="contact" className="section ubuntu-regular">
        <Contact />
      </section>
    </>
  );
};

export default Home;
