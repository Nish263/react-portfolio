import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle } from "../title/Title";

export const Skills = () => {
  return (
    <section id="skills" className="mb-5">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="skills" />

            <div class="skill-list md-5 d-flex justify-content-between fw-bolder text-center flex-wrap">
              <span className="text-primary">
                <i class="fab fa-react d-block"></i> React
              </span>
              <span className="text-primary">
                <i class="fab fa-html5  d-block"></i> HTML5
              </span>
              <span className="text-danger">
                <i class="fab fa-css3-alt d-block"></i>CSS3
              </span>
              <span className="text-warning">
                <i class="fab fa-js d-block"></i>JAVASCRIPT
              </span>
              <span>
                <i class="fab fa-bootstrap d-block"></i>BOOTSTRAP
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
