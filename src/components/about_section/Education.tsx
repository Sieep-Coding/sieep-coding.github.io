import React from "react";
import { info } from "../../data/info";

interface EducationProps {
  education: (typeof info)["about"]["education"];
}

export default function Education(props: EducationProps) {
  const { education } = props;

  return education.length === 0 ? (
    <div></div>
  ) : (
    <div className="flex flex-col space-y-6 lg:w-2/3 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Education</h1>
      {education.map((edu, index) => (
        <div className="flex flex-col space-y-4 relative" key={index}>
          <div className="flex items-start space-x-4">
            <i className="fas fa-graduation-cap text-3xl text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent"></i>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{edu.title}</h2>
              <p className="text-lg font-normal">{edu.date}</p>
              <p className="text-lg font-bold">{edu.location}</p>
              {edu.gpa && <p className="text-lg font-normal mt-2">GPA: {edu.gpa}</p>}
              {edu.thesis && (
                <p className="text-lg font-normal mt-2">Activities: {edu.thesis}</p>
              )}
            </div>
          </div>

          {index !== education.length - 1 && (
            <div className="absolute top-0 left-3 h-full w-1 bg-secondary dark:bg-dk-secondary hover:bg-accent dark:hover:bg-dk-accent"></div>
          )}
        </div>
      ))}
    </div>
  );
}
