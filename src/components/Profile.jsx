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
                <div className="w-full max-w-3xl mx-auto">
                    {/* Profile Header Section - Instagram Style */}
                    <div className="flex flex-col p-6">
                        {/* Profile and Bio section for mobile */}
                        <div className="flex flex-row items-start">
                            <motion.div
                                className="mb-4 mr-4 flex-shrink-0"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-700 mx-0"
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
                                {/* Username and Action Buttons */}
                                <div className="flex flex-row items-center justify-between mb-3">
                                    <h1 className="text-xl font-medium text-left">maenibini</h1>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="bg-gray-800 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-md text-xs md:text-sm font-medium">Book A Session</button>
                                        <button className="bg-gray-800 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-md text-xs md:text-sm font-medium">Contact Me</button>
                                    </div>
                                </div>
                                {/* Social links below profile pic on mobile */}
                                <div className="md:hidden flex gap-2 mb-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                                        >
                                            <social.icon size={16} className="text-white" />
                                            <span className="text-xs text-gray-400">{social.username}</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Bio Section for Mobile */}
                                <div className="md:hidden text-sm">
                                    <div className="font-medium">Mae</div>
                                    <div className="text-gray-400">Freelance Photographer</div>
                                    <div className="flex items-center mt-1">
                                        <span>🧿 Memory Hoarder</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs mt-1">
                                        <MapPin size={14} className="mr-1" />
                                        <span>South Cotabato, PH</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs mt-1">
                                        <Clock size={14} className="mr-1" />
                                        <span>8+ years experience</span>
                                    </div>
                                    <div className="mt-1 text-xs">I TAKE PHOTOS AS A RETURN TICKET TO A MOMENT</div>
                                </div>



                                {/* Social links for desktop view */}
                                <div className="hidden md:flex justify-start gap-8 py-4 border-b border-gray-800">
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
                                    <div className="flex items-center mt-1">
                                        <span>🧿 Memory Hoarder</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs mt-2">
                                        <MapPin size={14} className="mr-1" />
                                        <span>South Cotabato, PH</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs mt-1">
                                        <Clock size={14} className="mr-1" />
                                        <span>8+ years experience</span>
                                    </div>
                                    <div className="mt-2 text-xs">I TAKE PHOTOS AS A RETURN TICKET TO A MOMENT</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery/Story Highlights Section */}
                    <div className="border-t border-gray-800">
                        <div
                            ref={scrollContainerRef}
                            className="w-full flex items-center gap-5 overflow-x-auto scrollbar-hide py-6 px-6"
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
                                >
                                    <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-700">
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
                    <div className="border-t border-gray-800 p-5">
                        <h3 className="py-2 text-sm font-medium">My Specialties</h3>
                        <div className="grid grid-cols-3 gap-1">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    className="aspect-square bg-gray-900 flex items-center justify-center"
                                    custom={index}
                                    variants={interestVariants}
                                    whileHover={{ opacity: 0.8 }}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <interest.icon size={24} className="text-blue-400 mb-1" />
                                        <span className="text-xs">{interest.name}</span>
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
