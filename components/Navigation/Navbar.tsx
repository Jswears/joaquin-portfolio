import Image from "next/image";

const Navbar = () => {
    return (
        <header className="h-[100px] p-6 fixed top-0 w-full">
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