"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BlogPost } from "@/types";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import BlogSidebar from "./components/BlogSidebar";
import BlogList from "./components/BlogList";

const API_URL = process.env.NEXT_PUBLIC_API_URL_BLOG;

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [originalPosts, setOriginalPosts] = useState<BlogPost[]>([]);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${API_URL}/posts`);
                setPosts(response.data.posts);
                setOriginalPosts(response.data.posts);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const filterByCategory = (category: string | null) => {
        if (category === null) {
            setPosts(originalPosts);
        } else {
            setPosts(originalPosts.filter((post) => post.category === category));
        }
        setActiveFilter(category);
    };

    const sortByDate = () => {
        setActiveFilter(null);
        setPosts([...originalPosts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    };

    return (
        <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col lg:flex-row gap-12">
            <div className="absolute top-0 left-0 right-0 mt-4 ml-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Blog</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Sidebar with fixed width */}
            <div className="w-72 lg:w-80 flex-none">
                <BlogSidebar activeFilter={activeFilter} onFilterChange={filterByCategory} onSortByDate={sortByDate} />
            </div>

            {/* Main Content Area (Expands to Fill) */}
            <div className="flex-1">
                {isLoading ? <p className="text-center text-lg text-muted-foreground">Loading posts...</p> : <BlogList posts={posts} />}
            </div>
        </div>
    );
};

export default BlogPage;
