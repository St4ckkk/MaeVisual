import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SocialSidebar from "../components/SocialSidebar"
import backgroundImage from "../assets/images/bg-mae.png" // Adjust the path as necessary

const Home = () => {
    return (
        <div
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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