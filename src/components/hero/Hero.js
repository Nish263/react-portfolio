import React from "react";
import { Header } from "../Layout/Header";
import "./hero.css";
import { Row, Col, Container } from "react-bootstrap";
import me from "../../assets/me.png";

export const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <Container>
        <Row className="mt-2 pb-3">
          <Col md="5" className="text-center order-md-2 mb-5">
            <img src={me} alt="me" />
          </Col>
          <Col md="7">
            <div className="col-md-7 ">
              <div className="mt-5 pt-4 mb-3">Hi, I am Nisha Paudel Pandey</div>
              <h4>Full Stack MERN Developer !!</h4>
              <p className="mt-4 mb-4">
                I am passionate software Engineer who love to do coding.
              </p>
              <button className="btn btn-danger">
                Download Resume <i className="fas fa-cloud-download"></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
