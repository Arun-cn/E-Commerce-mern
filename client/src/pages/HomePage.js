import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../Context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import Carousel from "../components/Carousel/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import ServicesInfoMenu from "../components/ServiceInfoMenu";
import CardLayout from "../components/CardLayout/CardLayout";
import Banner from "../components/Banner";
import BannerGrid from "../components/BannerGrid";
import Testimonials from "../components/Testimonials";

function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <Layout title={"ALl Products - Best offers "}>
      <Container fluid className="p-0">
        <Carousel />
      </Container>

      <Container className="bg-secondary-color mt-5 mb-5 p-0">
        <ServicesInfoMenu />
      </Container>

      <Container className="mt-5 mb-5">
        <CardLayout apiEndpoint="product/trending" title="Trending Products" />
      </Container>

      <Container className="mt-5 mb-5">
        <Banner image={"/banner/banner1.jpg"} />
      </Container>

      <Container className="mt-5 mb-5">
        <CardLayout apiEndpoint="product/trending" title="New Products" />
      </Container>

      <Container className="mt-5 mb-5">
        <BannerGrid />
      </Container>

      <Container className="mt-5 mb-5 bg-secondary-color rounded">
        <CardLayout
          apiEndpoint="product/trending"
          viewType="horizontal"
          title="Featured products"
        />
      </Container>
      <Container className="mt-5 mb-5">
        <Banner image={"/banner/banner2.jpg"} />
      </Container>
      <Container fluid className="mt-5 bg-primary">
        <Testimonials />
      </Container>
    </Layout>
  );
}

export default HomePage;
