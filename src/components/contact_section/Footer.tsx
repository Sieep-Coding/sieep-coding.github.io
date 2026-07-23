import React from "react";
import { info } from "../../data/info.ts";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 bg-primary dark:bg-dk-primary border-t border-text/10 dark:border-dk-text/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
          <a href="/posts" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Blog</a>
          <a href="/about" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">About</a>
          <a href="/recipes" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Recipes</a>
          <a href="/bruce-the-dog" className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Bruce the Dog</a>
          <a href={info.contact.RSS} className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">RSS Feed</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-secondary dark:text-dk-secondary text-sm font-semibold uppercase tracking-widest mb-1">Work</h3>
                    <a href="/projects" target="_blank" rel="noopener noreferrer"
            className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Projects</a>
                     <a href="/music" target="_blank" rel="noopener noreferrer"
            className="text-sm text-text/70 dark:text-dk-text/70 hover:text-secondary dark:hover:text-dk-secondary transition-colors">Music</a>
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
      <div className="border-t border-text/10 dark:border-dk-text/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-nowrap items-center justify-between gap-3 overflow-x-auto whitespace-nowrap text-[10px] xs:text-xs sm:text-sm text-text/50 dark:text-dk-text/50">
          <span className="shrink-0">&copy; {currentYear} {info.name}. All rights reserved.</span>
          <div className="flex flex-nowrap items-center gap-x-2.5 sm:gap-x-4 shrink-0">
            <a href="/privacy" className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="/license" className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">License &amp; Terms</a>
            <span aria-hidden="true">·</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">llms.txt</a>
            <span aria-hidden="true">·</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">Sitemap</a>
            <span aria-hidden="true">·</span>
            <a href="https://buymeacoffee.com/nickstambaugh" target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary dark:hover:text-dk-secondary transition-colors">Buy me a coffee</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;