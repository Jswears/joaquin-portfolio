'use client';
import { useState } from "react"
import type React from "react"
import FilterButtons from "./filter-buttons"
import ProjectCard from "./project-card";
import { projects, technologies } from "@/lib/data";
import { Technology } from "@/types";

const ProjectCardComponent: React.FC = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])

    const toggleTechnology = (tech: Technology) => {
        setSelectedTechnologies((prev) =>
            prev.some((t) => t.id === tech.id)
                ? prev.filter((t) => t.id !== tech.id)
                : [...prev, tech]
        )
    }

    const filterProjects = () => {
        if (selectedTechnologies.length === 0) return projects
        return projects.filter((project) =>
            selectedTechnologies.every((tech) =>
                project.technologies.includes(tech.name)
            )
        )
    }

    const filteredProjects = filterProjects()

    return (
        <div>
            <FilterButtons
                technologies={technologies}
                selectedTechnologies={selectedTechnologies}
                toggleTechnology={toggleTechnology}
            />
            {filteredProjects.length === 0 ? (
                <p className="text-center mt-4">No projects match the selected filters.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.title}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProjectCardComponent
