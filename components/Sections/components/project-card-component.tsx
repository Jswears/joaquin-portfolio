"use client"
import { useState } from "react"
import FilterButtons from "./filter-buttons"
import ProjectCard from "./project-card"
import { projects, technologies } from "@/lib/data"
import { Technology } from "@/types"

const ProjectCardComponent = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])

    const toggleTechnology = (tech: Technology) => {
        setSelectedTechnologies((prev) =>
            prev.some((t) => t.id === tech.id)
                ? prev.filter((t) => t.id !== tech.id)
                : [...prev, tech]
        )
    }

    const filteredProjects =
        selectedTechnologies.length === 0
            ? projects
            : projects.filter((project) =>
                selectedTechnologies.every((tech) => project.technologies.includes(tech.name))
            )

    return (
        <div className="flex flex-col items-center">
            <FilterButtons
                technologies={technologies}
                selectedTechnologies={selectedTechnologies}
                toggleTechnology={toggleTechnology}
            />
            {filteredProjects.length === 0 ? (
                <p className="text-center text-lg text-muted-foreground mt-6">No projects match the selected filters.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProjectCardComponent
