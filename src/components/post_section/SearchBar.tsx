import { useState } from "react";
import Fuse from "fuse.js";

interface Post {
  frontmatter: {
    title: string;
    description: string;
  };
  url: string;
}

interface SearchBarProps {
  posts: Post[];
  onSearchResults: (results: any[]) => void;
}

export default function SearchBar({ posts, onSearchResults }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const fuse = new Fuse(posts, {
    keys: ["frontmatter.title", "frontmatter.description"],
    threshold: 0.3,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setQuery(query);

    if (query) {
      const results = fuse.search(query);
      setSearchResults(results); // Update search results
      setShowDropdown(true); // Show the dropdown
      onSearchResults(results); // Optionally call onSearchResults if needed for parent
    } else {
      setSearchResults([]); // Clear results if query is empty
      setShowDropdown(false); // Hide the dropdown
      onSearchResults([]); // Clear parent results if query is empty
    }
  };

  const handleSelectResult = (url: string) => {
    setQuery("");  // Clear query when selecting a result
    setShowDropdown(false);  // Hide dropdown
    window.location.href = url;  // Navigate to the selected post
  };

  return (
    <form className="relative flex items-center w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full p-3 pl-10 rounded-lg text-text dark:text-dk-text bg-primary dark:bg-dk-primary border-2 border-secondary dark:border-dk-secondary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent"
        placeholder="Search..."
        aria-label="Search"
      />
      <div className="absolute left-3 text-gray-400 dark:text-gray-300">
        <i className="fa fa-search"></i>
      </div>

      {/* Dropdown for search results */}
      {showDropdown && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-dk-primary border-2 border-secondary dark:border-dk-secondary rounded-lg shadow-lg">
          <ul className="max-h-60 overflow-y-auto">
            {searchResults.map((result: any) => (
              <li
                key={result.item.frontmatter.title}
                className="cursor-pointer p-3 hover:bg-accent hover:text-white"
                onClick={() => handleSelectResult(result.item.url)}
              >
                <h3 className="font-bold">{result.item.frontmatter.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {result.item.frontmatter.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
