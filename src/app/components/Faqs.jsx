"use client"
import { CircleQuestionMark, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const Faqs = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What is included in your Umrah packages?",
            answer: "Our Umrah packages include visa processing, round-trip flights, accommodation in Makkah and Madinah, ground transportation, guided tours of holy sites, and 24/7 customer support throughout your journey."
        },
        {
            id: 2,
            question: "How far in advance should I book my Hajj or Umrah trip?",
            answer: "We recommend booking your Umrah trip at least 2-3 months in advance for better accommodation options and flight rates. For Hajj, it's advisable to book 6-12 months ahead due to limited quotas and high demand."
        },
        {
            id: 3,
            question: "What documents do I need for Umrah or Hajj?",
            answer: "You'll need a valid passport (with at least 6 months validity), passport-sized photographs, completed visa application forms, proof of vaccination (if required), and for women under 45, a mahram relationship certificate."
        },
        {
            id: 4,
            question: "Are your tour guides experienced and knowledgeable?",
            answer: "Yes, all our tour guides are experienced professionals with extensive knowledge of Islamic history and holy sites. They are certified and trained to provide spiritual guidance and historical context throughout your journey."
        },
        {
            id: 5,
            question: "What type of accommodation do you provide?",
            answer: "We offer various accommodation options ranging from 3-star to 5-star hotels, all located close to Haram Sharif in Makkah and Masjid-e-Nabawi in Madinah for your convenience and spiritual focus."
        },
        {
            id: 6,
            question: "Is group travel mandatory or can I travel individually?",
            answer: "We offer both group and individual travel options. Group travel provides a more affordable option with spiritual companionship, while individual packages offer more flexibility and personalized service."
        },
        {
            id: 7,
            question: "What is your cancellation and refund policy?",
            answer: "Our cancellation policy varies depending on the time of cancellation and package type. Generally, cancellations made 45+ days before travel receive 80% refund, while cancellations within 15 days may have limited refund options."
        },
        {
            id: 8,
            question: "Do you provide assistance during the trip?",
            answer: "Absolutely! We provide 24/7 assistance during your entire journey, including airport transfers, hotel check-ins, guidance for rituals, medical assistance coordination, and support for any travel-related issues."
        }
    ];

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };
    return (
        <section className="relative py-20 overflow-hidden">

            <div className="w-[97%] lg:w-[90%] max-w-[1920px] mx-auto px-3 lg:px-0">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-custom-blue px-6 py-2 rounded-full mb-6">
                        <CircleQuestionMark className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide">FAQs</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl text-center font-bold leading-tight mb-6">
                        Frequently Asked Questions
                        <br />
                        <span className="text-custom-gold text-2xl lg:text-3xl">
                            Your Questions, Our Answers
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here are some common questions we receive from our clients:
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="mb-4">
                            <div 
                                className={`bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                                    openFaq === faq.id 
                                        ? 'border-custom-blue shadow-lg' 
                                        : 'border-gray-200 hover:border-custom-blue/50'
                                }`}
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <div className="p-6 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-custom-blue transition-transform duration-300 flex-shrink-0 ${
                                            openFaq === faq.id ? 'rotate-180' : ''
                                        }`}
                                    />
                                </div>
                                
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="px-6 pb-6">
                                        <div className="pt-2 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed mt-4">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faqs
