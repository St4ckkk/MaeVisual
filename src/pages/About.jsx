import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
import Footer from "../components/Footer"
const About = () => {
    return (
        <div
            className="w-full min-h-screen overflow-auto bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/bg-mae.png')"
            }}
        >
            <Navbar />
            <div className="container mx-auto flex justify-center items-center">
                <Profile />
            </div>
            <Footer />
        </div>
    )
}

export default About