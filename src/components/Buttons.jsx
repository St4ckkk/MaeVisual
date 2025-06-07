import { BsArrowRight } from "react-icons/bs";

const Buttons = () => {
    return (
        <div className="flex justify-center space-x-4">
            <button className="cursor-pointer px-3 py-1 bg-secondary  text-primary rounded-full hover:bg-white transition-colors font-medium text-sm">
                BOOK A SESSION
            </button>            <button className="cursor-pointer px-3 py-1 border border-white text-white rounded-full hover:bg-white hover:text-primary transition-colors flex items-center font-medium text-sm">
                EXPLORE
                <span className="ml-2"><BsArrowRight size={16} /></span>
            </button>
        </div>
    )
}

export default Buttons