import { useState, useRef, useEffect } from 'react';
import { Camera, Image, Calendar, Instagram, Star, Award, MessageSquare, Aperture, Users, Gift, GraduationCap, Heart } from 'lucide-react';
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

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 20;

                if (isAtEnd) {
                    container.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    container.scrollBy({
                        left: 60,
                        behavior: 'smooth'
                    });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
        <motion.div
            className="w-full text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="w-full max-w-3xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <h1 className="text-xl font-normal">About Me</h1>
                </div>

                {/* Profile Header */}
                <div className="flex px-4 py-5">
                    {/* Profile Picture */}
                    <motion.div
                        className="flex-shrink-0 mr-8"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gray-700"
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

                    {/* Personal Details */}
                    <motion.div
                        className="flex items-center justify-around flex-1"
                        variants={itemVariants}
                    >
                        <div className="text-center">
                            <div className="text-lg font-semibold">Freelance Photographer</div>
                            <div className="text-xs text-gray-400">profession</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold">8+</div>
                            <div className="text-xs text-gray-400">years exp.</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold">South Cotabato, Philippines</div>
                            <div className="text-xs text-gray-400">location</div>
                        </div>
                    </motion.div>
                </div>

                {/* Bio Section */}
                <div className="px-4 pb-3">
                    <motion.div
                        className="mb-3"
                        variants={itemVariants}
                    >
                        <div className="font-medium">Mae Shara Mohammad</div>
                        <div className="text-gray-400 text-sm">Freelance Photographer</div>
                        <div className="text-sm mt-2">I TAKE PHOTOS AS A RETURN TICKET TO A MOMENT</div>
                    </motion.div>
                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-4">
                        <motion.button
                            className="flex-1 bg-gray-800 text-white py-2 rounded-md text-sm font-semibold"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            variants={itemVariants}
                        >
                            <div className="flex items-center justify-center">
                                <Aperture size={16} className="mr-2" />
                                My Work
                            </div>
                        </motion.button>
                        <motion.button
                            className="flex-1 bg-gray-800 text-white py-2 rounded-md text-sm font-semibold"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            variants={itemVariants}
                        >
                            <div className="flex items-center justify-center">
                                <MessageSquare size={16} className="mr-2" />
                                Contact Me
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="border-t border-gray-800">
                    <div
                        ref={scrollContainerRef}
                        className="w-full flex items-center gap-4 overflow-x-auto scrollbar-hide py-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-700">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-xs mt-1 text-gray-400">{image.title}</span>
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


                {/* Styles */}
                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </div>

            {/* Card component for image modal */}
            <Card
                isOpen={isCardOpen}
                onClose={() => setIsCardOpen(false)}
                images={galleryImages}
                initialImageIndex={selectedImageIndex}
            />
        </motion.div>
    )
}

export default AboutMe;