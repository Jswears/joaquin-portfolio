"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "../theme/theme-toggle"

interface MobileMenuItem {
    name: string
    href?: string
    target?: string
}

interface MobileMenuProps {
    navItems: MobileMenuItem[]
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSmoothScroll = (target: string) => {
        const element = document.getElementById(target)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-charcoal-gray mobile-nav">
                <nav className="flex flex-col space-y-4 mt-8 p-4 justify-start items-start">
                    {navItems.map((item) => {
                        if (item.target) {
                            return (
                                <Button key={item.name} variant="ghost" asChild onClick={() => setIsOpen(false)}>
                                    <a
                                        href={`#${item.target}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleSmoothScroll(item.target!)
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </Button>
                            )
                        } else if (item.href) {
                            return (
                                <Button key={item.name} variant="ghost" asChild onClick={() => setIsOpen(false)}>
                                    <Link href={item.href}>{item.name}</Link>
                                </Button>
                            )
                        }
                        return null
                    })}
                    <div className="flex justify-end w-full space-x-4 mt-12">
                        <ThemeToggle />
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu
