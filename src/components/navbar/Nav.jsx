import { useState, useEffect } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Search from "../search/Search";
import Hamburger from "./Hamburger";
import { info } from "../../data/info";
import HireMe from "./HireMe";


const PRIMARY_LINKS = [
  { href: "/posts", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/music", label: "Music" },
  { href: "/recipes", label: "Recipes" },

];


const ALL_LINKS = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/music", label: "Music" },
  { href: "/library", label: "Library" },
  { href: "/recipes", label: "Recipes" },
  { href: "/media", label: "Media" },
  { href: "/bruce-the-dog", label: "Bruce the Dog" },
  { href: "/wiki", label: "Nickipedia" },
  { href: "/tags", label: "Tags" },
];

export default function Nav({ posts }) {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const extractInitials = (name) =>
    name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("");

  return (
    <>
      <nav className="w-full top-0 z-50 absolute bg-primary dark:bg-dk-primary">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <a
            className="font-bold text-lg sm:text-2xl hover:scale-105 hover:-rotate-3 duration-300 shrink-0"
            href="/"
          >
            <span className="text-secondary dark:text-dk-secondary">
              {"</" + extractInitials(info.name) + ">"}
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary dark:text-dk-secondary hover:underline underline-offset-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-secondary dark:text-dk-secondary shrink-0">
            <Search posts={posts} />
            <ToggleDarkMode />
            <div className="md:hidden">
              <Hamburger
                onClick={() => setIsNavOpen((v) => !v)}
                isNavOpen={isNavOpen}
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isNavOpen}
      >
        <div
          className="absolute inset-0 bg-secondary/40 dark:bg-black/50 backdrop-blur-sm"
          onClick={() => setIsNavOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-primary dark:bg-dk-primary border-b border-secondary/20 dark:border-dk-secondary/20 pt-20 pb-8 px-6 shadow-xl transition-transform duration-300 ${
            isNavOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col">
            {ALL_LINKS.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-secondary/10 dark:border-dk-secondary/10 last:border-b-0"
              >
                <a
                  href={link.href}
                  onClick={() => setIsNavOpen(false)}
                  className="flex items-baseline gap-3 py-3 text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent transition-colors"
                >
                  <span className="font-mono text-xs text-secondary/40 dark:text-dk-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isHireMeOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-secondary/40 dark:bg-black/50"
          onClick={() => setIsHireMeOpen(false)}
        >
          <div
            className="relative bg-primary dark:bg-dk-primary p-8 rounded-lg w-full max-w-md mx-4 border-2 border-secondary dark:border-dk-secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent"
              onClick={() => setIsHireMeOpen(false)}
            >
              &times;
            </button>
            <HireMe />
          </div>
        </div>
      )}
    </>
  );
}