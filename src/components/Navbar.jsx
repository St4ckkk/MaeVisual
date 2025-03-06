

import { useState } from "react"
import logo from "../../public/images/logo2.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState("HOME")

    const handleItemClick = (item) => {
        setActiveItem(item)
        setIsMenuOpen(false)
    }

    return (
        <nav className="flex justify-between md:justify-around items-center  px-4 sm:px-6 md:px-10 bg-transparent text-white relative z-0 mb-10">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src={logo || "/placeholder.svg"}
                    alt="MaeVisual Logo"
                    className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32"
                />
            </div>
            {/* Desktop Menu Items */}
            <ul className="hidden md:flex space-x-4 lg:space-x-8 mr-[6em]">
                {["HOME", "SERVICES", "GALLERY", "CONTACT"].map((item) => (
                    <li key={item}>
                        <a
                            href="#"
                            className={`transition-colors font-medium text-sm ${activeItem === item ? "text-[#DFB388]" : "hover:text-[#e9d5c5]"}`}
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </a>
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
                <div className="absolute top-full left-0 right-0 bg-dark-green p-4 md:hidden">
                    <ul className="flex flex-col space-y-4">
                        {["HOME", "SERVICES", "GALLERY", "CONTACT"].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className={`block py-2 text-sm ${activeItem === item ? "text-[#DFB388]" : "hover:text-[#e9d5c5]"}`}
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar

