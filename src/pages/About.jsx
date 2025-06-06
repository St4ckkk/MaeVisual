import Navbar from "../components/Navbar"
import Profile from "../components/Profile"

const About = () => {
    return (
        <div
            className="w-full min-h-screen overflow-auto bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('/images/bg-mae.png')"
            }}
        >
            <Navbar />
            <div className="container mx-auto flex justify-center items-center">
                <Profile />
            </div>
        </div>
    )
}

export default About