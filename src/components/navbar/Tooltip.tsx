import React, { type ReactNode } from "react";

interface TooltipProps {
    children: ReactNode;
    text: string;
    position?: "top" | "right" | "bottom" | "left" | "default";
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = "top" }) => {
    const positionClasses = {
        top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
        right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
        bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
        left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
        default: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    };

    return (
        <div className="relative inline-block group">
            {children}
            <div
                className={`absolute ${positionClasses[position]} bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap`}
            >
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
