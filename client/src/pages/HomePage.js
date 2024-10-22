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
import CategoryBar from "../components/CategoryMenu/CategoryMenu";
import CardLayout from "../components/CardLayout/CardLayout";
import Banner from "../components/Banner";
import BannerGrid from "../components/BannerGrid";

function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <Layout title={"ALl Products - Best offers "}>
      <Container fluid className="p-0">
        <Carousel />

        <Container className="bg-secondary-color mt-4 mb-4">
          <CategoryBar />
        </Container>

        <Container className="mt-5 mb-5">
          <CardLayout apiEndpoint="product/trending" view="card-view" />
        </Container>

        <Container className="mt-5 mb-5">
          <Banner />
        </Container>

        <Container className="mt-5 mb-5">
          <CardLayout apiEndpoint="product/trending" view="list-view" />
        </Container>

        <Container className="mt-5">
          <BannerGrid />
        </Container>
      </Container>
    </Layout>
  );
}

export default HomePage;
