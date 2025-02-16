import React from "react";
import Tooltip from "./Tooltip";  // Import the Tooltip component

const GithubButton: React.FC = () => {
    return (
        <button>
            <Tooltip text="Leave a ⭐" position="default">
                <a
                    href="https://github.com/Sieep-Coding/sieep-coding.github.io"
                    className="flex items-center space-x-2 group"
                >
                    <i className="fab fa-github self-center hover:text-accent dark:hover:text-dk-accent text-2xl animate-pulse"></i>
                </a>
            </Tooltip>
        </button>
    );
}

export default GithubButton;
