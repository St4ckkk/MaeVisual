"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SocialSidebar from "../components/SocialSidebar"
import backgroundImage from "../assets/images/bg-mae.png"

const Home = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div
            className="relative min-h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: isMobile ? "center center" : "center",
                backgroundAttachment: "fixed",
            }}
        >
            <Navbar />

            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Hero />
                </div>
            </main>

            <SocialSidebar />
        </div>
    )
}

export default Home

