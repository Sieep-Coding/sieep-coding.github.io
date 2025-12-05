import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-6 mt-8 border-t border-b">
            <div className="max-w-7xl mx-auto text-center text-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h3 className="font-semibold text-pink-400">About</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://luniv.tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    luniv.tech
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a
                                    href="https://astro.build/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
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
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                    <a
                                        href="https://nickstambaugh.dev/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 underline dark:text-primary"
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
                                    href="https://calendly.com/luniv/let-s-chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    Let's Connect! Book 15 Mins with Me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://nickstambaugh.dev/posts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/rss.xml"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    RSS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/license"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
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
                                    href="mailto:info@luniv.tech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://buymeacoffee.com/nickstambaugh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    Buy Me A Coffee
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-pink-400">Resources</h3>
                        <ul>
                            <li>
                                    <a
                                        href="https://nickstambaugh.dev/tools"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 underline dark:text-primary"
                                    >
                                        Tools
                                    </a>
                            </li>
                            <li>
                                    <a
                                        href="https://wakatime.com/@LunivConsulting"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 underline dark:text-primary"
                                    >
                                        My Coding Stats
                                    </a>
                                    
                            </li>
                            <li>
                                <a
                                    href="https://www.luniv.tech/services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-600 underline dark:text-primary"
                                >
                                    See My Work at luniv.tech
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