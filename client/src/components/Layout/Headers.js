import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Context/auth";
import SearchInput from "../Form/SearchInput";
import { Badge } from "antd";
import { useCart } from "../../Context/cart";
import { FaRegUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";

const Headers = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-bar">
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
        <a class="navbar-brand" href="/">
          <img
            src="/logo/elite emporium logo-light.png"
            alt="Logo"
            width="200"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <ul class="navbar-nav  ms-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/category/home-appliances">
                  Home Appliances
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Fashion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/category/new-arrivals">
                  New Arrivals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/category/books">
                  Books
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/category/electronics">
                  Electronics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/category/jewelry">
                  Jewelry
                </a>
              </li>
            </ul>
          </div>
          <SearchInput className="p-0" />
          <div className="d-flex ms-2">
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FaRegUser />
                </Dropdown.Toggle>
                {!auth.user ? (
                  <Dropdown.Menu>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    >
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout} href="/login">
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </Dropdown>
              {/* <ul className="dropdown-menu">
                {!auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}
              </ul> */}
            </div>
            <Link to="/cart" className="icon-buttons">
              <Badge count={cart.length} showZero offset={["4px", "-12px"]}>
                <IoCart className="nav-icon " />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
