import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./skills.scss";

const Skills = () => {
  const skillObject = [
    { index: 0, skillImage: "./html.jpg", skillName: "HTML" },
    { index: 0, skillImage: "./css.png", skillName: "CSS" },
    { index: 0, skillImage: "./javascript.jpg", skillName: "JAVASCRIPT" },
    { index: 0, skillImage: "./react.png", skillName: "REACT JS" },
    { index: 0, skillImage: "./redux.jpg", skillName: "REDUX" },
    { index: 0, skillImage: "./nextjs.webp", skillName: "NEXT JS" },
    { index: 0, skillImage: "./sass.png", skillName: "SCSS" },
    { index: 0, skillImage: "./tailwind.jpg", skillName: "TAILWIND CSS" },
    { index: 0, skillImage: "./typescript.jpg", skillName: "TYPESCRIPT" },
    { index: 0, skillImage: "./materialui.jpg", skillName: "MATERIALUI" },
    { index: 0, skillImage: "./bootstrap.jpg", skillName: "BOOTSTRAP" },
  ];

  const skillObject2 = [
    { index: 0, skillImage: "./nodejs.webp", skillName: "NODE JS" },
    { index: 0, skillImage: "./express.png", skillName: "EXPRESS" },
    { index: 0, skillImage: "./mongodb.png", skillName: "MONGODB" },
    { index: 0, skillImage: "./firebase.png", skillName: "FIREBASE" },
    { index: 0, skillImage: "./mysql.png", skillName: "MYSQL" },
    { index: 0, skillImage: "./java.png", skillName: "JAVA" },
    { index: 0, skillImage: "./python.png", skillName: "PYTHON" },
  ];

  const softwareTools = [
    { index: 0, toolImage: "./postman.png", toolName: "POSTMAN" },
    { index: 0, toolImage: "./github.png", toolName: "GITHUB" },
    { index: 0, toolImage: "./vscode.png", toolName: "VS CODE" },
    { index: 0, toolImage: "./intellijidea.jpg", toolName: "INTELLIJIDEA" },
  ];

  return (
    <Container>
      <div className="text-center ">
        <h1 className="fs-1 text-center section-heading">Skills</h1>
      </div>

      <Row className="mt-4">
        <Col sm={12} md={6} lg={4} xl={4} className="border-end">
          <p className="fs-3 text-center">Front End Technologies</p>

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
                  <p className="text-center mt-1">{skill.skillName}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4} className="mt-5 mt-sm-0 border-end">
          <p className="text-center fs-3">Back End Technologies</p>

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
                  <span>{skill.skillName}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4} className="mt-4 mt-lg-0">
          <p className="text-center fs-3">Software Tools</p>

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
                  <span>{tool.toolName}</span>
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
