import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080" // Development API URL
    : process.env.REACT_APP_API_URL; // Production API URL from .env

const CardLayout = () => {
  const [products, setProducts] = useState([]);

  // Fetch trending products from the backend
  useEffect(() => {
    fetchTrendingProducts();
  }, []);
  const fetchTrendingProducts = async () => {
    console.log("feachcalled");
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/product/trending`
      );
      console.log(response);

      console.log("hello word");
      console.log(response.data.products);

      if (response.data?.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching trending products:", error);
    }
  };

  useEffect(() => {
    console.log("Trending products updated:", products);
  }, [products]);
  return (
    <div>
      <h2>Featured Books</h2>
      <div className="row">
        {products?.map((product, index) => (
          <div className="col-md-3" key={index}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
