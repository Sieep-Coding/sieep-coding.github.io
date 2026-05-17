import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 mt-16 border-t border-text/10 dark:border-dk-text/10">
            <div className="max-w-2xl mx-auto px-4 flex flex-col items-center gap-6 text-sm text-text/70 dark:text-dk-text/70">
                
                {/* Minimalist Horizontal Navigation */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-center font-medium">
                    <a
                        href="https://luniv.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
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

                {/* Secondary Links */}
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

                {/* Old-School 88x31 Web Badges */}
                <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
                    
                    {/* Kagi Badge */}
                    <a 
                        href="https://kagi.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="Search with Kagi"
                    >
                        <img 
                            src="https://kagifeedback.org/assets/files/2025-11-27/1764250973-708369-88x31-2.gif" 
                            alt="Kagi Search" 
                            width="88" 
                            height="31"
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                    {/* Firefox Badge */}
                    <a 
                        href="https://www.mozilla.org/firefox/new/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="Get Firefox"
                    >
                        <img 
                            src="./firefox.gif" 
                            alt="Get Firefox" 
                            width="88" 
                            height="31"
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                    {/* Aries Badge */}
                    <a 
                        href="https://nickstambaugh.dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="Aries"
                    >
                        <img 
                            src="./aries.gif" 
                            alt="Aries" 
                            width="88" 
                            height="31"
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                    {/* University of Michigan Badge */}
                    <a 
                        href="https://umich.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="University of Michigan"
                    >
                        <img 
                            src="./goblue.gif" 
                            alt="Go Blue" 
                            width="88" 
                            height="31"
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                    {/* Linux Mint Badge */}
                    <a 
                        href="https://linuxmint.com/download.php" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="Linux Mint"
                    >
                        <img 
                            src="./linux.gif" 
                            alt="Linux Mint" 
                            width="88" 
                            height="31"
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                    {/* RSS Badge */}
                    <a 
                        href="/rss.xml" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="RSS Feed"
                    >
                        <img 
                            src="./rss.gif" 
                            alt="RSS Feed" 
                            width="88" 
                            height="31"
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                    {/* Buy Me A Coffee Badge */}
                    <a 
                        href="https://buymeacoffee.com/nickstambaugh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="Buy Me A Coffee"
                    >
                        <img 
                            src="./coffee.gif" 
                            alt="Buy Me A Coffee" 
                            width="88" 
                            height="31"
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                    {/* CLI Junkie Badge */}
                    <a 
                        href="https://github.com/sieep-coding"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-[88px] h-[31px] rounded-[2px] overflow-hidden border border-text/10 dark:border-dk-text/10 hover:opacity-80 transition-opacity"
                        title="sieep-coding on GitHub"
                    >
                        <img 
                            src="./cli.gif" 
                            alt="CLI Junkie" 
                            width="88" 
                            height="31" 
                            className="block w-full h-full"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default Footer;