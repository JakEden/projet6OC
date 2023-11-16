import React, { useState } from "react";
import backArrow from "../assets/arrow_back.png";
import forwardArrow from "../assets/arrow_forward.png";
import "../styles/Carousel.scss";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showNavigation = images.length > 1;

  return (
    <div className="image-carousel">
      <div className="carousel-image-container">
        {showNavigation && (
          <button className="backArrow" onClick={handlePrevImage}>
            <img src={backArrow} alt="back arrow" />
          </button>
        )}
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        {showNavigation && (
          <button className="forwardArrow" onClick={handleNextImage}>
            <img src={forwardArrow} alt="forward arrow" />
          </button>
        )}
        {showNavigation && (
          <div className="image-indicator">{`${currentImageIndex + 1}/${
            images.length
          }`}</div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
