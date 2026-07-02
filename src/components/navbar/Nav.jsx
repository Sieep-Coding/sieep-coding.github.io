import { useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Search from "../search/Search";
import Hamburger from "./Hamburger";
import { info } from "../../data/info";
import HireMe from "./HireMe";
import GithubButton from "./GithubButton";

export default function Nav({ posts }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const navLinks = [
    { name: "Blog", href: "/posts" },
    { name: "About", href: "/about" },
  ];

  const extractInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("");
  };

  return (
    <>
     <nav className="w-full top-0 z-50 absolute bg-primary dark:bg-dk-primary">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a
            className="font-bold text-lg sm:text-2xl hover:scale-105 hover:-rotate-3 duration-300 block"
            href="/#"
          >
            <span className="text-secondary dark:text-dk-secondary">
              {"</" + extractInitials(info.name) + ">"}
            </span>
          </a>

          <div className="inline-flex lg:hidden">
            <Hamburger
              onClick={() => setIsNavOpen(!isNavOpen)}
              isNavOpen={isNavOpen}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="mr-4 flex items-center gap-1 text-secondary dark:text-dk-secondary">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="mr-4 flex items-center justify-center w-9 h-9 text-base font-semibold hover:text-accent dark:hover:text-dk-accent hover:scale-105 hover:-rotate-2 duration-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-center w-9 h-9">
                <Search posts={posts} />
              </li>
              <li className="flex items-center justify-center w-9 h-9">
                <ToggleDarkMode />
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`${!isNavOpen ? "hidden" : ""} flex flex-col items-center text-center lg:hidden bg-primary dark:bg-dk-primary`}
        >
          <ul className="w-full text-secondary dark:text-dk-secondary text-xl font-semibold">
            {navLinks.map((link, index) => (
              <li key={index} className="p-4 hover:text-accent dark:hover:text-dk-accent">
                <a href={link.href} onClick={() => setIsNavOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="p-4 flex flex-row items-center justify-center space-x-6 border-t border-secondary/10 dark:border-dk-secondary/10">
              <ToggleDarkMode />
              <Search posts={posts} />
              <GithubButton />
            </li>
          </ul>
        </div>
      </nav>

      {/* Backdrop — nav */}
      {isNavOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-secondary/20 dark:bg-dk-primary/40 z-40 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      {/* Backdrop — hire me modal */}
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
