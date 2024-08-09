'use client';

import useNavbarOffset from "@/hooks/useNavbarOffset";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
    const { navbarOffSet, navbarRef } = useNavbarOffset();

    const [previousOffset, setPreviousOffset] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        if (navbarOffSet > previousOffset) {
            setShowNavbar(false);
        } else if (navbarOffSet < previousOffset) {
            setShowNavbar(true);
        }
        setPreviousOffset(navbarOffSet);
    }, [navbarOffSet, previousOffset]);

    return (
        <header
            className={`h-[100px] p-6 fixed w-full transition-all duration-200 ease-in-out ${!showNavbar ? "-top-44 transition ease-in delay-75" : "top-0 transition ease-in delay-75 shadow-md"} ${navbarOffSet === 0 ? "bg-none shadow-none backdrop-blur-0" : 'backdrop-blur-sm z-50'}`}
            ref={navbarRef}
        >
            <nav className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl">J</h1>
                </div>
                <div className="flex gap-8">
                    <ThemeToggle />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" className="fill-black dark:fill-white">
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                    </svg>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
