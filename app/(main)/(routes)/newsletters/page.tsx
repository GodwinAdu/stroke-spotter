"use client";

import Breadcrumb from "@/components/common/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Newsletter = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { src: "/overview/membership.jpg", caption: "Caption for Image 1" },
    { src: "/overview/our-member.jpg", caption: "Caption for Image 2" },
    { src: "/overview/join-us.JPG", caption: "Caption for Image 3" },
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
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="text-2xl text-gray-500 mb-4">
            News Letters will be pubish from January 2024
          </h1>
          <p className="text-gray-400 pb-4">Check back later for updates.</p>
          <Button>Back Home</Button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
