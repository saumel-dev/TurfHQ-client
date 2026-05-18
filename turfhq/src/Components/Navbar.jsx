'use client'
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname();
    const classes = pathName === '/login' ? "bg-[#0d1e29]" :
        pathName === "/signup" ? "bg-[#0d1e29]" : "bg-[#0d1e29]/60";
    console.log(pathName);
    return (
        <div className="">
            <nav className={`absolute top-8 md:top-12 z-10 left-1/2 -translate-x-1/2 ${classes} border border-white/10 rounded-2xl md:rounded-full w-[90%] max-w-6xl transition-all duration-300`}>
                <header className="flex py-2 items-center justify-between px-6">
                    <div className="flex items-center gap-4 justify-between w-full md:w-auto">
                        <div className="font-bold text-white text-2xl">TurfHQ</div>
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden items-center text-sm gap-4 md:flex">
                        <li>
                            <NavLink href={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/all-facilities"}>All Facilities</NavLink>
                        </li>
                    </ul>
                    <div className="hidden md:block text-sm">
                        <NavLink href={"/login"}>Login</NavLink>
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            <li>
                                <NavLink href="/" className="block py-2">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="/all-facilities" className="block py-2">All Facilities</NavLink>
                            </li>
                            <li>
                                <NavLink href="/login" className="block py-2">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;