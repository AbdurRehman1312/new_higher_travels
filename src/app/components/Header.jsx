"use client";
import React from "react";
// import { Button } from "@/components/ui/button";
import { AlignJustify, Moon, Sun, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Logo = ({ src, width, height, alt, onClick }) => (
    <Link href="/" onClick={onClick}>
        <Image src={src} alt={alt} width={width} height={height} />
    </Link>
);

const Header = () => {
    const [toggle, setToggle] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path ? "underline" : "no-underline";
    };

    const scrollToTop = () => window.scrollTo({ top: 0 });


    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Packages", href: "/packages" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    const renderedNavLinks = navLinks.map(({ name, href, onClick }) => (
        <Link
            href={href}
            key={name}
            className={`${toggle ? "text-white" : "text-black"} underline-offset-4 text-base hover:underline transition-all duration-300 ease-in-out ${isActive(
                href
            )}`}
            onClick={(e) => {
                setToggle(false);
                if (onClick) onClick(e);
            }}
        >
            {name}
        </Link>
    ));

    return (
        <>
            <header
                className={`z-[20] w-full flex items-center bg-white backdrop-blur-xl transition-all duration-500 ease-in-out shadow-md`}
            >
                <div className="hidden z-[10] lg:flex justify-between items-center py-3 w-full max-w-7xl mx-auto px-3 lg:px-0">
                    <Link href={"/"} className="flex items-center gap-x-1">
                        <Logo src="/images/logo.png" alt="Logo" width={60} height={60} />
                    </Link>
                    <div className="lg:flex items-center gap-x-12 hidden xl:text-base text-sm">
                        {renderedNavLinks}
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="relative">
                            <Link href="/signup" className="z-10">
                                {/* <Button variant="destructive">Signup</Button> */}
                            </Link>
                            <div className="absolute md:block hidden bg-pinkGradient top-0 h-8 w-8 left-8 blur-xl border z-[-1]" />
                        </div>
                        <div className="relative">
                            <Link href="/login" className="z-10">
                                <Button
                                    variant="default"
                                    className="mt-2 min-w-[130px]"
                                >
                                    Book Now
                                </Button>
                            </Link>
                            <div className="absolute md:block hidden bg-blueGradient top-0 h-8 w-8 left-8 blur-2xl border z-[-1]" />
                        </div>
                        {/* <button onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <Sun size={20} color="white" />
                            ) : (
                                <Moon size={20} color="black" />
                            )}
                        </button> */}
                    </div>
                </div>
            </header>

            <header
                className={`w-full bg-white dark:bg-black/80 z-[30] transition-all duration-300 ease-in-out  backdrop-blur-xl shadow-md ${toggle ? "hidden" : "block"}`}
            >
                <div className="flex w-[95%] mx-auto py-4 relative items-center justify-between lg:hidden">
                    <Link href="/" className="flex items-center">
                        <Logo
                            src="/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            onClick={scrollToTop}
                        />
                    </Link>

                    <button className="flex-1 flex justify-end" onClick={() => setToggle(true)}>
                        <AlignJustify size={30} className="text-black dark:text-white" />
                    </button>
                    {/* <button className="ml-3" onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <Sun size={20} color="white" />
                        ) : (
                            <Moon size={20} color="black" />
                        )}
                    </button> */}
                </div>
            </header>

            {toggle && (
                <div className="fixed sidebar lg:hidden top-0 z-50 left-0 w-[80%] h-full bg-opacity-50 flex justify-center items-center">
                    <div className="bg-custom-blue/40 backdrop-blur-md shadow-2xl h-screen w-full px-5 py-5">
                        <div className="flex justify-between my-6">
                            <div className="flex items-center">
                                <Logo
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={70}
                                    height={70}
                                    onClick={scrollToTop}
                                />
                            </div>
                            <button onClick={() => setToggle(false)}>
                                <X size={25} className="text-white" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-y-4 mt-10">
                            {renderedNavLinks}
                        </div>
                        <div className="flex flex-col items-center justify-center mt-7 gap-y-3">
                            <div className="relative">
                                <Link href="/signup" className="z-10">
                                    {/* <Button
                                        variant="destructive"
                                        className="bg-transparent"
                                        onClick={() => setToggle(false)}
                                    >
                                        Signup
                                    </Button> */}
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href="/login" className="z-10">
                                    {/* <Button
                                        variant="destructive"
                                        className="bg-transparent"
                                        onClick={() => setToggle(false)}
                                    >
                                        Login
                                    </Button> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
