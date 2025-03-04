import React, { useState, useEffect } from "react";
import { Checkbox, Radio } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import "../pages/styles/CategoryProductStyles.css";
import Card from "../components/Card/Card";
import { Prices } from "../components/Prices";
import axiosInstance from "../utils/axiosInstance";
import { AiOutlineReload } from "react-icons/ai";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get all categories and total count of products
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/category/get-category");
      setCategory(response.data.category);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  // Get total count of products
  const getTotal = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/product/product-count");
      setTotal(response.data?.total);
    } catch (error) {
      console.error("Error fetching total products", error);
    }
  };

  // Filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];

    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // Fetch products based on category
  useEffect(() => {
    if (category.length > 0 && params?.slug) {
      const itemId = category.find((c) => c.slug === params.slug);
      if (itemId) {
        setProducts([]); // Clear existing products
        handleFilter(true, itemId._id);
      } else {
        getAllProducts();
      }
    }
  }, [category, params.slug]); // Add params.slug as a dependency

  useEffect(() => {
    if (checked.length || radio.length) {
      setProducts([]); // Clear existing products
      filterProduct();
    }
  }, [checked, radio]);

  // Get filtered products
  const filterProduct = async () => {
    try {
      const { data } = await axiosInstance.post(
        "/api/v1/product/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // Get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Load more products
  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // Load more products
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="container-fluid">
            <div className="filters">
              <h6 className="mt-2">Filter By Category</h6>
              <div className="d-flex flex-column">
                {category?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>
              {/* price filter */}
              <h6 className="mt-4">Filter By Price</h6>
              <div className="d-flex flex-column">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
              <div className="d-flex flex-column">
                <button
                  className="btn btn-danger"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10">
          <h3>Products</h3>
          <div className="container-fluid">
            <div className="row">
              {products.map((product) => (
                <div className="col-md-4 mb-3" key={product._id}>
                  <Card product={product} />
                </div>
              ))}
            </div>
            <div className="row d-flex justify-content-center">
              {products && products.length < total && (
                <button
                  className="btn btn-primary mb-3"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? (
                    "Loading ..."
                  ) : (
                    <>
                      Load more <AiOutlineReload />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
