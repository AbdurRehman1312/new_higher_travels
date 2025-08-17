import React from 'react'
import Image from 'next/image'
import { Star, Waves, ShoppingCart, Map } from 'lucide-react'

const WhyChooseUs = () => {
    const features = [
        {
            icon: Star,
            title: "Enhancing the Experience",
            subtitle: "Premium spiritual journeys with exceptional care and attention to every detail",
            description: "We transform your sacred pilgrimage into an unforgettable experience with meticulous planning, comfortable accommodations, and expert guidance throughout your journey."
        },
        {
            icon: Waves,
            title: "Unparalleled Local Expertise",
            subtitle: "Deep knowledge of sacred places and authentic cultural experiences",
            description: "Our local experts provide invaluable insights into the history, significance, and customs of each holy site, enriching your spiritual journey with authentic knowledge."
        },
        {
            icon: ShoppingCart,
            title: "A One-Stop Shop",
            subtitle: "Complete travel solutions from planning to execution",
            description: "From visa processing to accommodation, transportation to guided tours, we handle every aspect of your journey so you can focus on your spiritual experience."
        },
        {
            icon: Map,
            title: "Tailor Made Journeys",
            subtitle: "Customized packages designed for your unique needs",
            description: "Every pilgrim is unique, and so should be their journey. We create personalized itineraries that match your preferences, budget, and spiritual goals."
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">

            <div className="w-[97%] lg:w-[90%] max-w-[1920px] mx-auto px-3 lg:px-0">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Side - Content */}
                    <div className="lg:w-2/5 space-y-8">
                        {/* Section Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-custom-blue px-4 py-2 rounded-full text-xs font-semibold mb-6">
                            <div className="w-2 h-2 bg-custom-blue rounded-full"></div>
                            WHY CHOOSE US
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                New Higher Travel's Excellence in
                                <span className="block text-custom-gold">Every Detail</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-custom-light-gold to-custom-gold rounded-full"></div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are dedicated to creating exceptional spiritual journeys that combine comfort, authenticity, and deep meaning. Our commitment to excellence ensures every aspect of your pilgrimage exceeds expectations.
                        </p>

                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <div className="aspect-[5/3] bg-gradient-to-br from-custom-blue to-blue-700">
                                <Image
                                    src="/images/ziarat.jpg"
                                    alt="Pilgrims at holy site"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Feature Cards */}
                    <div className="lg:w-3/5">
                        <div className="flex flex-col gap-6">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 hover:border-custom-blue/30 transition-all duration-300 group hover:bg-white/80">
                                        <div className="flex md:flex-row flex-col items-center jus    md:items-start gap-6">
                                            {/* Icon */}
                                            <div className="relative">
                                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </div>
                                                {/* Decorative ring */}
                                                <div className="absolute -inset-2 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 space-y-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-custom-blue transition-colors duration-300">
                                                        {feature.title}
                                                    </h3>
                                                </div>

                                                <p className="text-gray-700 leading-relaxed text-base">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
