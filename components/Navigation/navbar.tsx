"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../theme/theme-toggle"
import { MobileMenu } from "./mobile-menu"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Contact", href: "/#contact" },
    { name: "Blog", href: "/blog" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled ? "bg-background/15 backdrop-blur-sm shadow-sm" : "bg-transparent",
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    <Link href="/" className="text-2xl font-bold font-merriweather">
                        JS
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Button key={item.name} variant="ghost" asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "transition-colors hover:text-primary",
                                        pathname === item.href ? "text-primary" : "text-muted-foreground",
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </Button>
                        ))}
                        <ThemeToggle />
                    </div>
                    <MobileMenu navItems={navItems} />
                </nav>
            </div>
        </header>
    )
}

