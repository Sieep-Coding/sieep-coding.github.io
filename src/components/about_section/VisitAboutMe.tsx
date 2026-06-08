import Tooltip from "../navbar/Tooltip";

export default function ViewAboutMe() {
  return (
    <a
      href="https://nickstambaugh.dev/about"
      className="inline-block mt-10"
    >
      <Tooltip text="Learn more about me." position="bottom">
        <h2 className="text-xl font-medium text-text hover:text-secondary dark:text-dk-text dark:hover:text-dk-secondary transition-colors duration-200">
          About Me →
        </h2>
      </Tooltip>
    </a>
  );
}