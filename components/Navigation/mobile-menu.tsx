"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "../theme/theme-toggle"

interface MobileMenuProps {
    navItems: { name: string; href: string }[]
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)

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
                    {navItems.map((item) => (
                        <Button key={item.name} variant="ghost" asChild onClick={() => setIsOpen(false)}>
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                    ))}
                    <div className="flex justify-end w-full space-x-4 mt-12 ">
                        <ThemeToggle />
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu;
