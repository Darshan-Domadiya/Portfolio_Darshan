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
                <li> GPA: 86/100</li>
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
              <h3 className="timeline-title">
                Software Engineer Intern (Co-op)
              </h3>
              <div className="timeline-location">Nokia - Remote</div>
              <div className="timeline-date">Jan 2026 - Aug 2026</div>
            </div>
            <div className="timeline-content">
              <ul>
                <li>
                  Tech: React, JavaScript, TypeScript, Node.js, Git, Figma,
                  Jenkins, JIRA, Cursor
                </li>
                <li>
                  Improved React component rendering performance by 30% through
                  optimized hooks, memoization, and reduced unnecessary
                  re-renders across shared TypeScript UI modules.
                </li>

                <li>
                  Achieved a 98% system test success rate by resolving UI
                  defects, validating component integrations, and supporting
                  end-to-end testing within an Agile SDLC.{" "}
                </li>
                <li>
                  Leveraged Cursor (AI-assisted development tool) to accelerate
                  UI/UX defect resolution by 50%, improving development
                  efficiency, software quality, and reliability.
                </li>
                <li>
                  Reduced application bundle size by 25% through dependency
                  cleanup, optimization, and removal of deprecated components
                  and libraries during the NDS Connect migration.
                </li>
                <li>
                  {" "}
                  Migrated and validated 75+ React/TypeScript components to NDS
                  Connect, achieving 100% migration accuracy while maintaining
                  component functionality and design-system consistency.
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
                  Tech: ReactJs, Next Js, Node Js, Redux, REST APIs, SQL,
                  MongoDB, Postman
                </li>
                <li>
                  Developed scalable frontend solutions for web applications
                  using React and Redux to manage complex application states and
                  optimize user interfaces.
                </li>
                <li>
                  Implemented flexible Responsive UI design to ensure a smooth
                  user experience across all screen sizes.
                </li>
                <li>
                  Designed, developed, and integrated REST APIs using Spring
                  Boot and Node.js and resolved 70% of post-production backend
                  issues utilizing Postman, improving backend services
                  reliability.
                </li>
                <li>
                  Participated in a cross-functional team to gather
                  requirements, conduct design reviews, code reviews and deliver
                  customer-facing features and demonstrated excellent
                  problem-solving skills.
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
