import React from "react";
import { SectionTitle } from "../title/Title";
import { Container, Row, Col } from "react-bootstrap";
import me from "../../assets/me.png";

export const About = () => {
  return (
    <section id="about-me">
      <SectionTitle title="About Me" />
      <Container>
        <Row>
          <Col className="about-me-img">
            <img src={me} alt="me" className="text-center" width="80%" />
          </Col>
          <Col>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              aperiam, reprehenderit, consequatur eligendi adipisci ducimus
              incidunt quidem laborum ea non suscipit perspiciatis culpa
              doloremque aliquam! Deserunt necessitatibus fuga qui rem.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
