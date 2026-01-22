import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8B0000] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-yellow-500 pl-3">About NAITA</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              The National Apprentice and Industrial Training Authority (NAITA) is the premier 
              government organization responsible for providing quality technical education and 
              vocational training in Sri Lanka under the Ministry of Skills Development and Vocational Training.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-yellow-500 pl-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Home
              </a>
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → About Us
              </a>
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Services
              </a>
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Downloads
              </a>
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Contact Us
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-yellow-500 pl-3">Important Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Privacy Policy
              </a>
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Terms of Service
              </a>
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Tender Notices
              </a>
              <a href="#" className="block text-gray-200 hover:text-white transition-colors hover:pl-2 duration-200">
                → Career Opportunities
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-yellow-500 pl-3">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-200">
                  No. 35, Sir Chittampalam A. Gardiner Mawatha, Colombo 02, Sri Lanka
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-yellow-400" />
                <span>+94 11 2 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-yellow-400" />
                <span>info@naita.gov.lk</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-red-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-200 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} National Apprentice and Industrial Training Authority. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-200 hover:text-white">
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-sm text-gray-200 hover:text-white">
                Terms of Use
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-sm text-gray-200 hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;