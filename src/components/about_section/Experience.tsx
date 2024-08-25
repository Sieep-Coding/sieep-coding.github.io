import React from "react";
import { info } from "../../data/info";

interface ExperienceProps {
  experience: (typeof info)["about"]["experience"];
}

export default function Experience(props: ExperienceProps) {
  const { experience } = props;

  return experience.length === 0 ? (
    <div></div>
  ) : (
    <div className="flex flex-col space-y-6 lg:w-2/3 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      {experience.map((exp, index) => (
        <div className="flex flex-col space-y-4 relative" key={index}>
          <div className="flex items-start space-x-4">
            <i className="fas fa-briefcase text-3xl text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent"></i>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <p className="text-lg font-normal">{exp.date}</p>
              <p className="text-lg font-bold">{exp.location}</p>
              <p className="text-lg font-normal mt-2">{exp.description}</p>
            </div>
          </div>

          {index !== experience.length - 1 && (
            <div className="absolute top-0 left-3 h-full w-1 bg-secondary dark:bg-dk-secondary hover:bg-accent dark:hover:bg-dk-accent"></div>
          )}
        </div>
      ))}
    </div>
  );
}
