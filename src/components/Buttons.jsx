const Buttons = () => {
    return (
        <div className="flex space-x-4 mt-6">
            <button className="px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-teal-900">
                BOOK A SESSION
            </button>
            <button className="px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-teal-900 flex items-center">
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default Buttons

