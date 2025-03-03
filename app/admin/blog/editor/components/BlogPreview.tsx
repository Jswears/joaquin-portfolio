import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface BlogPreviewProps {
    mdxSource: MDXRemoteSerializeResult | null;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ mdxSource }) => {
    if (!mdxSource) return null;

    return (
        <div className="mt-6 p-6 border border-border rounded-lg bg-background shadow-md">
            <MDXRemote {...mdxSource} />
        </div>
    );
};

export default BlogPreview;
