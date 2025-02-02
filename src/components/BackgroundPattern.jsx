import React from 'react';

const BackgroundPattern = () => {
    return (
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
            <div className="relative w-full h-full">
                {/* Base circular gradient */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-gray-400 to-transparent" />

                {/* Dot pattern overlay */}
                <div className="absolute top-0 right-0 w-96 h-96">
                    <div className="w-full h-full grid grid-cols-12 gap-4">
                        {[...Array(144)].map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-gray-400 opacity-10"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundPattern;