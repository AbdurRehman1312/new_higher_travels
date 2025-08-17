"use client";
import React, { useEffect, useState } from "react";
import { AlignJustify, X, Star, Phone, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";

const Logo = ({ src, width, height, alt, onClick, className }) => (
    <Link href="/" onClick={onClick} className={`transform transition-transform duration-300 hover:scale-105 ${className}`}>

        <Image
            src="/images/logo.png"
            alt="New Higher Travels Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
        />
    </Link>
);

const Header = () => {
    const [toggle, setToggle] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return pathname === path;
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Packages", href: "/packages" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    const renderedNavLinks = navLinks.map(({ name, href }) => (
        <Link
            href={href}
            key={name}
            className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out transform group ${toggle ? "text-white hover:text-yellow-300" : "text-gray-700"
                } ${isActive(href)
                    ? toggle
                        ? "text-yellow-300 bg-white/20"
                        : "text-blue-600 bg-blue-50"
                    : ""
                }`}
            onClick={() => setToggle(false)}
        >
            <span className="relative z-10">{name}</span>
            {/* Animated underline */}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-custom-light-gold to-custom-gold transition-all duration-300 ${isActive(href) ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
    ));

    return (
        <>
            {/* Top contact bar */}
            <div className="hidden lg:block bg-gradient-to-r bg-gray-800 text-white py-2">
                <div className="w-[97%] lg:w-[90%] max-w-[1920px] mx-auto px-4 lg:px-0 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-yellow-400" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-yellow-400" />
                            <span>info@newhighertravels.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-yellow-300">4.9/5 Rating • 50K+ Happy Travelers</span>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <header
                className={`z-[20] w-full flex items-center transition-all duration-500 ease-in-out ${scrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100/50"
                    : "bg-white/90 backdrop-blur-md shadow-md"
                    }`}
            >
                <div className="hidden z-[10] lg:flex justify-between items-center py-4 w-[97%] lg:w-[90%] max-w-[1920px] mx-auto px-4 lg:px-0">
                    {/* Logo section */}
                    <div className="flex items-center gap-3">
                        <Logo src="/images/logo.png" alt="Logo" width={60} height={60} />
                        <div className="hidden xl:block">
                            <h2 className="text-xl font-bold text-gray-800">New Higher Travels</h2>
                            <p className="text-xs text-gray-600">Your Journey, Our Passion</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-2">
                        {renderedNavLinks}
                    </nav>

                    {/* CTA Section */}
                    <div className="flex items-center gap-4">
                        {/* <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Available 24/7</span>
                        </div> */}

                        <GradientButton>Book Now</GradientButton>
                    </div>
                </div>
            </header>

            {/* Mobile header */}
            <header
                className={`w-full z-[30] transition-all duration-300 ease-in-out lg:hidden ${scrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-xl"
                    : "bg-white/90 backdrop-blur-md shadow-md"
                    } ${toggle ? "hidden" : "block"}`}
            >
                <div className="flex w-[95%] mx-auto py-4 relative items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Logo
                            src="/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            onClick={scrollToTop}
                            className="scale-90"
                        />
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">New Higher </h2>
                            <p className="text-xs text-gray-600 -mt-1">Travels</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* <div className="flex items-center gap-1 text-xs text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="hidden sm:block">24/7</span>
                        </div> */}

                        <button
                            className="p-3 rounded-xl transition-all duration-300"
                            onClick={() => setToggle(true)}
                        >
                            <AlignJustify size={24} className="text-custom-blue" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Enhanced Mobile Sidebar */}
            {toggle && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 "
                        onClick={() => setToggle(false)}
                    ></div>

                    {/* Sidebar */}
                    <div className="relative w-[85%] h-full bg-gradient-to-r from-gray-800 to-gray-900 sidebar shadow-2xl transform transition-transform duration-300 ease-out">
                        {/* Background effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-500/10"></div>
                        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>

                        <div className="relative z-10 px-6 py-6 h-full flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-3">
                                    <Logo
                                        src="/images/logo.png"
                                        alt="logo"
                                        width={60}
                                        height={60}
                                        onClick={scrollToTop}
                                    />
                                </div>

                                <button
                                    onClick={() => setToggle(false)}
                                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                                >
                                    <X size={24} className="text-white" />
                                </button>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 flex flex-col gap-2 mt-6">
                                {renderedNavLinks}
                            </nav>

                            {/* Bottom section */}
                            <div className="mt-auto space-y-4">
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-white text-sm font-medium">Available 24/7</span>
                                    </div>
                                    <p className="text-blue-200 text-xs">Ready to help you plan your perfect journey</p>
                                </div>

                                <GradientButton
                                    className="w-full py-3 hover:scale-105 shadow-lg hover:shadow-xl"
                                    onClick={() => setToggle(false)}
                                >
                                    Book Your Trip Now
                                </GradientButton>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                .sidebar {
                    animation: slideIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default Header;