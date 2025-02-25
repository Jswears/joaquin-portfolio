"use client"

import ContactForm from "./components/contact-form"
import SectionTitle from "./components/section-title"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const ContactSection = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <section id="contact" className="py-24 flex flex-col justify-center items-center">
            <div className="container mx-auto px-6">
                <SectionTitle number={4} title="Contact Me" />
                <div className="mt-8 max-w-lg mx-auto">
                    <ContactForm />
                </div>
                <div className="mt-12 flex justify-center">
                    <Button
                        onClick={scrollToTop}
                        className="flex items-center justify-center p-3 rounded-full bg-background/30 text-charcoal-gray dark:text-white hover:bg-primary-darktransition-transform hover:scale-105"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
