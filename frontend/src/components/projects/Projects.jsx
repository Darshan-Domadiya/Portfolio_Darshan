import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./projects.scss";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectObject = [
    {
      index: 0,
      cardImage: "./homeImage-1.png",
      cardTitle: " e-Cart(E-Commerce website)",
      cardText: `A fully API integrated and responsive e-commerce website which includes various functionalities such as user login and authentication, various pages such as product detail page, product listing page, checkout page, cart page using React Js.`,
      projectLink:
        "https://github.com/Darshan-Domadiya/e-Cart-online-shopping-website-",
      demoLink:
        "https://drive.google.com/file/d/1Pw_GuCEmVg6paArUuOuXdVAGMM4eFqMd/view?usp=sharing",
      TechStack: "HTML, SCSS, React Js, Postman, REST Api, React Bootstrap,",
    },

    {
      index: 1,
      cardImage: "./realEstate.png",
      cardTitle: "Real Estate Website",
      cardText: `This project highlights expertise in building dynamic full-stack applications with React.js, Node.js, Express.js, and MongoDB. It combines advanced functionality, scalability, and security to deliver a modern solution for real estate management.`,
      projectLink: "https://github.com/Darshan-Domadiya/Real-Estate_MERN",
      demoLink:
        "https://drive.google.com/file/d/1z3MxexoshJ5V2Meu7_1zhjSrWsH15u5x/view?usp=sharing",
      TechStack:
        "React Js, Express Js, Node Js, MongoDB, Firebase, React Bootstrap, Redux Toolkit, SCSS",
    },
    {
      index: 2,
      cardImage: "./portfolio.png",
      cardTitle: "Portfolio Website",
      cardText: `Built with ReactJs portfolio showcases my skills and experience as a software developer and proficiency in, responsive design, and animation effects. This project reflects a commitment to creating user-friendly and visually appealing applications. `,
      projectLink: "https://github.com/Darshan-Domadiya/portfolio",
      demoLink: "",
      TechStack: "React Js, MongoDB, React Bootstrap, EmailJs",
    },
    {
      index: 3,
      cardImage: "./mernAuth.png",
      cardTitle: "MERN Auth",
      cardText: `This is a MERN MongoDB, Express, React, Node.js stack
                application with authentication. It allows users to sign up, log
                in, and log out, and provides access to protected routes only
                for authenticated users`,
      projectLink: "https://github.com/Darshan-Domadiya/MERN-Auth",
      demoLink:
        "https://drive.google.com/file/d/1OHMFBLHGNvLYx8F5MF57U5zNW7KM7jsc/view?usp=sharing",
      TechStack:
        "React Js, Express, Node Js, MongoDB, Firebase, React Bootstrap, Redux Toolkit",
    },
  ];

  return (
    <Container className="d-flex align-items-center  flex-column">
      <div className="text-center">
        <p className="section-heading fs-1">Projects</p>
      </div>
      <Row className="mt-4">
        {projectObject.map((project, index) => (
          <Col sm={12} md={6} lg={6} xl={4} className="mb-4" key={index}>
            <Card
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            >
              <Card.Img
                variant="top"
                src={project.cardImage}
                alt="Project Image"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  {project.cardTitle}
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {project.cardText}
                </Card.Text>
                <Card.Text>Tech Stack : {project.TechStack}</Card.Text>
                <div className="d-sm-flex align-items-center justify-content-center gap-4">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-100 btn-style-landingPage">
                      View Project
                    </Button>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-100 mt-2 mt-sm-0 btn-style-landingPage">
                      View Demo
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col>
          <a
            href="https://github.com/Darshan-Domadiya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <Button
              variant="primary"
              className="d-flex align-items-center gap-2 btn-viewGithub fw-bold"
            >
              View More On <FaGithub />
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
