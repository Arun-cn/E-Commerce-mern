import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-light">
      <div className="container ">
        <div className="row justify-content-center gap-4">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We are dedicated to delivering the best products and services to
              our customers. Stay connected with us!
            </p>
          </div>
          {/* <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
          <div className="col-md-4 mb-3 ">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: City, Country</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
