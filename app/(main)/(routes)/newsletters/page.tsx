"use client";

import Breadcrumb from "@/components/common/Breadcrumbs";
import { useEffect, useState } from "react";

const Newsletter = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { src: "path/to/image1.jpg", caption: "Caption for Image 1" },
    { src: "path/to/image2.jpg", caption: "Caption for Image 2" },
    { src: "path/to/image3.jpg", caption: "Caption for Image 3" },
    // Add more slides as needed
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [activeSlide, slides.length]);
  return (
    <>
      <Breadcrumb
        pageName="Our Newsletters"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-6">Newsletter</h1>
        <div className="flex -mx-4">
          {/* Main Content */}
          <div className="flex-1 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Today's Highlights
              </h2>
              {/* Sliding Hero */}
              <div className="relative overflow-hidden rounded-lg mb-6 h-56">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 w-full transition-opacity duration-500 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                    <p className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2">
                      {slide.caption}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                Welcome to our daily newsletter. Here you'll find the most
                important news and updates for today.
                {/* Add your newsletter content here */}
              </p>
            </div>
          </div>

          {/* Sidebar for More News */}
          <div className="w-1/4 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">More News</h3>
              <ul className="space-y-3">
                <li className="cursor-pointer text-blue-600 hover:text-blue-800">
                  News Item 1
                </li>
                <li className="cursor-pointer text-blue-600 hover:text-blue-800">
                  News Item 2
                </li>
                <li className="cursor-pointer text-blue-600 hover:text-blue-800">
                  News Item 3
                </li>
                {/* Add more news items here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
