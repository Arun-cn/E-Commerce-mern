import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const index = () => {
  return (
    <Container className="banner text-center text-light rounded d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-4 pt- mb-2">Welcome to Our Store!</h1>
      <p className="lead mb-2">Find the best products at unbeatable prices.</p>
      <a href="/shop" className="btn btn-light btn-lg mt-1">
        Shop Now
      </a>
    </Container>
  );
};

export default index;
