import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
import Footer from "../components/Footer"
import SocialSidebar from "../components/SocialSidebar"
const About = () => {
    return (
        <div
            className="max-w-full min-h-screen overflow-auto bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: "url('/images/bg-mae.jpg')",
            }}
        >
            <Navbar />
            <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
                <Profile />
            </div>
            <Footer />
        </div>
    )
}

export default About