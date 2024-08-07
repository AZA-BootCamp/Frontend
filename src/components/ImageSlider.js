import React, { useEffect, useState } from 'react';
import '../styles/ImageSlider.css';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
