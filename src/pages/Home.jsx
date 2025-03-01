
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SocialSidebar from "../components/SocialSidebar"


const Home = () => {


    return (
        <div className="relative min-h-screen bg-dark-green overflow-hidden">
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

