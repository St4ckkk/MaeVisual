import { useState, useRef, useEffect } from 'react';
import { Camera, Palette, Mountain, Edit2, Star, MoreHorizontal, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './Card';

const Profile = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const skills = [
        { name: "Portrait Photography", icon: Camera },
        { name: "Landscape", icon: Mountain },
        { name: "Digital Editing", icon: Edit2 },
        { name: "Color Grading", icon: Palette },
        { name: "Video Editing", icon: Star },
    ];

    const portfolioImages = [
        { src: "/images/h1.png", week: "68", alt: "Portfolio highlight 1" },
        { src: "/images/h2.png", week: "126", alt: "Portfolio highlight 2" },
        { src: "/images/h3.png", week: "99", alt: "Portfolio highlight 3" },
        { src: "/images/h4.png", week: "74", alt: "Portfolio highlight 4" },
        { src: "/images/h5.png", week: "45", alt: "Portfolio highlight 5" }
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
            className="w-full text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="w-full max-w-3xl mx-auto">
                {/* Instagram-style Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <h1 className="text-xl font-normal">maenibini</h1>
                </div>

                {/* Profile Header - Instagram Style */}
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

                    {/* Stats */}
                    <motion.div
                        className="flex items-center justify-around flex-1"
                        variants={itemVariants}
                    >
                        <div className="text-center">
                            <div className="text-lg font-semibold">15+</div>
                            <div className="text-xs text-gray-400">projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold">7</div>
                            <div className="text-xs text-gray-400">years exp.</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold">100+</div>
                            <div className="text-xs text-gray-400">clients</div>
                        </div>
                    </motion.div>
                </div>

                {/* Bio Section */}
                <div className="px-4 pb-3">
                    <motion.div
                        className="mb-3"
                        variants={itemVariants}
                    >
                        <div className="font-medium">Mae</div>
                        <div className="text-gray-400 text-sm">Photographer</div>
                        <div className="text-sm mt-1">🧿 Memory Hoarder</div>
                    </motion.div>
                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-4">
                        <motion.button
                            className="flex-1 bg-gray-800 text-white py-2 rounded-md text-sm font-semibold"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            variants={itemVariants}
                        >
                            Follow Me
                        </motion.button>
                        <motion.button
                            className="flex-1 bg-gray-800 text-white py-2 rounded-md text-sm font-semibold"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            variants={itemVariants}
                        >
                            Hire Me
                        </motion.button>
                    </div>
                </div>

                {/* Portfolio Highlights - Story Circles */}
                <div className="border-t border-gray-800">
                    <div
                        ref={scrollContainerRef}
                        className="w-full flex items-center gap-4 overflow-x-auto scrollbar-hide py-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {portfolioImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 flex flex-col items-center"
                                custom={index}
                                variants={portfolioVariants}
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
                                <span className="text-xs mt-1 text-gray-400">Story {index + 1}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Grid - Instagram Post Style */}
                <div className="border-t border-gray-800 pt-2">
                    <h3>My Skills</h3>
                    <div className="grid grid-cols-3 gap-1">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="aspect-square bg-gray-900 flex items-center justify-center"
                                custom={index}
                                variants={skillVariants}
                                whileHover={{ opacity: 0.8 }}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <skill.icon size={24} className="text-blue-400 mb-1" />
                                    <span className="text-xs">{skill.name.split(" ")[0]}</span>
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
                images={portfolioImages}
                initialImageIndex={selectedImageIndex}
            />
        </motion.div>
    )
}

export default Profile;