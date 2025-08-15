"use client";
import React from "react";
import { Star, Award, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";

const WhoWeAre = () => {
    const features = [
        "Expert Hajj & Umrah Guidance",
        "24/7 Customer Support",
        "Personalized Travel Packages",
        "Licensed & Certified Tours",
        "Multi-language Assistance",
        "Premium Accommodation"
    ];

    const stats = [
        { icon: Users, number: "50K+", label: "Happy Travelers" },
        { icon: Award, number: "20+", label: "Years Experience" },
        { icon: Star, number: "4.9", label: "Star Rating" },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-yellow-400/10 rounded-full blur-2xl"></div>

            <div className="max-w-7xl mx-auto px-3 lg:px-0">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    {/* Left Side - Enhanced Images */}
                    <div className="relative flex-1 group w-full">
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/20 transform transition-all duration-700 ease-out w-full">
                            <div className="flex items-center justify-center relative min-h-[650px] w-full">
                                {/* Image for mobile and desktop */}
                                <Image
                                    src="/images/kaaba.jpg"
                                    alt="Kaaba"
                                    fill
                                    sizes=""
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-8 right-10 lg:-right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform group-hover:scale-110 transition-all duration-500">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">20+</p>
                                    <p className="text-sm text-gray-600">Years Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full shadow-lg">
                            <p className="text-sm font-semibold">Certified Partner</p>
                        </div> */}
                    </div>

                    {/* Right Side - Enhanced Content */}
                    <div className="flex-1">
                        {/* Section Tag */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-custom-blue px-4 py-2 rounded-full text-xs font-semibold mb-6">
                            <div className="w-2 h-2 bg-custom-blue rounded-full"></div>
                            WHO WE ARE
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Guided by Passion,
                            <br />
                            <span className="text-yellow-600"> Driven by Discovery</span>{" "}
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            With over two decades of expertise in spiritual travel, we transform sacred journeys into unforgettable experiences. Our commitment to excellence and deep understanding of religious traditions makes us your trusted companion for Hajj and Umrah pilgrimages.
                        </p>

                        {/* Stats Row - Responsive Flex Design */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-8 p-4 bg-white/50 rounded-xl border border-gray-100">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3 flex-1">
                                        <div className="w-8 h-8 bg-gradient-to-br from-custom-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-lg sm:text-xl font-bold text-gray-900 leading-none">{stat.number}</p>
                                            <p className="text-xs text-gray-600">{stat.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Features List - Flex Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <GradientButton>
                            Discover More
                        </GradientButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;