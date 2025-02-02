import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company A",
    feedback: "This service is amazing! Highly recommend it.",
    image: "",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "CTO, Company B",
    feedback: "Great experience! Will definitely use again.",
    image: "",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    title: "Designer, Company C",
    feedback: "Absolutely loved the results!",
    image: "",
    rating: 5,
  },
];

const renderStars = (rating) => {
  return [...Array(rating)].map((_, index) => (
    <BsStarFill key={index} className="text-warning ms-1" size={20} />
  ));
};

const index = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row className="mb-5">
        <Col>
          <h1 className="feedback-heading text-center">Client Feedback</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {testimonials.map((testimonial, key) => (
          <Col key={key} md={4} className="mb-4 d-flex">
            <Card className="w-100 h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title className="mb-0">{testimonial.name}</Card.Title>
                  <div className="d-flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  {testimonial.title}
                </Card.Subtitle>
                <Card.Text className="flex-grow-1">
                  {testimonial.feedback}
                </Card.Text>
                <Card.Link href="#" className="mt-auto">
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default index;
