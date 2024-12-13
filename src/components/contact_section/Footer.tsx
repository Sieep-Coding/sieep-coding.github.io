import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 text-white">
            <div className="max-w-7xl mx-auto text-center space-y-4">
                <p className="text-lg">
                    <span className="text-pink-400">Built with</span>{" "}
                    <a
                        href="https://astro.build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 font-semibold underline"
                    >
                        Astro
                    </a>
                </p>
                <p className="text-lg">
                    <span className="text-pink-400">Made with</span>{" "}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{" "}
                    By{" "}
                    <a
                        href="https://www.linkedin.com/in/nick-s-694241139/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 font-semibold underline"
                    >
                        Nick Stambaugh
                    </a>
                </p>
                <div className="flex justify-center space-x-8 mt-4">
                    <a
                        href="https://github.com/Sieep-Coding/sieep-coding.github.io?tab=readme-ov-file#how-to-use-this-template-toolbox"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 font-semibold underline"
                    >
                        Use This Website Template
                    </a>
                    <a
                        href="https://nickstambaugh.vercel.app/posts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 font-semibold underline"
                    >
                        Blog
                    </a>
                    <a
                        href="https://nickstambaugh.vercel.app/Nick_Stambaugh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 font-semibold underline"
                    >
                        Resume
                    </a>
                    <a
                        href="mailto:nickstambaugh@proton.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 font-semibold underline"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
