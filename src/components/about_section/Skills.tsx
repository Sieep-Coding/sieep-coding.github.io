import { useState } from 'react';

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
  // State to track which category is expanded
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Toggle dropdown visibility
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="flex flex-col items-center h-full p-8 dark: rounded-xl shadow-lg">
      <h2 className="text-4xl font-semibold text-primary mb-8">Skills</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) =>
          Object.entries(category).map(([categoryName, skillList]) => (
            <section
              key={`${categoryName}-${index}`}
              className="space-y-4"
            >
              <div
                className="flex items-center justify-between cursor-pointer group p-4 border-2 border-transparent hover:border-blue-400 dark:hover:border-dk-accent rounded-lg transition-all duration-200"
                onClick={() => toggleCategory(categoryName)}
              >
                <h3 className="text-2xl font-semibold text-accent mb-2">{categoryName}</h3>
                <svg
                  className={`transform transition-transform duration-300 ${
                    openCategory === categoryName ? 'rotate-180' : ''
                  } w-6 h-6 text-accent`}
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

              {/* Skills List (hidden/shown based on state) */}
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
            </section>
          ))
        )}
      </div>
    </div>
  );
}
