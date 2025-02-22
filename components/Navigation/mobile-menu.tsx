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

export function MobileMenu({ navItems }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                        <Button key={item.name} variant="ghost" asChild onClick={() => setIsOpen(false)}>
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                    ))}
                    <ThemeToggle />
                </nav>
            </SheetContent>
        </Sheet>
    )
}

