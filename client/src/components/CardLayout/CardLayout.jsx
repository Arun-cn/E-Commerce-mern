import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "../../utils/axiosInstance";
import { Container } from "react-bootstrap";

const CardLayout = ({ viewType, apiEndpoint, title }) => {
  const [products, setProducts] = useState([]);

  // Fetch trending products from the backend
  useEffect(() => {
    fetchTrendingProducts();
  }, []);

  const fetchTrendingProducts = async () => {
    try {
      const response = await axios.get(`/api/v1/${apiEndpoint}`);

      if (response.data?.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching trending products:", error);
    }
  };

  return (
    <Container fluid p-0 className="cardlayout">
      <h2>{title}</h2>
      <div className="row ">
        {products?.map((product, index) => (
          <div
            className={`${
              viewType === "horizontal" ? "col-md-6" : "col-md-3"
            }  mb-3`}
            key={index}
          >
            <Card product={product} view={viewType} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CardLayout;
