import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Context/auth";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { Badge } from "antd";
import { useCart } from "../../Context/cart";

const Headers = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img
            src="/logo/elite emporium logo-light.png"
            alt="Logo"
            width="200"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div className="container-fluid  justify-content-center">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  TREND NOW
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Fashion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  New Arrivals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Best Sellers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Electronics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <SearchInput class="m-2" />
          <div class="d-flex ms-2">
            <button class="btn btn-outline-success me-1" type="submit ">
              Login
            </button>
            <button class="btn btn-outline-success" type="submit ">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
