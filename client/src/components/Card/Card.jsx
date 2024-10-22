import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardView = (props) => {
  const { product } = props;

  return (
    <Card className={`card-view h-100`}>
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-photo/${product._id}`}
        className="card-image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="product-description flex-grow-1">
          {product.description}
        </Card.Text>
        <div className="product-footer d-flex justify-content-between align-items-center mt-auto">
          <span className="product-price">${product.price}</span>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardView;
