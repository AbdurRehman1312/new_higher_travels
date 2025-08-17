import React from 'react'
import Image from 'next/image'
import { Star, Clock, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import GradientButton from '@/components/ui/GradientButton';

const OurPackages = () => {
    const packages = [
        {
            type: "Umrah",
            title: "Premium Umrah Package",
            duration: "7 Days",
            price: "$1,299",
            originalPrice: "$1,599",
            image: "/images/kaaba.jpg",
            rating: 4.9,
            reviews: 245,
            features: [
                "5-Star Hotel Accommodation",
                "Direct Flight Tickets",
                "Guided Tours & Ziyarat",
                "24/7 Support",
                "Transportation Included",
                "Visa Processing"
            ],
            popular: true
        },
        {
            type: "Hajj",
            title: "Complete Hajj Package",
            duration: "14 Days",
            price: "$3,499",
            originalPrice: "$3,999",
            image: "/images/makkah.jpg",
            rating: 4.8,
            reviews: 189,
            features: [
                "Luxury Accommodation",
                "All Meals Included",
                "Expert Hajj Guide",
                "Air-Conditioned Transport",
                "Medical Support",
                "Group Coordination"
            ],
            popular: false
        },
        {
            type: "Umrah",
            title: "Economy Umrah Package",
            duration: "5 Days",
            price: "$899",
            originalPrice: "$1,199",
            image: "/images/kaaba.jpg",
            rating: 4.7,
            reviews: 156,
            features: [
                "3-Star Hotel Stay",
                "Return Flight Tickets",
                "Basic Transportation",
                "Visa Assistance",
                "Group Tours",
                "Prayer Guide"
            ],
            popular: false
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="w-[97%] lg:w-[90%] max-w-[1920px] mx-auto px-3 lg:px-0">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* <div className="inline-flex items-center gap-2 bg-custom-blue/10 text-custom-blue px-6 py-3 rounded-full border border-custom-blue/20 mb-6">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wide">OUR PACKAGES</span>
                    </div>
                     */}
                    <h2 className="text-4xl lg:text-5xl text-center font-bold leading-tight mb-6">
                        Our Special
                        <br />
                        <span className="text-custom-gold">Hajj & Umrah Packages</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our carefully crafted packages designed to make your spiritual journey comfortable and memorable
                    </p>
                </div>

                {/* Package Cards */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center">
                    {packages.map((pkg, index) => (
                        <div key={index} className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 w-full md:w-[45%] lg:w-[35%] mx-auto lg:mx-0">
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            {/* Package Type Badge */}
                            <div className="absolute top-4 right-4 z-20 bg-custom-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {pkg.type}
                            </div>

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-semibold text-gray-900">{pkg.rating}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                                </div>

                                {/* Title and Duration */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="w-4 h-4 text-custom-blue" />
                                    <span className="text-sm text-gray-600">{pkg.duration}</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-3xl font-bold text-custom-blue">{pkg.price}</span>
                                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                                    <span className="text-sm text-green-600 font-semibold">
                                        {pkg.type === "Umrah" && pkg.price === "$1,299" && "Save $300"}
                                        {pkg.type === "Hajj" && "Save $500"}
                                        {pkg.type === "Umrah" && pkg.price === "$899" && "Save $300"}
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Package Includes:</h4>
                                    {pkg.features.slice(0, 4).map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                    {/* {pkg.features.length > 4 && (
                                        <div className="text-sm text-custom-blue font-medium">
                                            +{pkg.features.length - 4} more features
                                        </div>
                                    )} */}
                                </div>

                                {/* CTA Button */}
                                <GradientButton className='w-full'>
                                    <div className="flex items-center justify-center gap-3">
                                        <span>Book Now</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </GradientButton>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Need a custom package? We're here to help!</p>
                    <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-custom-blue font-semibold px-8 py-3 rounded-xl border-2 border-custom-blue transition-all duration-300">
                        <Users className="w-5 h-5" />
                        <span>Contact Our Experts</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurPackages
