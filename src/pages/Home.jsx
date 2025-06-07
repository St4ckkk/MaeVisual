import { useState } from "react"
import Buttons from "../components/Buttons"
import SocialSidebar from "../components/SocialSidebar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

const Home = () => {
    const [videoReady, setVideoReady] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);


    // Page entry animation variants
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }

    // Text animation variants
    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    }

    // Memories text special animation
    const memoriesVariants = {
        hidden: { scale: 0.8, opacity: 0, y: 30 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 8,
                stiffness: 70,
                delay: 0.4
            }
        }
    }

    // Video animation
    const videoVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.2,
                duration: 0.8
            }
        }
    }

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
        const video = document.getElementById('promo-video');
        if (video) {
            video.play();
        }
    };

    const toggleMute = () => {
        const video = document.getElementById('promo-video');
        if (video) {
            setIsMuted(!isMuted);
            video.muted = !isMuted;
        }
    }; return (
        <div
            className="max-w-full min-h-screen flex flex-col overflow-auto bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('/images/bg-mae.jpg')"
            }}
        >
            <Navbar />
            <motion.div
                className="flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 text-center text-white overflow-visible relative flex-grow"
                variants={pageVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Text content moved higher */}
                <div className="z-10 mb-6 sm:mb-8 md:mb-10 pt-0 sm:pt-4">
                    <motion.h3
                        className="primary text-sm sm:text-xl md:text-2xl font-semibold tracking-wide m-0 mb-[-5px] sm:mb-[-8px] md:mb-[-10px]"
                        variants={textVariants}
                    >
                        CREATING MORE THAN JUST
                    </motion.h3>
                    <motion.h1
                        className="secondary text-6xl sm:text-6xl md:text-8xl lg:text-[8rem] font-light tracking-wide m-0"
                        variants={memoriesVariants}
                        whileHover={{
                            scale: 1.05,
                            textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        memories
                    </motion.h1>
                    <motion.div
                        className="mt-3 sm:mt-4 md:mt-6"
                        variants={textVariants}
                    >
                        <Buttons />
                    </motion.div>
                </div>

                {/* Video section - improved for all screen sizes */}
                <motion.div
                    className="w-full max-w-3xl mt-2 sm:mt-4 md:mt-6 pb-10 relative z-10 p-3"
                    variants={videoVariants}
                >
                    <div className="relative aspect-video w-full bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                        {/* Actual video element */}
                        <video
                            id="promo-video"
                            className="absolute inset-0 w-full h-full object-cover"
                            // Changed to always use object-cover for consistent landscape presentation
                            autoPlay
                            src="/mp4/vid1.mp4"
                            poster="/images/poster.png"
                            playsInline
                            controls={isVideoPlaying}
                            preload="metadata"
                            muted={true}
                            loop
                            onCanPlay={() => setVideoReady(true)}
                            onLoadedData={() => {
                                if (!isVideoPlaying) {
                                    handlePlayVideo();
                                }
                            }}
                        />
                        {/* Video thumbnail overlay with play button */}
                        {!isVideoPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/30 via-transparent to-black/30">
                                <motion.div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-black/60 transition-all"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handlePlayVideo}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </motion.div>
                            </div>
                        )}

                        {/* Optional mute/unmute button */}
                        {isVideoPlaying && (
                            <div className="absolute bottom-2 right-2 z-20">
                                <motion.button
                                    className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={toggleMute}
                                >
                                    {isMuted ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </motion.button>
                            </div>
                        )}
                    </div>                </motion.div>
                <SocialSidebar />
            </motion.div>
            <Footer />
        </div>
    )
}

export default Home