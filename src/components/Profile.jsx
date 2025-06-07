import { useState, useRef } from 'react';
import { Camera, Image, Calendar, Instagram, Star, Award, MessageSquare, Aperture, Users, Gift, GraduationCap, Heart, MapPin, Clock } from 'lucide-react';
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
        { src: "/images/h5.png", alt: "Graduation photography" }];
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
                    {/* Profile Image and Username Section */}
                    <div className="flex items-center p-6">
                        <motion.div
                            className="mr-6"
                            variants={itemVariants}
                        ><motion.div
                            className="w-35 h-35 rounded-full overflow-hidden border border-gray-700"
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
                            <h1 className="text-2xl font-medium">maenibini</h1>                        <div className="flex mt-4 gap-2 md:gap-3">
                                <button className="bg-gray-800 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-md text-sm font-medium flex-1">
                                    My Works
                                </button>
                                <button className="bg-gray-800 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-md text-sm font-medium flex-1">
                                    Book A Session
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Information */}
                    <div className="px-6 mb-8">
                        <div className="md:block">
                            <motion.div variants={itemVariants}>                            <div className="text-lg font-medium">Mae Shara Mohammad</div>
                                <div className="text-gray-400 text-base">Freelance Photographer</div>

                                {/* Experience and location */}                            <div className="flex items-center text-gray-400 text-sm mt-2">
                                    <Clock size={16} className="mr-2" />
                                    <span>8+ years experience</span>
                                </div>
                                <div className="flex items-center text-gray-400 text-sm mt-2">
                                    <MapPin size={16} className="mr-2" />
                                    <span>South Cotabato, PH</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="text-base">🧿 Memory Hoarder</span>
                                </div>
                                <div className="text-sm mt-3 font-medium">I TAKE PHOTOS AS A RETURN TICKET TO A MOMENT</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Gallery/Story Highlights Section */}                <div className="border-t border-gray-800">
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
                                    }}                            >                                <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-700">
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
                    </div>            </div>
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