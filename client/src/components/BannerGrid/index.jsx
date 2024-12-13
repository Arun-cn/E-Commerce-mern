import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Banner";

const index = () => {
  return (
    <Container fluid className="mt-4">
      <Row className="gy-4 w-100">
        <Col md={6} className="mb-4">
          <Banner image={"/banner/banner-x1.jpg"} />
        </Col>
        <Col md={6} className="mb-4">
          <Banner image={"/banner/banner-x2.jpg"} />
        </Col>
        <Col md={6} className="mb-4">
          <Banner image={"/banner/banner-x3.jpg"} />
        </Col>
        <Col md={6} className="mb-4">
          <Banner image={"/banner/banner-x4.jpg"} />
        </Col>
      </Row>
    </Container>
  );
};

export default index;
