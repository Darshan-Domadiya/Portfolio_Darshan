import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./certificate.scss";
import { ScrollAnimation } from "../scroll/ScrollAnimation";

const Certificate = () => {
  const [ref, isVisible] = ScrollAnimation();

  return (
    <Container
      ref={ref}
      className={`section-content slide-in-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="text-center">
        <p className="text-center fs-1 section-heading">
          Certifications & Achievements
        </p>
      </div>

      <Row className="mt-4">
        <Col>
          <div className="d-flex flex-column justify-content-center align-items-center aws-box p-3">
            <div>
              <div className="aws-banner-div">
                <Image
                  src="aws-2.png"
                  className="object-fit-cover img-fluid aws-banner-image"
                />
              </div>
            </div>
            <div>
              <p className="fs-4 skill-heading">
                AWS Certified : Cloud Practitioner Foundational
              </p>
            </div>
            <div>
              <Button className="verify-button">
                <a
                  className="verify-link"
                  href="https://www.credly.com/badges/6391d156-2752-4960-a4d3-25d24228de13/public_url"
                  target="_blank"
                >
                  {" "}
                  Verify Here{" "}
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Certificate;
