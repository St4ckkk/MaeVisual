import cameraLens from "../assets/images/camera.png"; // Replace with the correct path to the camera image
import '../app/globals.css'; // Ensure you import the CSS file
import Buttons from "./Buttons";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-start mt-5 h-screen text-center text-white overflow-hidden">
            <div className="z-10">
                <h3 className="text-1xl md:text-2xl font-semibold tracking-wide m-0 mb-[-10px]">
                    CREATING MORE THAN JUST
                </h3>
                <h1 className="font-gallient text-7xl md:text-[8rem] italic font-light tracking-wide m-0">
                    memories
                </h1>
                <Buttons />
            </div>

            {/* Adjusted camera position to prevent overlap */}
            <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] max-w-4xl">
                <img
                    src={cameraLens || "/placeholder.svg"}
                    alt="Camera lens"
                    className="w-full h-auto"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder.svg?height=500&width=700";
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;