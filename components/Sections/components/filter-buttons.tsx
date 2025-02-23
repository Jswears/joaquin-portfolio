import type React from "react"
import { Button } from "@/components/ui/button"

interface FilterButtonsProps {
    technologies: string[]
    selectedTechnologies: string[]
    toggleTechnology: (tech: string) => void
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ technologies, selectedTechnologies, toggleTechnology }) => {
    return (
        <div className="flex flex-wrap gap-2 my-6">
            {technologies.map((tech) => (
                <Button
                    key={tech}
                    onClick={() => toggleTechnology(tech)}
                    variant={selectedTechnologies.includes(tech) ? "secondary" : "outline"}
                    size="sm"
                    className={`${selectedTechnologies.includes(tech) ? "bg-gray-800 text-white" : "bg-white text-gray-800 border-gray-800"
                        } hover:bg-gray-900 hover:text-white`}
                >
                    {tech}
                </Button>
            ))}
        </div>
    )
}

export default FilterButtons
