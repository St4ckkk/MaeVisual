import { Link } from 'react-router-dom';

export default function RootLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-xl font-bold text-gray-800">
                                Photo Studio
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/booking" className="text-gray-600 hover:text-gray-900">
                                Book Session
                            </Link>
                            <Link to="/portfolio" className="text-gray-600 hover:text-gray-900">
                                Portfolio
                            </Link>
                            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <main className="max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white shadow-lg mt-auto">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <p className="text-center text-gray-600">
                        © 2025 Photo Studio. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}