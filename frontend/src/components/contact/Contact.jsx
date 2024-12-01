import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { RiPhoneLine } from "react-icons/ri";
import "./contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pgl4weo", "template_8tnnhb7", form.current, {
        publicKey: "PlLrQgImmrlf_BKWz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Container className="d-flex flex-column justify-content-center">
        <div className="text-center">
          <p className="fs-1 section-heading">Contact Me</p>
        </div>
        <Row className="mt-4">
          <Col
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={6}
            xl={5}
            className="mt-md-4 "
          >
            <div className="inquiry-form">
              <Form ref={form} onSubmit={sendEmail}>
                <p className="fs-5 text-center fw-bolder">Get In Touch!</p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="bg-secondary-subtle  p-2 border-3"
                    type="name"
                    placeholder="Enter your Name"
                    autoComplete="off"
                    name="user_name"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="bg-secondary-subtle p-2 border-3"
                    type="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    name="user_email"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    type="text"
                    name="message"
                    className="bg-secondary-subtle p-2 border-3"
                    placeholder="Enter your Message"
                    as="textarea"
                    rows={4}
                    required
                  />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    className="w-100 p-3 fw-bold btn-style-landingPage"
                    type="submit"
                  >
                    {" "}
                    SUBMIT
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          <Col
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={6}
            xl={5}
            className="mt-5 offset-xl-1"
          >
            <div className="d-flex flex-column gap-5 align-items-start mx-sm-3 mx-xl-5 justify-content-center">
              <div className="d-flex align-items-center">
                <IoLocationOutline
                  size={30}
                  style={{ margin: "0 10px", cursor: "pointer" }}
                />

                <span>Windsor, ON N9B 3P4, Canada</span>
              </div>

              <div className="d-flex align-items-center">
                <FiMail
                  size={30}
                  style={{ margin: "0 10px", cursor: "pointer" }}
                />
                <span>darshandomadiya3525@gmail.com</span>
              </div>

              <div className="d-flex align-items-center">
                <RiPhoneLine
                  size={30}
                  style={{ margin: "0 10px", cursor: "pointer" }}
                />
                <span>+1 249-288-0981</span>
              </div>
            </div>

            <div className="mt-4 d-flex align-items-center mx-2 mx-sm-4 mx-xl-5 mt-5 gap-2">
              <a
                href="https://github.com/Darshan-Domadiya?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={30}
                  style={{
                    margin: "0 10px",
                    cursor: "pointer",
                    color: "#002d62",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/domadiya-darshan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  style={{
                    margin: "0 10px",
                    cursor: "pointer",
                    color: "#002d62",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={30}
                  style={{
                    margin: "0 10px",
                    cursor: "pointer",
                    color: "#002d62",
                  }}
                />
              </a>

              <a
                href="https://www.instagram.com/_i_m_darshan_22/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={30}
                  style={{
                    margin: "0 10px",
                    cursor: "pointer",
                    color: "#002d62",
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="border-top footer-container">
        <Row>
          <div className="d-flex gap-1 justify-content-center mt-5 flex-wrap ">
            <span>&copy; 2024 Darshan Domadiya.</span>
            <span className="footer-text">
              ✨ Built with passion by Darshan Domadiya
            </span>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
