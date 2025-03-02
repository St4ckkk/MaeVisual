import { useState } from "react";
import camera1 from "../assets/images/camera.png";
import camera2 from "../assets/images/camera2.png";
import camera3 from "../assets/images/camera3.png";
import "../app/Sliders.css"; // Import the CSS file

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;
  const images = [camera1, camera2, camera3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <div className="relative w-full h-screen">
      {/* Image Container */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-[100%] max-w-5xl ${currentSlide === 1
        ? "camera1-container"
        : "top-[52%] -translate-y-1/3"
        }`}>
        <img
          src={images[currentSlide - 1] || "/placeholder.svg"}
          alt={`Slide ${currentSlide}`}
          className={`w-full h-full object-cover ${currentSlide === 1 ? "camera1-image" : ""
            } ${currentSlide === 2 ? "camera2-size" : ""} ${currentSlide === 3 ? "camera3-size" : ""
            }`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder.svg?height=600&width=800";
          }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-2/2 md:mt-[7em] mt-[4em]">
        <button
          onClick={prevSlide}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center hover:bg-opacity-90 transition-all md:ml-[-6em] ml-[-2em]"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
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
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center hover:bg-opacity-90 transition-all md:mr-[-8em] mr-[-2em]"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

      {/* Progress Indicator */}
      <div className="absolute md:bottom-3 bottom-[8em] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="font-gallient text-white tracking-wider font-semibold">
          <span className="text-3xl md:text-4xl font-normal">{currentSlide}</span>
          <span className="text-gray-400"> / {totalSlides}</span>
        </div>
        <div className="flex space-x-2 mt-2">
          {[...Array(totalSlides)].map((_, i) => (
            <div
              key={i}
              className={`transition-all transform ${i + 1 === currentSlide
                ? "h-[8px] md:h-[10px] w-16 md:w-24 bg-white text-2xl scale-y-100"
                : "h-[6px] md:h-[8px] w-12 md:w-20 bg-gray-700 text-sm scale-y-50"
                }`}
              style={{ transformOrigin: 'bottom' }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliders;