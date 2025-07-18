
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Card = ({ isOpen, onClose, images, initialImageIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

    useEffect(() => {
        if (isOpen) {
            // Disable body scroll when modal is open
            document.body.style.overflow = "hidden";
            // Reset current index when opening
            setCurrentIndex(initialImageIndex);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen, initialImageIndex]);

    if (!isOpen) return null;

    const currentImage = images[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100vh',
                    width: '100vw'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Main content */}
                <div className="relative w-full h-full flex flex-col md:flex-row">
                    {/* Image display - main area */}
                    <div className="relative flex-1 flex items-center justify-center">
                        {/* Close button */}
                        <button
                            className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 p-1.5 sm:p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60"
                            onClick={onClose}
                        >
                            <X size={16} className="sm:w-5 sm:h-5" />
                        </button>

                        {/* Top controls */}
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-2 text-white">
                            <div className="flex items-center gap-1">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
                                    <img
                                        src="/images/profile.png"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Main image */}
                        <motion.img
                            key={currentImage.src}
                            src={currentImage.src}
                            alt={currentImage.alt || "Gallery image"}
                            className="max-h-[85vh] max-w-[95vw] md:max-w-[80vw] object-contain rounded-sm md:rounded"
                            initial={{ opacity: 0.5, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Left/Right navigation arrows */}
                        <button
                            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={16} className="sm:w-6 sm:h-6" />
                        </button>
                        <button
                            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50"
                            onClick={handleNext}
                        >
                            <ChevronRight size={16} className="sm:w-6 sm:h-6" />
                        </button>
                    </div>                    {/* Mobile thumbnails - horizontal scroll at bottom */}
                    <div className="md:hidden flex overflow-x-auto gap-2 p-2 bg-black/80 w-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 cursor-pointer transition-all duration-200 ${currentIndex === index ? 'ring-2 ring-white scale-105' : 'opacity-70'}`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="h-14 w-14 object-cover rounded-sm"
                                />
                            </div>
                        ))}
                    </div>{/* Desktop Thumbnails sidebar */}
                    <div className="hidden md:flex w-48 lg:w-64 flex-col gap-2 p-4 items-center justify-center overflow-y-auto bg-black/80">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative cursor-pointer rounded-md overflow-hidden w-full transition-all duration-200 ${currentIndex === index ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'}`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-20 lg:h-28 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Card;
