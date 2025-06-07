import { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState("HOME")
    const location = useLocation()

    const handleItemClick = (item) => {
        setActiveItem(item)
        setIsMenuOpen(false)
    }

    // Update active item based on current route
    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setActiveItem('HOME');
        else if (path === '/about') setActiveItem('ABOUT');
        else if (path === '/my-work') setActiveItem('MY WORK'); // Updated path for My Work
        else if (path === '/contact') setActiveItem('CONTACT');
    }, [location])

    return (
        <nav className="flex justify-between md:justify-around items-center px-4 sm:px-6 relative z-20 mt-2 bg-transparent text-white">
            {/* This navbar will scroll with the page because it has no fixed positioning */}
            <div className="flex items-center">
                <img
                    src="/images/logo2.png"
                    alt="MaeVisual Logo"
                    className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32"
                />
            </div>
            {/* Desktop Menu Items */}
            <ul className="hidden md:flex space-x-4 lg:space-x-8 mr-[6em]">
                {[
                    { name: "HOME", path: "/" },
                    { name: "ABOUT", path: "/about" },
                    { name: "MY WORK", path: "/my-work" }, // Changed from SERVICES to MY WORK
                    { name: "CONTACT", path: "/contact" }
                ].map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.path}
                            className={`transition-colors font-medium text-sm ${activeItem === item.name ? "text-[#DFB388]" : "hover:text-[#e9d5c5]"}`}
                            onClick={() => handleItemClick(item.name)}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button className="focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Hamburger Menu (Desktop) */}
            <div className="hidden md:block">
                <button className="focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Conditional Rendering) */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-primary p-4 md:hidden">
                    <ul className="flex flex-col space-y-4">
                        {[
                            { name: "HOME", path: "/" },
                            { name: "ABOUT", path: "/about" },
                            { name: "MY WORK", path: "/my-work" }, // Changed from SERVICES to MY WORK
                            { name: "CONTACT", path: "/contact" }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`block py-2 text-sm ${activeItem === item.name ? "text-secondary" : "hover:text-secondary"}`}
                                    onClick={() => handleItemClick(item.name)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar