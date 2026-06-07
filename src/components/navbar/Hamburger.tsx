import React from "react";

interface HamburgerProps {
  onClick: () => void;
  isNavOpen: boolean;
}

export default function Hamburger({ onClick, isNavOpen }: HamburgerProps) {
  return (
    <button
      className="flex items-center justify-center w-9 h-9 border-2 rounded border-secondary dark:border-dk-secondary focus:outline-none text-secondary dark:text-dk-secondary"
      onClick={onClick}
      aria-label="Open Navigation Menu"
    >
      <i className={isNavOpen ? "fas fa-times text-lg" : "fas fa-bars text-lg"}></i>
    </button>
  );
}