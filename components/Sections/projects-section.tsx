import SectionTitle from "./components/section-title"
import ProjectCardComponent from "./components/project-card-component"

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <SectionTitle number={2} title="Projects" />
                <div className="mt-10">
                    <ProjectCardComponent />
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
