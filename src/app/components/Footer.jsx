import React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Clock,
  Shield,
  Users,
  Star
} from 'lucide-react'
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Packages', href: '#packages' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Umrah Packages', href: '#umrah' },
    { name: 'Hajj Packages', href: '#hajj' },
    { name: 'Visa Processing', href: '#visa' },
    { name: 'Hotel Booking', href: '#hotels' },
    { name: 'Flight Booking', href: '#flights' },
    { name: 'Group Tours', href: '#group-tours' }
  ];

  const support = [
    { name: '24/7 Support', href: '#support' },
    { name: 'Travel Insurance', href: '#insurance' },
    { name: 'Cancellation Policy', href: '#cancellation' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];
  return (
    <footer className='bg-gradient-to-r from-gray-800 to-gray-900 pt-16 pb-6'>
      <div className="w-[97%] lg:w-[90%] max-w-[1920px] mx-auto px-3 lg:px-0">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">

          {/* Company Info */}
          <div className="space-y-6 lg:max-w-sm">
            <div>
              <Image
                src="/images/logo.png"
                alt="New Higher Travels Logo"
                width={80}
                height={80}
                className="object-contain mb-2"
                priority
              />
              <h3 className="text-white text-xl font-bold mb-2">New Higher Travels</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Your trusted partner for spiritual journeys. We provide comprehensive Umrah and Hajj packages with exceptional service and care.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-custom-gold flex-shrink-0" />
                <span className="text-blue-200 text-sm">123 Main Street, City, Country</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-custom-gold flex-shrink-0" />
                <span className="text-blue-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-custom-gold flex-shrink-0" />
                <span className="text-blue-200 text-sm">info@newhighertravels.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-custom-gold flex-shrink-0" />
                <span className="text-blue-200 text-sm">24/7 Customer Support</span>
              </div>
            </div>
          </div>

          {/* Links Section - Combined */}
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12 flex-1 lg:max-w-2xl">
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 text-sm hover:text-custom-gold transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-blue-200 text-sm hover:text-custom-gold transition-colors duration-300 hover:underline"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Policies */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Support & Policies</h4>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-blue-200 text-sm hover:text-custom-gold transition-colors duration-300 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="border-t border-blue-600 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-custom-gold mb-2" />
              <span className="text-blue-200 text-xs">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-custom-gold mb-2" />
              <span className="text-blue-200 text-xs">10,000+ Happy Pilgrims</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-custom-gold mb-2" />
              <span className="text-blue-200 text-xs">5 Star Rated Service</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-custom-gold mb-2" />
              <span className="text-blue-200 text-xs">24/7 Support</span>
            </div>
          </div>
        </div> */}

        {/* Social Media & Copyright */}
        <div className="border-t border-blue-600/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <span className="text-blue-200 text-sm mr-2">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-custom-gold hover:bg-custom-light-gold p-2 rounded-full transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-blue-200 text-sm">
                &copy; {currentYear} New Higher Travels. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
