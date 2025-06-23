import React, { useEffect } from "react";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Certificate from "../certificate/Certificate";
import { ScrollAnimation } from "../scroll/ScrollAnimation";
import { LuEye } from "react-icons/lu";

const Home = () => {
  const [ref, isVisible] = ScrollAnimation();

  const handleGetStartedClick = () => {
    const aboutSection = document.getElementById("contact");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="section ubuntu-regular">
        <Container
          ref={ref}
          className={` mt-5 landing-page d-flex align-items-center flex-column justify-content-center slide-in-container ${
            isVisible ? "visible" : ""
          }`}
        >
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
                <span className=" hello-text fw-medium">Hello There,</span>
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
                <div>
                  <span className="highlight">
                    Actively Seeking 4-8 months co-op/internship opportunities
                    commencing Winter 2026.
                  </span>
                </div>
                <div className="mt-3 d-flex flex-column flex-sm-row gap-3 gap-sm-4">
                  <div className="resume-div">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      RESUME
                      <a href="./Darshan-Domadiya(Resume).pdf" target="_blank">
                        <FaFileDownload size={19} className="resume-button" />
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1dW0bO1DkG2Y7S7C9ZIbyLldUrkhxzGXJ/view?usp=sharing"
                        target="_blank"
                      >
                        <LuEye size={22} className="resume-button" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="btn-style-landingPage d-flex align-items-center gap-2"
                      onClick={handleGetStartedClick}
                    >
                      Contact Me
                      {/*  <FaArrowCircleDown /> */}
                    </Button>
                  </div>
                </div>
                <div className="mt-4 gap-3 fw-semibold d-flex align-items-center ">
                  <a
                    href="https://www.instagram.com/_i_m_darshan_23/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} className="fa-style" />
                  </a>
                  <a
                    href="https://github.com/Darshan-Domadiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} className="fa-style" />
                  </a>
                  <a
                    href="https://leetcode.com/u/Darshan_Domadiya23/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLeetcode size={30} className="fa-style" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/domadiya-darshan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} className="fa-style" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="section ubuntu-regular">
        <About />
      </section>
      <section id="skills" className="section ubuntu-regular">
        <Skills />
      </section>
      <section id="certificate" className="section ubuntu-regular">
        <Certificate />
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
