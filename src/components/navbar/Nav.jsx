import { useEffect, useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Search from "../search/Search";
import Hamburger from "./Hamburger";
import { info } from "../../data/info";
import HireMe from "./HireMe";

export default function Nav({ posts }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/posts" },
    { name: "Contact", href: "/#contact" },
  ];

  const extractInitials = (name) => {
    const names = name.split(" ");
    let initials = "";
    names.forEach((name) => {
      initials += name.charAt(0);
    });
    return initials;
  };

  return (
    <>
      <nav className="container mx-auto top-0 z-50 absolute bg-primary dark:bg-dk-primary">
        <div className="w-full px-6 py-2 flex justify-between items-center">
          <a className="font-bold text-2xl lg:text-4xl" href="/#">
            <span className="text-secondary dark:text-dk-secondary">
              {"</" + extractInitials(info.name) + ">"}
            </span>
          </a>

          <div className="flex items-center space-x-4">
            {/* Button for CV download */}
            <a
              href={info.cv}
              download
              className="px-4 py-2 border-2 rounded text-secondary dark:text-dk-secondary border-secondary dark:border-dk-secondary hover:bg-secondary dark:hover:bg-dk-secondary hover:text-primary dark:hover:text-primary cursor-pointer"
            >
              <i className="fas fa-download mr-2"></i>
              <span className="hidden lg:inline-block font-medium">
                Download Resume
              </span>
              <span className="lg:hidden font-medium">CV</span>
            </a>

            {/* Button for Hire Me */}
            <button
              onClick={() => setIsHireMeOpen(true)}
              className="px-4 py-2 border-2 rounded text-secondary dark:text-dk-secondary border-secondary dark:border-dk-secondary hover:bg-secondary dark:hover:bg-dk-secondary hover:text-primary dark:hover:text-primary cursor-pointer"
            >
              <i className="fas fa-briefcase mr-2"></i>
              <span className="hidden lg:inline-block font-medium">Hire Me</span>
              <span className="lg:hidden font-medium">Hire</span>
            </button>

            {/* GitHub Button */}
            <button
              className="relative px-5 py-2 rounded text-secondary dark:text-dk-secondary border-secondary dark:border-dk-secondary hover:bg-secondary dark:hover:bg-dk-secondary hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <a
                href="https://github.com/Sieep-Coding/sieep-coding.github.io"
                className="flex items-center space-x-2"
              >
                <i className="fab fa-github text-3xl"></i>
              </a>
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="inline-flex lg:hidden text-secondary dark:text-dk-secondary">
            <Hamburger
              onClick={() => setIsNavOpen(!isNavOpen)}
              isNavOpen={isNavOpen}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <ul className="inline-flex text-secondary dark:text-dk-secondary text-2xl font-normal">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="p-4 hover:text-accent dark:hover:text-dk-accent"
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <li className="px-4 flex">
                <ToggleDarkMode />
              </li>
              <li className="px-4 flex">
                <Search posts={posts} />
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`${
            !isNavOpen ? "hidden" : ""
          } h-full flex flex-col items-center text-center lg:hidden dark:text-tertiary`}
        >
          <ul className="w-full text-secondary dark:text-dk-secondary text-xl font-semibold">
            {navLinks.map((link, index) => (
              <li key={index} className="p-4">
                <a href={link.href} onClick={() => setIsNavOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="p-4 flex flex-row items-center justify-evenly">
              <ToggleDarkMode />
              <Search posts={posts} />
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      {isNavOpen && (
        <div
          className="fixed inset-0 blur-3xl bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}

      {/* Hire Me Modal */}
      {isHireMeOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
          onClick={() => setIsHireMeOpen(false)}
        >
          <div
            className="relative bg-primary dark:bg-dk-primary p-8 rounded-lg w-full max-w-md mx-4 md:mx-8 lg:mx-16"
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
