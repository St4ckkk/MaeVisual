import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { Mail, Phone, MapPin, Send, Camera, RefreshCw } from "lucide-react"
import emailjs from '@emailjs/browser'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Simple DOMPurify-like sanitizer function
const sanitizeInput = (input) => {
    if (typeof input !== 'string') return input;
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .trim();
};

const Contact = () => {
    const form = useRef();
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
    const [captcha, setCaptcha] = useState({ question: '', answer: 0, userAnswer: '' })
    const [errors, setErrors] = useState({})
    const [lastSubmitTime, setLastSubmitTime] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(0)
    const cooldownPeriod = 60000; // 1 minute cooldown between submissions

    // Generate a simple math CAPTCHA
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setCaptcha({
            question: `${num1} + ${num2} = ?`,
            answer: num1 + num2,
            userAnswer: ''
        });
    };

    // Initialize CAPTCHA on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);

    // Handle countdown timer for rate limiting
    useEffect(() => {
        if (timeRemaining <= 0) return;

        const timer = setInterval(() => {
            const remaining = Math.ceil((lastSubmitTime + cooldownPeriod - Date.now()) / 1000);
            setTimeRemaining(remaining > 0 ? remaining : 0);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeRemaining, lastSubmitTime]);

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

    const handleCaptchaChange = (e) => {
        setCaptcha(prev => ({ ...prev, userAnswer: e.target.value }));
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        // Allow empty phone (optional) or valid format
        if (!phone) return true;
        const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
        return re.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Clear any previous errors for this field
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Required fields
        if (!formData.name.trim()) newErrors.name = "Name is required";

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone validation (if provided)
        if (formData.phone && !validatePhone(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        // Subject validation
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (formData.subject.length > 100) newErrors.subject = "Subject is too long (max 100 characters)";

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message is too short (min 10 characters)";
        } else if (formData.message.length > 1000) {
            newErrors.message = "Message is too long (max 1000 characters)";
        }

        // CAPTCHA validation
        if (captcha.userAnswer === '') {
            newErrors.captcha = "Please solve the CAPTCHA";
        } else if (parseInt(captcha.userAnswer, 10) !== captcha.answer) {
            newErrors.captcha = "Incorrect CAPTCHA answer";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if cooldown period has passed
        const now = Date.now();
        if (now - lastSubmitTime < cooldownPeriod) {
            const remainingTime = Math.ceil((lastSubmitTime + cooldownPeriod - now) / 1000);
            setTimeRemaining(remainingTime);
            setSubmitStatus("cooldown");
            return;
        }

        // Validate the form
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Sanitize all inputs before sending
        const sanitizedData = {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            phone: sanitizeInput(formData.phone),
            subject: sanitizeInput(formData.subject),
            message: sanitizeInput(formData.message),
            eventType: sanitizeInput(formData.eventType)
        };

        try {
            // Update hidden email field
            if (document.querySelector('input[name="user_email"]')) {
                document.querySelector('input[name="user_email"]').value = sanitizedData.email;
            }

            // Apply sanitized data to form before sending
            Object.entries(sanitizedData).forEach(([key, value]) => {
                const input = form.current.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = value;
                }
            });

            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            );

            setSubmitStatus("success");
            setLastSubmitTime(Date.now());
            setTimeRemaining(Math.ceil(cooldownPeriod / 1000));

            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                eventType: ""
            });

            // Generate a new CAPTCHA
            generateCaptcha();

        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            // Clear status after 5 seconds (except cooldown)
            if (submitStatus !== "cooldown") {
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        }
    };

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
                            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                                {/* Hidden recipient email - this is YOUR email that will receive the form */}
                                <input
                                    type="hidden"
                                    name="user_email"
                                    value={formData.email}
                                />
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
                                            className={`w-full bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-[#e9d5c5] text-sm`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                                        )}
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
                                            className={`w-full bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-[#e9d5c5] text-sm`}
                                            placeholder="Your email"
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                                        )}
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
                                            className={`w-full bg-gray-800/50 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm`}
                                            placeholder="Your phone number"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="eventType" className="block text-sm text-gray-400 mb-1">Event Type</label>
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
                                        className={`w-full bg-gray-800/50 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm`}
                                        placeholder="Subject of your message"
                                        maxLength={100}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                                    )}
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
                                        className={`w-full bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm resize-none`}
                                        placeholder="Tell me about your project or event..."
                                        maxLength={1000}
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                                    )}
                                    <p className="text-gray-500 text-xs mt-1">{formData.message.length}/1000 characters</p>
                                </div>

                                {/* Simple CAPTCHA */}
                                <div>
                                    <label htmlFor="captcha" className="block text-sm text-gray-400 mb-1">Verify you're human</label>
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-gray-800/70 text-white px-3 py-2 rounded-md text-sm select-none">
                                            {captcha.question}
                                        </div>
                                        <input
                                            type="text"
                                            id="captcha"
                                            name="captcha"
                                            value={captcha.userAnswer}
                                            onChange={handleCaptchaChange}
                                            className={`w-20 bg-gray-800/50 border ${errors.captcha ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#e9d5c5] focus:ring-1 focus:ring-[#e9d5c5] text-sm`}
                                            placeholder="?"
                                        />
                                        <button
                                            type="button"
                                            onClick={generateCaptcha}
                                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                                            title="Generate new captcha"
                                        >
                                            <RefreshCw size={16} className="text-[#e9d5c5]" />
                                        </button>
                                    </div>
                                    {errors.captcha && (
                                        <p className="text-red-400 text-xs mt-1">{errors.captcha}</p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || timeRemaining > 0}
                                    className={`w-full font-medium py-2.5 rounded-md flex items-center justify-center ${timeRemaining > 0
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-secondary text-primary hover:bg-[#d6c1b0] transition-colors'
                                        }`}
                                    whileHover={timeRemaining > 0 ? {} : { scale: 1.02 }}
                                    whileTap={timeRemaining > 0 ? {} : { scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : timeRemaining > 0 ? (
                                        <span>Please wait {timeRemaining}s before sending again</span>
                                    ) : (
                                        <span className="flex items-center">
                                            <Send size={16} className="mr-2" />
                                            Send Message
                                        </span>
                                    )}
                                </motion.button>

                                {/* Form submission status messages */}
                                {submitStatus === "success" && (
                                    <motion.div
                                        className="bg-green-800/40 border border-green-800 text-white px-4 py-2 rounded-md text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        Thank you! Your message has been sent to Mae. She will get back to you soon.
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

                                {submitStatus === "cooldown" && (
                                    <motion.div
                                        className="bg-yellow-800/40 border border-yellow-800 text-white px-4 py-2 rounded-md text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        Please wait {timeRemaining} seconds before sending another message.
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
