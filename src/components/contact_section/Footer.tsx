import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-4 mt-8 mb-8 border-t border-b">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm">
                    Built with{" "}
                    <a
                        href="https://astro.build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 underline"
                    >
                        Astro
                    </a>
                    {" || "}{" "}{" "}
                    Made With{" "}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{" "}
                    By{" "}
                    <a
                        href="https://www.linkedin.com/in/nick-s-694241139/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 underline"
                    >
                        Nick Stambaugh
                    </a>
                    {" || "}{" "}{" "}
                    <a
                        href="https://github.com/Sieep-Coding/sieep-coding.github.io?tab=readme-ov-file#how-to-use-this-template-toolbox"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 underline"
                    >
                        Use This Website Template
                    </a>
                    {" || "}{" "}{" "}
                    <a
                        href="https://nickstambaugh.vercel.app/posts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 underline"
                    >
                        Blog
                    </a>
                    {" || "}{" "}{" "}
                    <a
                        href="mailto:nickstambaugh@proton.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 underline"
                    >
                        Email
                    </a>
                    {" || "}{" "}{" "}
                    <a
                        href="nickstambaugh.vercel.app/rss.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 underline"
                    >
                        RSS
                    </a>
                    {" || "}{" "}{" "}
                    <a
                        href="https://buymeacoffee.com/nickstambaugh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-green-600 underline"
                    >
                        Buy Me A Coffee
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;