import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <div className="flex flex-col gap-4 bg-background/40 p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <Link href={`/blog/${post.postId}`}>
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    quality={100}
                    width={300}
                    height={200}
                    className="rounded-lg h-72 w-full object-cover transition-transform hover:scale-105 cursor-pointer"
                />
            </Link>
            <p className="text-sm text-muted-foreground flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted/50 rounded-full text-xs">{tag}</span>
                ))}
            </p>
            <h2 className="text-xl font-bold text-primary hover:text-blue-400 cursor-pointer transition-all">
                <Link href={`/blog/${post.postId}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </div>
    );
};

export default BlogPostCard;
