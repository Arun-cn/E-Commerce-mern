import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUndo, FaLock, FaHeadset, FaGift } from "react-icons/fa";

const features = [
  {
    icon: <FaUndo size={24} />,
    title: "Return & Refund",
    description: "Money back guarantee",
  },
  {
    icon: <FaLock size={24} />,
    title: "Secure Payment",
    description: "30% off by subscribing",
  },
  {
    icon: <FaHeadset size={24} />,
    title: "Quality Support",
    description: "Always online 24/7",
  },
  {
    icon: <FaGift size={24} />,
    title: "Daily Offers",
    description: "20% off by subscribing",
  },
];

const FeatureBar = () => {
  return (
    <div className="feature-bar">
      <Container fluid>
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} md={3} className="d-flex align-items-center">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <div>
                <p className="feature-title mb-0">{feature.title}</p>
                <small className="feature-description">
                  {feature.description}
                </small>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeatureBar;
