import { useState } from "react"
import { motion } from "framer-motion"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { Mail, Phone, MapPin, Send, Camera } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        eventType: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    // Social media links - consistent with Profile component
    const socialLinks = [
        { name: "Instagram", icon: FaInstagram, username: "@maenibini", url: "https://instagram.com/maenibini", color: "#E1306C" },
        { name: "TikTok", icon: FaTiktok, username: "@maenibini", url: "https://tiktok.com/@maenibini", color: "#000000" },
        { name: "Facebook", icon: FaFacebookF, username: "MaeVisual", url: "https://web.facebook.com/maeniniyot", color: "#1877F2" },
    ]

    // Photography service types
    const eventTypes = [
        "Wedding", "Portrait", "Birthday", "Prenup", "Debut",
        "Graduation", "Memorial", "Event", "Other"
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission with a delay
        try {
            // In a real app, you would send the form data to your server here
            await new Promise(resolve => setTimeout(resolve, 1500))
            setSubmitStatus("success")
            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                eventType: ""
            })
        } catch {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
            // Clear status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    const socialVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: i => ({
            scale: 1,
            opacity: 1,
            transition: { delay: 0.4 + (i * 0.1), duration: 0.3 }
        })
    }

    return (
        <div
            className="max-w-full min-h-screen overflow-auto bg-cover bg-center bg-no-repeat bg-fixed flex flex-col"
            style={{
                backgroundImage: "url('/images/bg-mae.jpg')",
            }}
        >
            <Navbar />
            <motion.div
                className="flex-grow container mx-auto px-4 py-8 md:py-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
                        <h1 className="secondary text-4xl md:text-5xl lg:text-6xl mb-2 text-[#e9d5c5]">
                            Get in Touch
                        </h1>                        <p className="text-white/80 max-w-lg mx-auto">
                            Need a photographer for your special moments? Let&apos;s discuss how I can help capture your memories.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Contact Information */}
                        <motion.div
                            className="md:col-span-1 bg-black/20 backdrop-blur-sm p-6 rounded-lg"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl mb-4 font-medium text-[#e9d5c5]">Contact Information</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-800 p-2 rounded-full mr-3">
                                        <Mail size={16} className="text-[#e9d5c5]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <a href="mailto:maesharamohammad@gmail.com" className="text-white hover:text-[#e9d5c5] transition-colors">
                                            maesharamohammad@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-800 p-2 rounded-full mr-3">
                                        <Phone size={16} className="text-[#e9d5c5]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <a href="tel:+639123456789" className="text-white hover:text-[#e9d5c5] transition-colors">
                                            +63 928 069 3642
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-800 p-2 rounded-full mr-3">
                                        <MapPin size={16} className="text-[#e9d5c5]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Location</p>
                                        <p className="text-white">South Cotabato, Philippines</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-800 p-2 rounded-full mr-3">
                                        <Camera size={16} className="text-[#e9d5c5]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Availability</p>
                                        <p className="text-white">Open for bookings</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div>
                                <h4 className="text-sm font-medium mb-3 text-[#e9d5c5]">Connect with me</h4>
                                <div className="flex space-x-3">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                                            custom={index}
                                            variants={socialVariants}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon size={18} className="text-secondary" />
                                        </motion.a>
                                    ))}
                                </div>


                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="md:col-span-2 bg-black/20 backdrop-blur-sm p-6 rounded-lg"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl mb-4 font-medium text-secondary">Send Me a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-[#e9d5c5] text-sm"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-[#e9d5c5] text-sm"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="eventType" className="block text-sm text-gray-400 mb-1">Photography Type</label>
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm"
                                        >
                                            <option value="">Select type</option>
                                            {eventTypes.map((type, index) => (
                                                <option key={index} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm"
                                        placeholder="Subject of your message"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm resize-none"
                                        placeholder="Tell me about your project or event..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary text-primary font-medium py-2.5 rounded-md hover:bg-[#d6c1b0] transition-colors flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            <Send size={16} className="mr-2" />
                                            Send Message
                                        </span>
                                    )}
                                </motion.button>

                                {/* Form submission status message */}
                                {submitStatus === "success" && (
                                    <motion.div
                                        className="bg-green-800/40 border border-green-800 text-white px-4 py-2 rounded-md text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        Message sent successfully! I&apos;ll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === "error" && (
                                    <motion.div
                                        className="bg-red-800/40 border border-red-800 text-white px-4 py-2 rounded-md text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        Oops! Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    )
}

export default Contact