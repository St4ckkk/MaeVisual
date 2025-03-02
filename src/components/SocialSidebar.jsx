import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"

const SocialSidebar = () => {
    return (
        <>
            {/* Desktop version */}
            <div className="fixed left-[2%] sm:left-[5%] md:left-[10%] top-0 h-full w-14 hidden sm:flex flex-col items-center justify-end pb-6 z-10">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-[20%] w-[1px] bg-white"></div>

                {/* Social Icons */}
                <div className="flex flex-col space-y-6">
                    <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors">
                        <FaTwitter size={18} />
                    </a>
                    <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors">
                        <FaInstagram size={18} />
                    </a>
                    <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors">
                        <FaFacebookF size={18} />
                    </a>
                </div>
            </div>

            {/* Mobile version - horizontal at bottom */}
            <div className="fixed bottom-4 left-0 right-0 flex sm:hidden justify-center items-center space-x-8 z-10">
                <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors p-2">
                    <FaTwitter size={20} />
                </a>
                <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors p-2">
                    <FaInstagram size={20} />
                </a>
                <a href="#" className="text-[#e9d5c5] hover:text-white transition-colors p-2">
                    <FaFacebookF size={20} />
                </a>
            </div>
        </>
    )
}

export default SocialSidebar

