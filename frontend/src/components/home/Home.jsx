import React, { useEffect } from "react";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const handleGetStartedClick = () => {
    const aboutSection = document.getElementById("about");
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
          <Row className=" type-animation-row ">
            <Col className="d-flex align-items-center justify-contents-start">
              <TypeAnimation
                sequence={[
                  "I am Software Developer",
                  1000,
                  "I am Frontend Developer",
                  1000,
                  "I am Backend Developer",
                  1000,
                  "I am Full-stack Developer",
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
            </Col>
          </Row>
          <Row className="w-100 d-flex align-items-start mt-md-5">
            <Col
              sm={{ span: 12, order: 1 }}
              md={{ span: 4, order: 2 }}
              lg={5}
              xl={4}
              className="d-flex align-items-center justify-content-center mb-4 mt-4"
            >
              <div className="round-image-div">
                <Image
                  src="./profile.png"
                  alt="profile_photo"
                  className="object-fit-cover img-fluid"
                  height="100%"
                  width="100%"
                />
              </div>
            </Col>

            <Col
              sm={{ span: 12, order: 2 }}
              md={{ span: 8, order: 1 }}
              lg={7}
              xl={8}
              className="d-flex align-items-center flex-column justify-content-start mt-4"
            >
              <div className="d-flex flex-column justify-content-start w-100">
                <span className="software-title  fs-5 ">
                  Software Developer
                </span>
                <span className="my-name">Darshan Domadiya</span>
                <p className="intro-text">
                  A software developer driven by innovation and enthusiasm.
                  Poised to turn your vision into reality!
                </p>

                <div className="mt-3 d-flex flex-column flex-md-row gap-4">
                  <a
                    href="/Resume_Darshan.pdf"
                    download="Darshan_Domadiya_Resume.pdf"
                  >
                    <Button className="btn-style-landingPage">
                      Download Resume
                    </Button>
                  </a>

                  <div>
                    <Button
                      className="btn-style-landingPage"
                      onClick={handleGetStartedClick}
                    >
                      Get Started
                    </Button>
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
