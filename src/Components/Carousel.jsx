import React, { useState } from "react";
import backArrow from "../assets/arrow_back.png";
import forwardArrow from "../assets/arrow_forward.png";

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
    <div className="pictureCarousel">
      <div className="carouselImageContainer">
        {showNavigation && (
          <button className="backArrow" onClick={handlePrevImage}>
            <img src={backArrow} alt="back arrow" />
          </button>
        )}
        <div className="carouselImage">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        </div>
        {showNavigation && (
          <button className="forwardArrow" onClick={handleNextImage}>
            <img src={forwardArrow} alt="forward arrow" />
          </button>
        )}
        {showNavigation && (
          <div className="imageIndicator">{`${currentImageIndex + 1}/${
            images.length
          }`}</div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
