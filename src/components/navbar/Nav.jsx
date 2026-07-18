import { useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Search from "../search/Search";
import { info } from "../../data/info";
import HireMe from "./HireMe";

export default function Nav({ posts }) {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const extractInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("");
  };

  return (
    <>
      <nav className="w-full top-0 z-50 absolute bg-primary dark:bg-dk-primary">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
          <a
            className="font-bold text-lg sm:text-2xl hover:scale-105 hover:-rotate-3 duration-300 block"
            href="/#"
          >
            <span className="text-secondary dark:text-dk-secondary">
              {"</" + extractInitials(info.name) + ">"}
            </span>
          </a>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
  <a
    href="/music"
    className="text-sm font-medium text-secondary dark:text-dk-secondary hover:underline underline-offset-4 transition-colors"
  >
    Music
  </a>

  <a
    href="/posts"
    className="text-sm font-medium text-secondary dark:text-dk-secondary hover:underline underline-offset-4 transition-colors"
  >
    Blog
  </a>
</div>

          <div className="flex items-center gap-4 text-secondary dark:text-dk-secondary">
            <Search posts={posts} />
            <ToggleDarkMode />
          </div>
        </div>
      </nav>

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