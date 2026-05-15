import React from "react";

interface HamburgerProps {
  onClick: () => void;
  isNavOpen: boolean;
}

export default function Hamburger({ onClick, isNavOpen }: HamburgerProps) {
  return (
    <button
      className="flex items-center justify-center px-3 py-2 border-2 rounded border-secondary dark:border-dk-secondary appearance-none focus:outline-none text-secondary dark:text-dk-secondary"
      onClick={onClick}
      aria-label="Open Navigation Menu"
    >
      <i
        className={
          isNavOpen
            ? "fas fa-times h-4 w-4"
            : "fas fa-bars h-4 w-4"
        }
      ></i>
    </button>
  );
}