import React, { type ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: "top" | "right" | "bottom" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = "top" }) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  return (
    <span className="relative inline-flex items-baseline flex-shrink-0 group">
      {children}
      <div
        className={`absolute ${positionClasses[position]} z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-secondary text-primary dark:bg-dk-secondary dark:text-dk-primary text-xs rounded py-1 px-2 w-max max-w-[min(220px,60vw)] whitespace-normal break-words`}
      >
        {text}
      </div>
    </span>
  );
};

export default Tooltip;