import { SectionTitle } from "./components/section-title";
import ProjectCardComponent from "./components/project-card-component";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <SectionTitle number={2} title="Projects" />
                <ProjectCardComponent />
            </div>
        </section>
    )
}

