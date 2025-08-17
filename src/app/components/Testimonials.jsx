"use client";
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, Quote, MapPin } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ahmed Al-Rashid",
            location: "Dubai, UAE",
            rating: 5,
            image: "/images/testimonial-1.jpg", // You can add actual images later
            review: "The Hajj package was perfectly organized. Every detail was taken care of, from accommodation to transportation. The guides were knowledgeable and helped us understand the significance of each ritual. Truly a life-changing experience!",
            package: "Complete Hajj Package"
        },
        {
            name: "Fatima Khan",
            location: "London, UK",
            rating: 5,
            image: "/images/testimonial-2.jpg",
            review: "I went for Umrah with my family and everything was seamless. The hotel was close to Haram, the food was excellent, and the 24/7 support team was always available. Highly recommend New Higher Travels!",
            package: "Premium Umrah Package"
        },
        {
            name: "Omar Hassan",
            location: "Toronto, Canada",
            rating: 5,
            image: "/images/testimonial-3.jpg",
            review: "Outstanding service from start to finish. The visa processing was quick, the flights were comfortable, and the local guides were amazing. This was my second time with them and definitely not the last!",
            package: "Economy Umrah Package"
        },
        {
            name: "Aisha Mohammad",
            location: "Sydney, Australia",
            rating: 5,
            image: "/images/testimonial-4.jpg",
            review: "As a first-time pilgrim, I was nervous about the journey. But the team at New Higher Travels made everything so easy and comfortable. The pre-departure briefing was very helpful and informative.",
            package: "Premium Umrah Package"
        },
        {
            name: "Ibrahim Ali",
            location: "Birmingham, UK",
            rating: 5,
            image: "/images/testimonial-5.jpg",
            review: "Exceptional service and attention to detail. The accommodation was luxurious, the meals were delicious, and the transportation was always on time. A truly spiritual and comfortable journey.",
            package: "Complete Hajj Package"
        },
        {
            name: "Maryam Ahmed",
            location: "New York, USA",
            rating: 5,
            image: "/images/testimonial-6.jpg",
            review: "The best travel agency for spiritual journeys! Their expertise and care made our Umrah trip unforgettable. The group coordination was excellent and we felt safe throughout the journey.",
            package: "Premium Umrah Package"
        }
    ];

    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
        <section className="relative py-20 overflow-hidden">

            <div className="w-[97%] lg:w-[90%] max-w-[1920px] mx-auto px-3 lg:px-0">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-custom-blue px-6 py-2 rounded-full mb-6">
                        <Quote className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide">TESTIMONIALS</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl text-center font-bold leading-tight mb-6">
                        What Our Pilgrims
                        <br />
                        <span className="text-custom-gold">Say About Us</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Read the experiences of thousands of satisfied pilgrims who trusted us with their sacred journey
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                >
                    {/* Navigation Controls - Inside Carousel */}
                    <div className="flex justify-end mb-8">
                        <div className="flex items-center gap-2">
                            <CarouselPrevious className="static translate-y-0 border-custom-blue/20 hover:border-custom-blue hover:bg-custom-blue hover:text-white" />
                            <CarouselNext className="static translate-y-0 border-custom-blue/20 hover:border-custom-blue hover:bg-custom-blue hover:text-white" />
                        </div>
                    </div>

                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-gray-200/30 rounded-2xl p-6 border border-gray-100/50 hover:border-custom-blue/30 transition-all duration-300 group h-full">
                                    {/* Quote Icon */}
                                    <div className="flex justify-between items-start mb-4">
                                        <Quote className="w-8 h-8 text-custom-blue/30 group-hover:text-custom-blue/50 transition-colors duration-300" />
                                        <div className="flex items-center gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
                                        "{testimonial.review}"
                                    </p>

                                    {/* Package Badge */}
                                    <div className="mb-4">
                                        <span className="inline-block bg-custom-blue/10 text-custom-blue px-3 py-1 rounded-full text-xs font-semibold">
                                            {testimonial.package}
                                        </span>
                                    </div>

                                    {/* Reviewer Info */}
                                    <div className="flex items-center gap-4">
                                        {/* Avatar Placeholder */}
                                        <div className="w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 group-hover:text-custom-blue transition-colors duration-300">
                                                {testimonial.name}
                                            </h4>
                                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                <MapPin className="w-3 h-3" />
                                                <span>{testimonial.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Bottom Stats */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 text-center">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                            <Star className="w-6 h-6 text-white fill-current" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                            <p className="text-sm text-gray-600">Average Rating</p>
                        </div>
                    </div>

                    <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-600 rounded-full flex items-center justify-center">
                            <Quote className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">2,500+</p>
                            <p className="text-sm text-gray-600">Happy Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
