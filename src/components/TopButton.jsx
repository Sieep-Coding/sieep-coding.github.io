import { useEffect, useState } from "react";
import Tooltip from "./navbar/Tooltip";

export default function TopButton() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed left-4 bottom-4 lg:left-8 lg:bottom-8 z-50 p-2 rounded-full bg-transparent text-secondary dark:text-dk-secondary lg:hover:text-accent lg:dark:hover:text-dk-accent ${
        isTop ? "hidden" : ""
      }`}
      onClick={handleTop}
      aria-label="Scroll to top"
    >
      <Tooltip text="Go to the top." position="right">
      <i className="fas fa-arrow-up text-3xl lg:text-5xl animate-bounce"></i>
      </Tooltip>
    </button>
  );
}
