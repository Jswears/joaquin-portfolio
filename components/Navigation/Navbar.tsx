'use client';
import useNavbarOffset from "@/hooks/useNavbarOffset";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { navbarOffSet, navbarRef, previousOffSet } = useNavbarOffset();

    const [previousOffset, setPreviousOffset] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        if (navbarOffSet > previousOffset) {
            setShowNavbar(false);
        } else if (navbarOffSet < previousOffset) {
            setShowNavbar(true);
        }
        setPreviousOffset(navbarOffSet);
    }, [previousOffSet, navbarOffSet]);

    return (
        <header className={`h-[100px] p-6 fixed top-0 w-full transition-all duration-500 ease-in-out  ${!showNavbar ? "-top-44 transition ease-in delay-100" : showNavbar && navbarOffSet === 0 ? "transition ease-in delay-500" : "transition ease-in delay-100  shadow-md backdrop-blur-sm"}`} ref={navbarRef}>
            <nav className="flex justify-between items-center" >
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