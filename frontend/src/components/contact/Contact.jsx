import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <Container className="d-flex flex-column justify-content-center mt-5">
      <p className="fs-1 text-center">Contact Me</p>
      <Row className="mt-5">
        <Col md={6} lg={6} xl={6} className="mt-5">
          <p className="fs-4">Socials</p>
          <div className="social-links mt-3">
            <a
              href="https://github.com/Darshan-Domadiya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/domadiya-darshan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://leetcode.com/u/Darshan_Domadiya23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode
                size={30}
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://leetcode.com/u/Darshan_Domadiya23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            </a>
          </div>
        </Col>

        <Col md={6} lg={6} xl={6} className="mt-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="bg-light p-2"
                type="name"
                placeholder="Enter your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="bg-light p-2"
                type="email"
                placeholder="Enter your Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                className="bg-light p-2"
                placeholder="Enter your Message"
                as="textarea"
                rows={4}
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center">
              <Button className="w-50 p-2" type="submit">
                {" "}
                SUBMIT
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
