import React, { useState } from "react";
import { info } from "../../data/info";

interface EducationProps {
  education: (typeof info)["about"]["education"];
}

export default function Education(props: EducationProps) {
  const { education } = props;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (education.length === 0) return null;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Education</h1>
      {education.map((edu, index) => (
        <div
          className="flex flex-col space-y-2 relative p-4 sm:p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer"
          key={index}
          onClick={() => toggleExpand(index)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fas fa-graduation-cap text-accent"></i>
              <h2 className="text-xl sm:text-2xl font-semibold">{edu.title}</h2>
            </div>
            <a
              className="text-base sm:text-lg font-bold text-blue-500 hover:underline block mt-1"
              href="https://www.gvsu.edu/"
            >
              {edu.date}
            </a>
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
              <p className="text-base sm:text-lg font-normal">{edu.thesis}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}