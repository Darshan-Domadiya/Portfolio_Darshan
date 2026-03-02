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
              <div className="timeline-location">
                University of Windsor • Windsor, ON
              </div>
              <div className="timeline-date">Jan 2025 - Aug 2026</div>
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
              <div className="timeline-location">
                AIT - Gujarat Technological University
              </div>
              <div className="timeline-date">Aug 2020 - Jun 2024</div>
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
              <h3 className="timeline-title">UX Developer Intern</h3>
              <div className="timeline-location">
                Nokia - Remote
              </div>
              <div className="timeline-date">Jan 2026 - Aug 2026</div>
            </div>
            <div className="timeline-content">
              <ul>
                <li>
                Tech: React, Node, JavaScript, TypeScript, Cursor, JEST, Jenkins, Linux, Git, Github
                </li>

                <li>
                Migrated legacy UI components to the NDS (Nokia Design System) Connect theme, ensuring alignment with
                updated design standards and improving visual consistency across applications.
                </li>
                <li>
                Improved component rendering performance by 25% by optimizing React hooks usage, memoization strategies,
                and reducing unnecessary re-renders across shared UI modules.
                </li>
                <li>
                Leveraged AI-assisted development tools (e.g. Cursor) to accelerate debugging and fixing UI/UX defects,
                reducing production issues and improving overall product stability across React Components.
                </li>
                <li>
                Reduced bundle size by 18% through dependency cleanup, tree-shaking optimization, and removal of
                deprecated libraries during NDS Connect migration.
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
              <div className="timeline-location">
                Concetto Labs Pvt. Ltd. • Ahmedabad, India
              </div>
              <div className="timeline-date">Jan 2024 - Jun 2024</div>
            </div>
            <div className="timeline-content">
              <ul>
                <li>
                  Tech: ReactJs, Next Js, Node Js, Redux, REST APIs,
                  SQL, MongoDB, Postman
                </li>
                <li>
                Designed and developed scalable Front-end components for customer focused web applications using React,
                Node.js, and TypeScript and optimized User interfaces.
                </li>
                <li>
                  Implemented flexible UI design to ensure a smooth user
                  experience across all screen sizes.
                </li>
                <li>
                  Developed and tested RESTful APIs in Postman which resolved almost 30%
                  post-production issues through early-stage debugging.
                </li>
                <li>
                Participated in a cross-functional team to gather requirements, conduct design reviews, code reviews and deliver
                customer-facing features and demonstrated excellent problem-solving skills.
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
