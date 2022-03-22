import React from "react";
import { SectionTitle } from "../title/Title";
import { Container, Row, Col } from "react-bootstrap";
import pro1 from "../../assets/pro1.png";
import portfolio from "../../assets/portfolio.png";

export const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Projects" />
          </Col>
        </Row>
        {/* project section 1 */}
        <Row className="py-5">
          <Col md="6">
            <img src={pro1} alt="img" className="img-thumnail" width="100%" />
          </Col>
          <Col md="6">
            <h2>My Prank Calculator project</h2>
            <div className="links">
              <a href="#sent to github">
                <i class="fab fa-github text-dark"> </i>
              </a>
              <a href="#liveproject">
                <i class="fas fa-link mt-3 mr-3 text-danger"></i>
              </a>
            </div>
            <p class="mt-3"> Tech: HTML , CSS, Javascript</p>
            <p>
              This is a simple calculator which gives false answer as a prank.
            </p>
          </Col>
        </Row>
      </Container>
      {/* project 2  */}
      <Row className="py-5">
        <Col md="6">
          <img
            src={portfolio}
            alt="img"
            className="img-thumnail"
            width="100%"
          />
        </Col>
        <Col md="6">
          <h2>My Prank Calculator project</h2>
          <div className="links">
            <a href="#sent to github">
              <i class="fab fa-github text-dark"> </i>
            </a>
            <a href="#liveproject">
              <i class="fas fa-link mt-3 mr-3 text-danger"></i>
            </a>
          </div>
          <p class="mt-3"> Tech: HTML , CSS, Javascript</p>
          <p>
            This is a simple calculator which gives false answer as a prank.
          </p>
        </Col>
      </Row>
    </section>
  );
};
