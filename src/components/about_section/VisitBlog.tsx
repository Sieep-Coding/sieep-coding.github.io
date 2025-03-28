import Tooltip from "../navbar/Tooltip";

export default function ViewBlog() {
  return (
    <a
      href="https://nickstambaugh.vercel.app/posts"
      className="block transform transition-transform hover:scale-105"
    >
      <div className="flex flex-col items-center space-y-4 p-4 bg-gradient-to-r from-[#ff79c6] to-[#8be9fd] shadow-lg rounded-lg mt-10">
        <Tooltip text="Explore more posts." position="left">
          <h2 className="text-3xl font-bold text-accent dark:text-white hover:text-secondary dark:hover:text-dk-secondary transition-colors duration-300">
            Visit Blog
          </h2>
        </Tooltip>
      </div>
    </a>
  );
}

  