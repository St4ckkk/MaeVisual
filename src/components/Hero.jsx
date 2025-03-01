import cameraLens from "../assets/images/camera.png"; // Replace with the correct path to the camera image
import '../app/globals.css'; // Ensure you import the CSS file
import Buttons from "./Buttons";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center text-white mt-10">
            <h3 className="text-2xl md:text-2xl font-semibold tracking-wide m-0 mb-[-10px]">
                CREATING MORE THAN JUST
            </h3>
            <h1 className="font-gallient text-8xl md:text-[8rem] italic font-light tracking-wide m-0">
                memories
            </h1>
            <Buttons />
            <div className="max-w-2xl mx-auto "> {/* Adjusted margin to move only the camera image closer */}
                <img
                    src={cameraLens || "/placeholder.svg"}
                    alt="Camera lens"
                    className="w-full h-auto"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder.svg?height=400&width=600";
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;