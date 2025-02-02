import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Import images
import mask1 from '../assets/images/mask-1.png';
import mask2 from '../assets/images/mask-2.png';
import mask3 from '../assets/images/mask-3.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;

    const nextSlide = () => {
        setCurrentSlide(current => current === totalSlides ? 1 : current + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(current => current === 1 ? totalSlides : current - 1);
    };

    return (
        <div className="relative min-h-screen bg-[#1a2e1a] overflow-hidden">
            {/* Pattern Images */}
            <div className="absolute top-0 right-0 w-[45%] h-full">
                <div className="relative w-full h-full">
                    <img
                        src={mask1}
                        alt=""
                        className="absolute top-0 right-0 w-full max-w-[600px] opacity-10"
                    />
                    <img
                        src={mask2}
                        alt=""
                        className="absolute top-0 right-0 w-full max-w-[600px] opacity-10"
                    />
                    <img
                        src={mask3}
                        alt=""
                        className="absolute top-0 right-0 w-full max-w-[600px] opacity-10"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 pt-16">
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="text-white text-xl md:text-2xl mb-4">CREATING MORE THAN JUST</h2>
                    <h1 className="text-white text-5xl md:text-7xl font-serif mb-8 tracking-wider">memories</h1>

                    <div className="flex justify-center gap-4 mb-16">
                        <button className="bg-[#f4ede4] text-black px-8 py-2.5 rounded-full hover:bg-[#e6dfd6] transition-colors text-sm">
                            BOOK A SESSION
                        </button>
                        <button className="border border-[#f4ede4] text-white px-8 py-2.5 rounded-full hover:bg-[#f4ede4] hover:text-black transition-colors text-sm flex items-center gap-2">
                            EXPLORE
                            <span className="text-lg">→</span>
                        </button>
                    </div>

                    {/* Camera Lens Container */}
                    <div className="relative max-w-3xl mx-auto px-12">
                        {/* <img 
              src={cameraLens} 
              alt="Camera Lens" 
              className="w-full"
            />
             */}
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Slide Indicators */}
                        <div className="flex justify-center gap-3 mt-6">
                            {[1, 2, 3].map((num) => (
                                <div
                                    key={num}
                                    className={`h-0.5 w-12 rounded ${currentSlide === num ? 'bg-white' : 'bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Slide Counter */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white opacity-50">
                            {currentSlide}/3
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Hero;