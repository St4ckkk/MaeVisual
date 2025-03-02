// Replace with the correct path to the camera image
import '../app/globals.css'; // Ensure you import the CSS file
import Buttons from "./Buttons";
import Sliders from "./Sliders";


const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-start pt-2 md:pt-2 pt-10 min-h-screen text-center text-white overflow-visible">
            <div className="z-10 mb-16 mt-8 md:mt-0">
                <h3 className="text-1xl md:text-2xl font-semibold tracking-wide m-0 mb-[-10px]">
                    CREATING MORE THAN JUST
                </h3>
                <h1 className="font-gallient text-7xl md:text-[8rem] italic font-light tracking-wide m-0">
                    memories
                </h1>
                <Buttons />
            </div>



            {/* Ensure Sliders is positioned correctly */}
            <div className="absolute top-[-150px] md:top-[-150px] top-[-100px] left-0 w-full h-full flex items-center justify-center">
                <Sliders />
            </div>
        </section>
    );
};

export default Hero;