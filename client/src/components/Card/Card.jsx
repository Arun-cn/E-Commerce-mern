import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardView = (props) => {
  const { product } = props;

  return (
    <Card className={`card-view`}>
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-photo/${product._id}`}
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
