interface FilterTagsProps {
    tags: string[];
    onClick: (tag: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ tags, onClick }) => {
    return (
        <div className="flex flex-wrap gap-2 p-4">
            {tags.map((tag) => (
                <button
                    key={tag}
                    className="relative overflow-hidden rounded-full px-5 py-2 text-1xl font-semibold tracking-wide transition-all 
                        bg-primary text-text dark:bg-dk-primary dark:text-dk-text 
                        hover:bg-gradient-to-r hover:from-accent dark:hover:from-dk-accent dark:hover:to-dk-secondary 
                        hover:text-secondary dark:hover:text-black 
                        shadow-md dark:shadow-lg 
                        hover:scale-105 hover:-rotate-1 duration-300"
                    onClick={() => onClick(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};

export default FilterTags;