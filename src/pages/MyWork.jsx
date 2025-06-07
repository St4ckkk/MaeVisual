import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";

const MyWork = () => {


    return (
        <div
            className="w-full min-h-screen overflow-auto bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/bg-mae.png')",
            }}
        >
            <Navbar />
            <Work />
            <Footer />
        </div>
    );
}

export default MyWork;
