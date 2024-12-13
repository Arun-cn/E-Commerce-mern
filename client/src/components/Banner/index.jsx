import React from "react";
import { Image, Container, Card } from "react-bootstrap";

const index = ({ image }) => {
  return (
    <Container className="mt-4 ">
      <div className="image-banner">
        <img src={image} className="banner-image" />
      </div>
    </Container>
  );
};

export default index;
