'use client';
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, FileText } from "lucide-react"
import { ProjectCardProps } from "@/types/components";


const ProjectCard = ({ title,
    description,
    technologies,
    githubLink,
    externalLink,
    imageSrc,
    blogPostLink, }: ProjectCardProps) => {
    return (
        <Card className="bg-background/30 shadow-lg">
            <CardHeader className="p-0">
                <div className="relative h-48">
                    <Image
                        src={imageSrc || "/projects/unknownchronicles.webp"}
                        alt={title}
                        width={500}
                        height={500}
                        className="transition-transform duration-300 hover:scale-105 h-full w-full object-cover object-bottom"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-montserrat">{title}</h3>
                <p className="text-muted-foreground mb-4 font-ibm-plex-mono">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-2 py-1 text-sm">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 justify-center sm:justify-between">
                <Button variant="outline" size="sm" asChild>
                    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <Link href={externalLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                    </Link>
                </Button>
                {blogPostLink && (
                    <Button variant="outline" size="sm" asChild>
                        <Link href={blogPostLink} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Blog Post
                        </Link>
                    </Button>
                )}
            </CardFooter>

        </Card>
    )
}

export default ProjectCard;

