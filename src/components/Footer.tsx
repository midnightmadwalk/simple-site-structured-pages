
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import siteConfig from '@/config/siteConfig.json';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <img 
                  src="/lovable-uploads/17d3e4d5-9e3f-4f14-9aa0-e569e9d15fe3.png" 
                  alt={siteConfig.company.name}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Professional financial recovery services helping individuals and businesses 
              recover their unclaimed funds from IEPF and other sources.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-4 w-4 md:h-5 md:w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-4 w-4 md:h-5 md:w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-4 w-4 md:h-5 md:w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/iepf-claim-recovery" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  IEPF Claim & Recovery
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  IEPF Fund Recovery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  Unclaimed Deposits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  Share Recovery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  Legal Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base">
                  Document Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <div>
                  {siteConfig.contact.phones.map((phone, index) => (
                    <p key={index} className="text-gray-300 text-sm md:text-base">{phone}</p>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <div>
                  {siteConfig.contact.emails.map((email, index) => (
                    <p key={index} className="text-gray-300 text-sm md:text-base">{email}</p>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm md:text-base">{siteConfig.contact.address.line1}</p>
                  <p className="text-gray-300 text-sm md:text-base">{siteConfig.contact.address.line2}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2024 {siteConfig.company.name}. All rights reserved. | Designed for professional financial recovery services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
