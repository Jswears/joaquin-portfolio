import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { socialMedia } from "@/lib/data";

const Footer = () => {
    return (
        <footer className="bg-background/30 py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm font-ibm-plex-mono text-muted-foreground">
                            © {new Date().getFullYear()} Joaquin Swears. All rights reserved.
                        </p>
                    </div>
                    <nav className="flex space-x-4">
                        {socialMedia.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-muted-foreground hover:text-primary"
                            >
                                {item.icon === "Github" && <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />}
                                {item.icon === "Linkedin" && <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />}
                                {item.icon === "Mail" && <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}
export default Footer;