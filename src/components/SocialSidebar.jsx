import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { motion } from "framer-motion"

const SocialSidebar = () => {
    return (
        <>

            <div className="fixed left-[2%] sm:left-[5%] md:left-[10%] top-0 h-full w-14 hidden sm:flex flex-col items-center justify-center z-10">

                <div className="absolute left-1/2 top-0 bottom-[40%] w-[1px] bg-white"></div>


                <div className="flex flex-col space-y-6 mt-[300px]">
                    <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors">
                        <FaTiktok size={18} />
                    </a>
                    <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors">
                        <FaInstagram size={18} />
                    </a>
                    <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors">
                        <FaFacebookF size={18} />
                    </a>
                </div>
            </div>

            {/* Mobile version - fixed at bottom */}
            <div className="fixed bottom-24 left-0 right-0 sm:hidden z-20">
                <div className="flex justify-center gap-4 py-3">
                    <motion.a
                        href="#"
                        className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <FaFacebookF size={18} className="text-white" />
                    </motion.a>
                    <motion.a
                        href="#"
                        className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <FaInstagram size={18} className="text-white" />
                    </motion.a>
                    <motion.a
                        href="#"
                        className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <FaTiktok size={18} className="text-white" />
                    </motion.a>
                </div>
            </div>
        </>
    )
}

export default SocialSidebar

