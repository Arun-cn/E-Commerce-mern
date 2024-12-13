import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const CarouselView = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100 carousel-image"
          src="carousel/carousel1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 carousel-image"
          src="carousel/carousel2.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h1>Upgrade Your Wardrobe with the Latest Collection</h1>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 h-70 carousel-image"
          src="carousel/carousel3.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Where Quality Meets Affordability</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselView;
