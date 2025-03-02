"use client"

import { useState, useEffect } from "react"
import Navbar from "../Navbar"
import Hero from "../Hero"
import SocialSidebar from "../SocialSidebar"
import backgroundImage from "../../assets/images/bg-mae.png"

const Home = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        // Disable scrolling when component mounts
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener("resize", handleResize)
            // Re-enable scrolling when component unmounts
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div
            className="relative h-screen max-h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: isMobile ? "center center" : "center",
                backgroundAttachment: "fixed",
            }}
        >
            <Navbar />

            <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Hero />
                </div>
            </main>

            <SocialSidebar />
        </div>
    )
}

export default Home