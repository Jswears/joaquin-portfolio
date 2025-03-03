import { Button } from "@/components/ui/button";

interface BlogSidebarProps {
    activeFilter: string | null;
    onFilterChange: (category: string | null) => void;
    onSortByDate: () => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ activeFilter, onFilterChange, onSortByDate }) => {
    return (
        <div className="flex-2 flex flex-col gap-6 lg:border-r border-border pr-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-primary">Joaquin Swears</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                Exploring Innovative Solutions: Journey Through Project Development.
            </p>
            <hr className="w-1/4 border-primary" />

            <nav className="flex flex-wrap lg:flex-col gap-3 text-lg font-medium">
                <Button
                    variant={activeFilter === null ? "default" : "outline"}
                    onClick={onSortByDate}
                    className="transition-all duration-300 hover:scale-105"
                >
                    Latest
                </Button>
                {["Project", "Tech", "Inspiration"].map((category) => (
                    <Button
                        key={category}
                        variant={activeFilter === category ? "default" : "outline"}
                        onClick={() => onFilterChange(category)}
                        className="transition-all duration-300 hover:scale-105"
                    >
                        {category}
                    </Button>
                ))}
            </nav>
        </div>
    );
};

export default BlogSidebar;
