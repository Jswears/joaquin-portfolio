'use'
import { useEffect, useRef, useState } from "react";

type NavbarOffset = {
    navbarOffSet: number;
    previousOffSet?: number;
    navbarRef: React.RefObject<HTMLElement>;
    showNavbar?: boolean;
}

const useNavbarOffset = (): NavbarOffset => {
    const [navbarOffSet, setNavbarOffSet] = useState(0);
    const [previousOffSet, setPreviousOffSet] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                setNavbarOffSet(window.scrollY - (navbarRef.current as HTMLElement).offsetTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    return {navbarOffSet, navbarRef, showNavbar };
}

export default useNavbarOffset;