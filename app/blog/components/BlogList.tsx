import BlogPostCard from "./BlogPostCard";
import { BlogPost } from "@/types";

const BlogList: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogPostCard key={post.postId} post={post} />
            ))}
        </div>
    );
};

export default BlogList;
