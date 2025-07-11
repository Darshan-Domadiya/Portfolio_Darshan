import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";
import { FaFileDownload } from "react-icons/fa";
import Certificate from "../certificate/Certificate";
import { ScrollAnimation } from "../scroll/ScrollAnimation";
import { useEffect, useState } from "react";

const Home = () => {
  const [ref, isVisible] = ScrollAnimation();

  const handleGetStartedClick = () => {
    const aboutSection = document.getElementById("contact");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="hex-grid-bg" />
      <section id="home" className="section ubuntu-regular">
        <Container
          ref={ref}
          className={` mt-5 landing-page d-flex align-items-center flex-column justify-content-center slide-in-container ${
            isVisible ? "visible" : ""
          }`}
        >
          <Row className=" d-flex align-items-start mt-md-5 row-landingPage">
            <Col
              sm={{ span: 12, order: 1 }}
              md={{ span: 4, order: 1 }}
              lg={5}
              xl={5}
              className="d-flex align-items-center justify-content-center mb-md-4 mt-md-4"
            >
              <div className="glass-image-container">
                <div className="glass-image-frame">
                  <Image
                    src={`${import.meta.env.BASE_URL}profile_photo.JPG`}
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
              md={{ span: 8, order: 2 }}
              lg={7}
              xl={7}
              className="d-flex justify-content-center text-justif px-4 px-md-5 py-md-5"
            >
              <div className="mt-4">
                <span className="intro-greeting">👋 Hello, I’m</span>
                <h1 className=" fw-bold main-name">Darshan Domadiya</h1>

                <div className="typewriter-text ">
                  <span>My expertise in, </span>
                  <p className="type-animation_text">
                    <TypeAnimation
                      sequence={[
                        "Front End Development",
                        1200,
                        "Back End Development",
                        1200,
                        "Full Stack Development",
                        1200,
                        "Responsive Web Design",
                        1200,
                        1200,
                        "Software Development",
                        1200,
                        1200,
                        "API Development",
                        1200,
                        "AWS cloud services ☁️",
                        1200,
                      ]}
                      wrapper="span"
                      speed={40}
                      repeat={Infinity}
                      className="typeAnimation-text"
                    />
                  </p>
                  <p className="p-text">
                    A curious individual eager to work and learn in a team
                    environment to deliver high-quality software products.
                  </p>
                  <p className="availability-text mb-4">
                    📌 Actively seeking 4–8 month Internship
                    opportunities starting <strong>Winter 2026</strong>.
                  </p>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <a
                    href="./Darshan-Domadiya(Resume).pdf"
                    target="_blank"
                    className="btn resume-btn d-flex align-items-center gap-2"
                  >
                    <FaFileDownload /> Resume
                  </a>

                  <Button
                    className="btn contact-btn d-flex align-items-center gap-2"
                    onClick={handleGetStartedClick}
                  >
                    Let’s Connect
                  </Button>
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
