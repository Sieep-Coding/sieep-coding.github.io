import React from "react";
import { info } from "../../data/info";
import Education from "./Education";
import Experience from "./Experience";

interface AboutProps {
  about: (typeof info)["about"];
}

export default function About(props: AboutProps) {
  const { about } = props;

  return (
    <div className="flex flex-col items-center h-full space-y-6 p-4 sm:p-6">
      <div className="flex flex-col space-y-4 w-full sm:w-3/4 lg:w-2/3 mx-4 sm:mx-6 p-4 sm:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center tracking-wide">About Me</h1>
        <p className="text-base sm:text-xl font-light leading-relaxed text-justify">
          {about.description}
        </p>
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/3">
        <Education education={about.education} />
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/3">
        <Experience experience={about.experience} />
      </div>
    </div>
  );
}


