import { useState } from "react";
import cameraLens from "../assets/images/camera.png"; // Ensure this path matches your project structure

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;
  const images = [cameraLens, cameraLens, cameraLens]; // Replace with actual images for each slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <div className="relative w-full h-screen">
      {/* Image Container with Navigation Buttons */}
      <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[120%] max-w-5xl">
        <img
          src={images[currentSlide - 1] || "/placeholder.svg"}
          alt={`Slide ${currentSlide}`}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder.svg?height=600&width=800";
          }}
        />
        {/* Navigation Buttons Inside Image Container */}
        <div className="absolute top-1/2  left-0 right-0 flex justify-between transform -translate-y-[-2em]">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#c4bfb6] bg-opacity-70 flex items-center justify-center hover:bg-opacity-90 transition-all ml-[-4em]"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#c4bfb6] bg-opacity-70 flex items-center justify-center hover:bg-opacity-90 transition-all mr-[-5em]"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Indicator - Unchanged */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="font-gallient text-white text-lg tracking-wider font-semibold">
          {currentSlide} <span className="text-gray-400">/ {totalSlides}</span>
        </div>
        <div className="flex space-x-2 mt-2">
          {[...Array(totalSlides)].map((_, i) => (
            <div
              key={i}
              className={`h-[2px] w-20 rounded-full transition-all ${i + 1 === currentSlide ? "bg-white" : "bg-gray-700"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliders;