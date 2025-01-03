import Tooltip from "../navbar/Tooltip";

export default function ViewBlog() {
    return (
      <a
        href="https://nickstambaugh.vercel.app/posts"
        className="block transform transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        <div className="flex flex-col items-center space-y-6 p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-lg mt-10">
        <Tooltip text="Explore more posts." position="left">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r text-white">
            Read My Blog 📝
          </h1>
          </Tooltip>
        </div>
      </a>
    );
  }
  