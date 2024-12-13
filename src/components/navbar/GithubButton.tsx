import React from "react";

export default function GithubButton() {
    return (
        <button>
            <a
            href="https://github.com/Sieep-Coding/sieep-coding.github.io"
            className="flex items-center space-x-2"
            >
                <i className="fab fa-github self-center hover:text-accent dark:hover:text-dk-accent text-2xl"></i>
            </a>
        </button>
    )
}