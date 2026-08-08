import React, { useState } from "react";
import { info } from "../../data/info.ts";

const currentYear = new Date().getFullYear();

// Fixed-width font stack so ASCII art stays aligned across every OS/browser.
const ASCII_FONT = "'Courier New', Courier, monospace";

const EASTER_EGGS = [
  {
    label: "woof",
    filename: "~/bruce.txt",
    credit: "Bruce the Dog",
    art: String.raw`
      / \__
     (    @\___     Bruce here. You weren't
     /         O    supposed to find this.
    /   (_____/     
   /_____/   U       Go on then, pet the dog
                      and get back to browsing.
`,
  },
  {
    label: "cat.txt",
    filename: "cat cat.txt",
    credit: "Credit: Nick Stambaugh",
    art: String.raw`
                /\  
     |\_/.|     ( \
  __.|o o |__   ) )
 -(((---(((------------`,
  },
];

const BARK_FRAMES = [
  { mouth: "O", caption: "Woof!" },
  { mouth: "@", caption: "" },
  { mouth: "O", caption: "Woof!" },
  { mouth: "@", caption: "" },
  { mouth: "O", caption: "Woof!" },
  { mouth: "@", caption: "" },
];
const FRAME_MS = 180;

const Footer: React.FC = () => {
  const [showAscii, setShowAscii] = useState(false);
  const [eggIndex, setEggIndex] = useState(0);
  const [barkFrame, setBarkFrame] = useState<number | null>(null);
  const barkTimers = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const currentEgg = EASTER_EGGS[eggIndex];

  const handleToggle = () => {
    if (showAscii) {
      setEggIndex((prev) => (prev + 1) % EASTER_EGGS.length);
      setShowAscii(false);
      setBarkFrame(null);
    } else {
      setShowAscii(true);
    }
  };

  const handlePet = () => {
    if (currentEgg.label !== "woof" || barkFrame !== null) return;
    barkTimers.current.forEach(clearTimeout);
    barkTimers.current = [];
    BARK_FRAMES.forEach((_, i) => {
      barkTimers.current.push(setTimeout(() => setBarkFrame(i), i * FRAME_MS));
    });
    barkTimers.current.push(
      setTimeout(() => setBarkFrame(null), BARK_FRAMES.length * FRAME_MS)
    );
  };

  React.useEffect(() => {
    return () => barkTimers.current.forEach(clearTimeout);
  }, []);

  const isBarking = barkFrame !== null && currentEgg.label === "woof";
  const displayArt = isBarking
    ? currentEgg.art.replace("@", BARK_FRAMES[barkFrame].mouth)
    : currentEgg.art;
  const caption = isBarking ? BARK_FRAMES[barkFrame].caption : "";

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
      <div className="border-t border-text/10 dark:border-dk-text/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-sm text-text/50 dark:text-dk-text/50">
          <span className="truncate">
            &copy; {currentYear} {info.name}.{" "}
            <span className="hidden sm:inline">All rights reserved.</span>
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 shrink-0">
            <button
              onClick={handleToggle}
              className="group relative font-mono text-xs hover:text-secondary dark:hover:text-dk-secondary transition-colors cursor-pointer"
              aria-label="You found a secret"
              title="psst..."
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                {showAscii ? `[ ${currentEgg.label} ]` : "[ >_ ]"}
              </span>
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
        {showAscii && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 animate-fadeIn">
            <div className="bg-text/5 dark:bg-dk-text/5 border border-text/10 dark:border-dk-text/10 rounded-lg p-4 overflow-x-auto shadow-inner">
              <div
                className="flex justify-between items-center mb-3 pb-2 border-b border-text/10 dark:border-dk-text/10 text-text/60 dark:text-dk-text/60"
                style={{ fontFamily: ASCII_FONT, fontSize: "10px" }}
              >
                <span>{currentEgg.filename}</span>
                <span>
                  {currentEgg.label === "woof"
                    ? "pet me"
                    : `found by you, ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                </span>
              </div>

              <div className="relative inline-block">
                <pre
                  onMouseEnter={handlePet}
                  onClick={handlePet}
                  className={`select-none text-text/80 dark:text-dk-text/80 m-0 inline-block ${
                    currentEgg.label === "woof" ? "cursor-pointer" : ""
                  }`}
                  style={{
                    fontFamily: ASCII_FONT,
                    fontSize: "11px",
                    lineHeight: "13px",
                    whiteSpace: "pre",
                  }}
                >
                  {displayArt}
                </pre>

                {caption && (
                  <span
                    className="absolute -top-2 right-2 text-secondary dark:text-dk-secondary font-bold select-none"
                    style={{ fontFamily: ASCII_FONT, fontSize: "11px" }}
                  >
                    {caption}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;