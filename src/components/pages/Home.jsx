"use client"

import { useEffect } from "react"
import Navbar from "../Navbar"
import Hero from "../Hero"
import SocialSidebar from "../SocialSidebar"
import backgroundImage from "../../../public/images/bg-mae.png"

const Home = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div
            className="relative h-screen max-h-screen overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Navbar />

            <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <Hero />
                </div>
            </main>

            <SocialSidebar />
        </div>
    )
}

export default Home