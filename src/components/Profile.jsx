import { useState } from 'react';
import { Camera, Palette, Mountain, Edit2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './Card';

const Profile = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const skills = [
        { name: "Portrait Photography", icon: Camera },
        { name: "Landscape", icon: Mountain },
        { name: "Digital Editing", icon: Edit2 },
        { name: "Color Grading", icon: Palette },
        { name: "Video Editing", icon: Star },
    ];

    // Enhanced portfolio images with week information
    const portfolioImages = [
        { src: "/images/h1.png", week: "68", alt: "Portfolio highlight 1" },
        { src: "/images/h2.png", week: "126", alt: "Portfolio highlight 2" },
        { src: "/images/h3.png", week: "99", alt: "Portfolio highlight 3" },
        { src: "/images/h4.png", week: "74", alt: "Portfolio highlight 4" },
        { src: "/images/h5.png", week: "45", alt: "Portfolio highlight 5" }
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

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: { delay: 0.8 + (i * 0.1), duration: 0.4 }
        })
    };

    const portfolioVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: { delay: 1.2 + (i * 0.1), duration: 0.5 }
        })
    };

    return (
        <motion.div
            className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="w-full max-w-3xl mx-auto">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-8 md:mb-12">
                    {/* Profile Picture */}
                    <motion.div
                        className="flex-shrink-0"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-700"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="/images/profile.png"
                                alt="Profile picture"
                                width={192}
                                height={192}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Profile Info */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Username and Actions */}
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8"
                            variants={itemVariants}
                        >
                            <h1 className="text-2xl sm:text-3xl font-light">maenibini</h1>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                <motion.button
                                    className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-5 sm:px-8 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Follow me
                                </motion.button>
                                <motion.button
                                    className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white px-5 sm:px-8 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Hire me
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Stats - Changed to professional metrics */}
                        <motion.div
                            className="flex justify-center md:justify-start gap-6 sm:gap-12 mb-5 md:mb-6"
                            variants={itemVariants}
                        >
                            <div className="text-center">
                                <span className="text-lg sm:text-xl font-semibold">15+</span>
                                <span className="text-gray-400 ml-1 sm:ml-2 text-base sm:text-lg">projects</span>
                            </div>
                            <div className="text-center">
                                <span className="text-lg sm:text-xl font-semibold">7</span>
                                <span className="text-gray-400 ml-1 sm:ml-2 text-base sm:text-lg">years exp.</span>
                            </div>
                            <div className="text-center">
                                <span className="text-lg sm:text-xl font-semibold">100+</span>
                                <span className="text-gray-400 ml-1 sm:ml-2 text-base sm:text-lg">clients</span>
                            </div>
                        </motion.div>

                        {/* Bio */}
                        <motion.div
                            className="space-y-1 sm:space-y-2"
                            variants={itemVariants}
                        >
                            <div className="font-semibold text-lg sm:text-xl">Mae Shara Mohammad</div>
                            <div className="text-gray-300 font-bold text-md sm:text-lg">Photographer</div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <span className="text-gray-300 text-sm sm:text-md">🧿 Memory Hoarder</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-5 sm:mt-6"
                            variants={itemVariants}
                        >
                            <h3 className="text-md sm:text-lg font-medium mb-2 sm:mb-3 text-gray-300">Skills</h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-1 sm:gap-2 bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium"
                                        custom={index}
                                        variants={skillVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "#1f2937"
                                        }}
                                    >
                                        <skill.icon size={14} className="text-blue-400" />
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Portfolio Highlights - now clickable to open Card */}
                <div className="flex justify-center gap-3 sm:gap-5 md:gap-8 overflow-x-auto pb-4 sm:pb-6 mt-6 sm:mt-8">
                    {portfolioImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0"
                            custom={index}
                            variants={portfolioVariants}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 }
                            }}
                            onClick={() => {
                                setSelectedImageIndex(index);
                                setIsCardOpen(true);
                            }}
                        >
                            <div className="cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-30 md:h-30 rounded-full overflow-hidden border-2 border-gray-700">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Card component for image modal */}
            <Card
                isOpen={isCardOpen}
                onClose={() => setIsCardOpen(false)}
                images={portfolioImages}
                initialImageIndex={selectedImageIndex}
            />
        </motion.div>
    )
}

export default Profile;