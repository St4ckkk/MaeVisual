"use client"

import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center py-6 px-8 md:px-16 bg-transparent text-white relative z-10">
            {/* Logo */}
            <div className="flex items-center">
                <span className="font-gallient text-2xl font-light">MaeVisual</span>
            </div>

            {/* Desktop Menu Items */}
            <ul className="hidden md:flex space-x-10">
                <li>
                    <a href="#" className="hover:text-[#e9d5c5] transition-colors font-medium">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#e9d5c5] transition-colors font-medium">
                        SERVICES
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#e9d5c5] transition-colors font-medium">
                        GALLERY
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#e9d5c5] transition-colors font-medium">
                        CONTACT
                    </a>
                </li>
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

            {/* Hamburger Menu */}
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
                        <li>
                            <a href="#" className="block py-2 hover:text-[#e9d5c5]">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 hover:text-[#e9d5c5]">
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 hover:text-[#e9d5c5]">
                                STUDIOS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 hover:text-[#e9d5c5]">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar

