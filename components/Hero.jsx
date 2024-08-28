"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "/banners/header-banner-01.jpg", title: "Slide 1" },
    { image: "/banners/header-banner-02.jpg", title: "Slide 2" },
    { image: "/banners/header-banner-03.jpg", title: "Slide 3" },
    { image: "/banners/header-banner-04.jpg", title: "Slide 4" },
    { image: "/banners/header-banner-05.jpg", title: "Slide 5" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="main-container flex justify-center">
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={` w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"             
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;