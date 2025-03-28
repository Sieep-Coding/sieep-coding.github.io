import React, { useState } from "react";
import { info } from "../../data/info";

interface ExperienceProps {
  experience: (typeof info)["about"]["experience"];
}

export default function Experience({ experience }: ExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (experience.length === 0) return null;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Experience</h1>
      {experience.map((exp, index) => (
        <div
          className="flex flex-col space-y-2 relative p-4 sm:p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer"
          key={index}
          onClick={() => toggleExpand(index)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">{exp.title}</h2>
              <p className="text-base sm:text-lg font-normal text-gray-600 dark:text-gray-400">{exp.date}</p>
            </div>
            <svg
              className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''} w-6 h-6 text-accent`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {expandedIndex === index && (
            <div className="mt-2">
              <p className="text-base sm:text-lg font-bold">{exp.location}</p>
              <p className="text-sm sm:text-lg font-normal mt-2">{exp.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}