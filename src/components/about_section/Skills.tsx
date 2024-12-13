interface SkillsProps {
    skills: string[]
}

export default function Skills(props: SkillsProps) {
    const { skills } = props;
  
    return (
        <div className="flex flex-col items-center h-full space-y-6 p-4 sm:p-6">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 list-disc pl-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-lg font-medium text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }