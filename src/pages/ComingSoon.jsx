import { useEffect } from "react"
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SocialSidebar from "../components/SocialSidebar"
import backgroundImage from "../../public/images/bg-mae.png"

const ComingSoon = ({ pageName }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div
            className="h-screen max-h-screen overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen text-center text-white">
                <div className="z-10 p-8 bg-primary bg-opacity-50 backdrop-blur-sm rounded-lg">
                    <h1 className="font-secondary text-6xl md:text-7xl italic font-light tracking-wide mb-4">
                        {pageName}
                    </h1>
                    <p className="text-xl mb-6">Coming Soon</p>
                    <p className="text-white/80 mb-8">We're working on something amazing for you!</p>
                    <Link
                        to="/"
                        className="px-6 py-2 bg-secondary text-primary rounded-full hover:bg-white transition-colors font-medium"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
            <SocialSidebar />
            <Footer />
        </div>
    )
}

export default ComingSoon
