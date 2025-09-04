import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./skills.scss";
import { ScrollAnimation } from "../scroll/ScrollAnimation";

const Skills = () => {
  const [ref, isVisible] = ScrollAnimation();

  const skillObject = [
    { index: 0, skillImage: "./java.png", skillName: "Java" },
    { index: 0, skillImage: "./python.png", skillName: "Python" },
    { index: 0, skillImage: "./javascript.jpg", skillName: "JavaScript" },
    { index: 0, skillImage: "./typescript.jpg", skillName: "TypeScript" },
    { index: 0, skillImage: "./c.png", skillName: "C" },
    { index: 0, skillImage: "./c-plus.png", skillName: "C++" },
  ];

  const skillObject2 = [
    { index: 0, skillImage: "./react.png", skillName: "React Js" },
    { index: 0, skillImage: "./nodejs.webp", skillName: "Node Js" },
    { index: 0, skillImage: "./nextjs.webp", skillName: "Next Js" },
    { index: 0, skillImage: "./express.png", skillName: "Express" },
    { index: 0, skillImage: "./tailwind.jpg", skillName: "TailwindCss" },
    { index: 0, skillImage: "./redux.jpg", skillName: "Redux" },
    { index: 0, skillImage: "./materialui.jpg", skillName: "Material UI" },
    { index: 0, skillImage: "./bootstrap.jpg", skillName: "Bootstrap" },
  ];

  const softwareTools = [
    { index: 0, toolImage: "./mysql.png", toolName: "MySQL" },
    { index: 0, toolImage: "./mongodb.png", toolName: "MongoDB" },
    { index: 0, toolImage: "./postman.png", toolName: "Postman" },
    { index: 0, toolImage: "./github.png", toolName: "GitHub" },
    { index: 0, toolImage: "./vscode.png", toolName: "VS Code" },
    { index: 0, toolImage: "./intellijidea.jpg", toolName: "IntellijIdea" },
    { index: 0, toolImage: "./aws.png", toolName: "AWS" },
    { index: 0, toolImage: "./jira.png", toolName: "Jira" },
    { index: 0, toolImage: "./linux.png", toolName: "Linux" },
  ];

  return (
    <Container
      ref={ref}
      className={`section-content slide-in-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="text-center ">
        <h1 className="fs-1 text-center section-heading">Skills</h1>
      </div>

      <Row className="mt-4">
        <Col sm={12} md={6} lg={4} xl={4} className="position-relative">
         <div className="d-none d-md-block border-end position-absolute top-0 bottom-0 end-0" />
          <p className="fs-3 text-center ">Programming Languages</p>

          <Row className="mt-3">
            {skillObject.map((skill) => (
              <Col
                key={skill.index}
                className="mb-4 d-flex align-items-center justify-content-center"
              >
                <div className="skill-div text-center mt-3">
                  <Image
                    src={skill.skillImage}
                    className="object-fit-cover img-fluid skill-image mb-1"
                  />
                  <p className="text-center mt-1 skill-heading">
                    {skill.skillName}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4} className="mt-5 mt-sm-0 position-relative">
                 <div className="d-none d-md-block border-end position-absolute top-0 bottom-0 end-0" />

          <p className="text-center fs-3 ">Frameworks</p>

          <Row>
            {skillObject2.map((skill) => (
              <Col
                key={skill.index}
                className=" mb-4 d-flex align-items-center justify-content-center "
              >
                <div className="skill-div text-center mt-3">
                  <Image
                    src={skill.skillImage}
                    className="object-fit-cover img-fluid skill-image mb-2"
                  />
                  <span className="skill-heading">{skill.skillName}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4} className="mt-4 mt-lg-0">
          <p className="text-center fs-3 ">Databse & Software Tools</p>

          <Row>
            {softwareTools.map((tool) => (
              <Col
                key={tool.index}
                className=" mb-4 d-flex align-items-center justify-content-center flex-md-row"
              >
                <div className="skill-div text-center mt-3">
                  <Image
                    src={tool.toolImage}
                    className="object-fit-cover img-fluid skill-image mb-2"
                  />
                  <span className="skill-heading">{tool.toolName}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
