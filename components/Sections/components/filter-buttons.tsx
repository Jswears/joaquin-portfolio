"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FilterButtonsProps } from "@/types/components"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const FilterButtons: React.FC<FilterButtonsProps> = ({ technologies, selectedTechnologies, toggleTechnology }) => {
    const [showAll, setShowAll] = useState(false)
    const visibleTechnologies = showAll ? technologies : technologies.slice(0, 5)

    return (
        <div className="flex flex-wrap gap-3 my-6 justify-center">
            {visibleTechnologies.map((tech) => (
                <Button
                    key={tech.id}
                    onClick={() => toggleTechnology(tech)}
                    variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
                    size="sm"
                    className="transition-all duration-200"
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
                    <DropdownMenuContent className="bg-charcoal-gray">
                        {technologies.slice(5).map((tech) => (
                            <DropdownMenuItem
                                key={tech.id}
                                onClick={() => {
                                    toggleTechnology(tech)
                                    setShowAll(false)
                                }}
                                className={`${selectedTechnologies.includes(tech) ? "bg-white text-gray-800" : "bg-black text-white"} border-b p-1 mb-1 transition-all duration-200 cursor-pointer`}
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
