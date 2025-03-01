const Sliders = () => {
  return (
    <div className="absolute bottom-8 flex items-center space-x-4">
      {/* Navigation Arrows */}
      <button className="text-white p-2 rounded-full bg-gray-500/50 hover:bg-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="text-white p-2 rounded-full bg-gray-500/50 hover:bg-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Indicators */}
      <div className="flex space-x-2">
        <span className="text-white">1 / 3</span>
        <div className="flex space-x-1">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-gray-500"></div>
          <div className="w-8 h-1 bg-gray-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Sliders

