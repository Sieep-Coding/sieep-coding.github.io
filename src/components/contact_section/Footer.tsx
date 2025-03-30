import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-6 mt-8 border-t border-b">
            <div className="max-w-7xl mx-auto text-center text-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h3 className="font-semibold text-primary">About</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://astro.build/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    Built with Astro
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a
                                    href="#about"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                    <a
                                        href="https://nickstambaugh.vercel.app/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 underline text-primary"
                                    >
                                        Privacy
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-pink-400">Links</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://nickstambaugh.vercel.app/posts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/rss.xml"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    RSS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/license"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    OPEN SOURCE LICENSE
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-pink-400">Support</h3>
                        <ul>
                            <li>
                                <a
                                    href="mailto:nickstambaugh@proton.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://buymeacoffee.com/nickstambaugh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    Buy Me A Coffee
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Sieep-Coding/sieep-coding.github.io/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline text-primary"
                                >
                                    Report an Issue
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-pink-400">Resources</h3>
                        <ul>
                            <li>
                                    <a
                                        href="https://github.com/Sieep-Coding/sieep-coding.github.io?tab=readme-ov-file#how-to-use-this-template-toolbox"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 underline text-primary"
                                    >
                                        Use This Website Template
                                    </a>
                            </li>
                            <li>
                                    <a
                                        href="https://nickstambaugh.vercel.app/tools"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 underline text-primary"
                                    >
                                        Tools
                                    </a>
                            </li>
                            <li>
                                    <a
                                        href="https://wakatime.com/@SieepCoding"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 underline text-primary"
                                    >
                                        My Coding Stats
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;