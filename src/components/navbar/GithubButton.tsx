import React from "react";

const GithubButton: React.FC = () => {
    return (
        <button className="flex items-center justify-center self-center" aria-label="GitHub Profile">
                <a
                    href="https://github.com/Sieep-Coding/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent transition-colors"
                >
                    <i className="fab fa-github text-2xl"></i>
                </a>
        </button>
    );
}

export default GithubButton;