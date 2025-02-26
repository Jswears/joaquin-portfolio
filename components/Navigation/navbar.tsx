"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../theme/theme-toggle"
import MobileMenu from "./mobile-menu"
import { navItems } from "@/lib/data"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const pathname = usePathname()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            if (pathname === "/") {
                const sections = document.querySelectorAll("section[id]")
                let current = ""
                sections.forEach((section) => {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = `#${section.id}`
                    }
                })
                setActiveSection(current || "#about")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    if (pathname === "/blog") {
        return null;
    }

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled ? "bg-background/15 backdrop-blur-sm shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    <button onClick={scrollToTop} className="text-2xl font-bold font-merriweather">
                        JS
                    </button>
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => {
                            let isActive = false
                            if (pathname !== "/") {
                                if (item.href) {
                                    isActive = pathname === item.href
                                }
                            } else {
                                if (item.target) {
                                    isActive = activeSection === `#${item.target}`
                                }
                            }
                            if (item.href) {
                                return (
                                    <Button key={item.name} variant="ghost" asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "transition-colors hover:text-primary",
                                                isActive ? "text-primary font-semibold" : "text-muted-foreground"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </Button>
                                )
                            } else if (item.target) {
                                return (
                                    <Button key={item.name} variant="ghost" asChild>
                                        <a
                                            href={`#${item.target}`}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                const element = document.getElementById(item.target)
                                                if (element) {
                                                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                                                    setActiveSection(`#${item.target}`)
                                                }
                                            }}
                                            className={cn(
                                                "transition-colors hover:text-primary cursor-pointer",
                                                isActive ? "text-primary font-semibold" : "text-muted-foreground"
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    </Button>
                                )
                            }
                        })}
                        <ThemeToggle />
                    </div>
                    <MobileMenu navItems={navItems} />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
