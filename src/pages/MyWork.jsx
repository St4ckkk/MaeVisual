import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";

const MyWork = () => {


    return (
        <div
            className="max-w-full min-h-screen overflow-auto bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('/images/bg-mae.jpg')",
            }}
        >
            <Navbar />
            <Work />

            <Footer />
        </div>
    );
}

export default MyWork;
