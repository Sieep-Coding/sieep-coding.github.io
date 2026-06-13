import React from 'react';

interface Post {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: string[];
  };
  url: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts = [] }) => {
  const K = 6;
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    .slice(0, K);

  return (
    <div className="border border-[#202020] dark:border-[#7c8fd1] p-6 rounded">
      <h1 className="text-3xl font-bold text-[#202020] dark:text-[#7c8fd1] mb-8">Recent Posts</h1>
      <div className="flex flex-col gap-8">
        {recentPosts.map((post, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
              <a href={post.url} className="hover:underline text-[#202020] dark:text-[#7c8fd1]">{post.frontmatter.title}</a>
            </h3>
            <p className="text-[#202020] dark:text-[#96a6e2]">{post.frontmatter.description}</p>
            <p className="text-[#202020]/70 dark:text-[#96a6e2]/70 text-sm">{post.frontmatter.date}</p>
            <a className="text-[#202020] dark:text-[#7c8fd1] hover:underline" href={post.url}>
              Read more &rarr;
            </a>
            <div className="border-t border-[#202020]/20 dark:border-[#7c8fd1]/20 mt-2" />
          </div>
        ))}
        <div className="text-right">
          <a className="text-[#202020] dark:text-[#7c8fd1] hover:underline font-bold" href="/posts">
            Read more posts
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;