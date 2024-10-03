import React from "react";
import { Row, Col } from "react-bootstrap";

const categories = [
  { name: "Electronics", image: "/category/television.png" },
  {
    name: "Fashion",
    image: "/category/female-and-male-shapes-silhouettes.png",
  },
  { name: "Groceries", image: "/category/grocery.png" },
  { name: "Laptop", image: "/category/laptop.png" },
  { name: "Mobile", image: "/category/cell-phone.png" },
  { name: "beauty", image: "/category/makeup.png" },
  { name: "Home&Kitchen", image: "/category/sink.png" },
  { name: "Furniture", image: "/category/sofa.png" },
  // Add more categories as needed
];

const index = () => {
  return (
    <Row className="category-bar justify-content-around ">
      {categories.map((category, index) => (
        <Col
          key={index}
          xs={6}
          sm={5}
          md={3}
          lg={1}
          className="text-center mt-3 mb-3"
        >
          {/* Image */}
          <img
            src={category.image}
            alt={category.name}
            className="img-fluid "
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          {/* Text */}
          <div className="category-name mt-2">{category.name}</div>
        </Col>
      ))}
    </Row>
  );
};

export default index;
