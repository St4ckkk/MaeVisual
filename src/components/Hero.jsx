import cameraLens from "../assets/images/camera.png" // Replace with the correct path to the camera image

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center text-white">
            <h1 className="text-3xl md:text-5xl font-normal mb-2 tracking-wide">CREATING MORE THAN JUST</h1>
            <div className="font-serif text-6xl md:text-9xl italic font-light tracking-wide">memories</div>
            <div className="max-w-2xl mx-auto">
                <img
                    src={cameraLens || "/placeholder.svg"}
                    alt="Camera lens"
                    className="w-full h-auto"
                    onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "/placeholder.svg?height=400&width=600"
                    }}
                />
            </div>
        </section>
    )
}

export default Hero

