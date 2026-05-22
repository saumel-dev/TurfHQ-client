'use client'
import { useState } from "react";
import NavLink from "./NavLink";
import { authClient } from "@/app/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";
import { motion } from "motion/react"
const Navbar = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const handleSignout = async () => {
        await authClient.signOut();
        router.push('/');
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <nav
              
                className="mx-auto shadow-sm rounded-2xl"
            >
                <header className="flex py-2 items-center justify-between px-6 max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 justify-between w-full md:w-auto">
                        <div className="font-bold text-2xl"><Link href={`/`}>Turf<span className="text-green-500">HQ</span></Link></div>
                        <button
                            className={`${user ? "hidden" : "block"} md:hidden`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
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
                        {
                            user ? <>
                                <li>
                                    <NavLink href={"/my-bookings"}>My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink href={"/add-facilities"}>Add Facilities</NavLink>
                                </li>
                                <li>
                                    <NavLink href={"/manage-facilities"}>Manage Facilities</NavLink>
                                </li>
                            </> : ""
                        }
                    </ul>
                    {
                        user ? <div className="flex gap-5"><Dropdown>
                            <Dropdown.Trigger className="rounded-full">
                                <Avatar>
                                    <Avatar.Image
                                        alt={user.name}
                                        src={user.image}
                                    />
                                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                                </Avatar>
                            </Dropdown.Trigger>
                            <Dropdown.Popover>
                                <div className="px-3 pt-3 pb-1">
                                    <div className="flex items-center gap-2">
                                        <Avatar size="sm">
                                            <Avatar.Image
                                                alt={user.name}
                                                src={user.image}
                                            />
                                            <Avatar.Fallback delayMs={600}>{user.image}</Avatar.Fallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-sm leading-5 font-medium">{user.name}</p>
                                            <p className="text-xs leading-none text-muted">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Menu>
                                    <Dropdown.Item id="home" textValue="home">
                                        <NavLink href={"/"}>Home</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="all-facilities" textValue="All-facilities">
                                        <NavLink href={"/all-facilities"}>All Facilities</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="my-bookings" textValue="My-bookings">
                                        <NavLink href={"/my-bookings"}>My Bookings</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="add-facilities" textValue="Add-facilities">
                                        <NavLink href={"/add-facilities"}>Add Facilities</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="manage-facilities" textValue="Manage-facilities">
                                        <NavLink href={"/manage-facilities"}>Manage Facilities</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={handleSignout} id="logout" textValue="Logout" variant="danger">
                                        <div className="flex w-full items-center justify-between gap-2">
                                            <Label>Log Out</Label>
                                            <MdOutlineLogout className="text-xl text-red-400"></MdOutlineLogout>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                            <ThemeSwitch></ThemeSwitch>
                        </div> : <div className="hidden md:block text-sm">
                            <div className="flex gap-5">
                                <NavLink href={"/login"}>Login</NavLink>
                                <ThemeSwitch></ThemeSwitch>
                            </div>
                        </div>
                    }
                </header>
                {isMenuOpen && !user && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4 justify-center items-center">
                            <li>
                                <NavLink href="/" className="block py-2">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="/all-facilities" className="block py-2">All Facilities</NavLink>
                            </li>
                            <li>
                                <NavLink href="/login" className="block py-2">Login</NavLink>
                            </li>
                            <ThemeSwitch></ThemeSwitch>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;