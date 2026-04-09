import React from 'react'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { CONTACT_PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

const SocialBar = () => {
    return (
        <div className="bg-gray-800 text-white py-2 px-4">
            <div className="max-w-7xl mx-auto flex justify-center lg:justify-between items-center">
                {/* Left side - Contact info */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">info@newhighertravels.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                            {CONTACT_PHONE_DISPLAY}
                        </a>
                    </div>
                </div>

                {/* Right side - Social media icons */}
                <div className="hidden lg:flex items-center space-x-4">
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Facebook className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-pink-400 transition-colors">
                        <Instagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                        <Linkedin className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialBar