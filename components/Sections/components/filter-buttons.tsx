import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FilterButtonsProps } from "@/types/components"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const FilterButtons: React.FC<FilterButtonsProps> = ({ technologies, selectedTechnologies, toggleTechnology }) => {
    const [showAll, setShowAll] = useState(false)
    const visibleTechnologies = showAll ? technologies : technologies.slice(0, 5)

    return (
        <div className="flex flex-wrap gap-2 my-6">
            {visibleTechnologies.map((tech) => (
                <Button
                    key={tech.id}
                    onClick={() => toggleTechnology(tech)}
                    variant={selectedTechnologies.includes(tech) ? "secondary" : "outline"}
                    size="sm"
                    className={`${selectedTechnologies.includes(tech) ? "bg-gray-800 text-white" : "bg-white text-gray-800 border-gray-800"
                        } hover:bg-gray-900 hover:text-white`}
                >
                    {tech.name}
                </Button>
            ))}
            {technologies.length > 5 && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setShowAll(!showAll)}>
                            {showAll ? "Show Less" : "More"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {technologies.slice(5).map((tech) => (
                            <DropdownMenuItem
                                key={tech.id}
                                onClick={() => {
                                    toggleTechnology(tech)
                                    setShowAll(false)
                                }}
                                className={`${selectedTechnologies.includes(tech) ? "bg-gray-800 text-white" : "bg-white text-gray-800"} border-b p-1 mb-1`}
                            >
                                {tech.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    )
}

export default FilterButtons
