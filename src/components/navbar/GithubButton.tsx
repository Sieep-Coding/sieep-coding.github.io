import React from "react";
import Tooltip from "./Tooltip";

const GithubButton: React.FC = () => {
    return (
        <button className="flex items-center justify-center self-center" aria-label="GitHub Profile">
            <Tooltip text="Follow Me On Github" position="default">
                <a
                    href="https://github.com/Sieep-Coding/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent transition-colors"
                >
                    <i className="fab fa-github text-2xl"></i>
                </a>
            </Tooltip>
        </button>
    );
}

export default GithubButton;