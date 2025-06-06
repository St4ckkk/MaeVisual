import { useEffect } from "react"
import Buttons from "../components/Buttons"
import SocialSidebar from "../components/SocialSidebar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

const Home = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

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

    return (
        <motion.div
            className="w-full max-h-screen overflow-auto bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('./images/bg-mae.png')"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Navbar />
            <motion.div
                className="flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 pt-16 sm:pt-24 md:pt-28 min-h-[calc(100vh-120px)] text-center text-white overflow-visible"
                variants={pageVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="z-10 mb-12 sm:mb-16">
                    <motion.h3
                        className="primary text-sm sm:text-xl md:text-2xl font-semibold tracking-wide m-0 mb-[-5px] sm:mb-[-8px] md:mb-[-10px]"
                        variants={textVariants}
                    >
                        CREATING MORE THAN JUST
                    </motion.h3>
                    <motion.h1
                        className="font-secondary text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] italic font-light tracking-wide m-0"
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
                        className="mt-6 sm:mt-8"
                        variants={textVariants}
                    >
                        <Buttons />
                    </motion.div>
                </div>
            </motion.div>
            <SocialSidebar className="hidden sm:block" />
            <Footer />
        </motion.div>
    )
}

export default Home