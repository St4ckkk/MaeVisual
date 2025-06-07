import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../utils/portfolio.json";

const Work = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const tabsContainerRef = useRef(null);

    // Scroll active tab into view when it changes
    useEffect(() => {
        if (tabsContainerRef.current) {
            const activeTabElement = tabsContainerRef.current.querySelector(`button[data-tab="${activeTab}"]`);
            if (activeTabElement) {
                const containerWidth = tabsContainerRef.current.clientWidth;
                const tabPosition = activeTabElement.offsetLeft;
                const tabWidth = activeTabElement.clientWidth;

                // Calculate the center position for the active tab
                const scrollPosition = tabPosition - (containerWidth / 2) + (tabWidth / 2);

                // Scroll smoothly to the position
                tabsContainerRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeTab]);

    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: i * 0.05
            }
        }),
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 }
        }
    };

    const tabVariants = {
        inactive: {
            color: "#9ca3af",
            scale: 1,
            transition: { duration: 0.3 }
        },
        active: {
            color: "#ffffff",
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };    // Get categories and portfolio items from the JSON file
    const { categories, portfolioItems } = portfolioData;

    // Filter images based on active tab
    const filteredItems = activeTab === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeTab);

    return (
        <>
            <motion.div
                className="max-w-5xl mx-auto overflow-auto px-2 sm:px-4 py-6 sm:py-10 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                }}
            >{/* Category Tabs */}                <motion.div ref={tabsContainerRef} className="flex flex-nowrap overflow-x-auto mb-4 sm:mb-6 md:mb-8 border-b border-gray-700 relative pb-1 px-1 sm:px-2 tabs-container scrollbar-hidden" style={{
                msOverflowStyle: 'none', /* IE and Edge */
                scrollbarWidth: 'none', /* Firefox */
                WebkitOverflowScrolling: 'touch'
            }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
            >                    {categories.map((category) => (<motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className="px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 mx-0.5 sm:mx-1 text-xs sm:text-sm font-medium relative whitespace-nowrap"
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === category.id ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-tab={category.id}
            >
                {category.label}
                {activeTab === category.id && (
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </motion.button>
            ))}
                </motion.div>
                {/* Photo Grid - Responsive columns and gaps based on screen size */}
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 md:gap-1 px-1 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence mode="wait">                        {filteredItems.map((item, index) => (<motion.div
                        key={item.id}
                        className="shadow-lg group cursor-pointer overflow-hidden relative"
                        custom={index}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            setSelectedImageIndex(index);
                            setIsModalOpen(true);
                        }}
                    >                            <motion.img
                            src={item.image}
                            alt={item.alt}
                            className="w-full aspect-square object-cover transition-all"
                            layoutId={`image-${item.id}`}
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 right-0 bg-black/60 text-white text-xs px-2 py-1 m-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {item.views.toLocaleString()}
                        </div>
                    </motion.div>
                    ))}
                    </AnimatePresence>                
                    </motion.div>            {/* Image Lightbox Card Component - Rendered outside the main layout to avoid z-index issues */}
            </motion.div>

            {isModalOpen && (
                <Card
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    images={filteredItems.map(item => ({
                        src: item.image,
                        alt: item.alt
                    }))}
                    initialImageIndex={selectedImageIndex}
                />
            )}
        </>
    )
}

export default Work