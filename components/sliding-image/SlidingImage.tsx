"use client"
// SlidingImage.js
import { useState, useEffect } from "react";
import { images } from "./imageData";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

function SlidingImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transform transition-transform duration-1000 ${
            index === currentIndex ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Image fill src={image.src} alt={`Slide ${index}`} objectFit="cover" />

          {/* Name and Duty in the center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4/1 text-black">
            <h3 className="font-bold text-xl">{image.name}</h3>
            <p>{image.duty}</p>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-l-full left-0"
        onClick={prevSlide}
      >
        <MdArrowBackIos className="text-xl md:text-2xl" />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-r-full right-0"
        onClick={nextSlide}
      >
        <MdArrowForwardIos className="text-xl md:text-2xl" />
      </button>
    </div>
  );
}

export default SlidingImage;
