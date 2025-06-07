import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

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
    };

    // All photography categories
    const categories = [
        { id: "all", label: "All" },
        { id: "wedding", label: "Weddings" },
        { id: "birthday", label: "Birthdays" },
        { id: "portrait", label: "Portraits" },
        { id: "graduation", label: "Graduations" },
        { id: "memorial", label: "Memorials" },
        { id: "debut", label: "Debuts" },
        { id: "event", label: "Events" }
    ];

    // Sample photography items
    const portfolioItems = [
        { id: 1, category: "wedding", image: "/images/wedding.jpg", views: 1378, alt: "Wedding photography" },
        { id: 2, category: "event", image: "/images/h2.png", views: 959, alt: "Event venue photography" },
        { id: 3, category: "portrait", image: "/images/h3.png", views: 601, alt: "Landscape portrait" },
        { id: 4, category: "birthday", image: "/images/birthday.jpg", views: 1364, alt: "Birthday celebration" },
        { id: 5, category: "graduation", image: "/images/h5.png", views: 782, alt: "Graduation ceremony" },
        { id: 6, category: "debut", image: "/images/debut.jpg", views: 825, alt: "Debut photography" },
        { id: 7, category: "memorial", image: "/images/h4.png", views: 543, alt: "Memorial photography" },
        { id: 8, category: "wedding", image: "/images/prenup.jpg", views: 1205, alt: "Prenup session" }
    ];

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
            >{/* Category Tabs */}                <motion.div ref={tabsContainerRef} className="flex flex-nowrap overflow-x-auto mb-8 border-b border-gray-700 relative pb-1 px-2 tabs-container scrollbar-hidden" style={{
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
                className="px-3 py-2 md:px-4 md:py-3 mx-1 text-sm font-medium relative whitespace-nowrap"
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === category.id ? "active" : "inactive"} whileHover={{ scale: 1.1 }}
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
                </motion.div>                {/* Photo Grid - Always 3 columns, small gap on mobile, larger on desktop */}
                <motion.div
                    className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-1 px-1 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence mode="wait">
                        {filteredItems.map((item, index) => (<motion.div
                            key={item.id}
                            className="shadow-lg group cursor-pointer overflow-hidden"
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
                        >
                            <motion.img
                                src={item.image}
                                alt={item.alt}
                                className="w-full aspect-square object-cover transition-all"
                                layoutId={`image-${item.id}`}
                                loading="lazy"
                            />
                        </motion.div>
                        ))}
                    </AnimatePresence>                </motion.div>            {/* Image Lightbox Card Component - Rendered outside the main layout to avoid z-index issues */}
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