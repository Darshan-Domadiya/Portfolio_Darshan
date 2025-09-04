import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.scss";
import { ScrollAnimation } from "../scroll/ScrollAnimation";

const About = () => {
  const [ref, isVisible] = ScrollAnimation();

  return (
    <Container
      ref={ref}
      className={`section-content slide-in-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="text-center">
        <p className="text-center fs-1 section-heading">About Me</p>
      </div>

      <Row>
        <Col
          className="timeline-section"
          sm={12}
          md={{ span: 6, order: 2 }}
          lg={6}
          xl={6}
        >
          <p className="section-title">Education</p>

          <div className="timeline-item">
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-header">
              <h3 className="timeline-title">Master's in Applied Computing</h3>
              <div className="timeline-date">Jan 2025 - Present</div>
              <div className="timeline-location">
                University of Windsor • Windsor, ON
              </div>
            </div>
            <div className="timeline-content">
              <ul>
                <li> GPA: 84/100</li>
                <li>
                  Available for a 4-8 month internship starting Winter 2026
                </li>
                <li>
                  Major Courses: Advanced Software Engineering, Advanced
                  Computing Concepts, Advanced Database Topics
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-header">
              <h3 className="timeline-title">
                Bachelor of Information Technology
              </h3>
              <div className="timeline-date">Aug 2020 - Jun 2024</div>
              <div className="timeline-location">
                AIT - Gujarat Technological University
              </div>
            </div>
            <div className="timeline-content">
              <ul>
                <li>CGPA: 8.78/10</li>
                <li>
                  Major Courses: Data Structures, Database Management, Software
                  Engineering
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col
          className="timeline-section"
          sm={12}
          md={{ span: 6, order: 2 }}
          lg={6}
          xl={6}
        >
          <h2 className="section-title">Professional Experience</h2>

          <div className="timeline-item">
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-header">
              <h3 className="timeline-title">Web Developer Intern</h3>
              <div className="timeline-date">Jul 2024 - Aug 2024</div>
              <div className="timeline-location">
                DigiGlobe Solutions Pvt. Ltd. • Ahmedabad, India - Remote
              </div>
            </div>
            <div className="timeline-content">
              <ul>
                <li>
                  Technologies: Java, Spring Boot, Maven, JSP, SQL, JIRA, Git,
                  GitHub
                </li>

                <li>
                  Developed and deployed RESTful APIs using Java and Spring Boot
                  to support dynamic, scalable backend services.
                </li>
                <li>
                  Designed secure API endpoints with proper input validation.
                </li>
              </ul>
            </div>
          </div>

          {/*Experience Section */}

          <div className="timeline-item">
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-header">
              <h3 className="timeline-title">Software Developer Intern</h3>
              <div className="timeline-date">Jan 2024 - Jun 2024</div>
              <div className="timeline-location">
                Concetto Labs Pvt. Ltd. • Ahmedabad, India
              </div>
            </div>
            <div className="timeline-content">
              <ul>
                <li>
                  Technologies: ReactJs, Next Js, Node Js, Redux, REST APIs,
                  SQL, MongoDB, Postman
                </li>
                <li>
                  Developed a comprehensive API integrated E-Cart project and
                  gained hands-on experience in Full Stack Development.
                </li>
                <li>
                  Implemented flexible UI design to ensure a smooth user
                  experience across all screen sizes.
                </li>
                <li>
                  Developed and tested RESTful APIs in Postman which resolved
                  post-production issues through early-stage debugging.
                </li>
                <li>
                  Contributed in daily stand-up meetings with cross-functional
                  teams for project updates, code refactoring, optimizing and
                  problem solving.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-header">
              <h3 className="timeline-title">ReactJs Intern</h3>
              <div className="timeline-date">Jul 2023 - Sep 2023</div>
              <div className="timeline-location">
                Stypix Pvt. Ltd • Ahmedabad, India
              </div>
            </div>
            <div className="timeline-content">
              <ul>
                <li>
                  Technologies: JavaScript, HTML, CSS, Bootstrap, Frontend
                  Development
                </li>
                <li>
                  Successfully completed a hands-on project during internship,
                  acquired experience in front-end development.
                </li>
                <li>
                  {" "}
                  Gained hands-on experience in writing clean, maintainable code
                  by applying best practices in code structuring.
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
