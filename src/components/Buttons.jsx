const Buttons = () => {
    return (
        <div className="flex justify-center space-x-4">
            <button className="px-3 py-1 bg-[#e9d5c5] text-dark-green rounded-full hover:bg-white transition-colors font-medium text-sm">
                BOOK A SESSION
            </button>
            <button className="px-3 py-1 border border-white text-white rounded-full hover:bg-white hover:text-dark-green transition-colors flex items-center font-medium text-sm">
                EXPLORE
                <span className="ml-2">——&gt;</span>
            </button>
        </div>
    )
}

export default Buttons