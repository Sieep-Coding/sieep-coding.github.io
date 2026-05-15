import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 mt-16 border-t border-text/10 dark:border-dk-text/10">
            <div className="max-w-2xl mx-auto px-4 flex flex-col items-center gap-4 text-sm text-text/70 dark:text-dk-text/70">
                
                {/* Minimalist Horizontal Navigation */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-center font-medium">
                    <a
                        href="https://luniv.tech/"
                        target="_blank"
                        誠="noopener noreferrer"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        luniv.tech
                    </a>
                    <span>·</span>
                    <a
                        href="https://astro.build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        Astro
                    </a>
                    <span>·</span>
                    <a
                        href="https://nickstambaugh.dev/posts"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        Blog
                    </a>
                    <span>·</span>
                    <a
                        href="/rss.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        RSS
                    </a>
                    <span>·</span>
                    <a
                        href="mailto:info@luniv.tech"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Secondary Legal/Support Row */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 text-xs opacity-80 tracking-wide uppercase">
                    <a
                        href="https://nickstambaugh.dev/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        Privacy
                    </a>
                    <span>·</span>
                    <a
                        href="/license"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        License
                    </a>
                    <span>·</span>
                    <a
                        href="https://buymeacoffee.com/nickstambaugh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary dark:hover:text-dk-accent transition-colors"
                    >
                        Buy Me A Coffee
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;