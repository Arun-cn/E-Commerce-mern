import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Banner";

const index = () => {
  return (
    <Container>
      <Banner className="lg-6" />
      <Banner className="lg-6" />
      <Banner className="lg-6" />
      <Banner className="lg-6" />
    </Container>
  );
};

export default index;
