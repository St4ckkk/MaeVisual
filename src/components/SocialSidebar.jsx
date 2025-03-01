import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"

const SocialSidebar = () => {
    return (
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-8 p-4 z-10">
            <a href="#" className="text-white hover:text-[#e9d5c5] transition-colors">
                <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#e9d5c5] transition-colors">
                <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#e9d5c5] transition-colors">
                <FaFacebookF size={20} />
            </a>
        </div>
    )
}

export default SocialSidebar

