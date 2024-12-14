import React, { useState } from "react";

const Subscribe: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Simulate subscription logic
            setMessage("Thank you for subscribing!");
            setEmail(""); // Clear input
        } else {
            setMessage("Please enter a valid email address.");
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto p-6 text-white mt-10">
            <h4 className="text-2xl font-bold mb-4 text-center text-pink-400">
                Get the latest blog posts delivered to your inbox.
            </h4>
            <form
                onSubmit={handleSubscribe}
                className="flex items-center bg-gray-800 rounded-full shadow-md overflow-hidden"
            >
                {/* Email Input */}
                <div className="relative flex items-center flex-grow">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        className="w-full pl-4 pr-12 py-2 text-gray-300 bg-transparent focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="absolute right-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-pink-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 12H8m0 0l4-4m-4 4l4 4"
                            />
                        </svg>
                    </div>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition-all animate-pulse"
                >
                    Subscribe
                </button>
            </form>
            {message && <p className="mt-4 text-center text-sm text-gray-300">{message}</p>}
        </div>
    );
};

export default Subscribe;
