// filepath: c:\Users\user\Documents\BarkaDevs\client\maevisual\maevisual-frontend\maevisual\src\components\Profile.jsx
import { useState, useRef } from 'react';
import { Calendar, Star, Users, Gift, GraduationCap, Heart, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Card from './Card';

const AboutMe = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const interests = [
        { name: "Weddings", icon: Heart },
        { name: "Birthdays", icon: Gift },
        { name: "Portraits", icon: Users },
        { name: "Prenup", icon: Users },
        { name: "Debut", icon: Gift },
        { name: "Graduations", icon: GraduationCap },
        { name: "Memorials", icon: Star },
        { name: "Events", icon: Calendar },
    ];

    const galleryImages = [
        { src: "/images/h1.png", alt: "Wedding photography" },
        { src: "/images/h2.png", alt: "Portrait photography" },
        { src: "/images/h3.png", alt: "Event photography" },
        { src: "/images/h4.png", alt: "Birthday photography" },
        { src: "/images/h5.png", alt: "Graduation photography" }
    ];

    const socialLinks = [
        { name: "Instagram", icon: FaInstagram, username: "@maenibini", url: "https://instagram.com/maenibini" },
        { name: "TikTok", icon: FaTiktok, username: "@maenibini", url: "https://tiktok.com/@maenibini" },
        { name: "Facebook", icon: FaFacebookF, username: "MaeVisual", url: "https://web.facebook.com/maeniniyot" },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const interestVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: { delay: 0.8 + (i * 0.1), duration: 0.4 }
        })
    };

    const galleryVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: { delay: 1.2 + (i * 0.1), duration: 0.5 }
        })
    };

    return (
        <>
            <motion.div
                className="w-full text-white"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                <div className="w-full max-w-3xl mx-auto mt-7">
                    <h1 className="secondary text-4xl md:text-5xl lg:text-6xl  ml-3 text-secondary">
                        About Me
                    </h1>
                    {/* Profile Header Section - Instagram Style */}
                    <div className="flex flex-col p-3 sm:p-4 md:p-6">{/* Profile and Bio section - responsive for all screen sizes */}
                        <div className="flex flex-row items-start">
                            <motion.div
                                className="mb-4 mr-3 sm:mr-4 flex-shrink-0"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-700 mx-0"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <img
                                        src="/images/profile.png"
                                        alt="Profile picture"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>

                            <div className="flex flex-col flex-grow">
                                {/* Username and Action Buttons */}                                <div className="flex flex-row items-center justify-between mb-2 sm:mb-3">
                                    <h1 className="text-lg sm:text-xl font-medium text-left">maenibini</h1>
                                    <div className="flex-shrink-0 hidden sm:flex gap-2">
                                        <button className="bg-gray-800 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-md text-xs md:text-sm font-medium hover:bg-gray-700 transition-colors">Book A Session</button>
                                        <button className="bg-gray-800 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-md text-xs md:text-sm font-medium hover:bg-gray-700 transition-colors">Contact Me</button>
                                    </div>
                                </div>                                {/* Mobile Action Buttons */}
                                <div className="flex sm:hidden w-full gap-2 mb-2">
                                    <button className="flex-1 bg-gray-800 text-white px-2 py-1.5 rounded-md text-[11px] xs:text-xs font-medium hover:bg-gray-700 transition-colors">Book A Session</button>
                                    <button className="flex-1 bg-gray-800 text-white px-2 py-1.5 rounded-md text-[11px] xs:text-xs font-medium hover:bg-gray-700 transition-colors">Contact Me</button>
                                </div>{/* Social links below profile pic on mobile */}
                                <div className="md:hidden flex flex-wrap gap-2 mb-3 rounded-lg">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 hover:opacity-80 transition-opacity px-2 py-1 rounded-md bg-gray-800/50"
                                        >
                                            <social.icon size={16} className="text-white" />
                                            <span className="text-xs text-gray-200">{social.username}</span>
                                        </a>
                                    ))}
                                </div>                                {/* Bio Section for Mobile */}
                                <div className="md:hidden text-sm">
                                    <div className="font-medium">Mae</div>
                                    <div className="text-gray-400">Freelance Photographer</div>
                                    <div className="flex items-center text-gray-400 text-xs mt-1">
                                        <MapPin size={12} className="mr-1" />
                                        <span>South Cotabato, PH</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs mt-1">
                                        <Clock size={12} className="mr-1" />
                                        <span>8+ years experience</span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <span>🧿 Memory Hoarder</span>
                                    </div>
                                    <div className="mt-1 text-xs">I TAKE PHOTOS AS A RETURN TICKET TO A MOMENT</div>
                                </div>



                                {/* Social links for desktop view */}                                <div className="hidden md:flex flex-wrap justify-start gap-4 lg:gap-8 py-3 lg:py-4 border-b border-gray-800">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col items-start hover:opacity-80 transition-opacity"
                                        >
                                            <div className="flex items-center gap-1">
                                                <social.icon size={18} className="text-white" />
                                                <span className="font-medium text-sm">{social.name}</span>
                                            </div>
                                            <span className="text-xs text-gray-400">{social.username}</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Bio Section for Desktop */}
                                <div className="hidden md:block mt-4 pt-0 text-sm">
                                    <div className="font-medium">Mae</div>
                                    <div className="text-gray-400">Freelance Photographer</div>
                                    <div className="flex items-center text-gray-400 text-xs mt-2">
                                        <MapPin size={14} className="mr-1" />
                                        <span>South Cotabato, PH</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs mt-1">
                                        <Clock size={14} className="mr-1" />
                                        <span>8+ years experience</span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <span>🧿 Memory Hoarder</span>
                                    </div>
                                    <div className="mt-2 text-xs">I TAKE PHOTOS AS A RETURN TICKET TO A MOMENT</div>
                                </div>
                            </div>
                        </div>
                    </div>                    {/* Gallery/Story Highlights Section */}
                    <div className="border-t border-gray-800">
                        <div
                            ref={scrollContainerRef}
                            className="w-full flex items-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto scrollbar-hide py-4 sm:py-6 px-3 sm:px-6"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'auto' }}
                        >
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0 flex flex-col items-center"
                                    custom={index}
                                    variants={galleryVariants}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => {
                                        setSelectedImageIndex(index);
                                        setIsCardOpen(true);
                                    }}
                                >                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-gray-700">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Photography Specialties Grid */}
                    <div className="border-t border-gray-800 p-3 sm:p-4 md:p-5">
                        <h3 className="py-2 text-sm font-medium">My Specialties</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-1 sm:gap-2">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    className="aspect-square bg-gray-900 flex items-center justify-center"
                                    custom={index}
                                    variants={interestVariants}
                                    whileHover={{ opacity: 0.8 }}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <interest.icon size={16} className="text-blue-400 mb-1 sm:size-20 md:size-5" />
                                        <span className="text-[10px] sm:text-xs">{interest.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Card component for image modal - rendered outside main component */}
            {isCardOpen && (
                <Card
                    isOpen={isCardOpen}
                    onClose={() => setIsCardOpen(false)}
                    images={galleryImages}
                    initialImageIndex={selectedImageIndex}
                />
            )}
        </>
    );
};

export default AboutMe;
