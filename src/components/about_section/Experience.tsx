import React from "react";
import { info } from "../../data/info";

interface ExperienceProps {
  experience: (typeof info)["about"]["experience"];
}

export default function Experience({ experience }: ExperienceProps) {
  if (experience.length === 0) return null;

  return (
    <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Experience</h1>
      {experience.map((exp, index) => (
        <div className="flex flex-col space-y-4 relative p-4 sm:p-6 rounded-lg shadow-md bg-white dark:bg-gray-800" key={index}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <i className="fas fa-briefcase text-3xl text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent"></i>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold">{exp.title}</h2>
              <p className="text-base sm:text-lg font-normal">{exp.date}</p>
              <p className="text-base sm:text-lg font-bold">{exp.location}</p>
              <p className="text-sm sm:text-lg font-normal mt-2">{exp.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
