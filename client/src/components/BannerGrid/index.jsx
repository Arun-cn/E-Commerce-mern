import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Banner";

const index = () => {
  return (
    <Container className="mt-4">
      <Row className="gy-4">
        <Col md={6} className="mb-4">
          <Banner />
        </Col>
        <Col md={6} className="mb-4">
          <Banner />
        </Col>
        <Col md={6} className="mb-4">
          <Banner />
        </Col>
        <Col md={6} className="mb-4">
          <Banner />
        </Col>
      </Row>
    </Container>
  );
};

export default index;
