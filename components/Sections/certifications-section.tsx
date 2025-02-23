import { certifications } from "@/lib/data"
import { SectionTitle } from "./components/section-title"
import CertificationCard from "./components/certification-card";

const CertificationsSection = () => {
    return (
        <section id="certifications" className="py-20 bg-dark-charcoal">
            <div className="container mx-auto px-4">
                <SectionTitle number={3} title="Certifications" />
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.name} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificationsSection;
