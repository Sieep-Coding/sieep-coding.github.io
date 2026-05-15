import React, { type ReactNode, useRef, useState } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: "top" | "right" | "bottom" | "left" | "default";
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = "top" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [alignRight, setAlignRight] = useState(false);

  const handleMouseEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceOnRight = window.innerWidth - rect.left;
      setAlignRight(spaceOnRight < 220);
    }
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const maxWidth = isMobile ? "min(220px, 60vw)" : "none";

  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    default: `top-full mt-2 ${alignRight ? "right-0" : "left-0"}`,
  };

  return (
    <span
      ref={ref}
      className="relative inline-flex items-baseline group flex-shrink-0"
      onMouseEnter={handleMouseEnter}
    >
      {children}
      <div
        className={`absolute ${positionClasses[position]} bg-secondary text-primary dark:bg-dk-secondary dark:text-dk-primary text-xs rounded py-1 px-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-50 pointer-events-none`}
        style={{ maxWidth, whiteSpace: isMobile ? "normal" : "nowrap", wordBreak: "break-word" }}
      >
        {text}
      </div>
    </span>
  );
};

export default Tooltip;