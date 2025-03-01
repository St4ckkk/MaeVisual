import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialSidebar = () => {
    return (
        <div className="fixed left-[8%] top-0 h-full w-14  flex flex-col items-center justify-end pb-6">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-[18%] w-[1px] bg-white"></div>

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
    );
};

export default SocialSidebar;
