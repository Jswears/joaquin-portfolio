'use'
import { useEffect, useRef, useState } from "react";

type NavbarOffset = {
    navbarOffSet: number;
    navbarRef: React.RefObject<HTMLElement>;
}

const useNavbarOffset = (): NavbarOffset => {
    const [navbarOffSet, setNavbarOffSet] = useState(0);
    
    const navbarRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                setNavbarOffSet(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return { navbarOffSet, navbarRef };
}

export default useNavbarOffset;
