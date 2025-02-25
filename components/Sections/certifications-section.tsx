import { certifications } from "@/lib/data"
import SectionTitle from "./components/section-title"
import CertificationCard from "./components/certification-card"

const CertificationsSection = () => {
    return (
        <section id="certifications" className="py-24">
            <div className="container mx-auto px-6">
                <SectionTitle number={3} title="Certifications" />
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.name} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificationsSection
