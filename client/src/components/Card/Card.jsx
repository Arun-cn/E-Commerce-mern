import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080" // Development API URL
    : process.env.REACT_APP_API_URL; // Production API URL from .env

const CardView = (props) => {
  const { product } = props;
  console.log(`card-product${product}`);
  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={`${API_BASE_URL}/api/v1/product/product-photo/${product._id}`}
      />
      <Card.Body>
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="card-text">{product.description}</Card.Text>  
        <Card.Text>
          <small className="text-muted">Price: ${product.price}</small>
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CardView;
