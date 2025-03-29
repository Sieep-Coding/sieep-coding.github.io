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
    <div className="flex flex-col border-t border-b md:border md:rounded-lg lg:flex-row justify-evenly mt-8 p-6">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold dark:text-accent">Recent Posts</h1>
        {recentPosts.map((post, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold">
              <a href={post.url} className="hover:underline primary dark:text-accent">{post.frontmatter.title}</a>
            </h1>
            <p className="text-text dark:text-dk-text">{post.frontmatter.description}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{post.frontmatter.date}</p>
            <a
              className="text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent"
              href={post.url}
            >
              Read more &rarr;
            </a>
            <p className="text-gray-600 dark:text-dk-accent text-sm">
              {post.frontmatter.tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < post.frontmatter.tags.length - 1 && <span className="mx-1"> </span>}
                </span>
              ))}
            </p>
            <div className="border-t border-gray-200 dark:border-dk-gray-800" />
          </div>
        ))}
        <div className="text-right mt-1 text-secondary dark:text-dk-secondary">
          <a className="hover:text-accent dark:hover:text-dk-accent" href="/posts">
            Read more posts
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
