import ContactForm from "./components/contact-form";
import SectionTitle from "./components/section-title";

const ContactSection = () => {
    return (
        <section id="contact" className="flex flex-col justify-center items-center">
            <div className="container mx-auto px-4">
                <SectionTitle number={4} title="Contact Me" />
                <div className="mt-8 max-w-lg mx-auto">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;