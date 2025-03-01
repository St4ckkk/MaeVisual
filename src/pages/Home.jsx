"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SocialSidebar from "../components/SocialSidebar"


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(1)
    const totalSlides = 3

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1))
    }

    return (
        <div className="relative min-h-screen bg-dark-green overflow-hidden">
            <Navbar />

            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Hero />
                </div>


            </main>

            <SocialSidebar />

            {/* Slider controls */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-8">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-[#33433c] flex items-center justify-center hover:bg-[#425a50] transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-[#33433c] flex items-center justify-center hover:bg-[#425a50] transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="flex flex-col items-center">
                    <div className="text-white mb-2">
                        {currentSlide} / {totalSlides}
                    </div>
                    <div className="flex space-x-2">
                        {[...Array(totalSlides)].map((_, i) => (
                            <div key={i} className={`h-1 w-16 ${i + 1 === currentSlide ? "bg-white" : "bg-gray-600"}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

