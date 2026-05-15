import Tooltip from "../navbar/Tooltip";

export default function ViewBlog() {
  return (
    <a
      href="https://nickstambaugh.dev/posts"
      className="inline-block mt-10"
    >
      <Tooltip text="Explore more posts." position="bottom">
        <h2 className="text-xl font-medium text-text hover:text-secondary dark:text-dk-text dark:hover:text-dk-secondary transition-colors duration-200">
          Visit Blog →
        </h2>
      </Tooltip>
    </a>
  );
}