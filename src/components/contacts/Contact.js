import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  return (
    <section id="contact" className=" py-5">
      <Container>
        <Row>
          <Col className="d-flex fs-1 justify-content-around">
            <a target="blank" href="mailto:youre@gmail">
              <i className="fas fa-envelope"></i>
            </a>
            <a target="blank" href="#facebook">
              <i className="fab fa-facebook mr-6"></i>
            </a>
            <a target="blank" href="#linkedin">
              <i className="fab fa-linkedin "></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
