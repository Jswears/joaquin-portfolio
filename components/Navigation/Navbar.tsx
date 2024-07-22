'use client';
import useNavbarOffset from "@/hooks/useNavbarOffset";
import Image from "next/image";
import { useEffect, useState } from "react";

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
            className={`h-[100px] p-6 fixed w-full transition-all duration-200 ease-in-out ${!showNavbar ? "-top-44 transition ease-in delay-75" : "top-0 transition ease-in delay-75 shadow-md"} ${navbarOffSet === 0 ? "bg-none shadow-none backdrop-blur-0" : 'backdrop-blur-sm'}`}
            ref={navbarRef}
        >
            <nav className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl">J</h1>
                </div>
                <div>
                    <Image src="/menuLight.svg" alt="Joaquin Swears Logo" width={32} height={32} />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
