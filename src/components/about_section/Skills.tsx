import { useState } from "react";

interface SkillsProps {
  skills: {
    Languages: string[];
    Frameworks: string[];
    Libraries: string[];
    Databases: string[];
    Concepts: string[];
    Tools: string[];
  }[];
}

export default function Skills({ skills }: SkillsProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Skills</h2>
      {skills.map((category, index) =>
        Object.entries(category).map(([categoryName, skillList]) => (
          <div
            key={`${categoryName}-${index}`}
            className="flex flex-col space-y-2 relative p-4 sm:p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 cursor-pointer"
            onClick={() => toggleCategory(categoryName)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-semibold">{categoryName}</h3>
              <svg
                className={`transform transition-transform duration-300 ${openCategory === categoryName ? 'rotate-180' : ''} w-6 h-6 text-accent`}
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
            {openCategory === categoryName && (
              <ul className="grid grid-cols-2 gap-4 list-none pl-0 dark:bg-dk-background p-4 rounded-lg shadow-md max-h-96 overflow-auto">
                {skillList.map((skill, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent transition-all duration-200 break-words"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
}