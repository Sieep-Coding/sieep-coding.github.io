import React, { useState } from "react";
import { info } from "../../data/info.ts";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  const [showAscii, setShowAscii] = useState(false);

  return (
    <footer className="w-full mt-16 bg-primary dark:bg-dk-primary border-t border-text/10 dark:border-dk-text/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="flex flex-col gap-4">
          <a href="/" className="text-secondary dark:text-dk-secondary text-xl font-semibold tracking-tight hover:text-accent dark:hover:text-dk-accent transition-colors">
            {info.name}
          </a>
          <p className="text-sm text-text/70 dark:text-dk-text/70 leading-relaxed">{info.brief_description}</p>
          <a href={`mailto:${info.contact.email}`}
            className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">{info.contact.email}</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-secondary dark:text-dk-secondary text-sm font-semibold uppercase tracking-widest mb-1">Navigation</h3>
          <a href="/" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Home</a>
          <a href="/about" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">About</a>
          <a href="/posts" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Blog</a>
          <a href="/tags" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Tags</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-secondary dark:text-dk-secondary text-sm font-semibold uppercase tracking-widest mb-1">Explore</h3>
          <a href="/wiki" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Nickipedia</a>
          <a href="/recipes" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Recipes</a>
          <a href="/library" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Library</a>
          <a href="/media" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Media</a>
          <a href="/bruce-the-dog" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Bruce the Dog</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-secondary dark:text-dk-secondary text-sm font-semibold uppercase tracking-widest mb-1">Work</h3>
          <a href="/projects" 
            className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Projects</a>
          <a href="/music" 
            className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Music</a>
          <a href="/referral"
            className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Referral Links</a>
          <a href={info.contact.RSS} className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">RSS Feed</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-secondary dark:text-dk-secondary text-sm font-semibold uppercase tracking-widest mb-1">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {info.about.skills[0].Languages.map((lang) => (
              <span key={lang} className="text-xs border border-text/20 dark:border-dk-text/20 text-text/70 dark:text-dk-text/70 px-2 py-1 rounded">{lang}</span>
            ))}
            {info.about.skills[0].Frameworks.map((fw) => (
              <span key={fw} className="text-xs border border-text/20 dark:border-dk-text/20 text-text/70 dark:text-dk-text/70 px-2 py-1 rounded">{fw}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-text/10 dark:border-dk-text/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-sm text-text/50 dark:text-dk-text/50">
          <span className="truncate">
            &copy; {currentYear} {info.name}.{" "}
            <span className="hidden sm:inline">All rights reserved.</span>
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 shrink-0">
            {/* ASCII Art Dropdown Toggle Trigger */}
            <button
              onClick={() => setShowAscii(!showAscii)}
              className="font-mono text-xs hover:text-secondary dark:hover:text-dk-secondary transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Toggle ASCII Art"
            >
              <span>[</span>
              <span className="text-accent dark:text-dk-accent">ascii</span>
              <span>{showAscii ? "−" : "+"}</span>
              <span>]</span>
            </button>
            <span aria-hidden="true">·</span>

            <a href="/privacy" className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="/license" className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">
              <span className="sm:hidden">Terms</span>
              <span className="hidden sm:inline">License &amp; Terms</span>
            </a>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hidden sm:inline hover:text-secondary dark:hover:text-dk-secondary transition-colors">llms.txt</a>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hidden sm:inline hover:text-secondary dark:hover:text-dk-secondary transition-colors">Sitemap</a>
            <span aria-hidden="true">·</span>
            <a href="https://buymeacoffee.com/nickstambaugh" target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">
              <span className="sm:hidden">Coffee</span>
              <span className="hidden sm:inline">Buy me a coffee</span>
            </a>
          </div>
        </div>

        {/* Inline Animated Dropdown Container */}
        {showAscii && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 animate-fadeIn">
            <div className="bg-text/5 dark:bg-dk-text/5 border border-text/10 dark:border-dk-text/10 rounded-lg p-4 font-mono text-xs text-text/80 dark:text-dk-text/80 overflow-x-auto shadow-inner">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-text/10 dark:border-dk-text/10 text-[10px] opacity-70">
                <span>// terminal</span>
                <span>Credit: Nick Stambaugh</span>
              </div>
              <pre className="leading-tight select-none">
    {`          /\\  
    |\\_/.|     ( \\
  __.|o o |__   ) )
 -(((---(((------------`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
