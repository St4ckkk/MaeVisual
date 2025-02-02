import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-transparent z-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-serif">
                    MaeVisual
                </Link>

                <div className="flex gap-8">
                    <Link to="/" className="text-white hover:text-gray-300">HOME</Link>
                    <Link to="/services" className="text-white hover:text-gray-300">SERVICES</Link>
                    <Link to="/studios" className="text-white hover:text-gray-300">STUDIOS</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">CONTACT</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;