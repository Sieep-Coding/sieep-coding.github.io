import React from "react";
import { info } from "../../data/info";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import ViewBlog from "./VisitBlog";

interface AboutProps {
  about: (typeof info)["about"];
}

export default function About(props: AboutProps) {
  const { about } = props;
  const aboutString = about.description;
  const sentenceArray = aboutString.split('. ');

  return (
    <div className="flex flex-col items-center h-full space-y-6 p-4 sm:p-6">
      <div className="flex flex-col space-y-4 w-full sm:w-3/4 lg:w-2/3">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Me</h1>
        <p className="text-base text-2xl sm:text-1xl leading-normal">
          {sentenceArray.map((word, index) => (
            <span key={index} className="block mb-5">{word}</span> // Each word in a new line
          ))}
        </p>
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/3">
        <Experience experience={about.experience} />
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/3">
        <Skills skills={about.skills} />
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/3">
        <Education education={about.education} />
      </div>
      <div>
        <ViewBlog />
      </div>
    </div>
  );
}
