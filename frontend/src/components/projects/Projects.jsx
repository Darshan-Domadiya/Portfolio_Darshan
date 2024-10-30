import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./projects.scss";

const Projects = () => {
  return (
    <Container className="d-flex align-items-center  flex-column">
      <p className="text-center fs-2">Projects</p>
      <Row className="mt-4">
        <Col sm={12} md={6} lg={4} xl={3} className="mb-4 mb-xl-0">
          <Card style={{ width: "18rem" }} className="">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a
                href="https://github.com/Darshan-Domadiya/MERN-Auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">View Project</Button>
              </a>{" "}
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} xl={3} className="mb-4 mb-xl-0">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a
                href="https://github.com/Darshan-Domadiya/MERN-Auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">View Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} xl={3} className="mb-4 mb-xl-0">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a
                href="https://github.com/Darshan-Domadiya/MERN-Auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">View Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} xl={3} className="mb-4 mb-xl-0">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a
                href="https://github.com/Darshan-Domadiya/MERN-Auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">View Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <a
            href="https://github.com/Darshan-Domadiya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">View More On GitHub</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
