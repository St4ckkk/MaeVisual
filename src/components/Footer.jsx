

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" bottom-0 left-0 w-full py-4 text-center text-[#e9d5c5] z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-2 md:mb-0">
                        <p className="text-sm">© {currentYear} MaeVisual. All rights reserved.</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="/terms" className="text-sm hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="/privacy" className="text-sm hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="/contact" className="text-sm hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;