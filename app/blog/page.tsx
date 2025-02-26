"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import BlogPosts, { type BlogPost } from "@/constants/BlogPosts"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPost[]>(BlogPosts.POSTS)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    const filterByTag = (tag: string) => BlogPosts.POSTS.filter((post) => post.tag === tag)

    const handleChange = (tag: string) => {
        setActiveFilter(tag)
        setPosts(tag ? filterByTag(tag) : BlogPosts.POSTS)
    }

    const sortByDate = () => {
        setActiveFilter(null)
        setPosts([...BlogPosts.POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
    }

    return (
        <div className="container mx-auto px-6 py-12">
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
            <section className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Navigation */}
                <div className="flex flex-col gap-6 lg:border-r border-border pr-6">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-primary">Joaquin Swears</h1>
                    <p className="text-base text-muted-foreground">
                        Exploring Innovative Solutions: Journey Through Project Development.
                    </p>
                    <hr className="w-1/4 border-primary" />

                    <nav className="flex flex-wrap lg:flex-col gap-3 text-lg font-medium">
                        <Button
                            variant={activeFilter === null ? "default" : "outline"}
                            onClick={sortByDate}
                            className="transition-all duration-200"
                        >
                            Latest
                        </Button>
                        {["Project", "Tech", "Inspiration"].map((tag) => (
                            <Button
                                key={tag}
                                variant={activeFilter === tag ? "default" : "outline"}
                                onClick={() => handleChange(tag)}
                                className="transition-all duration-200"
                            >
                                {tag}
                            </Button>
                        ))}
                    </nav>
                </div>

                {/* Blog Posts Grid */}
                <div className="flex-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div key={post.id} className="flex flex-col gap-4 bg-background/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                                <Link href={`/blog/${post.id}`}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        quality={100}
                                        width={300}
                                        height={200}
                                        className="rounded-lg h-72 w-full object-cover transition-transform hover:scale-105 cursor-pointer"
                                    />
                                </Link>
                                <p className="text-sm text-muted-foreground">{post.tag}</p>
                                <h2 className="text-xl font-bold text-primary hover:text-blue-400 cursor-pointer">
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-sm text-muted-foreground">{post.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPage
